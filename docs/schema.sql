-- OmniPost — Prototype Database Schema (PostgreSQL)
-- Design-stage artifact: this file is NOT executed against a live database
-- anywhere in this repo. It exists to make the design in DATABASE_SCHEMA.md
-- concrete and reviewable. See docs/DATABASE_SCHEMA.md for the ERD and
-- table-by-table rationale.

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================
-- Users
-- ============================================================
CREATE TABLE users (
    id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    display_name    VARCHAR(120) NOT NULL,
    username        VARCHAR(60)  NOT NULL UNIQUE,
    email           VARCHAR(255) NOT NULL UNIQUE,
    password_hash   VARCHAR(255) NOT NULL,
    bio             TEXT,
    website_url     VARCHAR(255),
    avatar_url      VARCHAR(255),
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ============================================================
-- Platforms (reference/lookup table)
-- ============================================================
CREATE TABLE platforms (
    id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name        VARCHAR(60) NOT NULL,           -- e.g. "Twitter"
    slug        VARCHAR(60) NOT NULL UNIQUE,     -- e.g. "twitter"
    icon        VARCHAR(20),                     -- emoji or icon key
    color_hex   VARCHAR(7)                       -- e.g. "#1DA1F2"
);

-- ============================================================
-- Platform Connections (a user's link to one platform account)
-- ============================================================
CREATE TABLE platform_connections (
    id                   UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id              UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    platform_id          UUID NOT NULL REFERENCES platforms(id) ON DELETE RESTRICT,
    external_account_id  VARCHAR(255),
    access_token_enc     TEXT,
    refresh_token_enc    TEXT,
    connected            BOOLEAN NOT NULL DEFAULT false,
    follower_count       INTEGER NOT NULL DEFAULT 0,
    connected_at         TIMESTAMPTZ,
    UNIQUE (user_id, platform_id)
);

-- ============================================================
-- Posts
-- ============================================================
CREATE TYPE post_status AS ENUM ('draft', 'scheduled', 'published');

CREATE TABLE posts (
    id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id         UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    content         TEXT NOT NULL,
    media_url       VARCHAR(255),
    status          post_status NOT NULL DEFAULT 'draft',
    scheduled_for   TIMESTAMPTZ,
    published_at    TIMESTAMPTZ,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ============================================================
-- Post Platforms (a post's per-platform publish record)
-- ============================================================
CREATE TYPE post_platform_status AS ENUM ('pending', 'published', 'failed');

CREATE TABLE post_platforms (
    id                       UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    post_id                  UUID NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
    platform_connection_id   UUID NOT NULL REFERENCES platform_connections(id) ON DELETE RESTRICT,
    external_post_id         VARCHAR(255),
    status                   post_platform_status NOT NULL DEFAULT 'pending',
    published_at             TIMESTAMPTZ,
    likes                    INTEGER NOT NULL DEFAULT 0,
    comments_count           INTEGER NOT NULL DEFAULT 0,
    shares                   INTEGER NOT NULL DEFAULT 0,
    last_error               TEXT,
    UNIQUE (post_id, platform_connection_id)
);

-- ============================================================
-- Comments
-- ============================================================
CREATE TABLE comments (
    id                   UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    post_platform_id     UUID NOT NULL REFERENCES post_platforms(id) ON DELETE CASCADE,
    external_comment_id  VARCHAR(255),
    author_name          VARCHAR(120) NOT NULL,
    author_avatar_url    VARCHAR(255),
    content              TEXT NOT NULL,
    likes                INTEGER NOT NULL DEFAULT 0,
    created_at           TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ============================================================
-- Comment Replies
-- ============================================================
CREATE TABLE comment_replies (
    id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    comment_id    UUID NOT NULL REFERENCES comments(id) ON DELETE CASCADE,
    user_id       UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    content       TEXT NOT NULL,
    created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ============================================================
-- Analytics Snapshots (time series, per post_platform)
-- ============================================================
CREATE TABLE analytics_snapshots (
    id                 UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    post_platform_id   UUID NOT NULL REFERENCES post_platforms(id) ON DELETE CASCADE,
    reach              INTEGER NOT NULL DEFAULT 0,
    engagement_rate    NUMERIC(5,2) NOT NULL DEFAULT 0,
    impressions        INTEGER NOT NULL DEFAULT 0,
    captured_at        TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ============================================================
-- Scheduled Jobs (queue for future-publish posts)
-- ============================================================
CREATE TYPE job_status AS ENUM ('pending', 'running', 'completed', 'failed');

CREATE TABLE scheduled_jobs (
    id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    post_id       UUID NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
    run_at        TIMESTAMPTZ NOT NULL,
    status        job_status NOT NULL DEFAULT 'pending',
    attempts      INTEGER NOT NULL DEFAULT 0,
    last_error    TEXT,
    created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ============================================================
-- AI Insights (planned feature — generic insight store)
-- ============================================================
CREATE TYPE ai_insight_type AS ENUM ('best_time', 'best_content_type', 'platform_recommendation', 'general');

CREATE TABLE ai_insights (
    id                 UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id            UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    post_id            UUID REFERENCES posts(id) ON DELETE CASCADE, -- nullable: some insights are account-level
    insight_type       ai_insight_type NOT NULL DEFAULT 'general',
    content             TEXT NOT NULL,
    confidence_score    NUMERIC(4,3),  -- 0.000 - 1.000
    generated_at        TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ============================================================
-- Notification Settings (1:1 with users)
-- ============================================================
CREATE TABLE notification_settings (
    id                  UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id             UUID NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
    email_enabled       BOOLEAN NOT NULL DEFAULT true,
    push_enabled        BOOLEAN NOT NULL DEFAULT false,
    comments_enabled    BOOLEAN NOT NULL DEFAULT true,
    mentions_enabled    BOOLEAN NOT NULL DEFAULT true
);

-- ============================================================
-- Privacy Settings (1:1 with users)
-- ============================================================
CREATE TABLE privacy_settings (
    id                   UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id              UUID NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
    profile_public       BOOLEAN NOT NULL DEFAULT true,
    show_followers       BOOLEAN NOT NULL DEFAULT true,
    analytics_public     BOOLEAN NOT NULL DEFAULT false
);

-- ============================================================
-- Helpful indexes
-- ============================================================
CREATE INDEX idx_posts_user_id ON posts(user_id);
CREATE INDEX idx_posts_status ON posts(status);
CREATE INDEX idx_post_platforms_post_id ON post_platforms(post_id);
CREATE INDEX idx_post_platforms_connection_id ON post_platforms(platform_connection_id);
CREATE INDEX idx_comments_post_platform_id ON comments(post_platform_id);
CREATE INDEX idx_analytics_snapshots_post_platform_id ON analytics_snapshots(post_platform_id);
CREATE INDEX idx_scheduled_jobs_run_at_status ON scheduled_jobs(run_at, status);
CREATE INDEX idx_ai_insights_user_id ON ai_insights(user_id);

-- ============================================================
-- Seed data for the platforms lookup table
-- ============================================================
INSERT INTO platforms (name, slug, icon, color_hex) VALUES
    ('Twitter',   'twitter',   '🐦', '#1DA1F2'),
    ('Instagram', 'instagram', '📷', '#E4405F'),
    ('Facebook',  'facebook',  '👤', '#1877F2'),
    ('YouTube',   'youtube',   '📺', '#FF0000'),
    ('LinkedIn',  'linkedin',  '💼', '#0A66C2'),
    ('Threads',   'threads',   '🧵', '#000000'),
    ('TikTok',    'tiktok',    '🎵', '#000000');

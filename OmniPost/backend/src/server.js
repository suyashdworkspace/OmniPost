// Design-stage stub entry point. Not run anywhere in this repo's scripts/CI —
// listed here purely to complete the architecture skeleton. See backend/README.md.

import { createApp } from './app.js';

const app = createApp();
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`OmniPost backend skeleton listening on port ${PORT} (prototype stage — nothing is connected to a real database)`);
});

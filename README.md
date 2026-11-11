# Gym

A fast, local-first gym workout tracker. Plan, log and progress - runs entirely in the browser, no accounts, no servers.

- Plan / Programme / Physio / History / Progress tabs
- Editable programme with equipment variants (gym, bodyweight, hotel, bands)
- Live workout mode: pre-filled weights, rest timer, plate calculator, RPE, wake lock
- History with edit/delete, personal records, volume and progress charts
- Physio list for clinician-prescribed adjunct exercises (user data, kept on-device)
- JSON export/import backup covering everything on the device (history, PRs, programme, physio entries and logs, settings, sync queue) - that file is what you import on a new phone
- Shared backup (Notion): the same backup My Day, Racket Rankings and Pocket CRM use. Settings → Shared backup: paste the Pocket CRM access token once and the app backs itself up once a day. Restore fills in what is missing on the device and never deletes anything.

Data lives in the browser's local storage on your device, plus your own Notion "App backups" database if you connect the shared backup. The Apps Script URL (Google Sheets sync, optional) is never exported or backed up - re-enter it in Settings on a new device.

Static single-page app - open `index.html` or serve the folder (built for GitHub Pages). No service worker by design.

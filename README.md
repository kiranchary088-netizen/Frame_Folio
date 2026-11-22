# FrameFolio · ClickClash Contest

A frontend campus photography contest platform built with HTML5, CSS3 and JavaScript ES modules.

## Run locally

1. Extract the project folder.
2. Open a terminal in this folder.
3. Run a local static server (recommended):

   ```bash
   npx serve .
   ```

4. Open the local URL printed by the server.

You can also use VS Code Live Server. ES modules may not work reliably when opening `index.html` directly with a `file://` URL.

## Demo access

- **Organizer:** the demo password is `admin123`.
- **Participant:** use **Join Contest**, then sign in with the registered name.
- **Guest:** choose **Browse as Guest**.

> Demo-only warning: participant login is name-based and organizer authentication is implemented in browser code. The SHA-256 comparison is an educational demonstration, not production authentication. Anyone who can inspect or modify the frontend or localStorage can bypass these controls. Do not use real credentials or sensitive personal information.

## Automated tests

Requires Node.js 20 or newer. Run:

```bash
npm test
```

The tests use Node's built-in test runner and cover HTML escaping, storage parsing, database initialization, vote-per-category checks, legacy vote compatibility and invalid date handling.

## Architecture

```text
index.html
├── css/style.css
└── js/
    ├── config.js   constants and demo data
    ├── helpers.js  DOM, storage and utility helpers
    ├── art.js      procedural SVG art and color extraction
    ├── store.js    data access and localStorage persistence
    ├── auth.js     demo role and registration flows
    ├── voting.js   voting rules
    ├── ui.js       rendering and interactions
    └── main.js     application bootstrap
```

## Storage and security limitations

- All application data is stored in the current browser's localStorage. Clearing site data removes the project data.
- The app validates important form values and rejects malformed database shapes, but localStorage is user-controlled and is not a trusted database.
- The one-vote-per-category rule is enforced by frontend logic only. It can be bypassed by editing localStorage or application code.
- A production deployment needs server-side authorization and validation, password hashing with a password-specific algorithm (such as Argon2id or bcrypt), rate limiting, and a database with transactional vote constraints.
- Image URL uploads require the remote host to permit browser loading. Local file uploads are compressed in the browser.

## Main features

- Responsive masonry gallery with category filters, search and sorting
- Lightbox with photo details and color palette extraction
- Participant registration and demo role-based navigation
- Photo submission and organizer approval workflow
- One vote per category, plus leaderboard
- Organizer dashboard and JSON export
- Dark/light theme
- Procedurally generated SVG demonstration artwork

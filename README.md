# qa-dashboard-premium

## GitHub Pages Static Hosting

This project is configured to run as a static site on GitHub Pages using Vite and React.

### Limitations
- **No backend/server code**: The `/api` folder and any server-side logic (like AI proxy) will not work on GitHub Pages. Only static frontend is deployed.
- **AI Panel**: Disabled on GitHub Pages. To use AI features, run locally with the backend server.
- **GitHub Actions Trigger**: Requires a GitHub token. Never expose secrets in public repos or static hosting. For production, use a secure backend or GitHub App.

### Local Development
To use all features, run the backend locally and set up your `.env` file as needed.

### Deploy
To deploy to GitHub Pages:

```
npm run build
npm run deploy
```

Make sure the `base` in `vite.config.js` matches your repo name.
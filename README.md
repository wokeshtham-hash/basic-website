# Basic Website MERN

This project has been converted from a static starter into a MERN-style application with a React frontend, an Express backend, React Router pages, and Redux Toolkit cart state.

## Structure

```text
basic-website/
├── client/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   ├── features/
│   │   └── pages/
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── data/
│   │   ├── models/
│   │   └── routes/
│   └── package.json
├── .env.example
├── package.json
└── README.md
```

## Routes

- `/`: storefront landing page
- `/products`: product listing fetched from the backend
- `/cart`: Redux-backed shopping cart
- `/api/products`: backend inventory endpoint
- `/api/content/homepage`: backend homepage content endpoint

## Run

1. Install dependencies in the root, client, and server packages.
2. Copy `.env.example` to `.env` in the project root if you want to provide a MongoDB connection string.
3. Run `npm run dev` from the repository root.
4. Open `http://localhost:5173` for the frontend and `http://localhost:4000/api/health` for the backend.

If `MONGO_URI` is not set, the backend serves seeded homepage and product data so the app remains usable during local setup.

# Repository Guidelines

## Project Structure & Module Organization
This repository is a small static website. Keep the structure simple and predictable:

- `index.html`: main page markup and entry point.
- `css/style.css`: site-wide styles.
- `js/script.js`: client-side behavior.
- `assets/images/`: image assets and other static media.
- `README.md`: basic usage notes.

If the site grows, add new assets under `assets/` and keep page-specific logic grouped by concern rather than mixing styles, markup, and scripts in one file.

## Build, Test, and Development Commands
There is no build pipeline or package manager in this project. Use these basic commands during development:

- `xdg-open index.html`: open the site locally in a browser.
- `python3 -m http.server 8000`: serve the project locally from the repository root.
- `git status`: review changed files before committing.

Run the server from the repo root so relative paths such as `./css/style.css` and `./js/script.js` resolve correctly.

## Coding Style & Naming Conventions
Use 2-space indentation for HTML, CSS, and JavaScript to match the existing files.

- Prefer semantic HTML elements like `<header>`, `<main>`, and `<section>`.
- Use lowercase, hyphenated class names such as `hero-content` and `card-grid`.
- Keep JavaScript small, defensive, and framework-free unless the project scope changes.
- Use ASCII by default and avoid inline styles or large script blocks in `index.html`.

No formatter or linter is configured, so keep edits clean and consistent manually.

## Testing Guidelines
There is no automated test suite yet. Before opening a pull request:

- load the site in a browser,
- verify layout on desktop and mobile widths,
- check that links, buttons, and scripts work,
- confirm assets load without console errors.

If you add tests later, place them in a top-level `tests/` folder and name them after the feature they cover.

## Commit & Pull Request Guidelines
The current history uses short, direct commit messages such as `Initial commit`. Follow that pattern:

- `Add contact section`
- `Fix mobile nav spacing`
- `Update hero copy`

Pull requests should include a brief summary, note any changed files or behaviors, and attach screenshots for visible UI changes.

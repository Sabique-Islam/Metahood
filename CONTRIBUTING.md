# Contributing to Metahood ➤

## Getting Started ➤

1. **Fork the repository** and clone it.
   ```bash
   git clone https://github.com/<your-username>/metahood.git
   cd metahood
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Set up environment variables**:
   - Copy `.env.example` to `.env.local` and fill in the required values.
4. **Run development server**:
   ```bash
   npm run dev
   ```

## Code Guidelines ➤

- Use [Prettier](https://prettier.io/) for code formatting.
- Write clear, descriptive commit messages.
- Use functional React components and TypeScript.
- Keep components modular and reusable.
- Follow the existing folder structure and naming conventions.

## Pull Requests ➤

- Create a new branch for your feature or bugfix.

    Example →
  ```bash
  git checkout -b feature/your-feature-name
   ```

- Make sure your branch is up to date with `master` before submitting a pull request.
- Describe your changes clearly in the pull request description.
- Ensure your code passes all linting and build checks:

  ```bash
  npm run lint
  npm run build
  ```
- If your change affects the UI, consider including before/after screenshots.


## Commit Message Format ➤

- Use clear, concise messages (e.g., `fix: correct event date display`, `feat: add sidebar with social links`).
- Use [Conventional Commits](https://www.conventionalcommits.org/).

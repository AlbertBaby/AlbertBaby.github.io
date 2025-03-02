# GitHub Actions Workflow Documentation

This directory contains the GitHub Actions workflow configuration for deploying the portfolio website to GitHub Pages.

## deploy.yml

The `deploy.yml` workflow handles the automatic deployment process.

### Trigger
The workflow is triggered on:
- Push events to the `main` branch

### Job Details

#### `deploy` job
Runs on: `ubuntu-latest`

Steps breakdown:

1. **Checkout Repository**
   ```yaml
   uses: actions/checkout@v2
   ```
   - Clones the repository into the workflow runner

2. **Setup Node.js**
   ```yaml
   uses: actions/setup-node@v2
   with:
     node-version: '16'
   ```
   - Installs Node.js version 16
   - Required for building the React application

3. **Install Dependencies**
   ```yaml
   run: npm install
   ```
   - Installs all project dependencies defined in package.json

4. **Build**
   ```yaml
   run: npm run build
   ```
   - Creates a production build of the website

5. **Deploy**
   ```yaml
   uses: peaceiris/actions-gh-pages@v3
   ```
   - Deploys the built files to GitHub Pages
   - Uses the `GITHUB_TOKEN` secret for authentication
   - Publishes content from the `./build` directory to the `gh-pages` branch

### Important Notes
- The workflow requires no additional secrets configuration as it uses the automatically provided `GITHUB_TOKEN`
- The build directory (`./build`) must match your React application's build output directory
- Make sure GitHub Pages is enabled in your repository settings and configured to deploy from the `gh-pages` branch

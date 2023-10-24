## About This Project

This is a Next.js site built by Zane Harrison for a JavaScript + React introduction workshop associated with Duke Catalyst.

## Getting Started

1. In this repository, click “Fork”. Uncheck the checkbox that says “Only fork main branch”. Click “Create fork”
2. In your forked repository, click the green button that says “Code”, click “HTTPS”, and copy the link
3. Open a terminal window
4. Navigate to the directory in which you want your project to live
5. Run “git clone \_\_\_” with the copied link in the blank
6. In your terminal, cd into the newly created repository
7. Run this command to install Node version manager (NVM):

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```

8. Run the command:

```bash
nvm install node
```

9. Run the command:

```bash
npm install
```

10. Run the command:

```bash
npm run dev
```

11. Open http://localhost:3000/ in a browser window to view the site

## Tracking Your Changes Using GitHub

If you want to save the changes you’ve made to your version of the site, you need to push your local repository to your remote repository, which is the GitHub repository that you forked. To do so, follow these steps:

1. Go to your GitHub settings and click “Developer settings” at the bottom of the left panel
2. Click “Personal access tokens” → “Tokens (classic)” → “Generate new token”
3. Check all the boxes to grant your token access to all scopes
4. Click “Generate token”
5. Copy the token link and save it somewhere
6. When pushing to Git, use this token in place of your password for authentication

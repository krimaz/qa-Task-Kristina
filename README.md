# qa-Task-Kristina

### To set up a new Cypress project, follow these steps:
1. Clone the repository: `git clone <repository-url>`.
2. Navigate to the project directory: `cd <repository-directory>`.
3. Download and Extract Node.js: https://nodejs.org/.
4. Initialize a new npm project: If the repository does not already contain an package.json file, initialize a new npm project in the repository directory by running: `npm init -y`.
5. Install Cypress: `npm install cypress --save-dev`.
6. Open Cypress: `npx cypress open` or `npm run cypress:open`.
7. In root directory create cypress.config.js (if it doesn't exist yet).
8. Add properties into cypress.config.js defineConfig:
 ```
  env: {
    email: email provided in email for candidate
    password: password provided in email for candidate
  },
```

# Family Promise Case Management - Backend

### Introduction

[Family Promise](https://familypromise.org/) helps local communities coordinate their compassion to address the root causes of family homelessness. They tap existing local resources to empower families towards economic stability. Families come to them in crisis; they help them rebuild their lives with new skills and ongoing support. They address the issue holistically, providing prevention services before families reach crisis, shelter and case management when they become homeless, and stabilization programs once they have secured housing to ensure they remain independent.

### Schema

Currently being finalized.

## Status

Deployed here: [https://family-promise-case-mgmt-be.herokuapp.com/](https://family-promise-case-mgmt-be.herokuapp.com/)

## Requirements

Details on the Labs Node Scaffolding here: <https://bloomtechlabs.gitbook.io/api/>

Labs teams must follow all [Labs Engineering Standards](https://bloomtechlabs.gitbook.io/home/).

### Environment Variables

- `PORT` - API port (optional, but helpful with FE running as well)
  - The following ports are whitelisted for use with okta
    - 3000
    - 8000
    - 8080
- `DS_API_URL` - URL to a data science api. (eg. <https://ds-bw-test.herokuapp.com/>)
- `DS_API_TOKEN` - authorization header token for data science api (eg. SUPERSECRET)
- `DEV_DATABASE_URL` - connection string for local postgres database
- `OKTA_URL_ISSUER` - The complete issuer URL for verifying okta access tokens. `https://example.okta.com/oauth2/default`
- `OKTA_CLIENT_ID` - the okta client ID.
- `OKTA_ORG_URL` - The base url for the Okta org
- `OKTA_API_TOKEN` - Okta API token

See .env.sample for example values

### Setup the application

- create your project repo by forking or using this as a template.
- run: `npm install` to download all dependencies.
- run: `npm run knex migrate:latest` to create the starting schema.
- run: `npm run knex seed:run` to populate your db with some data.
- run: `npm run tests` to confirm all is setup and tests pass.
- run: `npm run watch:dev` to start nodemon in local dev enviornment.

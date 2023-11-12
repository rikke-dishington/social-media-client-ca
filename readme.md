# Workflow - Course Assignment

## Table of Content
* [Workflow Status Badges](#workflow-status-badges)
* [Description](#description)
* [Get started](#get-started)
* [Testing](#testing)

## Workflow Status Badges
[![Automated E2E Testing](https://github.com/rikke-dishington/social-media-client-ca/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/rikke-dishington/social-media-client-ca/actions/workflows/e2e-test.yml)

[![Automated Unit Testing](https://github.com/rikke-dishington/social-media-client-ca/actions/workflows/unit-test.yml/badge.svg)](https://github.com/rikke-dishington/social-media-client-ca/actions/workflows/unit-test.yml)

## Description
1. Project is configured to run Prettier on commit
2. Project is configured to run ESLint on commit
3. Project default branch is protected, code is versioned and branching conventions have been followed.
4. Project is configured to build and deploy to pages on merge to default branch
5. Project readme file is updated to include new configuration information and workflow status badges
6. Deployed project has been checked for 404 errors
7. Any bugs found have been communicated in the Issues tab
8. The login function fetches and stores a token in browser storage
9. The logout function clears the token from browser storage
10. The user can log in and access their profile
11. The user cannot submit the login form with invalid credentials and is shown a message
12. The user can log out with the logout button

## Get started
* Clone repository
* Run npm start to initiate sass & live server

## Testing
To run all tests: npm run test

### Unit testing:
npm run test-unit

### End-to-end testing:
npm run test-e2e-cli

# GitHub Copilot instructions

This repository uses TypeScript with Playwright to automate **https://automationexercise.com/**.

## Project structure
- Put UI specs in `tests/ui-test/*.spec.ts`.
- Put API specs in `tests/api-test/*.spec.ts`.
- Keep shared Playwright fixtures in `tests/ui-fixtures/ui-fixtures.ts`.
- Keep reusable UI flows in page objects under `tests/ui-test/page-objects`.
- Keep UI selectors centralized in `tests/ui-test/locators/locators.ts`.
- Keep generated test data in `utils/mocks.ts` and reuse `generateMockUser()` for signup flows.

## UI automation rules
- Use `@playwright/test` with `test.describe`, `test.beforeEach`, and `test.step` for multi-part flows.
- Prefer reusable page object methods over repeating raw page actions in multiple specs.
- Add new selectors to `locators.ts` before using them in specs or page objects.
- Prefer stable selectors in this order: `data-qa` attributes, accessible roles, labels, placeholders, then CSS.
- Avoid brittle selectors like `nth-child` or deep chained CSS when a stable attribute exists.
- Do not use fixed sleeps or `waitForTimeout`; wait with Playwright assertions such as `toBeVisible`, `toHaveURL`, and `toContainText`.
- Assert user-visible outcomes after major actions such as navigation, signup, login, add-to-cart, checkout, and account deletion.

## Automation Exercise specifics
- Default site under test: `https://automationexercise.com`.
- Common routes include `/`, `/login`, `/products`, `/view_cart`, `/contact_us`, `/test_cases`, and `/api_list`.
- The site exposes stable `data-qa` selectors for many auth and signup fields. Prefer these when available.
- Signup tests must use unique email addresses. Reuse `generateMockUser()` instead of hardcoding credentials.
- If a test creates an account, finish the flow by validating account creation and deleting the account when the scenario allows it.
- Expect occasional slower page transitions; use assertion-based waiting instead of retry loops or manual delays.

## Current selector knowledge
These selectors already exist in `tests/ui-test/locators/locators.ts` and should be reused or extended consistently:
- Login: `login-email`, `login-password`, `login-button`
- Signup: `signup-name`, `signup-email`, `signup-button`
- Registration form: `name`, `email`, `password`, `days`, `months`, `years`
- Address form: `first_name`, `last_name`, `company`, `address`, `country`, `state`, `city`, `zipcode`, `mobile_number`
- Account actions: `create-account`, `continue-button`

## API automation rules
- Use Playwright's `request` fixture for API tests.
- Call Automation Exercise API endpoints directly under `https://automationexercise.com/api/`.
- Assert HTTP status and response shape/content; avoid leaving `console.log` as the main verification.

## Code style for generated tests
- Keep tests isolated and deterministic.
- Use descriptive test names based on the business flow being verified.
- Follow the existing file naming pattern: feature-focused `*.spec.ts` files, shared fixtures, central locators, and page objects.
- When adding reusable behavior, prefer extending a page object or fixture instead of adding ad hoc helpers inside a spec.

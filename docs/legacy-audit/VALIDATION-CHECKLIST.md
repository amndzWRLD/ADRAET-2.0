# Validation checklist for a future phase

## Priority 1 — security and data integrity

1. Validate that the login and registration forms are not susceptible to SQL injection in a controlled test environment.
2. Confirm whether the current database can be migrated to a secure password-hashing scheme without losing user records.
3. Verify that the dashboard is inaccessible without a valid authenticated session.
4. Add anti-CSRF validation to all state-changing requests.
5. Replace hardcoded database credentials with environment-based configuration.

## Priority 2 — architecture and behavior

6. Confirm whether the dashboard page is static-only or whether any server-side data is intended to populate it.
7. Decide which business workflows are actual product requirements versus visual prototypes.
8. Validate whether any additional PHP or SQL files exist outside the inspected workspace snapshot.
9. Confirm the intended domain model for users, tasks, customers, and inventory before creating a new schema.

## Priority 3 — product verification

10. Test login success and failure with valid and invalid credentials.
11. Test duplicate email and username registration behavior.
12. Verify task list behavior across add, complete, and delete actions.
13. Check whether the dashboard links to real pages or only mockup destinations.
14. Evaluate whether the calendar, contacts, and analytics sections are placeholders or planned modules.

## Priority 4 — database verification

15. Open the SQL dump in a sandbox DB and validate the exact schema and seed data.
16. Add database-level unique constraints if duplicates are meant to be prohibited.
17. Decide on password storage policy before any live deployment or migration.
18. Validate whether any transactions or relational integrity rules are needed for future modules.

## Priority 5 — manual UX review

19. Review the login page responsiveness at mobile and desktop widths.
20. Confirm that the dashboard is visually consistent with the intended product workflow.
21. Assess whether the static design can be turned into reusable UI components.
22. Identify actual user stories before starting React development.

## What can be validated statically

- The HTML form actions
- The PHP request flow
- The SQL statements and schema
- The absence of auth checks on the dashboard
- The use of localStorage for tasks
- The absence of tests and environment config

## What requires runtime verification

- Whether direct page access bypasses auth
- Whether form submissions behave as expected in a live environment
- Whether duplicate checks are reliable under real DB constraints
- Whether the current SQL is exploitable under crafted input
- Whether the dashboard is visually navigable end-to-end

## What requires database environment access

- SQL injection validation
- duplicate constraint behavior
- seed data review
- schema migration planning
- password migration and hashing strategy

## What requires manual browser testing

- final UX review
- mobile/responsive behavior
- direct navigation checks
- dashboard link behavior
- task list interaction consistency

## Final note

This checklist is intentionally prioritized for a later engineering phase. The immediate focus should be secure authentication, data integrity, and determining which visual screens are actual product requirements versus legacy mockups.

# SECURITY REQUIREMENTS

## Decision labels

- VERIFIED FACT: Source evidence confirms the current app has weak security properties.
- PROPOSED DESIGN: Proposed controls for the next product-phase requirements.
- OPEN QUESTION: Requires product or deployment decision.
- ASSUMPTION: Working assumption pending validation.

## 1) Security requirements matrix

| Control area | Requirement | Proposed control | Priority | Status |
| --- | --- | --- | --- | --- |
| Authentication | Secure login | Password-based auth with strong hashing and verification | P0 | PROPOSED DESIGN |
| Authorization | Business-level access control | Role-based rules and business-scoped data restrictions | P0 | PROPOSED DESIGN |
| Data isolation | Prevent cross-business leakage | Business ID scoping for every query | P0 | PROPOSED DESIGN |
| Password handling | Strong password storage | Argon2id or bcrypt hashing; no plaintext storage | P0 | VERIFIED FACT: current app fails |
| Input validation | Reject malformed or malicious input | Server-side validation and schema checks | P0 | PROPOSED DESIGN |
| SQL injection | Prevent query tampering | Parameterized queries and safe query builders | P0 | VERIFIED FACT: current app fails |
| CSRF | Protect authenticated state changes | CSRF tokens and origin checks | P0 | VERIFIED FACT: current app lacks |
| XSS | Prevent script injection | Output encoding and safe rendering strategy | P0 | PROPOSED DESIGN |
| Session/token management | Secure session lifecycle | Secure cookies or token storage; rotation and expiry | P0 | PROPOSED DESIGN |
| Secret management | Keep secrets out of source | Environment variables or secrets manager | P0 | VERIFIED FACT: current app hardcodes config |
| Audit logging | Detect misuse | Audit key account and data changes | P1 | PROPOSED DESIGN |
| Automated security testing | Catch regressions | API and auth security checks in CI | P1 | PROPOSED DESIGN |

## 2) Detailed requirements

### 2.1 Authentication
- PROPOSED DESIGN: All users must authenticate before access to protected resources.
- REQUIREMENT: User credentials must be stored as hashed values only.
- REQUIREMENT: Unsupported or unverified login attempts must not reveal whether a specific username exists in a user-friendly way.

### 2.2 Authorization
- PROPOSED DESIGN: Access must be enforced at the API or server boundary, not only in the UI.
- REQUIREMENT: Roles and permissions must be explicit and mapped to business scope.
- REQUIREMENT: Users can only read and modify records for businesses they are allowed to access.

### 2.3 User and business data isolation
- PROPOSED DESIGN: Every data access path must include a business identity check.
- REQUIREMENT: A user from business A must not be able to see data from business B.
- REQUIREMENT: Shared user roles must be supported only by explicit policy decisions.

### 2.4 Password handling
- VERIFIED FACT: The legacy app stores `contrasena` in a plain `varchar(50)` field and compares it directly in SQL.
- PROPOSED DESIGN: Replace with strong password hashing and a secure verification workflow.

### 2.5 Input validation
- PROPOSED DESIGN: Validate all request parameters before persistence or use.
- REQUIREMENT: Enforce expected types, lengths, email syntax, and domain-specific rules.
- REQUIREMENT: Reject malformed values at the boundary and report user-friendly errors without revealing internals.

### 2.6 SQL injection prevention
- VERIFIED FACT: The legacy repo concatenates user input directly into SQL strings.
- PROPOSED DESIGN: Require parameterized queries or a safe ORM/query layer.
- REQUIREMENT: No raw string interpolation of untrusted user input into SQL statements.

### 2.7 CSRF and XSS
- PROPOSED DESIGN: Apply CSRF protection for authenticated state-changing requests.
- PROPOSED DESIGN: Use safe output rendering and escaping to prevent XSS for user-generated strings.
- REQUIREMENT: Avoid trusting browser-side state alone for authorization or data integrity.

### 2.8 Session or token management
- PROPOSED DESIGN: Use secure, short-lived sessions or tokens with expiration and rotation.
- REQUIREMENT: Secure cookie configuration and session invalidation on logout.
- REQUIREMENT: Re-authentication or refresh workflow must be defined if the product supports longer-lived sessions.

### 2.9 Secret management
- VERIFIED FACT: The repo hardcodes database credentials.
- PROPOSED DESIGN: Use environment-based configuration or a secret manager; never store secrets in source code or committed config files.

### 2.10 Audit logging
- PROPOSED DESIGN: Log security-relevant actions such as login attempts, password reset, user creation, role changes, and business-level data modifications when justified by product needs.
- OPEN QUESTION: Is audit logging required for all business changes or only for privileged actions?

### 2.11 Automated security testing
- PROPOSED DESIGN: Include automated checks for auth flows, access restrictions, and input sanitization as part of CI.
- REQUIREMENT: Security checks should run during validation before release.

## 3) Security design principle

- PROPOSED DESIGN: Security must be enforced on the server and in the data layer, not only in the browser UI.
- VERIFIED FACT: The repository’s current design exposes several server-side problems that are not mitigated by frontend-only logic.

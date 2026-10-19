# ARCHITECTURE OPTIONS

## Decision labels

- VERIFIED FACT: Supported by repository evidence and legacy audit.
- PROPOSED DESIGN: Recommended architecture direction for product planning.
- OPEN QUESTION: Requires product-owner choice.
- ASSUMPTION: Working assumption pending validation.

## 1) Option A: React + Vite + TypeScript, Node.js + TypeScript, REST API, PostgreSQL

### Overview
- PROPOSED DESIGN: A custom application stack with a dedicated frontend, dedicated API, and a relational database.

### Security responsibilities
- Frontend: input validation, display logic, secure token handling in browser storage
- API: auth checks, authorization enforcement, schema validation, rate limiting, CSRF protection for cookie-based sessions, secure secret handling
- Database: row-level constraints, proper permissions, and secure configuration

### Development complexity
- Medium to high
- Requires more implementation effort for auth, validation, and API architecture

### Operational cost
- Medium to high
- Requires infrastructure for hosting, CI/CD, backups, monitoring, and observability

### Maintainability
- High, if the team is disciplined and the domain model is clear
- More flexible for long-lived and complex business logic

### Data access control
- Strong, because all access policies can be designed explicitly in the API layer

### Testing strategy
- Strong option for layered testing: unit tests, API tests, integration tests, E2E tests

### Extensibility
- High
- Best when business rules are expected to grow in complexity

### Learning value
- High for team capability building
- More architectural depth than a managed platform approach

### Best fit
- Best when product scope is expected to evolve beyond a small operational tool and the team wants full control over the stack.

## 2) Option B: React + Vite + TypeScript, Supabase Auth, PostgreSQL, Supabase-managed backend capabilities

### Overview
- PROPOSED DESIGN: A managed platform model that combines auth, database, and backend capabilities in one coherent system.

### Security responsibilities
- Auth: managed authentication and session/token lifecycle
- Database: Postgres with access controls and policy capabilities
- API/backend: serverless functions or platform capabilities for business logic
- Remaining responsibilities: secure frontend handling, input validation, and application layer access policies

### Development complexity
- Lower than a custom Node API for the initial product
- Faster setup for the first product iteration

### Operational cost
- Lower operational burden for the MVP phase
- Potential platform costs as usage grows

### Maintainability
- Good for smaller teams and early-stage products
- Less control over implementation details and custom infrastructure design

### Data access control
- Strong, especially with database and app-level policies
- Requires careful design of roles and data isolation across businesses

### Testing strategy
- Good integration testing story, but custom API architecture may be more limited than a full separate backend

### Extensibility
- Good up to moderate complexity
- Harder to customize if business logic becomes highly specialized or integration-heavy

### Learning value
- High for understanding product and data flows
- Lower for deep backend architecture skills compared to a custom API stack

### Best fit
- Best when the goal is to ship quickly with controlled operational overhead and a smaller development team.

## 3) Comparison summary

| Criterion | Option A | Option B |
| --- | --- | --- |
| Security responsibilities | Fully owned by application team | Shared with managed platform |
| Development complexity | Higher | Lower |
| Operational cost | Higher | Lower initially |
| Maintainability | High with discipline | High for MVP and small teams |
| Data access control | Fully customizable | Strong but platform-defined |
| Testing strategy | Strongest full stack testing | Good and simpler | 
| Extensibility | Highest | Good to moderate |
| Learning value | Strong architecture learning | Strong product learning |

## 4) Recommendation

- PROPOSED DESIGN: Recommend Option B as the default design for the first product tranche if the project remains a compact business tool with moderate growth expectations.
- Rationale:
  - the legacy codebase is small and not yet a full business system,
  - the product definition still needs validation,
  - the team can move faster with managed auth and database services,
  - security and database controls can be designed deliberately without building a full custom API too early.
- ASSUMPTION: If the product expands beyond a small operational toolkit into custom workflows, audit-heavy reporting, and deep business logic, the project should re-evaluate with Option A.
- OPEN QUESTION: Is the team prioritizing speed-to-market or maximum control?

## 5) Decision guardrails

- VERIFIED FACT: The current repository does not justify a large, custom enterprise architecture upfront.
- PROPOSED DESIGN: The team should begin with a narrow vertical slice and choose the architecture that best supports that slice, not the widest possible future vision.
- OPEN QUESTION: Will the product need multiple business tenants, custom roles, or bespoke workflows from the first release?

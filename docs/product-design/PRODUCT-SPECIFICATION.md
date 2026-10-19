# PRODUCT SPECIFICATION

## Decision labels

- VERIFIED FACT: Evidenced by the repository and legacy audit.
- PROPOSED DESIGN: Proposed for the next engineering phase.
- OPEN QUESTION: Requires product-owner or stakeholder decision.
- ASSUMPTION: Working assumption pending validation.

## 1) Mission and product intent

- VERIFIED FACT: The legacy project describes itself as a tool for young entrepreneurs in Costa Rica to manage a business in a simple way.
- VERIFIED FACT: The repository is a small PHP + MySQL prototype with a login flow, a static dashboard mockup, and a browser-local task list.
- PROPOSED DESIGN: The product should be framed as a lightweight business operations assistant for micro and small businesses, especially first-time entrepreneurs, rather than a broad ERP platform.

## 2) Target user

- PROPOSED DESIGN: Primary user is a small-business owner or operator running a lean business with limited administrative resources.
- PROPOSED DESIGN: Secondary user is a team member with restricted access to scheduling, tasks, or customer data.
- OPEN QUESTION: Is the product intended for a single business owner only, or does it need multi-user support by business?

## 3) Product scope and module candidates

### 3.1 Authentication and user profiles

- Target user problem: A user needs a secure identity and a simple way to access the system.
- Core user stories:
  - I can create an account.
  - I can log in securely.
  - I can recover or reset my account if needed.
  - I can maintain my profile information.
- Required data:
  - user identity details
  - role or access level
  - password credentials stored securely
  - business association
- Dependencies:
  - business entity
  - authorization model
- MVP priority: P0
- Acceptance criteria:
  - registration works with validation
  - login verifies credentials securely
  - protected routes require authentication
  - session or token lifecycle is controlled
- Questions:
  - Will there be one user per business or multiple users per business?
  - Is email-based sign-in required?

### 3.2 Dashboard

- Target user problem: The owner needs a quick overview of operational health.
- Core user stories:
  - I can see the most important KPIs at a glance.
  - I can navigate to key business areas quickly.
  - I can view upcoming tasks and deadlines.
- Required data:
  - metrics summary
  - task counts
  - upcoming appointments
  - quick financial totals
- Dependencies:
  - tasks
  - appointments
  - product and sales data
  - expenses
- MVP priority: P0
- Acceptance criteria:
  - dashboard loads data from the backend
  - KPIs update from source data
  - users see only data for their business
- Questions:
  - What is the first KPI set that matters for early adopters?

### 3.3 Tasks and scheduling

- Target user problem: A business owner needs to remember actions, appointments, and deadlines.
- Core user stories:
  - I can create tasks.
  - I can complete or reschedule tasks.
  - I can plan appointments or reminders.
- Required data:
  - task title, status, due date, owner, notes
  - appointment date/time, customer or contact, type
- Dependencies:
  - user profiles
  - customer records
- MVP priority: P1
- Acceptance criteria:
  - tasks are persisted and associated with a business
  - scheduling is visible in a list or calendar view
  - task completion is auditable
- Questions:
  - Is a simple list enough, or is a calendar required in the MVP?

### 3.4 Customers and contacts

- Target user problem: The owner needs to track relationships, follow-ups, and leads.
- Core user stories:
  - I can add a customer or contact.
  - I can track communication history.
  - I can see which contacts need follow-up.
- Required data:
  - contact name, company, phone, email, notes, tags
  - lifecycle state such as lead, active, inactive
- Dependencies:
  - business entity
  - appointments and tasks
- MVP priority: P1
- Acceptance criteria:
  - records are tied to a business
  - detailed contact profile is editable
  - customer data is searchable
- Questions:
  - Is this a lightweight CRM or just simple contact management?

### 3.5 Products and inventory

- Target user problem: The owner needs to know what sells, what is stored, and what is running low.
- Core user stories:
  - I can register products.
  - I can update stock levels.
  - I can see low-stock items.
- Required data:
  - product name, SKU, category, unit cost, sale price, stock quantity
  - reorder threshold
- Dependencies:
  - business entity
  - inventory movements
  - raw materials or cost model
- MVP priority: P1
- Acceptance criteria:
  - base product catalog exists
  - stock values can be updated
  - low-stock alerts are surfaced in the dashboard
- Questions:
  - Is the product model focused on physical goods, services, or both?

### 3.6 Raw materials and costs

- Target user problem: The owner needs to manage purchase inputs and production costs.
- Core user stories:
  - I can register materials or expenses.
  - I can attach costs to products or work.
  - I can review cost trends.
- Required data:
  - material name, supplier, unit cost, quantity, category
  - expense entries with amount, date, description, category
- Dependencies:
  - products
  - inventory
  - business records
- MVP priority: P2
- Acceptance criteria:
  - materials are tracked with cost data
  - expenses can be categorized
  - totals appear in analytics
- Questions:
  - Is this a purchase-tracking module or a full cost accounting module?

### 3.7 Business analytics

- Target user problem: The owner needs a simple way to understand business performance over time.
- Core user stories:
  - I can see summary metrics by period.
  - I can compare revenue, expenses, and activity trends.
  - I can export or share summaries.
- Required data:
  - sales totals
  - product movement data
  - expense totals
  - task or appointment counts
- Dependencies:
  - products
  - expenses
  - inventory movement
  - appointments/tasks
- MVP priority: P2
- Acceptance criteria:
  - dashboard presents a defined KPI set
  - date-range filtering works
  - metrics are based on backend data, not mock values
- Questions:
  - Which metrics matter most for the initial launch?

## 4) MVP recommendation

- PROPOSED DESIGN: The minimum useful product is a business dashboard for a single user or small team, with these core capabilities:
  1. secure authentication and profile
  2. dashboard summary metrics
  3. tasks and appointments
  4. customer/contact management
  5. product catalog with stock tracking
  6. expense and costs tracking
- ASSUMPTION: The first release should not include full ERP complexity or multi-entity accounting features unless product validation proves the need.

## 5) Non-goals

- PROPOSED DESIGN: Full ERP, payroll management, HR system, procurement pipeline, or complex accounting suite are out of scope for the first product definition.
- OPEN QUESTION: Should the product explicitly target one type of business (e.g., retail, services, artisanal production) to reduce initial complexity?

## 6) Product decisions to confirm

- OPEN QUESTION: Is ADRAET for a single business or multiple businesses per user?
- OPEN QUESTION: Is the data model designed around one owner or multiple roles?
- OPEN QUESTION: Which KPI metrics matter most to the first users?
- OPEN QUESTION: Should the initial MVP emphasize products and inventory, or tasks and customer follow-up?

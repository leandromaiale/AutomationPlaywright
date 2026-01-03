🧪 Playwright Automation Framework (TypeScript)
📌 Overview

This repository contains a scalable UI automation framework built with Playwright + TypeScript, designed following industry best practices such as:

    # Page Object Model (POM)

    # Builder pattern

    # Clear separation of responsibilities

    # Support for positive and negative test flows

    # Maintainable and extensible architecture

The project uses the DemoQA Practice Form as a real-world example

🎯 Goals of the Framework

    # Keep tests readable and expressive

    # Avoid duplication and fragile test logic

    # Centralize UI knowledge in Pages & Locators

    # Make test data dynamic and reusable

    # Support complex scenarios (multiple subjects, hobbies, validations)

🏗️ Project Structure
.
├── builders/          # High-level test orchestration (FormBuilder, TableDataBuilder)
├── pages/             # Page Objects (UI actions only)
├── locators/          # Centralized locators
├── validators/        # UI validations & assertions
├── models/            # TypeScript contracts (FormData, TableData)
├── data/              # Test data (JSON)
├── tests/             # Playwright test specs
├── playwright.config.ts
└── README.md

🧠 Architecture & Design Decisions
🔹 Page Objects (Pages)

    # Contain only UI interactions

    # No test logic or assertions

    # Expose meaningful actions (e.g. fillFirstName, submitForm)

    # Locators are injected via locators module

👉 Pages do not know about test data or validations.


🔹 Builders (FormBuilder, TableDataBuilder)

Builders orchestrate how data is applied and validated.

FormBuilder

    # Accepts partial or full form data

    # Supports positive and negative flows

    # Handles default selections (radio, checkbox, dropdowns)

    # Keeps test code clean and fluent

Example:

await FormBuilder
  .using(formPage)
  .withData(validData)
  .withDefaultSelections()
  .submit();

TableDataBuilder

    # Dynamically generates expected table values

    # Ensures assertions always reflect input data

    # Avoids hardcoded expected results

const expectedTable = TableDataBuilder.fromFormData(validData);


🔹 Validators

    # Centralize UI assertions

    # Separate what is validated from how tests are written

    # Support negative scenarios (invalid fields, missing data)

Example:

await formValidator.expectInvalid([
  "firstName",
  "lastName",
  "email",
  "mobile"
]);


🔹 Models (TypeScript Contracts)

Strong typing is enforced using interfaces:

    # FormData – represents input form data

    # TableData – represents expected submitted results

This ensures:

    # Compile-time safety

    # Clear contracts between layers

    # Easier refactoring


🧪 Test Strategy
✔ Positive Scenarios

    # Fill the form with valid data

    # Submit successfully

    # Validate dynamic table results

❌ Negative Scenarios

    # Submit with missing or invalid fields

    # Validate browser-level constraints

    # Ensure no submission occurs

Tests focus on business intent, not UI mechanics.


🛠️ Tech Stack

    # Playwright

    # TypeScript

    # Node.js

    # Page Object Model

    # Builder Pattern


🚀 How to Run
    npm install
    npx playwright test

👤 Author

Created as a portfolio project to demonstrate real-world QA Automation architecture and decision-making.
🧪 Playwright Automation Framework (TypeScript)
📌 Overview

   # This repository contains a scalable automation framework built with Playwright and TypeScript, designed to reflect real-world QA Automation practices used in modern engineering teams.

   # The project demonstrates how to design maintainable, readable, and extensible test automation by applying proven patterns and architectural principles.

   # The DemoQA Practice Form is used as a real-world UI example, complemented by API testing to showcase a complete testing strategy.

🎯 Framework Goals

   # Build readable and expressive tests

   # Reduce duplication and fragile test logic

   # Centralize UI knowledge in Page Objects and Locators

   # Support positive and negative test flows

   # Enable data-driven testing

   # Combine UI and API testing following the test pyramid
    

🏗️ Project Structure
├── api/              # API clients and services
├── builders/         # Test orchestration (FormBuilder, TableDataBuilder, PetBuilder)
├── pages/            # Page Objects (UI interactions only)
├── locators/         # Centralized locators
├── validators/       # UI and API assertions
├── models/           # TypeScript contracts (FormData, TableData)
├── data/             # Test data (JSON)
├── tests/            # Playwright test specs (UI & API)
├── playwright.config.ts
└── README.md


🧠 Architecture & Design Principles
🔹 Page Object Model (POM)

   # Page Objects contain only UI interactions

   # No assertions or test logic inside Pages

   # Expose meaningful actions (e.g. fillFirstName, submitForm)

   # Locators are injected via a dedicated module

👉 Pages are UI-focused and unaware of test data or validations.

    
🔹 Builder Pattern

   # Builders orchestrate how data is applied and validated, keeping test code clean and expressive.

   # FormBuilder

   # Accepts partial or full form data

   # Supports positive and negative flows

   # Handles default UI selections (radio buttons, checkboxes, dropdowns)

  #  Keeps test logic fluent and readable

    await FormBuilder
        .using(formPage)
        .withData(validData)
        .withDefaultSelections()
        .submit();

TableDataBuilder

   # Dynamically generates expected table results

   # Ensures assertions always reflect input data

   # Avoids hardcoded expected values

        const expectedTable = TableDataBuilder.fromFormData(validData);

🔹 Validators

   # Centralize UI and API assertions

   # Separate what is validated from how tests are written

   # Support negative scenarios (invalid or missing fields)

        await formValidator.expectInvalid([
            "firstName",
            "lastName",
            "email",
            "mobile"
        ]);

🔹 Strong Typing with Models

   # TypeScript interfaces enforce clear contracts between layers:

   # FormData – input form data

   # TableData – expected submitted results

    Benefits:

   # Compile-time safety

   # Easier refactoring

   # Self-documented architecture


🔌 API Testing (Playwright API)

The framework includes API tests built with Playwright’s API testing capabilities, following the same architectural principles as UI automation.

API Test Coverage

   # POST /pet – create resource

   # GET /pet/{id} – retrieve by ID

   # PUT /pet – update resource

   # DELETE /pet/{id} – remove resource

   # Negative scenarios (e.g. 404 not found)

    Each API test:

   # Creates its own data

   # Validates responses and contracts

   # Cleans up to remain isolated and deterministic


🧪 Test Strategy
✔ Positive Scenarios

   # Submit valid data

   # Validate dynamic UI results

   # Confirm API responses

❌ Negative Scenarios

  #  Validate browser-level constraints

   # Ensure invalid submissions are rejected

  #  Verify proper error handling

Tests focus on business intent, not UI mechanics.


🛠️ Tech Stack

   # Playwright

   # TypeScript

   # Node.js

   # Page Object Model

   # Builder Pattern

   # Data-Driven Testing

   # REST API Testing


🚀 How to Run Tests
npm install
npx playwright test


Run only API tests:

npx playwright test tests/api


👤 Author

Created as a portfolio project to demonstrate QA Automation architecture, testing strategy, and engineering decision-making aligned with real-world development teams.

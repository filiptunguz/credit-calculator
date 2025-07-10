# Credit Calculator

A responsive and modular credit calculator built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. It guides users through the process of checking their creditworthiness for mortgage and cash loans by analyzing employment and financial data.

## Features

- Step-by-step credit assessment process
- Mortgage and cash loan simulation
- Clear breakdown of loan eligibility
- Real-time calculations and feedback
- Comprehensive error handling and input validation
- Clean and responsive UI

## Sections Overview

### 1. Employment Verification
Users input their contract type and employment duration. The system verifies whether basic conditions are met (e.g., employed for more than six months) and grants access to further steps accordingly.

### 2. Financial Input
Users enter salary, existing debts, interest rate, and payment period. Detailed validation ensures logical and consistent values, helping users avoid common financial input errors.

### 3. Credit Overview
Displays maximum monthly installment, total credit potential, salary-to-debt ratios, and an overall creditworthiness status. Users can instantly see if they are eligible or need to improve their financial profile.

## Tech Stack

- **React** with functional components and hooks
- **TypeScript** for strong typing and safer code
- **Vite** for fast development and optimized builds
- **Tailwind CSS** for modern and clean styling
- **Zod** for schema-based validation

## Getting Started

```bash
# Clone the repo
git clone https://github.com/your-username/credit-calculator.git
cd credit-calculator

# Install dependencies
npm install

# Run the app
npm run dev

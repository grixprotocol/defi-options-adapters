# Adapters

This repository will host adapters to integrate our system and various DeFi platforms.

## Integrations

| **Protocol Name**   | **fetchExpiryDates**                                          | **listStrikePricesByExpiry**                                   | **calculatePremiumForOption**                                  | **buyOptionContract**                                        | **addOptionToPosition**                                     | **exerciseOptionContract**                                  | **sellOptionBackToIssuer**                                  | **transferOptionOwnership**                                |
|---------------------|--------------------------------------------------------------|----------------------------------------------------------------|---------------------------------------------------------------|-------------------------------------------------------------|-----------------------------------------------------------|----------------------------------------------------------|------------------------------------------------------------|-----------------------------------------------------------|
| **Rysk Finance**    | [Implemented](./rysk-finance/fetchExpiryDates/)              | [Implemented](./rysk-finance/listStrikePricesByExpiry/)       | [Implemented](./rysk-finance/calculatePremiumForOption/)      | [Implemented](./rysk-finance/buyOptionContract/)            | [Implemented](./rysk-finance/addOptionToPosition/)         | [Pending](./rysk-finance/exerciseOptionContract/)          | [Pending](./rysk-finance/sellOptionBackToIssuer/)          | [Pending](./rysk-finance/transferOptionOwnership/)         |
| **Lyra**            | [Implemented](./lyra/fetchExpiryDates/)                      | [Implemented](./lyra/listStrikePricesByExpiry/)                | [Implemented](./lyra/calculatePremiumForOption/)              | [Pending](./lyra/buyOptionContract/)                         | [Pending](./lyra/addOptionToPosition/)                      | [Pending](./lyra/exerciseOptionContract/)                   | [Pending](./lyra/sellOptionBackToIssuer/)                   | [Pending](./lyra/transferOptionOwnership/)                  |
| **Hegic**           | [Pending](./hegic/fetchExpiryDates/)                          | [Pending](./hegic/listStrikePricesByExpiry/)                   | [Pending](./hegic/calculatePremiumForOption/)                 | [Pending](./hegic/buyOptionContract/)                        | [Pending](./hegic/addOptionToPosition/)                     | [Pending](./hegic/exerciseOptionContract/)                  | [Pending](./hegic/sellOptionBackToIssuer/)                  | [Pending](./hegic/transferOptionOwnership/)                 |
| **Dopex**           | [Pending](./dopex/fetchExpiryDates/)                          | [Pending](./dopex/listStrikePricesByExpiry/)                   | [Pending](./dopex/calculatePremiumForOption/)                 | [Pending](./dopex/buyOptionContract/)                        | [Pending](./dopex/addOptionToPosition/)                     | [Pending](./dopex/exerciseOptionContract/)                  | [Pending](./dopex/sellOptionBackToIssuer/)                  | [Pending](./dopex/transferOptionOwnership/)                 |
| **Aevo**            | [Implemented](./aevo/fetchExpiryDates/)                      | [Implemented](./aevo/listStrikePricesByExpiry/)                | [Implemented](./aevo/calculatePremiumForOption/)              | [Pending](./aevo/buyOptionContract/)                         | [Pending](./aevo/addOptionToPosition/)                      | [Pending](./aevo/exerciseOptionContract/)                   | [Pending](./aevo/sellOptionBackToIssuer/)                   | [Pending](./aevo/transferOptionOwnership/)                  |

## How to Participate

We welcome contributions in the form of TypeScript, JavaScript, or Python code to achieve specific functionalities within our DeFi options adapters framework. If you're interested in contributing, here's how you can participate:

### Important Notes

- **Functionality Structure**: The structure for the required functionalities (e.g., `fetchExpiryDates`, `listStrikePricesByExpiry`, etc.) is not final and is still being explored. Your feedback and contributions will be invaluable as we refine this structure.
- **Coding Standards**: Our contribution standards are intentionally not strict to encourage more community participation. We will review and iterate on contributions as the DeFi options standard consolidates. Your input will help shape the future of this project!

### Step 1: Choose a Protocol

Navigate through our repository to find a protocol you're interested in. Each protocol has its dedicated folder, which contains subfolders for each required functionality:

- **fetchExpiryDates**
- **listStrikePricesByExpiry**
- **calculatePremiumForOption**
- **buyOptionContract**
- **addOptionToPosition**

### Step 2: Select a Functionality to Implement

Inside each protocol's folder, choose the functionality you want to implement or improve. Check the current status to see if it's pending implementation or if there's room for improvement.

### Step 3: Fork the Repository

Before you can make changes, you'll need to fork the repository to your own GitHub account. This gives you a personal copy of the project to work on.

### Step 4: Implement Your Solution

Create a new branch in your forked repository for your work. Using TypeScript, JavaScript, or Python, implement the functionality you've chosen. Make sure your code is clean, well-commented, and follows our [coding standards](#coding-standards).

### Step 5: Test Your Code

Ensure your code works as expected and passes all tests. We encourage you to write tests for your code to verify its functionality across different scenarios.

### Step 6: Submit a Pull Request (PR)

Once your code is ready and tested, submit a PR to the original repository. Your PR should include a detailed description of the changes you've made and any other relevant information for the reviewers.

### Step 7: Review Process

Our team will review your submission. This process might involve some back-and-forth to refine the code or adjust it to fit our internal standards. Your contribution will be merged once it meets our criteria.

### Step 8: Integration into Grix

After your contribution is accepted, we'll take it from there to integrate it into Grix in a standardized way. Your code will play a crucial role in our mission to open-source our internal library in the future.

## Coding Standards

While we value consistency and maintainability, we also aim to be flexible to maximize community involvement. Our coding standards are a guide, not a strict rulebook. We're open to different styles and approaches, especially if they lead to innovative solutions. [Find our style guide here](#).

Thank you for considering contributing to our project. Your efforts will help us build a more open, efficient, and community-driven framework for DeFi options adapters.

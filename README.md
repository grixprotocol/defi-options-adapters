# Adapters

This repository will host adapters to integrate our system and various DeFi platforms.

## Integrations

| **Protocol Name** | **fetchExpiryDates**                                     | **listStrikePricesByExpiry**                                     | **calculatePremiumForOption**                                     | **buyOptionContract**                                     | **addOptionToPosition**                                     | **exerciseOptionContract**                                 | **sellOptionBackToIssuer**                                 | **transferOptionOwnership**                                 |
| ----------------- | -------------------------------------------------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------- | --------------------------------------------------------- | ----------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ----------------------------------------------------------- |
| **Rysk Finance**  | [Implemented](./rysk-finance/fetchExpiryDates/README.md) | [Implemented](./rysk-finance/listStrikePricesByExpiry/README.md) | [Implemented](./rysk-finance/calculatePremiumForOption/README.md) | [Implemented](./rysk-finance/buyOptionContract/README.md) | [Implemented](./rysk-finance/addOptionToPosition/README.md) | [Pending](./rysk-finance/exerciseOptionContract/README.md) | [Pending](./rysk-finance/sellOptionBackToIssuer/README.md) | [Pending](./rysk-finance/transferOptionOwnership/README.md) |
| **Lyra**          | [Implemented](./lyra/fetchExpiryDates/README.md)         | [Implemented](./lyra/listStrikePricesByExpiry/README.md)         | [Implemented](./lyra/calculatePremiumForOption/README.md)         | [Pending](./lyra/buyOptionContract/README.md)             | [Pending](./lyra/addOptionToPosition/README.md)             | [Pending](./lyra/exerciseOptionContract/README.md)         | [Pending](./lyra/sellOptionBackToIssuer/README.md)         | [Pending](./lyra/transferOptionOwnership/README.md)         |
| **Hegic**         | [Pending](./hegic/fetchExpiryDates/README.md)            | [Pending](./hegic/listStrikePricesByExpiry/README.md)            | [Pending](./hegic/calculatePremiumForOption/README.md)            | [Pending](./hegic/buyOptionContract/README.md)            | [Pending](./hegic/addOptionToPosition/README.md)            | [Pending](./hegic/exerciseOptionContract/README.md)        | [Pending](./hegic/sellOptionBackToIssuer/README.md)        | [Pending](./hegic/transferOptionOwnership/README.md)        |
| **Dopex**         | [Pending](./dopex/fetchExpiryDates/README.md)            | [Pending](./dopex/listStrikePricesByExpiry/README.md)            | [Pending](./dopex/calculatePremiumForOption/README.md)            | [Pending](./dopex/buyOptionContract/README.md)            | [Pending](./dopex/addOptionToPosition/README.md)            | [Pending](./dopex/exerciseOptionContract/README.md)        | [Pending](./dopex/sellOptionBackToIssuer/README.md)        | [Pending](./dopex/transferOptionOwnership/README.md)        |
| **Aevo**          | [Implemented](./aevo/fetchExpiryDates/README.md)         | [Implemented](./aevo/listStrikePricesByExpiry/README.md)         | [Implemented](./aevo/calculatePremiumForOption/README.md)         | [Pending](./aevo/buyOptionContract/README.md)             | [Pending](./aevo/addOptionToPosition/README.md)             | [Pending](./aevo/exerciseOptionContract/README.md)         | [Pending](./aevo/sellOptionBackToIssuer/README.md)         | [Pending](./aevo/transferOptionOwnership/README.md)         |
| **Moby**          | [Pending](./moby/fetchExpiryDates/README.md)             | [Pending](./moby/listStrikePricesByExpiry/README.md)             | [Pending](./moby/calculatePremiumForOption/README.md)             | [Pending](./moby/buyOptionContract/README.md)             | [Pending](./moby/addOptionToPosition/README.md)             | [Pending](./moby/exerciseOptionContract/README.md)         | [Pending](./moby/sellOptionBackToIssuer/README.md)         | [Pending](./moby/transferOptionOwnership/README.md)         |

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

Create a new branch in your forked repository for your work. While we prefer solutions implemented in TypeScript for consistency and maintainability, we welcome additional scripts in JavaScript and Python. Implement the functionality you've chosen using one of these languages.

### Step 5: Test Your Code

Ensure your code works as expected and passes all tests. We encourage you to write tests for your code to verify its functionality across different scenarios.

### Step 6: Submit a Pull Request (PR)

Once your code is ready and tested, submit a PR to the original repository. Your PR should include a detailed description of the changes you've made and any other relevant information for the reviewers.

### Step 7: Review Process

Our team will review your submission. This process might involve some back-and-forth to refine the code or adjust it to fit our internal standards. Your contribution will be merged once it meets our criteria.

### Step 8: Integration into Grix

After your contribution is accepted, we'll take it from there to integrate it into Grix in a standardized way. Your code will play a crucial role in our mission to open-source our internal library in the future.

## Coding Standards

While we value consistency and maintainability, we also aim to be flexible to maximize community involvement. Our coding standards are a guide, not a strict rulebook. We're open to different styles and approaches, especially if they lead to innovative solutions.

Thank you for considering contributing to our project. Your efforts will help us build a more open, efficient, and community-driven framework for DeFi options adapters.

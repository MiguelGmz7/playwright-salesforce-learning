# Playwright Salesforce Learning

A personal learning project for exploring end-to-end test automation with [Playwright](https://playwright.dev/) against Salesforce (and general web targets). Notes and setup guides are kept as an [Obsidian](https://obsidian.md/) notebook inside the `Notebook/` folder.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| [Node.js](https://nodejs.org/) | Runtime |
| [@playwright/test](https://www.npmjs.com/package/@playwright/test) | Test framework & browser automation |
| [Obsidian](https://obsidian.md/) | Learning notebook (`Notebook/`) |

---

## Prerequisites

- **Node.js** (LTS recommended)
- A **Salesforce Developer Edition** org — see [`Notebook/How to Create a Free developer edition.md`](Notebook/How%20to%20Create%20a%20Free%20developer%20edition.md) for step-by-step setup

---

## Installation

```bash
# 1. Clone the repo
git clone https://github.com/MiguelGmz7/playwright-salesforce-learning.git
cd playwright-salesforce-learning

# 2. Install dependencies
npm install

# 3. Install Playwright browsers (first time only)
npx playwright install
```

---

## Running Tests

```bash
# Run all tests (Chromium + Firefox, fully parallel)
npx playwright test

# Run a specific test file
npx playwright test tests/myfirstest.spec.js

# Open the HTML report after a run
npx playwright show-report
```

---

## Project Structure

```
.
├── Notebook/                          # Obsidian learning notes
│   ├── Setup.md                       # Key technologies & Playwright init
│   └── How to Create a Free developer edition.md
├── tests/
│   └── myfirstest.spec.js             # First test (browser & page contexts)
├── playwright.config.js               # Playwright configuration
└── package.json
```

---

## Playwright Configuration Highlights

Defined in [`playwright.config.js`](playwright.config.js):

- **Test directory:** `./tests`
- **Test timeout:** 40 s · **Assertion timeout:** 10 s
- **Browsers:** Chromium, Firefox (parallel)
- **Reporter:** HTML (`playwright-report/`)
- **Trace:** collected on first retry

---

## Notebook

Notes are written in Markdown and maintained as an [Obsidian](https://obsidian.md/) vault inside `Notebook/`. Open that folder directly in Obsidian to navigate linked notes, view embedded images, and follow the learning path.

| Note | Description |
|---|---|
| [`Setup.md`](Notebook/Setup.md) | Key technologies and Playwright init command |
| [`How to Create a Free developer edition.md`](Notebook/How%20to%20Create%20a%20Free%20developer%20edition.md) | Step-by-step Salesforce Developer org setup |

---

## Repository

- **GitHub:** <https://github.com/MiguelGmz7/playwright-salesforce-learning>
- **Issues:** <https://github.com/MiguelGmz7/playwright-salesforce-learning/issues>

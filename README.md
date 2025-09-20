# Loan Calculator

A simple web application that calculates loan payments.

## 🔍 Features

-   Calculate monthly installment (EMI) based on Principal, Interest
    Rate and Tenure\
-   Show total payment (Principal + Interest)\
-   Clean, responsive UI\
-   Can be extended with charts or additional features

## 💻 Technology Stack

-   HTML\
-   CSS\
-   JavaScript

## 🚀 Getting Started

### Prerequisites

-   Any modern browser\
-   (Optional) a local HTTP server like VSCode Live Server

### Installation / Usage

1.  Clone this repository:

    ``` bash
    git clone https://github.com/debug-node/Loan-Calculator.git
    ```

2.  Go into the project folder:

    ``` bash
    cd Loan-Calculator
    ```

3.  Open `index.html` in your browser (or run it using a live server).

4.  Enter Principal, Interest Rate and Tenure in the UI and click
    **Calculate**.

## 📁 File Structure

  File / Folder   Description
  --------------- -----------------------------------
  `index.html`    Main HTML page / UI structure
  `style.css`     All CSS styles
  `script.js`     JavaScript logic for calculations

## 🛠️ How It Works

-   Takes user inputs (principal, rate, tenure) via the UI.\

-   Applies the EMI formula:

    \[ EMI = `\frac{P \times r \times (1 + r)^n}{(1 + r)^n - 1}`{=tex}
    \]

    where:

    -   P = loan amount (principal)\
    -   r = monthly interest rate (annual rate divided by 12)\
    -   n = number of months (tenure)

-   Displays monthly installment, total interest, and total payment.

## ✅ Validation

-   Input fields cannot be empty\
-   Rate and tenure must be positive numbers\
-   Decimal / fractional interest rates are supported

## ❓ Future Improvements

-   Support multiple time units for tenure (years / months)\
-   Add charts or graphs to show payment distribution\
-   Enhance UI styling\
-   More robust input validation with error messages

## 📄 License

This project can be released under the **MIT License** or any license
you prefer.\
(Include the full license text here if you want.)

## 🧑‍💻 Author

-   **debug-node**

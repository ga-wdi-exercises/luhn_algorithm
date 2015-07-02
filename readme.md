# Morning Exercise

This is a challenging assignment. As you solve this problem, focus on making incremental progress (quick wins).

Here are some tips that will help you:

- Take it one step at a time and use what you know.
- Avoid "guessing" at code.
- Google knows everything.
  - Let’s google something for the challenge’s step 1
- Look for the big green check mark.
- Failure happens all the time. Embrace it.

### First

Spend the next 10 minutes reading through the challenge, and writing pseudo code to solve the problem.

### Second

Spend 5 minutes comparing and discussing pseudo code with a partner.

### Third

Choose one computer between you and your partner to work on. This is your first pair programming experience!

When pair programming, there is a **driver** and a **navigator**.

The driver is the person typing code into the text editor and evaluating its output in a terminal or browser.
The navigator is the person reviewing each line of code as it is typed and providing direction for the driver.

>While reviewing, the navigator also considers the "strategic" direction of the work, coming up with ideas for improvements and likely future problems to address. This frees the driver to focus all of his or her attention on the "tactical" aspects of completing the current task, using the navigator as a safety net and guide.

Spend 15 minutes as either the driver or navigator.

### Fourth

Switch! Spend 15 minutes as the driver if you just navigated, or as the navigator if you just drove.

### Fifth

Let’s talk about it.

## Challenge: Validating Credit Card Numbers

Credit card numbers can be validated with a process called the Luhn algorithm. Simply stated, the Luhn algorithm works like this:

1. Starting with the next to last digit and continuing with every other digit going back to the beginning of the card, double the digit.

2. Sum all doubled and untouched digits in the number.

3. If that total is a multiple of 10, the number is valid.

For example, given the card number 4408 0412 3456 7893:

```
Orig  :  4 4 0 8 0 4 1 2 3 4   5 6   7 8   9 3
Step 1:  8 4 0 8 0 4 2 2 6 4  10 6  14 8  18 3
Step 2:  8+4+0+8+0+4+2+2+6+4+1+0+6+1+4+8+1+8+3 = 70
Step 3:  70 % 10 == 0
```

### To Do
Choose either Ruby or JavaScript.

Create a variable `creditCardNumber` equal to a number, and print `true` to the console if it is a valid credit card number, `false` otherwise. 

For your reference:
* 1234567890123456 is not valid
* 4408041234567893 is valid
* 38520000023237 is valid
* 4222222222222 is valid

### Bonus

* For 16 digit credit card numbers, how many possible combinations exist that satisfy the luhn algorithm?

### Appendix

Reference: http://en.wikipedia.org/wiki/Luhn_algorithm

Source: http://www.rubeque.com/problems/validating-credit-card-numbers
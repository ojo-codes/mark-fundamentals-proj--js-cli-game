---
module: fundamentals

level: 2

methods:
  - team
  - pair
  - solo

tags:
  - wip
---

# CLI Game in JS

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a>

> This is part of Academy's [technical curriculum for **The Mark**](https://github.com/WeAreAcademy/curriculum-mark). All parts of that curriculum, including this project, are licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.

You have learned [how to read and extend the code for a **JavaScript CLI game**](https://github.com/WeAreAcademy/mark-fundamentals-proj--js-rock-paper-scissors). Now, you're going to port others over from Python to JavaScript!

## Learning Outcomes

- Interpret code written by others
- Use variable declaration and assignment in JavaScript
- Use control flow in JavaScript
- Use functions and arguments in JavaScript
- Use search engines as a learning and knowledge aid
- Specifying clear acceptance criteria

## Exercise 0: Read through the Python code
> 🎯 **Success criterion:** brief reflections on how the Anagram game works in Python

We are going to start by looking at an Anagram game. This is inspired by the work of Emmanuel and Sharon during the prework. Go to the [revelant Python GitHub repo](https://github.com/WeAreAcademy/mark-prework-sample--category-quiz). Their original code is in the `src` folder and it has been started to be refactored in the `refactored` folder. 

Play a few games to get the hang of how the game behaves.

For those after a challenge, start from the original code and refactor it yourself before continuing. Otherwise, look at the code in the refactored version. Document your reflections on the game.

If you start from the original code, then please simplify it whilst refactoring: remove the effects of `difficulty` (we want it to always show the jumbled word indefinitely, without the it disapearing after a timer in later categories).

## Exercise 1: Setting the acceptance criteria

> 🎯 **Success criterion:** an `acceptance-criteria.md` file which specifies the acceptance criteria of the game

Acceptance criteria are used in software engineering to help elicit requirements and provide an easy way of confirming that requirements are met. (You can [read more about acceptance criteria in this article](https://www.altexsoft.com/blog/business/acceptance-criteria-purposes-formats-and-best-practices).)

What are the acceptance criteria for this game to be considered a successful JavaScript port? Remember that we will be porting it without any effects of difficulty.

Create an `acceptance-criteria.md` file in the root of this directory which specifies them.

## Exercise 2: Porting the anagram game

> 🎯 **Success criterion:** a JavaScript version of the anagram CLI game which passes your acceptance criteria.

In this exercise, you should rewrite the Python version of the anagram game in JavaScript.

It does not need to be an exact translation:
- you don't have to literally translate line-by-line or function-by-function from Python into JavaScript
- you might choose to reorganise the code or logic as you port the game over
Play a few games and check it behaves as you would expect.

Clone this repo for the boiler plate - including the `readline-sync` dependency for digesting command line inputs.

### Extension 1: Improve the logging info

The original python game (and probably therefore also your translated version), will log grammatically incorrect statements such as "you have 1 lives remaining" - improve these statements to dynamically pluralise the nouns as appropriate.

### Extension 2: Add the difficulty

As an extension exercise, you could consider how to add the effects of increasing difficulty back in - as the difficulty icnreases, shorten the amount of time the user can see the jumbled word for.

### Extension 3: Unit test the game

Using Jest, add unit tests for the functions you have created to make the game. You may wish to come back to this once you have more familiarity with Jest.

### Extension 4: Port another game over to Python

Now that you have ported one game over, why not try your hand at another? This game was chosen as it introduces several JS concepts and fits in with the language relatively well, but others may require more specific packages. Our recommendation would be to consider 2048 next.

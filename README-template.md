# Frontend Mentor - Interactive pricing component solution

This is my solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### Links

- Solution URL: https://pricing-component-tau-eight.vercel.app/
- GitHub code URL: https://github.com/Wawamama/pricing-component

## My process


## Built with
For my second challenge I kept working with Vanilla JS and practice my HTML and CSS skills.
I first built the layout then coded a JS function to change the prices and display them accordingly.

### What I learned

I learned how to style an animated checkbox, somthing I will definitely use again:

```html
<label class="switch">
  <input type="checkbox" id="billing_recurrence">
  <span class='switch_slider'></span>
</label>
```

```css
  .switch {
      position: relative;
      height: 25px;
      width: 45px;
      display: inline-block;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .switch_slider {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--lightergrayishblue);
    border-radius: 35px;
    -webkit-transition: .4s;
    transition: .4s; 
    cursor: pointer;
    
  }

  .switch_slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }

  input[type='checkbox']:checked + .switch_slider {
      background-color:var(--strongcyan);
  }

  input[type='checkbox']:checked + .switch_slider::before {
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(2Opx);
    transform: translateX(20px);
  }
```

## Author

[Marion Saul]
- Frontend Mentor - [@Wawamama](https://www.frontendmentor.io/profile/yourusername)



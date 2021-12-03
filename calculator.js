//the first step is to be able to listen to all keypresses
//determine the type of key that is pressed
//use event delegation pattern to listen 
//since keys are all children of .calculator__keys

const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__keys")

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
      // Do something
    }
   })

//next, use data-action attribute to determine the type of key that is clicked

const key = e.target
const action = key.dataset.action

//if the key does not have a data-action attribute, it must be a number key

if (!action) {
  console.log('number key!')
}

//if the key has a data-action that is either add, subtract, multiply, or divide, we know the key is an operator

if (
  action === 'add' ||
  action === 'subrtract' ||
  action === 'multiply' ||
  action === 'divide'
) {
  console.log('operator key!')
}

//if the key's data-action is decimal, we know the user clicked on the decimal key
//if the key's data-action is clear, we know the user clicked on the AC key. 
//if the key's data-action is calculate, we know the user clicked on the equals key.

if (action === 'decimal') {
  console.log('decimal key!')
}

if (action === 'clear') {
  console.log('clear key!')
}

if (action === 'calculate') {
  console.log('equal key!')
}

//when a user hits a number key
//0 default number
//the target number should replace zero

//if the calculator shows a non-zero number, the target number should be appended to the displayed number

//we need to know 2 things
//1. the number of the key that was clicked
//2. the current displayed number 

const display = document.querySelector('.calculator__display');

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent
  }
})

//if the calculator shows ), we want to replace the calculator's display with the clikced key. 
//we can do this by replacing the display's textContent property

if (!action) {
  if (displayedNum === "0") {
    display.textContent = keyContent
  }
}


//if the calculator shows a non-zero number, we want to append the clicked key to the displayed number 
//to append a number, we concatenate a string

if (!action) {
  if (displayedNum === "0") {
    displayed.textContent = keyContent
  } else {
    display.textContent = displayedNum + keyContent
  }
}

//when a user hits the decimal key, a decimal should appear on the display
//if the user hits any number after hitting a decimal key, the number should be appended on the display as well
//to create this effect, we can concatenate . to the displayed number

if (action === 'decimal') {
    display.textContent = displayedNum + "."
  }
  
  
  //next, let's say a user continues their calculation by hitting an operator key
  //the operator should be highlighted so the user knows the operator is active
  //to do so we can add is-depressed class to the operator key
  
  if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
  ) {
    key.classList.add('is-depressed')
  }
  
  //once the user has hit a operator, they will hit another number key
  
  //WHEN A USER HITS A NUMBER KEY AFTER AN OPERATOR KEY 
  //the previous display should be replaced with the new number
  //the operator key should also release its pressed state.
  //to release the pressed state, we remove the is-depressed class from all keys through a forEach loop

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
      const key = e.target
      
      //Remove .is-depressed class from all keys
      Array.from(key.parentNode.children)
        .forEach(k => k.classlist.remove('is-depressed'))
    }
  })


  //Next, we want to update the display to the clicked key.
  //before we do this, we need a way to tell the previous key is an operator key
  //one way to do this is through a custom attribute. 
  //let's call this custom attribute data-previous-key-type

  const calculator = document.querySelector('.calculator')

  keys.addEventListener('click', e => {
      if (e.target.matches('button')) {


        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'  
        ) {
            key.classList.add('is-depressed')
            //add custom attribute
            calculator.dataset.previousKeyType = 'operator'
        }
      }
  })

  //the previousKeyType is an operator, we want to replace the displayed number with clicked number

  const previousKeyType = calculator.dataset.previousKeyType

  if (!action) {
      if (displayedNum === '0' || previousKeyType === 'operator') {
          display.textContent = keyContent
      } else {
          display.textContent = displayedNum + keyContent
      }
  }

  //Next, let's say the user decides to complete their calculation by hitting the equals key
//WHEN THE USER HITS THE EQUALS KEY

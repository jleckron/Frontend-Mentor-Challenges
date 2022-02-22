let billAmount = 0;
let tipAmount = 0;
let numPeople = 0;


// 1 ---- Event Listeners and functions -------------------------------

const billInput = document.getElementById('bill')
billInput.addEventListener('input', () => billAmount = billInput.value)

const tip5 = document.getElementById('tip5')
tip5.addEventListener('click', () => {
    styleButton(tip5);
    tipAmount = 5
})

const tip10 = document.getElementById('tip10')
tip10.addEventListener('click', () => {
    styleButton(tip10);
    tipAmount = 10
})

const tip15 = document.getElementById('tip15')
tip15.addEventListener('click', () => {
    styleButton(tip15);
    tipAmount = 15
})

const tip25 = document.getElementById('tip25')
tip25.addEventListener('click', () => {
    styleButton(tip25);
    tipAmount = 25
})

const tip50 = document.getElementById('tip50')
tip50.addEventListener('click', () => {
    styleButton(tip50);
    tipAmount = 50
})

const customTip = document.getElementById('tipInput')
customTip.addEventListener('input', () => {
    resetButtons()
    tipAmount = customTip.value
})

const people = document.getElementById('peopleInput')
people.addEventListener('input', () => numPeople = people.value)

const tipPerPersonDisplay = document.getElementById('tipPerPerson')
const totalPerPersonDisplay = document.getElementById('totalPerPerson')

const resetButton = document.getElementById('reset')
resetButton.addEventListener('click', () => {
    resetButtons()
    billInput.value = ''
    people.value = ''
    customTip.value = ''
    tipPerPersonDisplay.textContent = `$0.00`
    totalPerPersonDisplay.textContent = `$0.00`
    billAmount = 0;
    tipAmount = 0;
    numPeople = 0;
})

const error = document.getElementById('error')

// 1 -------------------------------------------------------------------


// 2 ------ Custom Functionalities ------------------------------------

let buttonArray = [tip5, tip10, tip15, tip25, tip50]

function resetButtons() {
    buttonArray.map((button) => {
        button.style.backgroundColor = 'hsl(183, 100%, 15%)';
        button.style.color = 'hsl(189, 41%, 97%)';
    })
}

const styleButton = (button) => {
    resetButtons()
    button.style.backgroundColor = 'hsl(172, 67%, 45%)';
    button.style.color = 'hsl(183, 100%, 15%)'
    customTip.value = ''
}

window.setInterval(() => {
    if(numPeople > 0) {
        error.style.display = 'none'
        let tipPercent = tipAmount / 100
        let tipPerPerson = (billAmount * tipPercent) / numPeople
        let totalPerPerson = (billAmount / numPeople) + tipPerPerson

        tipPerPerson = Math.floor(tipPerPerson * 100) / 100
        
        tipPerPersonDisplay.textContent = `$${tipPerPerson.toFixed(2)}`
        totalPerPersonDisplay.textContent = `$${totalPerPerson.toFixed(2)}`

        resetButton.style.opacity = '1';
    }
    else {
        if(billAmount!==0 && tipAmount!==0) error.style.display = 'inline'
    }
}, 1)



// 2 ------------------------------------------------------------------
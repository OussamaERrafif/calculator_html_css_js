
const calculator = document.querySelector(".container");
const display = document.querySelector("#display");
const keys = document.querySelector("#keys");

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        console.log(action)
        const keyContent = key.textContent
        const displayedNum = display.textContent
        console.log(displayedNum)
        if (1) {
            if (displayedNum === '0') {
                display.textContent = keyContent
            }
        }
    }
   
}
)

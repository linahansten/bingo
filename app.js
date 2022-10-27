const numbers = []; // Array

function generateNumber() {
    const number = Math.floor(Math.random() * 75) + 1;

    if (numbers.includes(number)) {
        return generateNumber();
    } else {
        numbers.push(number);
        return number;
    }
}


function init() {
    const Box = document.querySelector("#box");
    //Create 25 buttons
    for (let i = 1; i < 26; i++) {
        const Button = document.createElement("button"); // <button></button>

        //Check if number 12 and create diffrent button
        if (i == 13) {
            Button.innerText = "🌳" //CTRL + .
            Button.classList.add("hit");
        } else {
            Button.innerText = generateNumber();

            Button.addEventListener("click", function () {
                // If already checked, remove the hit class 
                if (Button.classList == "hit") {
                    Button.classList.remove("hit");
                } else {
                    Button.classList.add("hit");
                }
            })

        }
        console.log(Button);
        Box.appendChild(Button);
    }
}
init();

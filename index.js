let input = document.querySelector('input')
let btn = document.querySelector('button')
let result = document.querySelector('#result')
let clearBtn = document.querySelector('#clear')
// console.log(clearBtn);

let num = ''
btn.addEventListener('click', () => {
    num = Number(input.value) // Number is a function (convert srt to num)
    let facto = 1 // start factorial from 1
    for (let index = 1; index <= num; index++) { // index also will start from 1 to calculate factorial      
        facto *= index
    }
    if (num <= 10) {
        result.value = facto;
        console.log(facto)
    }
    else {
        alert('The entered number is so big');
    }
})
clearBtn.addEventListener('click', () => {
    input.value = ''
    result.value = ''
})



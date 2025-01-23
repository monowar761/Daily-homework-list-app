
const allChekBox = document.querySelectorAll('.chake-box')
const allInputFild = document.querySelectorAll('.input-fild')
const progressBar = document.querySelector ('.arorr-label')
const progressValue = document.querySelector ('.progress-value')
const progressLable = document.querySelector ('.pogres-lebel')
const quate = document.querySelector('.quate')
const completeMessage = [
    'Raise the bar by completing your goals',
    'Well begun is half done',
    'Just a step away, keep going!',
    'Whoa ! You just completed all the goals, time for chill : ❤️',
    'Excellent Go Ahed',
]
const footerMessage = [
    '“Keep Going, You’re making great progress!”'
]
const allGols = JSON.parse(localStorage.getItem('allGols')) || {}
let completedGoleCount = Object.values(allGols).filter((goal) => goal.completed).length
progressValue.style.width = `${completedGoleCount / allInputFild.length * 100}%`
progressValue.firstElementChild.innerText = `${completedGoleCount} /${allInputFild.length} completed`
progressLable.innerText = completeMessage[completedGoleCount]
quate.innerText = footerMessage
if (completedGoleCount == allInputFild.length) {
    quate.innerText = '“Keep Going, You’re making great progress!”'
} else {
    quate.innerText = '“Move one step ahead, today!”'
}



allChekBox.forEach((chekbox) => {
    chekbox.addEventListener('click', (e) => {

        const allFildsFilup = [...allInputFild].every((input) => {
            return input.value

        })

        if (allFildsFilup) {
            chekbox.parentElement.classList.toggle('complete')

            const inputId = chekbox.nextElementSibling.id
            allGols[inputId].completed = !allGols[inputId].completed
            completedGoleCount = Object.values(allGols).filter((goal) => goal.completed).length
            progressValue.style.width = `${completedGoleCount / allInputFild.length * 100}%`
            progressValue.firstElementChild.innerText = `${completedGoleCount} /${allInputFild.length} completed`
            progressLable.innerText = completeMessage[completedGoleCount]
            if (completedGoleCount == allInputFild.length) {
                quate.innerText = '“Keep Going, You’re making great progress!”'
            } else {
                quate.innerText = '“Move one step ahead, today!”'
            }
           
            localStorage.setItem('allGols', JSON.stringify(allGols))
            
        }else {
            progressBar.classList.add('arorr-focus')
        }
    })
})
allInputFild.forEach((input) => {
    if (allGols[input.id]) {
        
        input.value = allGols[input.id].name;
        if (allGols[input.id].completed) {
            input.parentElement.classList.add('complete')
            
        }
    }


    input.addEventListener('focus', () => {
        progressBar.classList.remove('arorr-focus')
    })

    input.addEventListener('input', (e) => {
        if ( allGols[input.id] && allGols[input.id].completed) {
            input.value = allGols[input.id].name 
            return
            
        }
        if (allGols[input.id]) {
            allGols[input.id].name = input.value
        } else {
            allGols[input.id] = {
                name: input.value,
                completed: false,
            }
        }
        // allGols[input.id] = {
        //     name: input.value,
        //     completed: false,
        // }
        localStorage.setItem('allGols', JSON.stringify(allGols))
    })
})

// if ([completedGoleCount] ==3 ) {
//     quate.innerText = footerMessage
// } else {
//     quate.innerText.remove = footerMessage
// }


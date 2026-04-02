let countEl = document.getElementById("count-el")//pass by argument
let saveEl = document.getElementById("save-el")

console.log(countEl)//call
console.log(saveEl)

let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}
function save(){
    let countstr = count + " - "
    saveEl.textContent += countstr
    count = 0
    countEl.textContent = 0
} 
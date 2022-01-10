const i = document.getElementById('string-3')
const i2 = document.getElementById('string-5')
const i3 = document.getElementById('string-2')
const i4 = document.getElementById('string-6')
const i5 = document.getElementById('string-4')
const i6 = document.getElementById('string-1')
console.log(i.textContent)
console.log(i3.textContent)
console.log(i2.textContent)
console.log(i4.textContent)
console.log(i5.textContent)
console.log(i6.textContent)


const elements = document.getElementsByClassName('element')
for (let j = 0; j < elements.length; j++) {
    if (j < 3) {
        elements[j].style.color = 'red'
    } else {
        elements[j].style.color = 'green'
    }
}

let olContainer = document.getElementById('todo-list')

const tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
for (let j = 0; j < tasks.length; j++) {
    let li = document.createElement('li')
    li.className = 'task'
    li.innerHTML = tasks[j]
    olContainer.appendChild(li)

}

const cart = document.getElementsByClassName('item')
let newQty = document.querySelectorAll('.qty')
cart[1].remove()//1 Cola


newQty[4].textContent = ' x 4'
console.log(newQty[4])
cart[3].innerHTML = 'Cannot Fish'
cart[3].appendChild(newQty[4])

//
// let divFish = document.createElement('div')
// let span = document.createElement('span')
// span.innerHTML = ' x4'
// span.className = 'qty'
// divFish.innerHTML = 'Cannot Fish'
// divFish.appendChild(span)
// console.log(cart[3].replaceWith(divFish))


// olContainer.innerHTML = tasks.map((task)=>{
//     return `<li class="task">${task}</li>
// `
// }).join(' ')
//
// elements[0].style.color = 'red'
// elements[1].style.color = 'red'
// elements[2].style.color = 'red'
// elements[3].style.color = 'green'
// elements[4].style.color = 'green'
// elements[5].style.color = 'green'



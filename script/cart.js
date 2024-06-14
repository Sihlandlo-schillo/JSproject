const footer = document.createElement('footer');


footer.innerHTML = 'FASHIONSCENE ©2024 | All Rights Reserved';

footer.style.position = 'fixed';
footer.style.bottom = '0';
footer.style.width = '100%';
footer.style.backgroundColor = '#333';
footer.style.color = '#fff';
footer.style.textAlign = 'center';
footer.style.padding = '10px 0';

footer.classList.add('footer');

document.body.appendChild(footer);


let name = localStorage.getItem('purchasedItems')
let main = document.querySelector('tbody')
let purchasedItems = JSON.parse(localStorage.getItem('purchasedItems'))

let cartInRowTotall = document.getElementById('rowTotal')

function displayCart(){
    purchasedItems.forEach(purchasedItems =>{
    
    main.innerHTML += `
                <tr>
                    <td>${purchasedItems.name}</td>
                    <td>${purchasedItems.category}</td>
                    <td><p>R ${purchasedItems.price}</p></td>
                    <td><button data-id=${purchasedItems.id} class="quantity subtraction">-</button>${purchasedItems.quantity} <button class="quantity addition" data-id=${purchasedItems.id} >+</button></td>
                    <td id="rowTotal"></td>
                    <td><button>X</button></td>
                </tr>
                      `
})
}
displayCart()

let totalButton = document.getElementById('total')
let span = document.getElementsByTagName('span')[0]
let subtraction = document.querySelectorAll('.subtraction')
let addition = document.querySelectorAll('.addition')
// totalButton.addEventListener('click', )
function totalCost() {
    
}
let totalTag = document.querySelector('[total]')

// totalTag.innerText = purchasedItems.reduce()

function increment(id) {
    let item = purchasedItems.find(item => item.id === +id)
    if (item) {
        addition = item.quantity += 1
        localStorage.setItem('purchasedItems', JSON.stringify(purchasedItems))
        console.log(addition);
        displayCart()
    }
}

function decrement(id) {
    let item = purchasedItems.find(item => item.id === +id)
    if (item && item.quantity > 1) {
        subtraction = item.quantity -= 1
        localStorage.setItem('purchasedItems', JSON.stringify(purchasedItems))
        console.log(subtraction);
        displayCart()
    }
}

function remove() {

}
function subTotal() {

}
function overAllOverTotal() {

}

addition.forEach(btn => {
    btn.addEventListener('click', (event) => {
        increment(event.target.dataset.id)
    })
})

subtraction.forEach(btn => {
    btn.addEventListener('click', (event) => {
        decrement(event.target.dataset.id)
    })
})
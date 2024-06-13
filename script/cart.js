let name = localStorage.getItem('purchasedItems')
let main = document.querySelector('tbody')
let purchasedItems = JSON.parse(localStorage.getItem('purchasedItems'))

let cartInRowTotall = document.getElementById('')

function displayCart(){
    purchasedItems.forEach(purchasedItems =>{
    main.innerHTML += `
                <tr>
                    <td>${purchasedItems.name}</td>
                    <td>${purchasedItems.category}</td>
                    <td><p>R ${purchasedItems.price}</p></td>
                    <td><select><option  value="number">1</option><option  value="number">2</option><option  value="number">3</option><option  value="number">4</option><option  value="number">5</option><option  value="number">6</option><option  value="number">7</option><option  value="number">8</option><option  value="number">9</option><option  value="number">10</option><option  value="number">11</option><option  value="number">12</option><option  value="number">13</option><option  value="number">14</option><option  value="number">15</option><option  value="number">16</option><option  value="number">17</option><option  value="number">18</option></select></td>
                    <td></td>
                    <td><button>X</button></td>
                </tr>
                      `
})
}
displayCart()

let totalButton = document.getElementsByTagName('button')[0]
let span = document.getElementsByTagName('span')[0]
let totalTag = document.querySelector('[total]')

totalTag.innerText = purchasedItems.reduce()

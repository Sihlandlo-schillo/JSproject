function CreateItem(id, name, category, image, quantity, description, price) {
    this.id=id
    this.name=name
    this.category=category
    this.image=image
    this.quantity=quantity
    this.description=description
    this.price=price
}

// If you want to use it somewhere else you store it in local storage

let item1 = new CreateItem(1, 'Baggy Multi-Pocket Jean', 'Casual','https://sihlandlo-schillo.github.io/HOSTEDIMAGES/images/Yolanda.jpg',1, 'Electric Guitar 39 Inch Set - Black', 2999 )

let item2 = new CreateItem(2,'Modern Blazer', 'Formal Wear', 'https://raw.githubusercontent.com/Sihlandlo-schillo/HOSTEDIMAGES/main/images/Blazer.webp', 1, 'Welcome to the future of homemade bread! This Stainless Steel Bread Maker, boasting 550W power, is your ticket to effortless baking bliss. With features like a 13-hour delay start and a 1-hour quick bake, enjoy fresh loaves tailored to your schedule. From customisable crusts to versatile settings, elevate your baking experience and savour the taste of perfection!', 1999)

let item3 = new CreateItem(3,'Vans Filmore Hi Black/White Sneakers', 'Shoes', 'https://thefoschini.vtexassets.com/arquivos/ids/150992133-800-1067?v=638485462160430000&width=800&height=1067&aspect=true',1, 'he Filmore shoe is a skate-influenced design with double-stitched multi-paneled upper for durability, with a padded tongue & collar. It has a vulcanized construction and the original waffle outsole', 1199.95)

let item4 = new CreateItem(4,'Older Boys Grey Melton Coat', 'Clothing', 'https://thefoschini.vtexassets.com/arquivos/ids/152171694-800-1067?v=638502382297800000&width=800&height=1067&aspect=true',1, 'The perfect layering piece in his wardrobe this season. Pair this coat with his fave jeans and sweater for a stylish outfit.',369.99)

let item5 = new CreateItem(5, 'Suit Bottoms', 'Formal Wear', 'https://sihlandlo-schillo.github.io/HOSTEDIMAGES/images/FormalWearBottom.webp',1, 'Crafted by the oldest Formal Wear designer in the world, and that is none other Schillo KOTM', 10000.00)

let item6 = new CreateItem(6,'ROLEX Oyster Perpetual 31', 'Accessories', 'https://asset.topwatch.co.za/ZA/stream/66696c5f3136373031385f323032342d30312d32332031323a32313a3034?filename=watch-club-rolex-oyster-perpetual-latest-release-green-dial-ref-277200-year-2020-14187-wb.jpgwbwbwbwb11.jpg&country_code=ZA',1, 'Pre-owned, Unworn. This Timepiece has undergone a thorough inspection of water resistance, accuracy, functionality and condition to determine the level of reconditioning required to meet our strict standards. It has also been referenced against technical documents and manufacturer records where available to ensure authenticity and a clean history.', 145000)

let items =[item1, item2, item3, item4, item5]

localStorage.setItem('items',JSON.stringify(items))
let purchasedItems = JSON.parse(localStorage.getItem('purchasedItems')) || []
let main = document.querySelector('main')

function myProds() { 
    items.forEach(item =>{
        main.innerHTML += `
        <div class="card" style="width: 18rem;">
        <img src="${item.image}" class="card-img-top" alt="..." id="itemImage">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">R${item.price}</p>
          <button type="button" class="btn btn-secondary" id="view-More" data-bs-toggle="modal" data-bs-target="#exampleModal${item.id}">View More</button>
          <button type="button" class="btn btn-secondary" id="purchase" value="${item.id}">Add to Cart</button>
      </div>
      <!-- Modal -->
<div class="modal fade" id="exampleModal${item.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <img src="${item.image}" alt="" id="modalImage" >
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Purchase</button>
      </div>
    </div>
  </div>
</div>
        `
     
    })
    
}myProds()

let purchaseButtons = document.querySelectorAll('#purchase')
 function addToCart(id) {
    // can use a method or a loop
    // items is an array
    //Distructuring [item]
    //.find returns one object
    let [item] = items.filter(object => object.id=== +id) // '+' sign if I use 3 equal signs
    // console.log(item);
    purchasedItems.push(item) //Pushing an item in an array

 }
 purchaseButtons.forEach(button =>{
  button.addEventListener('click', (event)=>{
    addToCart(event.target.value)
    localStorage.setItem("purchasedItems", JSON.stringify(purchasedItems))
    //   console.log(event.target.value);
    // alert('Hi')
  })

 })

//  VIEW MORE BUTTON 

 //SORT BUTTON

//
let filtering = document.getElementById('what')
filtering.addEventListener('change', function() {
    let actualVal = this.value;
    currentFilter = actualVal; // Store the current filter
    // Clear the current displayed items
    main.innerHTML = '';
    if (actualVal === '') {
        // If the selected value is an empty string, display all items
        items.forEach((item, index) => {
            myProds(item, index);
        });
    } else {
        // Filter the items array
        let filteredProducts = items.filter(function(item) {
            return item.category === actualVal;
        });
        // Loop through the filtered products array and add each product to the page
        filteredProducts.forEach((item, index) => {
            myProds(item, index);
        });
    }
});




//  let select = document.querySelector('#what')
//  select.addEventListener('change',()=>{
//      let value = select.value
//      if(value == 'no-filter'){
//          myProds(items)
//          return
//         }
//         console.log(value);
//         let sort = items.filter(item=>{
//             return item.category.includes(select.value)
//         })
//         myProds(sort)
//     })

//     let searchButton = document.getElementById('search')
//     searchButton.addEventListener("click", searchItem)

// function searchItem() {
//   let filteredWhippy = items.filter(item => item.name.toLowerCase().includes(input.value.toLowerCase()));
//     main.innerHTML = ''
//     displayItems(filteredWhippy)
// }


//  let sortButton = document.getElementById('sort')
// sortButton.addEventListener('click', () => {
//     items.sort((a, b) => {
//         if (a.name < b.name) return -1
//         if(a.name > b.name) return 1
        
//         return 0
//       })
//     main.innerHTML = ''
//     items.forEach(item => {
//         main.innerHTML += `
//                     <div id="div">
//                         <h6>${item.name}</h6>
//                         <img src="${item.image}" id="image">
//                         <p>R${item.price}</p>
//                         <button id="viewMore">View More</button>
//                         <button class="purchase" value="${item.id}">Purchase</button>
//                     </div>
//                     `
//     });
// });
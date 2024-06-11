function CreateItem(id, name, category, image,quantity, description, price) {
    this.id=id
    this.name=name
    this.category=category
    this.image=image
    this.quantity=quantity
    this.description=description
    this.price=price
}

// If you want to use it somewhere else you store it in local storage

let item1 = new CreateItem(1, 'Electric Guiter', 'Electronics', 'https://media.takealot.com/covers_images/1d0092e1904840ae9fbd00a73b8dba55/s-pdpxl.file','', 'Electric Guitar 39 Inch Set - Black', 2999 )

let item2 = new CreateItem(2,'Bread Maker', 'Electronics', 'https://res.cloudinary.com/yuppiechef/image/upload/c_lpad,f_auto,h_556,q_auto,w_556/v1/contentdocs/60706/bc1c06d8-9bd7-551b-b8df-2b409121a7c2/1x10000mbm001', '', 'Welcome to the future of homemade bread! This Stainless Steel Bread Maker, boasting 550W power, is your ticket to effortless baking bliss. With features like a 13-hour delay start and a 1-hour quick bake, enjoy fresh loaves tailored to your schedule. From customisable crusts to versatile settings, elevate your baking experience and savour the taste of perfection!', 1999)

let item3 = new CreateItem(3,'Vans Filmore Hi Black/White Sneakers', 'Shoes', 'https://thefoschini.vtexassets.com/arquivos/ids/150992133-800-1067?v=638485462160430000&width=800&height=1067&aspect=true','', 'he Filmore shoe is a skate-influenced design with double-stitched multi-paneled upper for durability, with a padded tongue & collar. It has a vulcanized construction and the original waffle outsole', 1199.95)

let item4 = new CreateItem(4,'Older Boys Grey Melton Coat', 'Clothing', 'https://thefoschini.vtexassets.com/arquivos/ids/152171694-800-1067?v=638502382297800000&width=800&height=1067&aspect=true','', 'The perfect layering piece in his wardrobe this season. Pair this coat with his fave jeans and sweater for a stylish outfit.',369.99)

let item5 = new CreateItem(5,'ROLEX Oyster Perpetual 31', 'Accessories', 'https://asset.topwatch.co.za/ZA/stream/66696c5f3136373031385f323032342d30312d32332031323a32313a3034?filename=watch-club-rolex-oyster-perpetual-latest-release-green-dial-ref-277200-year-2020-14187-wb.jpgwbwbwbwb11.jpg&country_code=ZA','', 'Pre-owned, Unworn. This Timepiece has undergone a thorough inspection of water resistance, accuracy, functionality and condition to determine the level of reconditioning required to meet our strict standards. It has also been referenced against technical documents and manufacturer records where available to ensure authenticity and a clean history.', 145000)

let items =[item1, item2, item3, item4, item5]

localStorage.setItem('items',JSON.stringify(items))
let purchasedItems = JSON.parse(localStorage.getItem('purchasedItems')) || []
let main = document.querySelector('main')
items.forEach(item =>{
    main.innerHTML += `
                    <div class="">
                        <img src="${item.image}" class="products">
                        <p class="prices">R${item.price}</p>
                        <button id="View-more">View More</button>
                        <button class="purchase" value="${item.id}">Purchase</button>
                    </div>
                        `
 
})

let purchaseButtons = document.querySelectorAll('.purchase')
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

 //SORT BUTTON

 let sortButton = document.getElementsByTagName('button')[0]
sortButton.addEventListener('click', () => {
    items.sort((a, b) => {
        if (a.category < b.category) return -1
        if(a.category > b.category) return 1
        else{
            return ('Item searched is not available')
        }
      })
    main.innerHTML = ''
    items.forEach(item => {
        main.innerHTML += `
                    <div id="div">
                        <h6>${item.name}</h6>
                        <img src="${item.image}" id="image">
                        <p>R${item.price}</p>
                        <button id="viewMore">View More</button>
                        <button class="purchase" value="${item.id}">Add to Cart</button>
                    </div>
                    `
    });
});
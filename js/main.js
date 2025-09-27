//let's goo



var ProductNameInput = document.getElementById("ProductName")
var ProductPriceInput = document.getElementById("ProductPrice")
var ProductCategoryInput = document.getElementById("ProductCategory")
var ProductDescriptionInput = document.getElementById("ProductDescription")







var productlist = [];


// if (localStorage.getItem('product-list') !=null) {
//    productlist = JSON.parse(localStorage.getItem('product-list'))
   
// displayProduct()

// }




// create product funcation
function addProduct() {


    var product = {
        name: ProductNameInput.value,
        price: ProductPriceInput.value,
        category: ProductCategoryInput.value,
        description: ProductDescriptionInput.value,
        images: 'IMG/6.jpg'
    }


    // bakhzn l object gowa l array
    productlist.push(product)



    //khazna l array fl local storage
    localStorage.setItem('product-list', JSON.stringify(productlist))

    //bandah l function
    displayProduct()

    Getclear()


    console.log(productlist);


}






//display product function to display card in html (bat3rd l cards mn l html )
function displayProduct() {

    var box = ' '


    for (var i = 0; i < productlist.length; i++) {

box += `
  <div class="mycard m-3 col-md-6 col-lg-4 col-xl-3">
    <div class="inner shadow-lg rounded-4 overflow-hidden">
      <img src="${productlist[i].images}" alt="${productlist[i].name}" width="100%">
      <div class="div border-2 rounded-2 bg-info-subtle w-25 p-1 m-1">
        Index : ${i}
      </div>
      <h5>Product Name : ${productlist[i].name}</h5>

<button onclick="Getdelete (${i})" class="btn btn-danger btn-sm m-2">Delete</button>

      <div class="hello p-2">
        <span>Price: ${productlist[i].price}</span><br>
        <span>Category: ${productlist[i].category}</span><br>
        <span>Description: ${productlist[i].description}</span>
      </div>
    </div>
  </div>
`;


    }

    document.getElementById('row-special').innerHTML = box

}



function Getdelete (index) {
    productlist.splice(index  , 1 )

    displayProduct ()
}




//clear from function after  adding a product(after-push)
function Getclear() {


    ProductNameInput.value = '';
    ProductPriceInput.value = '';
    ProductCategoryInput.value = '';
    ProductDescriptionInput.value = '';

}




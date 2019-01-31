const fs = require('fs');

let products =fs.readFileSync('products.json', 'utf8')
//console.log(products)
let readline = require('readline-sync');
console.log(products)
// .stuff grabs the JS object stuff
products = JSON.parse(products).stuff
console.log(products)
//products = products.stuff
console.log(products)

function productSearch(){
  let hold = false;
  let pro_name = readline.question("What is the product name? ");
  //let pro_name ="Doodad";

  for(let i = 0; i < products.length; i++){

      if(products[i]["name"] === pro_name) {
        console.log("Name: " + products[i]["name"])
        console.log("Price: " + products[i]["price"])
        console.log("Quantity: " + products[i]["quantity"])
        hold = true;
      }};
        //console.log("Price: " + arr[i][name])
  if (hold === false){
    console.log("Sorry, we do not have "+ pro_name)
  };
};
productSearch()

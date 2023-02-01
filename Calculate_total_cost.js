const totalCost = (products)=>{
    let totalPrice = 0;
    products.forEach(element => {
        totalPrice += element.price;
    });
    return totalPrice;
}



// let output = totalCost([{ name: "Dano Milk", price: 500 }, 
//                         { name: "Taaza Tea", price: 200 }, 
//                         { name: 'Fresh Sugar', price: 300 }]);

let output = totalCost([{ name: "Samsung M33", price: 10000 },
                        { name: "Samsung Charger", price: 500},
                        { name: "Haveit Speakers", price:2500}]);
console.log(output);
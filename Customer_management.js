// Task 1: Create an Inventory Array of Product Objects

let Inventory = [
    {name: 'Expresso', Price:6, Quantity: 40}
    {name: 'Mocha' , Price: 8, Quantity: 10}
    {name: 'Latte', Price: 7, Quantity: 30}
    {name: 'Coffee Beans', Price: 10, Quantity: 15}

        
];

// Task 2: Create an Orders Array of Order Objects
    let Array =[];

orders.push({
    Customer:'Bryan Ross'
    Products: [
        {Name:'Cappucino', Quantity: 2}
        {Name:'latte', Quantity: 1}
    ]
    Status: 'complete'
});

orders.push ({
    Customer: Alison Mae'
    Products: [
        {Name: 'Iced Vanilla Latte', Quantity: 4}
        {Name: 'Mocha', Quantity: 2}
]
    Status: 'Pending'
});

// Task 3: Create a Function to Place an Order
function placeOrder(customerName, items) {
    // For loop, verify if the item is in stock
    for (let quantity in items) {
        inventory
.find(items => items.name === items);}
if (!items) {
    console.log ('Error. Items not in stock');
    break;
}
if(items.quanitity > inventory.quantity) {
    console.log('Error. Items out of stock.');
}
for (let quantity in items) {}
    inventory.find(item => items.name === items);
    items.quantity -= inventory.quantity;
}
//create order and push(), set status to pending
order.push({
    customerName: customerName,
    item: [{name: name, quantity: quantity}],
    status: 'Pending'
});
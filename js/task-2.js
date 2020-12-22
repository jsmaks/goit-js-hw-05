const User = function (array) {
    const { name, age, followers } = array;
    this.name = name;
    this.age = age;
    this.followers = followers;
}
User.prototype.getInfo = function () {
    console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
}

const mango = new User({
    name: 'Mango',
    age: 2,
    followers: 20,
});

mango.getInfo(); // User Mango is 2 years old and has 20 followers

const poly = new User({
    name: 'Poly',
    age: 3,
    followers: 17,
});

poly.getInfo(); // User Poly is 3 years old and has 17 followers





















// const inventory = {
//     items: ['Knife', 'Gas mask'],
//     add(itemName) {
//         console.log(`Adding ${ itemName } to inventory`);
//         this.items.push(itemName);
//     },
//     remove(itemName) {
//         console.log(`Removing ${ itemName } from inventory`);

//         this.items = this.items.filter(item => item !== itemName);
//     },
// };

// const invokeInventoryAction = function (itemName, action) {
//     console.log(`Invoking action on ${ itemName } `);
//     action(itemName);

// };

// invokeInventoryAction('Medkit', inventory.add.bind(inventory));
// // Invoking action on Medkit
// // Adding Medkit to inventory

// console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction('Gas mask', inventory.remove.bind(inventory));
// // Invoking action on Gas mask
// // // Removing Gas mask from inventory
// console.log(inventory.items); 


// Programming Foundations - Module 2
// Lesson Task 3 Questions

// Question 1
// Console log the price property from the object below:

var product = {
    name: "Chicken feet",
    price: 149.99,
};

console.log(product.price);

// Question 2
// Loop through the array below and console log each colour property.

var animals = [
    {
        type: "cat",
        colour: "black",
    },
    {
        type: "elephant",
        colour: "grey",
    },
    {
        type: "dog",
        colour: "brown",
    },
    {
        type: "zebra",
        colour: "black and white",
    },
];

for (var i = 0; i < animals.length; i++) {
    // animal = animals[i];
    // typeOfAnimal = animal.type;
    // colours = animal.colour;

    // console.log(typeOfAnimal);
    // console.log(colours);

    // or

    console.log(animals[i].colour);
}

// Question 3
// Loop through the array below and console log each name property only if it is on special.

var dinnerOptions = [
    {
        name: "Fish and Dips",
        price: 11.95,
        onSpecial: true,
    },

    {
        name: "Bacon and Frogs",
        price: 12.99,
        onSpecial: false,
    },

    {
        name: "Mince Flies",
        price: 19.0,
        onSpecial: true,
    },
];

for (var i = 0; i < dinnerOptions.length; i++) {
    if (dinnerOptions[i].onSpecial === true) {
        console.log(dinnerOptions[i].name);
    }
}

// Question 4
// Loop through the array below and log each person's
// name and surname if they are between the ages of 20 and 50 (including 20 and 50):

var people = [
    {
        firstName: "Burt",
        lastName: "Smacharach",
        age: 35,
    },
    {
        firstName: "Elvis",
        lastName: "Deadly",
        age: 55,
    },
    {
        firstName: "Susan",
        lastName: "Sarongson",
        age: 42,
    },
    {
        firstName: "Big",
        lastName: "Gabe",
        age: 20,
    },
];

for (var i = 0; i < people.length; i++) {
    var fullName = people[i].firstName + " " + people[i].lastName;
    var peopleAge = people[i].age;

    if (peopleAge > 20 && peopleAge < 50) {
        console.log(fullName);
    }
}

// Question 5
// Select the ul element in the HTML file, loop through the array below and
// create a li element containing the product name and price properties.

var products = [
    {
        name: "Elephant eggs",
        price: 45.0,
    },
    {
        name: "Bucket of water",
        price: 459.99,
    },
    {
        name: "4 cabbages",
        price: 500.95,
    },
];

var listContainer = document.querySelector("ul");

for (var i = 0; i < products.length; i++) {
    item = products[i];
    listContainer.innerHTML = listContainer.innerHTML + "<li>" + item.name + " - " + item.price + "</li>";
}

// Your final HTML should look like this:

// <ul>
// 	<li>Elephant eggs - 45.00</li>
// 	<li>Bucket of water - 459.99</li>
// 	<li>4 cabbages - 500.95</li>
// </ul>

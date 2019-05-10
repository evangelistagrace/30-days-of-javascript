const p = document.querySelector("p");

const dogs = [{name: 'Ruffus', age:13, owner: 'John'}, {name: 'Brutus', age: 10, owner: 'Mary'}];

function makeGreen(){
 p.style.color = "green";
 p.style.fontSize = "50px";
}

//regular
console.log("Hello world");

//interpolated
console.log("Hello I am %s", "🤣");

//warning
console.warn("Oh nO!");

//error
console.error("Oops, error!");

//info
console.info("Camels have humps");

//testing
console.assert('p.classList.contains("box")',"No it doesn't");

//clear
// console.clear();

//viewing DOM elements
console.dir(p);

//grouping
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name}'s owner is ${dog.owner}`);
});

//counting
console.count("Grace");
console.count("Evan");
console.count("Grace");
console.count("Grace");
console.count("Evan");
console.count("Evan");


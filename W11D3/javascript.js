function titleize( names, printOut ) {
    let title = names.map(name => `Mr. ${name} Jingleheimer Schmidt`);
    printOut(title);
}

titleize( ["Mary", "Brian", "Leo"], function (names) {
    names.forEach(name => console.log(name));
    console.log("this is new log");
});

function Elephant(name, height, tricks) {
    this.name = name;
    this.height = height;
    this.tricks = tricks;
}

Elephant.prototype.trumpet = function () {
    console.log(`${this.name} roars 'phrRRRRRRRRRRR!!!!!!!`)
};

Elephant.prototype.grow = function () {
    this.height = this.height + 12;
};

Elephant.prototype.addTrick = function (newTrick) {
    this.tricks.push(newTrick);
};

Elephant.prototype.play = function () {
    randomTrickIndex = Math.floor(Math.random() * this.tricks.length);
    console.log(`${this.name} is ${this.tricks[randomTrickIndex()]}!`);
};

Elephant.paradeHelper = elephant => {
    console.log(`${elephant.name} is parading by!`);
};

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];
herd.forEach( elephant => { Elephant.paradeHelper(elephant) } );



function dinerBreakfast () {
    let foods = "I'd like cheesey scrambled eggs please."
    console.log(foods);

    this.func = function () { return foods; };

    return function (food) {
        foods = `${foods.slice(0, foods.length - 8)} and ${food} please.`
        console.log(foods);
    }
}

let bfastOrder = dinerBreakfast();
bfastOrder("grits");

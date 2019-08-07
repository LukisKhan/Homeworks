function titleize( names, printOut ) {
    let title = names.map(name => `Mr. ${name} Jingleheimer Schmidt`);
    printOut(title);
}

titleize( ["Mary", "Brian", "Leo"], (names) => {
    names.forEach(name => console.log(name));
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

Elephant.paradeHelper = function (elephant) {
    console.log(`${elephant.name} is parading by!`);
};



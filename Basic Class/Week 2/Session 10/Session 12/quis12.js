class Human {

    // static properties = [
    //     "name",
    //     "nationality",
    // ]

    constructor(props) {
        this.name = props.name;
        this.nationality = props.nationality;
    }

    introduce() {
        console.log(`Hi, my name is ${this.name}`);
    }

    cook() {
        console.log('I will cook your food');
    }
}


class Chef extends Human {

    // static properties = [...super.properties, 'cuisine', 'type']

    constructor(props) {
        super(props)
        this.cuisine = props.cuisine
        this.type = props.type
    }

    foodType() {
        console.log(`I cant cook ${this.type}`);
    }

    cook() {
        super.cook()
        console.log('What food do you want?');
    }

    promote() {
        console.log(`I can cook ${this.cuisine} food `);
    }

    introduce() {
        super.introduce()
        console.log(`I am ${this.type} Chef`);
    }
}

const person1 = new Chef({
    name: 'Aryo',
    nationality: 'Indonesia',
    cuisine: ['Pizza', 'Pasta', 'Lasagna', 'Spaghetti'],
    type: 'Italian'
})

console.log(person1);
console.log('\n');

person1.cook()
console.log('\n');

person1.foodType()
console.log('\n');

person1.promote()
console.log('\n');

person1.introduce()
console.log('\n');

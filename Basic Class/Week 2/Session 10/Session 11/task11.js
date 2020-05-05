class human {
    constructor (name, language){
        this.name = name;
        this.language = language;
    }

    introduce() {
        console.log (`Hello, my name is ${this.name}`);
    }

    greet(people) {
        console.log(`Hi ${people.name}, nice to meet you! My name is ${this.name}`);
    }

    learnLang(l) {
       this.language.push(l);
       console.log("learning new language:", this.language);  
    }

    marry(people){
        if(this.language != people.language){
            console.log("You must have same language");
            this.learnLang(people.language[Math.floor(Math.random()*(people.language.length))]);
        }
        console.log(`${this.name} have married with ${people.name}`);
    }
}
let person = new human ("Mello", ["English"]);
let people = new human ("Nanda", ["Japanese"]);
person.introduce();
person.greet(people);
person.learnLang("Latin");
person.marry(people);

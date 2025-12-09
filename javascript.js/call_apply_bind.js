const person = {
    firstName: "John",
    lastName: "Doe",
};

const person2 = {
    firstName: "Jane",
    lastName: "Smith",
};

const functiongreet = function (city, country) {
    console.log(`hello ${this.firstName}  ${this.lastName} from city ${city} country ${country}`);
};

// call
functiongreet.call(person, "NewYork", "USA");

// apply
functiongreet.apply(person2, ["Los Angeles", "USA"]);

// bind
const functionGreet = functiongreet.bind(person, "Chicago", "USA");

// calling bind returned function
functionGreet();

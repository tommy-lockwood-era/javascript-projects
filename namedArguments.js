function greet(options) {
    console.log(`Hello ${options.firstName} ${options.lastName}!`);
    if(typeof options.weather != 'undefined'){
        console.log(`It is ${options.weather} today.`);
    } else {
        console.log('I hope the weather is nice!');
    }
}

greet({firstName: 'John', lastName: 'Smith', weather: 'sunny'});
greet({lastName: 'Jones', firstName: 'Sarah'});

function greet2({firstName, lastName, weather}) {
    console.log(`Hello ${firstName} ${lastName}!`);
    if(typeof weather != 'undefined'){
        console.log(`It is ${weather} today.`);
    } else {
        console.log('I hope the weather is nice!');
    }
}

//greet2({firstName: 'John', lastName: 'Smith', weather: 'sunny'});
//greet2({lastName: 'Jones', firstName: 'Sarah'});

const myObject = {
    fullName: "Harry Callahan",
    age: 41,
    location: "San Francisco"
};

const {fullName, age, location} = myObject;

//console.log(fullName);
//console.log(age);
//console.log(location);



console.log('destructuring');

const person = {
  name: 'Peng',
  age: 27,
  location: {
    city: 'Wuhan',
    temp:35
  }
};

// const name = person.name;
// const age = person.age;
const { name, age } = person

console.log(`${name} is ${age}.`);

const { city, temp: temperature } = person.location;
if (city && temperature) {
  console.log(`It's ${temperature} in ${city}.`);
}

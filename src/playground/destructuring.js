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
const { name: firstName = 'Anonymous', age } = person

console.log(`${firstName} is ${age}.`);

const { city, temp: temperature } = person.location;
if (city && temperature) {
  console.log(`It's ${temperature} in ${city}.`);
}


const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
}

const { name: publisherName = 'Self-Publisher' } = book.publisher

console.log(publisherName);
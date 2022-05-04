// Write an ES2015 Version

function createInstructor(firstName, lastName) {
  return {
    firstName,
    lastName,
  };
}

//Computed Property Names -COME BACK

let favoriteNumber = 42;

let instructor = {
  firstName: "Colt",
};

instructor[favoriteNumber] = "This is my favorite!";

//Object Methods

let instructor2 = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return this.firstName + " says bye!";
  },
};

//Create Animal Function
function createAnimal(species, verb, noise) {
  return {
    species,
    [verb]() {
      return noise;
    },
  };
}

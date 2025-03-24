//Part 1: Humble Beginnings
/////////////////////////////////

const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: {
    name: "Leo",
    type: "Cat",
    companion: {
      name: "Frank",
      type: "Flea",
      belongings: ["small hat", "sunglasses"],
    },
  },
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  },
};

// console.log("Robin's Inventory:");
// adventurer.inventory.forEach((item) => console.log(item));

// adventurer.roll();
// adventurer.roll(2);
/////////////////// ===== //////////

class Adventurer2 {
  constructor(name, health = 10, inventory = []) {
    this.name = name;
    this.health = health;
    this.inventory = inventory;
    this.companion = null; // No companion by default
  }

  addCompanion(name, type, belongings = []) {
    this.companion = {
      name,
      type,
      belongings,
    };
  }

  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  }

  showInventory() {
    console.log(`${this.name}'s Inventory:`);
    this.inventory.forEach((item) => console.log(item));
  }
}

const robin = new Adventurer2("Robin", 10, ["sword", "potion", "artifact"]);
robin.addCompanion("Leo", "Cat");
robin.companion.companion = {
  name: "Frank",
  type: "Flea",
  belongings: ["small hat", "sunglasses"],
};

// robin.showInventory();
// robin.roll();
// console.log(robin.companion);
// console.log(robin.companion.companion);

// part 2
//============================================
class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }

  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  }
}

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
// console.log(robin);

class Companion extends Character {
  constructor(name, type) {
    super(name); // Inherits from Character
    this.type = type;
  }
}

// robin.companion = new Companion("Leo", "Cat");
// robin.companion.companion = new Companion("Frank", "Flea");
// robin.companion.companion.inventory = ["small hat", "sunglasses"];
// console.log(robin);

//Part 3
//============================================
class Adventurer extends Character {
  constructor(name, role) {
    super(name);
    this.role = role;
    this.inventory.push("bedroll", "50 gold coins");
    this.experience = 0; // XP system for leveling up
  }

  scout() {
    console.log(`${this.name} is scouting ahead...`);
    this.roll();
  }

  attack(target) {
    const damage = Math.floor(Math.random() * 10) + 1;
    console.log(`${this.name} attacks ${target} for ${damage} damage!`);
  }

  useItem(item) {
    if (this.inventory.includes(item)) {
      console.log(`${this.name} uses ${item}.`);
      this.inventory = this.inventory.filter((i) => i !== item);
    } else {
      console.log(`${this.name} doesn't have ${item}!`);
    }
  }
}
const robin = new Adventurer("Robin", "Rogue");
robin.inventory.push("sword", "potion", "artifact");

robin.companion = new Companion("Leo", "Cat");
robin.companion.companion = new Companion("Frank", "Flea");
robin.companion.companion.inventory.push("small hat", "sunglasses");


console.log(robin);
robin.scout();
robin.attack("goblin");
robin.useItem("potion");

console.log(robin.companion);
robin.companion.train();
robin.companion.assist();

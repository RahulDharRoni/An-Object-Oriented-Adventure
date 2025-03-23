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

robin.showInventory();
robin.roll();
console.log(robin.companion);
console.log(robin.companion.companion);

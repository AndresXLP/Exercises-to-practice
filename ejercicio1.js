const recipe = {
  name: "",
  ingredients: [
    { name: "Pan", quantity: 2 },
    { name: "Jamón", quantity: 1 },
    { name: "Queso", quantity: 1 },
  ],
  quantity: function (str) {
    for (const key of this.ingredients) {
      if (str === "" || str === undefined) {
        return `Please write an ingredient`;
      } else {
        if (key.name === str) {
          return `The ingredient "${key.name}" has ${key.quantity} units`;
        } else {
          res = `The ingredient "${str}" does not exist`;
        }
      }
    }
    return res;
  },
};

// Digita el Ingrediente que deseas buscar
console.log(recipe.quantity());

import defaultFood from "../assets/default-food.png";
import defaultMusic from "../assets/default-music.png";

export default {
  recipes: [
    {
      id: 0,
      title: "Focaccia",
      image: defaultFood,
      description:
        "A thick and fluffy focaccia that will benefit from slow fermentation.",
      ingredients: [
        "500g Strong Bread Flour",
        "2 tsp Salt",
        "7g Dry Active Yeast",
        "2 tbsp Olive Oil",
        "300ml Cold Water"
      ],
      method: [
        "Combine dry ingredients in a large bowl, stir and make a well in the centre",
        "Add oil and then cold water and mix together, intially with a wood spoon and once more coherent then by hand",
        "Knead on a well floured suface for five minutes",
        "Stretch and tuck sides for five minutes",
        "Knead for a further five minutes",
        "Cover and let rest in a warm place until doubled in size",
        "Stretch across an oiled baking sheet. If the dough does not reach the edges, cover for 15 minutes and then stretch again.",
        "Allow to prove for another hour or overnight.",
        "Using your fingers, press dimples into the surface of the bread.",
        "Make a salt brine by combining a tablespoon of salt and roughly 100ml of cold water. Stir until the salt is dissolved.",
        "Pour this brine across the surface of the bread and into the dimples.",
        "Bake at 220C for roughly 20 minutes.",
        "Allow to rest for at least one hour before cutting into the bread."
      ]
    },
    {
      id: 1,
      title: "example two",
      image: defaultMusic,
      description:
        "lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
      ingredients: [
        "2ingr1",
        "2ingr2",
        "2ingr3",
        "2ingr4",
        "2ingr5",
        "2ingr6",
        "2ingr7"
      ],
      method: [
        "Second recipe First, put the things in the pan",
        " Second recipe Then cook them a little",
        "Second recipe Mix some things together",
        "Second recipe add a garnish",
        "Second recipe and serve the dish with salad"
      ]
    }
  ]
};

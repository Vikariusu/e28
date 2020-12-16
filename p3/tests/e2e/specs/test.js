// https://docs.cypress.io/api/introduction/api.html

describe("Main Page", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Best cooking recipes");
  });
});

describe("Create Recipe Form", () => {
  cy.login();

  const testRecipe = {
    title: "Kale Pesto With Whole Wheat Pasta",
    description:
      "Chef and cookbook author Joshua McFadden’s justifiably famous kale pesto inspired us to keep spreading the word that there is still no better or more delicious way to eat your greens.",
    imageURL:
      "https://assets.bonappetit.com/photos/5df7e83c95932c0008b0d4f4/16:9/w_2560%2Cc_limit/HLY-FGFP-Kale-Pesto-16x9.jpg",
    portions: 4,
    time: 35,
    ingredients:
      "1 garlic clove, 1 oz. Parmesan, 12 oz. farro pasta, 1 large bunch Tuscan Kale",
  };

  it("Visits the recipe form url", () => {
    cy.visit("/add");
    cy.contains("h2", "Add a Recipe");
  });

  it("Adds a new recipe", () => {
    cy.visit("/add");

    cy.get("#description]")
      .clear()
      .type(testRecipe.description);
    cy.get("#title")
      .clear()
      .type(testRecipe.title);
    cy.get("#portions")
      .clear()
      .type(testRecipe.portions);
    cy.get("#time")
      .clear()
      .type(testRecipe.time);
    cy.get("#ingredients")
      .clear()
      .type(testRecipe.ingredients);

    cy.get(".add-recipe]").click();
  });
});

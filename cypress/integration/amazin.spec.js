/// <reference types="cypress" />
import "@testing-library/cypress";

describe("should move from home page to the product details page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should click on a product details link and direct user to the product details page", () => {
    //log we are in the home page
    cy.log("We are in the Home page");

    //check if the See product details link does exist on the page
    cy.contains("See product details").should("exist");

    //click on the first link to the product details page
    cy.contains("See product details").click();

    //check if the url matches /product/1
    cy.url().should("include", "/product/1");

    //log that we are in the product details page
    cy.log("We are in the product details page");

    //check if the heading matches to the first product's name
    cy.get("h1").should("contain", "Cellphone");

    //check the currency seletor and select KES
    cy.get("select").select("KES");

    //check if the selector changes the items price to kes
    cy.get("span").contains("11000");
    //log that it contains 11000
    cy.log("It contains 11000");
  });

  it("should add item to cart from both the home items page and the product details page", () => {
    //log to show we are in the home items page
    cy.log("Click on add to cart icon in the product page");

    //check if the data-cy=addToCart attribute does exist
    cy.get("[data-cy=Shoes]").should("exist");

    //click on the add to cart icon
    cy.get("[data-cy=Shoes]").click();

    //assert that the item has been added to the cart
    cy.get("[data-cy=cartItems]").contains("Items in cart: 1");

    //log that products home page renders correctly
    cy.log("Done with home page, click play button at the top to continue");

    cy.pause();

    //click on the first link to the product details page
    cy.contains("See product details").click();

    //check if the url matches /product/1
    cy.url().should("include", "/product/1");

    //click on the add to cart icon
    cy.get("[data-cy=Cellphone]").click();

    //assert that the item has been added to the cart
    cy.get("[data-cy=cartItems]").contains("Items in cart: 2");

    //log that products home page renders correctly
    cy.log("Done with product details page");
  });
});

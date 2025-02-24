const path = require("path");

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  createPage({
    path: "/affiliate-test123",
    component: path.resolve("src/templates/landing-page.js"),
    context: {
      name: "Test Affiliate",
      referralCode: "TEST123"
    }
  });
};

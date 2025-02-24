const path = require("path");

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  const affiliate = {
    id: "test123",
    name: "Test Affiliate",
    referralCode: "TEST123"
  };

  createPage({
    path: `/affiliate-${affiliate.id}`,
    component: path.resolve(`src/templates/landing-page.js`),
    context: {
      name: affiliate.name,
      referralCode: affiliate.referralCode
    }
  });
};

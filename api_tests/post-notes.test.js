const { spec, request } = require("pactum");
const { faker } = require("@faker-js/faker");
const baseURL = "https://practice.expandtesting.com/notes/api";
const reqBody = {
  email: "beraru13@gmail.com",
  password: "testingpurpose",
};

const title = faker.company.buzzNoun();
const description = faker.commerce.productMaterial();
const randomNumber = faker.number.int({ min: 0, max: 2 });
const category = ["Home", "Work", "Personal"];

const notesBody = {
  title: title,
  description: description,
  category: category[randomNumber],
};

describe("Post notes test suite", () => {
  let authToken = "";

  before(async () => {
    request.setDefaultTimeout(10000);
    const response = await spec()
      .post(baseURL + "/users/login")
      .withBody(reqBody)
      .withHeaders("Content-Type", "application/json");
    authToken = response.body.data.token;
  });
  it("Post notes test", async () => {
    await spec()
      .post(baseURL + "/notes")
      .withHeaders("x-auth-token", authToken)
      .withBody(notesBody)
      .expectStatus(200)
  });
});

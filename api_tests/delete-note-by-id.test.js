const { request, spec } = require("pactum");
const baseURL = "https://practice.expandtesting.com/notes/api";
const { faker } = require("@faker-js/faker");
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

describe("Delete notes by id test suite", () => {
  let authToken = "";
  let extractedID = "";

  before(async () => {
    request.setDefaultTimeout(10000);
    const response = await spec()
      .post(baseURL + "/users/login")
      .withBody(reqBody)
      .withHeaders("Content-Type", "application/json");
    authToken = response.body.data.token;

    const requestedID = await spec()
      .post(baseURL + "/notes")
      .withHeaders("x-auth-token", authToken)
      .withBody(notesBody);
    extractedID = requestedID.body.data.id;
  });

  it("Delete notes by id test", async () => {
    await spec()
      .delete(baseURL + `/notes/${extractedID}`)
      .withHeaders("x-auth-token", authToken)
      .expectStatus(200);
  });
  after(() => {
    console.log(`Deleted the note with the ID ${extractedID}`);
  });
});

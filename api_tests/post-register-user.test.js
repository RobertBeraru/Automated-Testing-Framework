const { spec, request } = require("pactum");
const { faker } = require("@faker-js/faker");

baseURL = "https://practice.expandtesting.com/notes/api";
const randomName = faker.person.fullName();
const randomEmail = faker.internet.email();
const randompassword = faker.internet.password();

const reqBody = {
  name: randomName,
  email: randomEmail,
  password: randompassword,
};

const reqInvalidBody = {
  name: "",
  email: randomEmail,
  password: randompassword,
};

const jsonSchemaBadReq = {
  status: 400,
  message: "User name must be between 4 and 30 characters",
};

describe("Post register user test suite", () => {
  before(() => {
    request.setDefaultTimeout(10000);
  });

  it("Register user test successful", async () => {
    await spec()
      .post(baseURL + "/users/register")
      .withBody(reqBody)
      .withHeaders("Content-Type", "application/json")
      .expectStatus(201);
  });

  it("Register user test unsuccessful", async () => {
    await spec()
      .post(baseURL + "/users/register")
      .withBody(reqInvalidBody)
      .withHeaders("Content-Type", "application/json")
      .expectJsonLike(jsonSchemaBadReq);
  });
});

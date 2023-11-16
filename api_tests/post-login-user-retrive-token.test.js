const { spec, request } = require("pactum");
const baseURL = "https://practice.expandtesting.com/notes/api";

const reqBody = {
  email: "beraru13@gmail.com",
  password: "testingpurpose",
};

describe("Login user test suite", () => {
  before(async () => {
    request.setDefaultTimeout(10000);
  });

  it("Login user and retriving auth token test ", async () => {
    await spec()
      .post(baseURL + "/users/login")
      .withBody(reqBody)
      .withHeaders("Content-Type", "application/json")
      .expectStatus(200);

    const response = await spec()
      .post(baseURL + "/users/login")
      .withBody(reqBody)
      .withHeaders("Content-Type", "application/json");
    authToken = response.body.data.token;
    console.log(`The authorization token is ${authToken}.`);
  });
});

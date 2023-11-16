const { spec, request } = require("pactum");
const generatedJSonSchema = require("../data/json-schema.json");
const baseURL = "https://practice.expandtesting.com/notes/api";
const reqBody = {
  email: "beraru13@gmail.com",
  password: "testingpurpose",
};
describe("Get all notes test suite", () => {
  let authToken = "";
  before(async () => {
    request.setDefaultTimeout(10000);
    const response = await spec()
      .post(baseURL + "/users/login")
      .withBody(reqBody)
      .withHeaders("Content-Type", "application/json");
    authToken = response.body.data.token;
  });
  it("Get all notes test", async () => {
    await spec()
      .get(baseURL + "/notes")
      .withHeaders("x-auth-token", authToken)
      .expectStatus(200)
      .expectJsonSchema(generatedJSonSchema);
  });
});

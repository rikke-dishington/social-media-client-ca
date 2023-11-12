import { login } from "./login.js";
import { save } from "../../storage/index.js";

const mockFetchSuccess = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({
        accessToken: 'testingToken',
        profileData: 'testingProfile',
      }),
  }),
);

global.fetch = mockFetchSuccess;

jest.mock("../../storage/index.js", () => ({
  ...jest.requireActual("../../storage/index.js"),
  save: jest.fn(),
}));

describe("Login Functionality", () => {
  it("should fetch and store a token in browser storage on successful login", async () => {
    await login("testing@email.com", "testingPassword");
    expect(save).toHaveBeenCalledWith('token', 'testingToken');
  });
});

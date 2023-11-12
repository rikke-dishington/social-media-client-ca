import { logout } from "./logout.js";
import { remove } from "../../storage/remove.js";

jest.mock("../../storage/remove.js", () => ({
  remove: jest.fn(),
}));

describe("Logout Functionality", () => {
  it("should remove the token from browser storage on logout", async () => {
    await logout();
    expect(remove).toHaveBeenCalledWith('token');
  });
});

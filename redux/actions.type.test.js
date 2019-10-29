import actions from "./actions";

describe("Action Type", () => {
  it("Exist", () => {
    const actionType = actions.Types;
    expect(actionType).toBeDefined();
    expect(actionType.GET_BRANCH_LIST_SUCCESS).toBeDefined();
    expect(actionType.LOCATION_DEVICE_FOUND).toBeDefined();
    expect(actionType.SIGN_IN_SUCCESS).toBeDefined();
    expect(actionType.SIGN_OUT_SUCCESS).toBeDefined();
  });
});

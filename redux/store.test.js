import configureStore from "./store";

describe("Redux Store", () => {
  it("Exist", () => {
    const store = configureStore();

    // store ต้องไม่ใช่ null
    expect(store).toBeDefined();
  });
});

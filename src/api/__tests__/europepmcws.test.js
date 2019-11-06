import * as europepmcws from "../europepmcws";

describe("Europe PMC WS", () => {
  it("searches for articles correctly", async () => {
    const results = await europepmcws.search("p53");
    expect(results.data.hitCount).toBeGreaterThan(200000);
  });
});

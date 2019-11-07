import Article from "../article";
import { search } from "@/api/europepmcws";
import * as data from "./searchResults.json";

jest.mock("@/api/europepmcws");

describe("Article", () => {
  describe("mutations", () => {
    it("resets state", () => {
      const state = {
        searchResult: {}
      };
      Article.mutations.resetState(state);
      expect(state.searchResult).toBe(null);
    });
  });

  describe("actions", () => {
    it("fetches search result", async () => {
      search.mockImplementationOnce(() => {
        return Promise.resolve(data);
      });

      const context = {
        state: {
          searchResult: null
        }
      };
      await Article.actions.search(context, {
        query: "p53"
      });
      expect(context.state.searchResult).not.toBe(null);
      expect(context.state.searchResult.hitCount).toBe(218841);
    });
  });
});

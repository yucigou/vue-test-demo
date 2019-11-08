import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Search from "../Search";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Search", () => {
  it("dispatches search action when receiving a search query parameter", () => {
    const query = "cancer";
    const store = new Vuex.Store();
    store.dispatch = jest.fn();
    shallowMount(Search, {
      localVue,
      store,
      mocks: {
        $route: {
          query: {
            query
          }
        }
      }
    });

    expect(store.dispatch).toHaveBeenCalledWith("article/search", { query });
  });
});

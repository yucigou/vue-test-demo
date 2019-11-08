import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import QueryContainer from "../QueryContainer";
import QueryBox from "../QueryBox";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("QueryContainer", () => {
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      search: jest.fn()
    };
    store = new Vuex.Store({
      modules: {
        article: { namespaced: true, actions }
      }
    });
  });

  it("dispatches search action when receiving a search event with query payload", () => {
    const query = "cancer";
    const wrapper = shallowMount(QueryContainer, {
      store,
      localVue,
      mocks: {
        $route: {}
      }
    });
    wrapper.find(QueryBox).vm.$emit("search", query);
    expect(actions.search).toHaveBeenCalledWith(
      expect.anything(),
      { query },
      undefined
    );
  });

  it("updates URL correctly", () => {
    const routePath = "http://localhost/search";
    const query = "cancer";
    const spy = jest.spyOn(history, "pushState");
    const wrapper = shallowMount(QueryContainer, {
      store,
      localVue,
      mocks: {
        $route: {
          path: routePath,
          query: {
            query
          }
        }
      }
    });
    wrapper.find(QueryBox).vm.$emit("search", query);
    expect(spy).toHaveBeenCalledWith(
      {},
      null,
      `${routePath}?query=${encodeURIComponent(query)}`
    );
    spy.mockRestore();
  });
});

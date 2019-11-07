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
      actions
    });
  });

  it("dispatches search action when receiving a search event with query payload", () => {
    const query = "cancer";
    const wrapper = shallowMount(QueryContainer, { store, localVue });
    wrapper.find(QueryBox).vm.$emit("search", query);
    expect(actions.search).toHaveBeenCalledWith(
      expect.anything(),
      { query },
      undefined
    );
  });
});

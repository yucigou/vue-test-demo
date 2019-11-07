import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import ArticleList from "../ArticleList";
import * as data from "@/store/modules/__tests__/searchResults.json";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("ArticleList", () => {
  let state;
  let store;

  beforeEach(() => {
    state = {
      searchResult: data
    };
    store = new Vuex.Store({
      state
    });
  });

  it("lists all search result", () => {
    const wrapper = mount(ArticleList, { store, localVue });
    expect(wrapper.text()).toContain("218841");
    expect(wrapper.findAll("div.item").length).toBe(25);
    expect(wrapper.find("div.item").text()).toContain(
      data.resultList.result[0].title
    );
  });
});

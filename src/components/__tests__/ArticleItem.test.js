import { shallowMount } from "@vue/test-utils";
import ArticleItem from "../ArticleItem";
import * as data from "./ArticleItem.json";

describe("ArticleItem", () => {
  it("renders the title and authors", () => {
    const wrapper = shallowMount(ArticleItem, {
      propsData: {
        item: data
      }
    });
    expect(wrapper.text()).toContain(data.title);
    expect(wrapper.text()).toContain("Zhou P");
  });

  it("renders the list item correctly", () => {
    const wrapper = shallowMount(ArticleItem, {
      propsData: {
        item: data
      }
    });
    expect(wrapper).toMatchSnapshot();
  });
});

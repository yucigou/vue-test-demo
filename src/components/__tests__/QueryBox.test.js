import { shallowMount } from "@vue/test-utils";
import QueryBox from "../QueryBox";

describe("QueryBox", () => {
  it("renders an input text field", () => {
    const wrapper = shallowMount(QueryBox);
    expect(wrapper.find("input").is("input")).toBe(true);
  });

  it("renders a Search button", () => {
    const wrapper = shallowMount(QueryBox);
    expect(wrapper.find("button").text()).toContain("Search");
  });

  it("emits search event with the input text as payload when clicked", () => {
    const query = "cancer";
    const wrapper = shallowMount(QueryBox);
    const input = wrapper.find("input");
    input.setValue(query);
    const button = wrapper.find("button");
    button.trigger("click");
    expect(wrapper.emitted().search[0]).toEqual([query]);
  });

  it("emits search event with the input text as payload when keyup enter", () => {
    const query = "cancer";
    const wrapper = shallowMount(QueryBox);
    const input = wrapper.find("input");
    input.setValue(query);
    input.trigger("keyup.enter");
    expect(wrapper.emitted().search[0]).toEqual([query]);
  });
});

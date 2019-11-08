import { shallowMount } from "@vue/test-utils";
import Home from "../Home";
import QueryBox from "@/components/QueryBox";

describe("QueryContainer", () => {
  it("navigates to the search page when receiving a search event with query payload", () => {
    const query = "cancer";
    const pushMock = jest.fn();
    const wrapper = shallowMount(Home, {
      mocks: {
        $router: {
          push: pushMock
        }
      }
    });
    wrapper.find(QueryBox).vm.$emit("search", query);
    expect(pushMock).toHaveBeenCalledWith({ name: "search", query: { query } });
  });
});

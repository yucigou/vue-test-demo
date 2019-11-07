import { search } from "@/api/europepmcws";

const namespaced = true;

const getDefaultState = () => {
  return {
    searchResult: null
  };
};

const state = getDefaultState();

const mutations = {
  resetState(state) {
    Object.assign(state, getDefaultState());
  }
};

const actions = {
  search({ state }, { query }) {
    return search(query).then(response => {
      state.searchResult = response;
    });
  }
};

export default { namespaced, state, mutations, actions };

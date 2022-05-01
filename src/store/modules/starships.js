import apiFetch from '@/utils/api';

export default {
  state: {
    starshipsList: [],
    starshipData: {},
    nextPageUrl: null,
    previousPageUrl: null,
    searchText: '',
    isLoading: false,
  },
  getters: {},
  mutations: {
    updateStarshipsList(state, starshipsList) {
      state.starshipsList = starshipsList;
    },
    updateStarshipData(state, starshipData) {
      state.starshipData = starshipData;
    },
    updateNextPageUrl(state, nextPageUrl) {
      state.nextPageUrl = nextPageUrl;
    },
    updatePreviousPageUrl(state, previousPageUrl) {
      state.previousPageUrl = previousPageUrl;
    },
    updateIsLoading(state, isLoading) {
      state.isLoading = isLoading
    },
    updateSearchText(state, searchText) {
      state.searchText = searchText
    },
  },
  actions: {
    async fetchStarshipsList({ state, commit }) {
      commit('updateIsLoading', true)
      const search = state.searchText ? `?search=${state.searchText}` : ''
      const res = await apiFetch(
        `https://swapi.dev/api/starships/${search}`
      )
      if (!res.ok) {
        commit('updateIsLoading', false)
        return
      }
      const data = await res.json()
      const starshipsList = data.results
      const nextPageUrl = data.next
      const previousPageUrl = data.previous
      commit('updateStarshipsList', starshipsList)
      commit('updateNextPageUrl', nextPageUrl)
      commit('updatePreviousPageUrl', previousPageUrl)
      commit('updateIsLoading', false)
    },

    async fetchStarshipData({ commit }, url) {
      commit('updateIsLoading', true)
      const res = await apiFetch(
        url
      )
      if (!res.ok) {
        commit('updateIsLoading', false)
        return
      }
      const updateStarshipData = await res.json()
      commit('updateStarshipData', updateStarshipData)
      commit('updateIsLoading', false)
    },
  },
}
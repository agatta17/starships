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

  getters: {
    showPagination(state) {
      return state.nextPageUrl || state.previousPageUrl
    }
  },

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
    async fetchStarshipsList({ state, commit }, url) {
      commit('updateIsLoading', true)
      const search = state.searchText ? `?search=${state.searchText}` : ''
      const fetchUrl = url ? url : `https://swapi.dev/api/starships/${search}`
      const res = await apiFetch(
        fetchUrl
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

    async fetchStarshipData({ commit, dispatch }, url) {
      commit('updateIsLoading', true)
      const res = await apiFetch(
        url
      )
      if (!res.ok) {
        commit('updateIsLoading', false)
        return
      }
      const starshipData = await res.json()
      const [films, pilots] = await Promise.all([
        dispatch('fetchNamesList', starshipData.films),
        dispatch('fetchNamesList', starshipData.pilots)
      ])
      commit('updateStarshipData', {
        ...starshipData,
        films,
        pilots
      })
      commit('updateIsLoading', false)
    },

    async fetchNamesList(store, urlArray) {
      let nameArray = [];
      let name = '';
      for (let i = 0; i < urlArray.length; i++) {
        const res = await apiFetch(
          urlArray[i]
        )
        if (!res.ok) {
          continue
        }
        const data = await res.json()
        name = data.name || data.title
        nameArray.push(name);
      }
      return nameArray.join(', ');
    }
  },
}
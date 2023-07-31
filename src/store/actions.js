import axiosClient from "../axiosClient";

export function searchNews({ commit }, keyword) {
    axiosClient.get(`everything?q=${keyword}&pageSize=20&apiKey=98cdf52850924ac5ba7c47a0b4245c78`)
    .then(({ data }) => {
        commit('setSearchedNews', data.articles)
    })
}

export function randomNews({ commit }) {
    axiosClient.get(`top-headlines?country=in&apiKey=98cdf52850924ac5ba7c47a0b4245c78`)
    .then(({ data }) => {
        commit('setRandomNews', data.articles)
    })
}
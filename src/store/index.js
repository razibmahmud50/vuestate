import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: "hello vuex",
    links: [
      'www.google.com',
      'www.youtube.com',
      'www.facebook.com',
    ]
  },
  getters: {
    counterLinks: state=>{
       return state.links.length
    }
  }
  ,
  mutations: {
    ADDLINK: (state, link)=>{
      state.links.push(link)
    },
    REMOVE_LINK: (state, link)=>{
      state.links.splice(link, 1)
    },
    REMOVE_ALL: (state)=>{
      state.links=[]
    }
  },
  actions: {
    removeLink: (context, link)=>{
      context.commit('REMOVE_LINK', link)
    },
    removeAll ({commit}) {                       // Add this
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('REMOVE_ALL')
          resolve()
        }, 1500)
      })
    }
  },
  modules: {
  }
})

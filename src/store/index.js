import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    experience: [
      {
          title: 'Web Developer',
          date: 'March 2020 - Present',
          institute: 'Yoni Tech',
          decription: 'Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec. Fusce eget urna ante. Donec massa velit, varius a accumsan ac, tempor iaculis massa. Sed placerat justo sed libero varius vulputate.'
      },
      {
          title: 'Vue - Vuetify Developer ',
          date: 'March 2020 - Present',
          institute: 'Yoni Tech',
          decription: 'Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec. Fusce eget urna ante. Donec massa velit, varius a accumsan ac, tempor iaculis massa. Sed placerat justo sed libero varius vulputate.'
      },
      {
          title: 'Laravel/Vue/GraphQL',
          date: 'March 2020 - Present',
          institute: 'Yon Tech',
          decription: 'Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec. Fusce eget urna ante. Donec massa velit, varius a accumsan ac, tempor iaculis massa. Sed placerat justo sed libero varius vulputate.'
      },
      {
          title: 'Golang Developer',
          date: 'March 2020 - Present',
          institute: 'Yoni Tech',
          decription: 'Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec. Fusce eget urna ante. Donec massa velit, varius a accumsan ac, tempor iaculis massa. Sed placerat justo sed libero varius vulputate.'
      },
  ],
    sliders:[
      'https://ashewa.com/BannerImage1-min.jpg',
      'https://ashewa.com/BannerImage2-min.jpg',
      'https://ashewa.com/BannerImage3-min.jpg',
      'https://ashewa.com/BannerImage4-min.jpg',
      'https://ashewa.com/BannerImage5-min.jpg',
      'https://ashewa.com/BannerImage6-min.jpg',
  ]
  },
  mutations: {
  },
  actions: {
  },
  getters: {
       sliders: state => state.sliders,    
       experience : state => state.experience,
  }
})

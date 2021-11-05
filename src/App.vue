<template>
  <div>
    <SearchBar @termChange="onTermChange"></SearchBar>
    <router-view :videos="videos" :selectedVideo="selectedVideo"></router-view>
    <Footer />
  </div>
</template>

<script>
import axios from 'axios'
import SearchBar from './components/SearchBar'
import Footer from './components/Footer'

const API_KEY = 'AIzaSyBJyHpXsYSMxpRxstD4Ud0LyOb9kt_m9VI'

export default {
  name: 'App',
  data() {
    return { videos: [], selectedVideo: null }
  },
  components: {
    SearchBar,
    Footer,
  },
  mounted() {
    document.title = 'Video Browser'
  },
  methods: {
    onTermChange(searchTerm) {
      axios
        .get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            key: API_KEY,
            type: 'video',
            part: 'snippet',
            q: searchTerm,
          },
        })
        .then((res) => {
          this.videos = res.data.items

          this.selectedVideo = this.videos[0]
          //console.log(this.videos)
        })
    },
  },
}
</script>

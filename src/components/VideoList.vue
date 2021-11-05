<template>
  <ul class="list-group col-md-4">
    <Video
      v-for="video in videos"
      :key="video.etag"
      :video="video"
      @videoSelect="onVideoSelect"
      :selectedVideo="selectedVideo"
    ></Video>
  </ul>
</template>

<script>
import Video from './Video'

export default {
  name: 'VideoList',
  props: ['videos', 'selectedVideo'],
  components: {
    Video,
  },
  methods: {
    onVideoSelect(video) {
      this.$emit('videoSelect', video)
    },
  },
  // props:{
  //   videos: Array
  // }
}
</script>

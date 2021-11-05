<template>
  <div class="container min-height">
    <div class="row">
      <VideoDetail :video="selectedVideo" />
      <VideoList
        :videos="videos"
        @videoSelect="onVideoSelect"
        :selectedVideo="selectedVideo"
      />
    </div>
  </div>
</template>

<script>
import VideoList from '../components/VideoList'
import VideoDetail from '../components/VideoDetail'

export default {
  components: {
    VideoList,
    VideoDetail,
  },
  props: ['videos', 'selectedVideo'],
  methods: {
    onVideoSelect(video) {
      this.selectedVideo = video
    },
  },
}
</script>

<style>
.min-height {
  min-height: calc(100vh - 130px);
}
</style>

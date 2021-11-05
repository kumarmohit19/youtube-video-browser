<template>
  <li
    class="list-group-item media"
    :style="selectedVideo === video ? 'backgroundColor: #eee' : ''"
    @click="onVideoSelect"
  >
    <img class="mx-2" :src="thumbnailUrl" />
    <div class="media-body">
      <h6>{{ video.snippet.title }}</h6>
    </div>
  </li>
</template>

<script>
export default {
  name: 'Video',
  props: ['video', 'selectedVideo'],
  computed: {
    thumbnailUrl() {
      return this.video.snippet.thumbnails.default.url
    },
  },
  methods: {
    onVideoSelect() {
      this.$emit('videoSelect', this.video)
    },
  },
}
</script>

<style scoped>
li {
  display: flex;
  cursor: pointer;
}

li:hover {
  background-color: #eee;
}
</style>

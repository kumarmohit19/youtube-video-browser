<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-2">
    <div class="container">
      <a class="navbar-brand"
        ><img
          src="https://img.icons8.com/color/48/000000/youtube-play.png"
          width="30"
          height="30"
          alt=""
        />
        <span> Video Browser</span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarMenu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarMenu">
        <ul class="nav navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/" exact
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/about"
              >About</router-link
            >
          </li>
        </ul>
        <form @submit="onInput" class="form-inline ml-auto" v-if="isHome">
          <input
            type="text"
            name="inputText"
            v-model="inputText"
            placeholder="Search videos here..."
            class="form-control mr-sm-2"
          />
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      inputText: '',
    }
  },
  computed: {
    isHome() {
      if (this.$route.path === '/') return true
      return false
    },
  },
  methods: {
    onInput: function (event) {
      event.preventDefault()

      this.$emit('termChange', this.inputText)

      this.inputText = ''
    },
  },
}
</script>

<style scoped>
.ml-auto {
  margin-left: auto;
}
</style>

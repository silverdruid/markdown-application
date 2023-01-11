<template>
  <div>home page</div>
  <router-link v-for="item in list" :key="item.to" to=" item.to">{{item.title}}</router-link>
</template>

<script>
export default {
  data() {
    return {
      list: [
        // { title: 'homepage', to: '/' },
        { title: 'markdown', to: '/markdown' }
      ]
    }
  }
}
</script>

<style>

</style>
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="(repo) in repoData" :key="repo.id"> {{repo.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: [
    'repoData',
  ],


}
</script>


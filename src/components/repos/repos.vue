<template>
  <section class="repos-container">
    <div v-for="(repo) in repoData" :key="repo.id">
      <router-link :to="{name: 'reposItem', params: {id: repo.id}}">
         {{repo.name}}
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
name:'RepoS',
  props: [
    'repoData',
  ],


}
</script>
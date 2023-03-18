<template>
  <section class="repos-container">
  <aside v-if="loading">
    <p>Loading....</p>
  </aside>
    <main v-else v-for="(repo) in repoData" :key="repo.id">
    <aside>
    <div>
    <router-link :to="{name: 'reposItem', params: {username: repo.name}}">
         {{repo.name}}
      </router-link>
      <span>{{repo.visibility}}</span>
      <span class="star-container">{{repo.star}}</span>
    </div>
    </aside>
    <aside>
      <span>
        <span><span></span><p>{{repo.language}}</p></span>
        <p>{{repo.updated_at}}</p>
      </span>
    </aside>
      
    </main>
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

<style scoped>
   .repos-container{
      text-align:center;
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
   }
</style>
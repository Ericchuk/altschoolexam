<template>
  <section class="repos-container">
  <aside v-if="loading">
    <p>Loading....</p>
  </aside>
    <main v-else v-for="(repo) in repoData" :key="repo.id">
    <aside>
    <router-link :to="{name: 'repoItem', params: {username: repo.name}}">
         {{repo.name}}
      </router-link>
      <span>{{repo.visibility}}</span>
      <p>{{repo.language}}</p>
      <p>{{repo.open_issues}} issues</p>
      <p>{{repo.forks}} forks</p>
      <p>{{repo.default_branch}}</p>
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
      width:100%;
   }

   main{
      display:flex;
      justify-content:space-between;
      align-items:center;
      flex-direction:column;
      width:100%;
   }


  main aside{
      display:flex;
      justify-content:space-between;
      align-items:center;
      width:85%;
      margin:10px 0;  
      padding:10px;
  }

  main:nth-child(even) aside{
            font-weight: 700;
font-size: 16px;
line-height: 24px;
background: #1563C8;
border-radius: 8px;
color:white;
  }

  main:nth-child(even) aside a{
    color:white;
  }

   main aside a{
      margin:0 20px 0 0px;
      font-size:25px;
      text-decoration:none;
      text-transform:capitalize;
   }

   main aside span{
    border:.5px solid grey;
    border-radius:100px;
    padding:5px 10px;
    text-transform:capitalize;
   }

   main aside p{
      margin:0 20px;
      font-size:20px;
   }

@media screen and (max-width:700px){
  main aside{
    flex-wrap:wrap
  }

  main aside a{
    margin:10px 0px;
    line-height:70px;
  }

  main aside p{
    margin:10px 2px;
  }
}
</style>
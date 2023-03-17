<template>
 <section>
    <RepoS :repoData="datas"/>
 </section>
</template>

<script>
import RepoS from '../components/repos/repos.vue';
 export default{
        name: 'ReposView',
         components: {
            RepoS,
         },

         data(){
    return{
      datas:[],
    }
  },

  mounted(){
    fetch("https://api.github.com/users/ericchuk/repos",{
      headers: {
        Accept: "application/json"
      },
    })
    .then(res => res.json())
    .then(datas => (this.datas = datas))
  },
 }
</script>
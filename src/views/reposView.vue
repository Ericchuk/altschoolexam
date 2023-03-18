<template>
 <section>
    <RepoS :repoData="datas" :loading="loading"/>
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
      loading:false,
    }
  },

  mounted(){
    this.loading = true
    fetch("https://api.github.com/users/ericchuk/repos",{
      headers: {
        Accept: "application/json"
      },
    })
    .then(res => res.json())
    .then(this.loading = false)
    .then(datas => (this.datas = datas))
  },
 }
</script>
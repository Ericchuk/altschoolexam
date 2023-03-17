<template>
 <section>
    <RepoS :repoData="datas"/>
    <Pagination />
 </section>
</template>

<script>
import RepoS from '../components/repos/repos.vue';
import Pagination from '../components/pagination/pagination.vue';
 export default{
        name: 'ReposView',
         components: {
            RepoS,
            Pagination,
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
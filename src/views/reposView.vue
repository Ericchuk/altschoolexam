<template>
 <section>
    <RepoS :repoData="datas" :loading="loading"/>
    <div class="paginate">
    <button>Prev</button>
      <span v-for="(item, index) in 5" :key="index">
        <button>{{index + 1}}</button>
      </span>
      <button>Next</button>
    </div>
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
    fetch(`https://api.github.com/users/ericchuk/repos?page=${2}&per_page=5`,{
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

<style scoped>

.paginate{
  display:flex;
  align-items:center;
  justify-content:center;
  margin-top:20px;
}

.paginate button{
  margin:0 10px;
  padding:10px;
  border:none;
  background-color:transparent;
  border:1px solid #000;
  cursor:pointer;
}
</style>
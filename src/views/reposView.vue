<template>
 <section>
    <RepoS :repoData="datas" :loading="loading"/>
    {{page}}
   ` https://api.github.com/users/ericchuk/repos?page={{page}}&per_page=5`
    <div class="paginate">
      <button @click="decrementCount()">Prev</button>
      <button @click="incrementCount()">Next</button>
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
      page:1,
    }
  },

  mounted(){
    this.loading = true
    fetch(`https://api.github.com/users/ericchuk/repos?page=${this.page}&per_page=5`,{
      headers: {
        Accept: "application/json"
      },
    })
    .then(res => res.json())
    .then(this.loading = false)
    .then(datas => (this.datas = datas))
  },

  methods:{
    incrementCount(){
      this.page++;
    },

    decrementCount(){
      this.page--;
    }
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
<script>

export default {
  name: 'App',

  data(){
   return{
     nav:false, 
   }
  },

  mounted(){
    if(window.innerWidth > 700){
        this.nav = true;
      }
  }, 
  methods:{
    openMenu(){
      if(window.innerWidth > 700){
        console.log("eeeee")
        this.nav = true;
      }else{
        console.log("erfff")
      }
      
    },
     closeMenu(){
      this.nav = false;
      console.log("eefffeee")
    }
  },
}
</script> 

<template>
     <header>

      <h2>Git-repo</h2>
      <img alt="coding" v-show="!nav" src="../src/hamburger.png" @click="openMenu()"/>

  
      <nav v-if="nav">
         <img alt="coding" v-show="nav" src="../src/hamburger.png" @click="closeMenu()"/>
         <li class="home"><router-link to="/">Home</router-link></li>
         <li><router-link to="/repos">Repos</router-link></li>
        <li><router-link to="/portfolio">Portfolio</router-link></li>
      </nav>
   </header>
   <router-view>
   </router-view>
   <footer>
     <p>Created by <b>Ericchuks</b></p>
   </footer>
</template>

<style>

body{
   margin:0;
   padding:0;
   box-sizing:border-box;
}

header{
   display:flex;
   justify-content:space-between;
   align-items:center;
   padding:30px 0px 0;
   position:relative;
}

header .h2{
  color:white;
  z-index:5;
}
header h2, header img{
   margin:0 20px 0 20px;
}


nav{
   position:fixed;
   width:100%;
   top:0;
   height:100vh;
   background-color:rgba(0,0,0,.9);
   padding:20px;   
   display:flex;
   justify-content:center;
   align-items:center;
   flex-direction:column;
}

li{
    list-style-type:none;
    margin:15px 0;
    width:85%;
    font-size:25px;
    padding:20px 0px 20px 20px;
    border-radius:50px;
    text-align:center;
}

nav li a{
  color:white;
  text-decoration:none;
}

nav img{
  filter:invert(100);
  position:absolute;
  right:30px;
  top:40px;
}

footer{
text-align:center;
padding:20px;
}

@media screen and (min-width:700px){
header{
  padding:20px 5%;
  width:auto;
  height:30px;
}
  nav{
    position:relative;
    width:auto;
   top:0;
   height:auto;
   background-color:transparent;
   padding:20px;   
   flex-direction:row;
  }

  nav img{
   display:none;
  }

  nav li a{
    color:black;
    font-size:18px;
    margin:0 20px;
  }
}
</style>
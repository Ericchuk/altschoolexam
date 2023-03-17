<script>

export default {
  name: 'App',
}
</script> 

<template>
     <header>
      <h2>Git-repo</h2>

      <nav>
         <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/repos">Repos</router-link></li>
           <li><router-link to="/portfolio">Portfolio</router-link></li>
      </nav>
   </header>
   <router-view>
   </router-view>
</template>



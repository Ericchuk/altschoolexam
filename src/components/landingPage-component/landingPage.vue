<template>
    <article>
       <NavBar/>
       <IntroductorySection/>
    </article>
</template>

<script>

import RepoS from '../repos/repos.vue';
import IntroductorySection from '../intoductory-section/introductory-section.vue';

export default {
  name: 'LandingPage',
  components: {
    IntroductorySection,
  },

  

}
</script>

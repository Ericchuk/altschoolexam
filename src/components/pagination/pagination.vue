<script setup>
const page = ref(1);
    const reposPerPage = 3;
const nextPage = computed(() => {
  return repos.value.slice((page.value - 1) * reposPerPage, reposPerPage * page.value);
});


const handleRepos = (num) => {
  page.value = num;
};
const next = () => {
  page.value++;
};
const prev = () => {
  page.value--;
};

</script>

<template>
     <div class="btn-container">
      <button :disabled="page == 1" @click="prev" class="btn">Prev</button>

      <div >
        <button class="num"
          @click="handleRepos(btn)"
          v-for="btn in Math.ceil(repos.length / reposPerPage)"
          :key="btn"
        >
          {{ btn }}
        </button>
      </div>

      <button
        :disabled="page == Math.ceil(repos.length / reposPerPage)"
        @click="next"
        class="btn"
      >
        Next
      </button>
    </div>
</template>
<template>
    <section>
        <h1>404</h1>
        <p>Page not found</p>
        <router-link to="/">Home</router-link>
    </section>
</template>

<script>
export default {
    name: 'NotFound',
}
</script>

<style scoped>
 section{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
 }

 h1{
    font-size:150px;
    font-weight:700;
    margin:120px 0 0;
    color:red;
 }

 p{
    font-size:20px;
 }
</style>
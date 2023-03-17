<template>
    <article>
       <p>ctxrvvvvvvvvvvvvvvvvvvvvvvzre</p>
       <p>THe job id is {{id}}</p>
    </article>
</template>

<script>
    export default{
            name: 'repoItem',
            props:['id'],

            mounted(){
             fetch("https://api.github.com/users/ericchuk/repos",{
             headers: {
                 Accept: "application/json"
                 },
                })
            .then(res => res.json())
            .then(datas => (this.datas = datas))
                console.log(this.id)
            }
    }
</script>
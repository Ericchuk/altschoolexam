<template>
    <article>
       <p>ctxrvvvvvvvvvvvvvvvvvvvvvvzre</p>
       <p>THe job id is {{username}}</p>
    </article>
</template>

<script>
    export default{
            name: 'repoItem',
            props: ['username'],
            data(){
                return{
                 datas:[],
            }
            },

            mounted(){
             fetch("https://api.github.com/users/ericchuk/repos/{{username}}",{
             headers: {
                 Accept: "application/json"
                 },
                })
            .then(res => res.json())
            .then(datas => (this.datas = datas))
                console.log(this.datas)

            }
    }
</script>
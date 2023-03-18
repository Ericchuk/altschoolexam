<template>
    <section class="repoItem">
        <h2>{{username}}</h2>
        <ul>
            <li>Name:Ericchuk/{{username}}</li>
            <li>Forked-Url : <a href="https://api.github.com/repos/Ericchuk/{{username}}/forks">https://api.github.com/repos/Ericchuk/{{username}}/forks</a></li>
            <li>Html-Url : <a href="https://github.com/Ericchuk/{{username}}">https://github.com/Ericchuk/{{username}}</a></li>
        </ul>
    </section>
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


<style scoped>
    .repoItem{
        background: #1563C8;
        color:white;
        margin:20px 20px;
        border-radius:20px;
        box-shadow:0 2px 4px 0 black;
        padding:10px;
    }

    h2{
        text-transform:capitalize;
        padding:20px 0;
        margin:0;
        text-align:left;
    }

    ul{
        text-align:left;
        width:60%;
        padding:0;
    }

    ul li{
        list-style-type:none;
        margin:0;
        padding:10px 0;
        font-size:17px;
    }

    ul li a{
        color:white;
        text-decoration:none;
    }

    @media screen and (min-width:700px){
        .repoItem{
            margin:20px 5%;
            display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        }
    }
</style>
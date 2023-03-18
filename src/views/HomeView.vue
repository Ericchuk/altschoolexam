<template>
    <section class="introductory-container">
  <aside>
        <h1>Connecting my <span>Git profile to the world</span>.</h1>
        <p>This will help build a great tech driven careeer and also aid in getting more youngsters of the street.</p>
        <button>View profile</button>
    </aside>
      <img alt="coding" src="../assets/card.jpeg">
 </section>
   <section class="further-container">
  <aside>
        <h1>What am I?</h1>
        <p>I am an individual commited to a further tech career, with the intention of full exploration.</p>
    </aside>
      <img alt="coding" src="../assets/git.jpg">
 </section>
</template>


<script>
 export default{
        name: 'ReposView', 
 }
</script>

<style scoped>
    .introductory-container,
    .further-container{
        padding:20px;
        font-family:sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction:column;
    }
    h1{
      font-size:20px;
      font-weight:500; 
    }
    span{
        color:#1563C8;
    }
    p{
     line-height:1.4rem;
     font-size:16px;
    }
    button{
        padding:10px 20px;
        font-weight: 700;
font-size: 16px;
line-height: 24px;
background: #1563C8;
border-radius: 8px;
color:white;
border:none;
outline:none;
    }
    img{
        width:100%;
        border-radius:10px;
        margin:20px 0 0;
    }

@media screen and (min-width:700px){
    .introductory-container,
    .further-container{
        flex-direction:row;
        gap:30px;
        padding:20px 5%;
    }

    .introductory-container img,.further-container img{
        width:50%;
    }

    .introductory-container aside,.further-container aside{
        width:50%;
    }

    .further-container{
        flex-direction:row-reverse
    }
}


</style>
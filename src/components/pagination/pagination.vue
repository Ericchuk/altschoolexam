<script>
    export default {
        name:"pagination",
        data(){
            return{
               currentPage : 1,
               indexOfLastPost : currentPage * postsPerPage,
               indexOfFirstPost : indexOfLastPost - postsPerPage,
currentUsers : repos.slice(indexOfFirstPost, indexOfLastPost),
pageNumbers : [],
i : 1,
            }
        },

    for( i < Math.ceil(repos.length  /   postsPerPage + 1), i++){
             pageNumbers.push(i);
    }
         


  function paginate(pageNumber){
      currentPage = pageNumber ;
  }

  function prev(e){
      if(currentPage > 1){
          currentPage.value = - 1;
         
      }else{
         
      }
  }

  function next(e){
      if(currentPage < pageNumbers.length){
          currentPage + 1;
          
      }else{
          
      }
  }
 
    }
</script>
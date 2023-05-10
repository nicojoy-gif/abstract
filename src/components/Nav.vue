<template>
    <div >

    
    <nav
        class="navbar navbar-expand-lg navs text-white bg-body-tertiary fs-5 fw-semibold "
        id="navbar"
      >
        <div class="container">
      <div class="logo d-flex align-items-center ">
        <img src="../assets/a1.png" alt="abstract-logo" />
   <h1 class="fs-4 px-2"><router-link to="/" class="text-decoration-none text-white">Abstract </router-link>| <router-link to="/home" class="text-decoration-none text-white"> Help Center</router-link></h1>
    </div>
           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"> 
            </ul>
            <ul class="navbar list-unstyled d-lg-flex justify-content-end align-items-end m-0  ">
             <li class="nav-item  mx-3">
<a href ="https://help.abstract.com/hc/en-us/articles/360050382291-Contact-Support" class="text-decoration-none text-white">
              <button class="btn border-white border px-3 border-1 rounded-3 btn-outline-light fs-5 fw-semibold btn-dark">
            Submit a request
        </button>  
      </a>
        </li>
        <li class="nav-item mx-3">
          <router-link to="/sign" class="text-decoration-none text-white">
        <button class="btn btn-col px-4 fs-5 fw-semibold ">Sign in</button>
        </router-link>     
        </li>
        
            </ul>
          </div>
        </div>
      </nav>


    </div>
</template>

<script setup>

</script>

<style  scoped>
.navs{
    background-color: black;
  
}
.logo img{
    width: 6%;
    
}
.btn-col{
    background-color: #4C5FD5;
    color: white;
}
.btn-col:hover{
    background-color: white;
    color: #000;
}
</style>
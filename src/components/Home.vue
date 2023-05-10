<template>
    <div >
        <Nav />
<div class="homeHeader d-flex  flex-column align-items-center justify-content-center">
          
    <header class="d-flex  flex-column align-items-center justify-content-center">
<h1 >How can we help?</h1>
<form class="py-5 d-flex home-input position-relative" role="search" >
        <input class="form-control border-dark fs-3 " type="search" placeholder="Search" aria-label="Search">
        <i class="fa-solid fa-arrow-right icon"></i>
   </form>
    </header>
</div>
<div class="py-5 container">
<div class="row">
    <div class="col-md-6 fs-5   home-col">
        <div class="d-flex py-5">
        <div class="col-4 p-0 m-0">
            <img src="../assets/a2.png" alt="abstract"/>
        </div>
        <div class="col-7 p-0 m-0">
            <h3>Using Abstract</h3>
            <p>
                Abstract lets you manage, version, and document your designs in one place.
            </p>
            <a href="https://help.abstract.com/hc/en-us/categories/360005436612-Using-Abstract" class=" text-decoration-none">Learn More → </a>
        </div>
        </div>
        </div>
<div class="col-md-6 fs-5 home-col">
        <div class="d-flex py-5">
    <div class="col-4 p-0 m-0">
            <img src="../assets/a3.png" alt="abstract"/>
        </div>
        <div class="col-7 p-0 m-0">
            <h3>
Manage your account</h3>
            <p>
               Configure your account settings, such as your email, profile details, and password.

            </p>
            <a href="https://help.abstract.com/hc/en-us/categories/360005436612-Using-Abstract" class=" text-decoration-none">Learn More → </a>
        </div>
       </div>
    </div>   
    </div>    
    
<div class="row">
    <div class="col-md-6 fs-5   home-col">
        <div class="d-flex py-5">
       <div class="col-4 p-0 m-0">
            <img src="../assets/a4.png" alt="abstract"/>
        </div>
        <div class="col-7 p-0 m-0">
            <h3>Manage organizations, teams, and projects</h3>
            <p>
                Use Abstract organizations, teams, and projects to organize your people and your work.  </p>
            <a href="https://help.abstract.com/hc/en-us/categories/360005436612-Using-Abstract" class=" text-decoration-none">Learn More → </a>
        </div>
        </div>
        </div>
    
<div class="col-md-6 fs-5 home-col">
        <div class="d-flex py-5">
     <div class="col-4 p-0 m-0">
            <img src="../assets/a5.png" alt="abstract"/>
        </div>
        <div class="col-7 p-0 m-0">
            <h3>Manage billing</h3>
            <p>
               Change subscriptions and payment details.    </p>
            <a href="https://help.abstract.com/hc/en-us/categories/360005436612-Using-Abstract" class=" text-decoration-none">Learn More → </a>
        </div>
       </div>
    </div>   
    </div>   
    
<div class="row">
    <div class="col-md-6 fs-5   home-col">
        <div class="d-flex py-5">
          <div class="col-4 p-0 m-0">
            <img src="../assets/a6.png" alt="abstract"/>
        </div>
        <div class="col-7 p-0 m-0">
            <h3>Authenticate to Abstract</h3>
            <p>
                Set up and configure SSO, SCIM, and Just-in-Time provisioning. </p>
            <a href="https://help.abstract.com/hc/en-us/categories/360005436612-Using-Abstract" class=" text-decoration-none">Learn More → </a>
        </div>
        </div>
        </div>
    
<div class="col-md-6 fs-5 home-col">
        <div class="d-flex py-5">
   <div class="col-4 p-0 m-0">
            <img src="../assets/a7.png" alt="abstract"/>
        </div>
        <div class="col-7 p-0 m-0">
            <h3>Abstract support</h3>
            <p>
                Get in touch with a human. </p>
            <a href="https://help.abstract.com/hc/en-us/categories/360005436612-Using-Abstract" class=" text-decoration-none">Learn More → </a>
        </div>
       </div>
    </div>   
    </div>     

</div>
<Footer />
</div>

</template>

<script setup>
import Footer from './Footer.vue';
import Nav from './Nav.vue'
</script>

<style  scoped>
.homeHeader{
    background-color:#dadbf1;
    
    height: 350px;
}
.home-input{
    width: 130%;
}
.home-col img{
    width: 60%;
}
.home-input button{
    position:absolute;
    right: 33%;
    top: 42%;
}

.icon {
  position: absolute;
  right: 13px;  
  top: 59px;
  padding: 7px 5px;
   min-width: 30px;
     text-align: center;

   }   
</style>
<template>
    <div >
        <div class="price-row">
 <div class="navs py-3  text-white ">
<nav class="navbar   container  fs-5 fw-semibold">
    <router-link to="/" class="text-decoration-none text-light">
 <div class="logo d-flex align-items-center ">
        <img src="../assets/a1.png" alt="abstract-logo" />
    <h1 class="fs-4 px-2">Abstract </h1>
    </div>
    </router-link>
    <router-link to="/login">
    <button class="btn btn-col">
Sign in
    </button>
    </router-link>

</nav>
    </div>    
    <div class=" navs price-header  d-flex flex-column align-items-center text-center justify-content-center">
    <div class="py-5   text-white">
<h1>Pricing Plans</h1>
<p class="price-para m-auto fs-4 ">From small agencies to large enterprises with multiple teams, we are here to support you choosing a plan that works for you.</p>

</div>
</div>
<div class="">
<div class="version">
    <div class="container py-5">
<div class="version-header text-center py-5">
<h1>Version control for Sketch Files</h1>
<p class="price-para fs-4 m-auto">Abstract is used by one in three of the Fortune 500 and loved by Design teams all over the world.</p>
</div>
</div>
</div>
<section class="py-5 d-none container d-lg-block ">
<div class="row bg-white  border-col px-0  mx-5">
    <div class="col-lg-6  border-col p-0 m-0">
<div>
    <h3 class="px-3 py-2">Abstract pro</h3>
</div>
    </div>
    <div class="col-lg-6 price-col p-0 m-0">
<div class="m-0 p-0 price-col">
    <h3 class="px-3 py-2 m-0  text-white">Abstract Enterprise</h3>
</div>
    </div>
     <div class="col-lg-6  border-col p-0 m-0">
<div class="px-4  py-2 title-header">
    <h1 >$32</h1>
    <p class="py-2">Per month, per contributor, if billed annually</p>
<button class="btn btn-dark fs-5 fw-semibold px-4">
<router-link to="/home" class="text-decoration-none text-white">Get started</router-link>
</button>
</div>
    </div>
    <div class="col-lg-6 border-col p-0 m-0">
<div class="px-4 py-2 title-header ">
    <h1>Custom</h1>
    <p class="py-2">Custom pricing, per contributor, billed annually.</p>
<button class="btn btn-dark fs-5 fw-semibold px-4">
    <router-link to="/pricing" class="text-decoration-none text-white">Contact sales</router-link></button>
</div>
    </div>
    <div class="col-lg-6  border-col p-0 m-0">
<div class="p-4 ">
    <p class="fs-4 fw-semibold">End-to-end design workflow.</p>
</div>
    </div>
    <div class="col-lg-6 border-col p-0 m-0">
<div class="p-4">
     <p class="fs-4 fw-semibold">Everything in Pro, plus:</p>
</div>
    </div>
    <div class="col-lg-6  border-col p-0 m-0">
<div class="px-4 py-2">
    <ul class="fs-6 fw-semibold ">
        <li class="py-2">File management and version control up to 250GB of storage with unlimited viewers</li>
    <li class="py-2">Review requests, Collections for reviews and presentation, use Inspect to see elements and assets for all specifications and CSS</li>
    <li class="py-2">Price per contributor $40 if billed monthly</li>
    </ul>
</div>
    </div>
    <div class="col-lg-6 border-col p-0 m-0">
<div class="px-4 py-2">
    <ul class="fs-6 fw-semibold">
        <li class="py-2">Project Sections, Merge restrictions, Inspect with High-Res Preview, Branch Reporting, and no cap on seats or storage</li>
    <li class="py-2">Advanced security features like SSO access for an SAML vendor with JIT provisioning</li>
    <li class="py-2">Custom legal terms, security questionnaires and security documentation</li>
    <li class="py-2">Dedicated Account Manager and access to our Customer Support Team with priority support</li>
    <li class="py-2">Custom payment terms and invoicing</li>
    
    </ul>
</div>
    </div>
</div>
</section>

<section class="my-5 mx-2 d-lg-none d-sm-block price-table">

    <div class="" >

<div class="row bg-white border-col px-0  mx-1">
    <div class="col-lg-6 price-col  border-col  p-0 m-0">
<div>
    <h3 class="px-3 py-2 ">Abstract pro</h3>
</div>
    </div>
<div class=" title-header p-3  border-col">
    <h1><sup >$</sup>32</h1>
    <p>Per month, per contributor, if billed annually</p>
<button class="btn btn-dark fs-5 fw-semibold px-4">Get started</button>
</div>
<div class="p-5  border-col">
    <p class="fs-2  fw-semibold">End-to-end design workflow.</p>
    </div>
     
<div class="py-5 border-col">
    <ul class="fs-6 fw-semibold ">
        <li class="py-2">File management and version control up to 250GB of storage with unlimited viewers</li>
    <li class="py-2">Review requests, Collections for reviews and presentation, use Inspect to see elements and assets for all specifications and CSS</li>
    <li class="py-2">Price per contributor $40 if billed monthly</li>
    </ul>
    </div>
    </div>
</div>
<div class="d-flex justify-content-center align-items-center m-auto">
    <button class="mx-1 btn"><i class="fa-solid fa-circle-dot"></i></button>
    <button class="mx-1 btn"><i class="fa-solid fa-circle-dot"></i></button>
</div>
</section>
</div>
<Footer />
</div>

</div>
</template>

<style  scoped>
.price-header h1{
    font-size: 6em;
}
.title-header h1{
    font-size: 5em;
}

.version-header h1{
    font-size: 4em;
}
.price-para{
    width: 70%;
}
.price-header{
    height: 500px;
}
.btn-col{
    color: #4c5ed5f5;
}
.version{
    background-color:#dadbf1;
   height:555px;
    border-radius: 0 0 6em 6em;
}
.border-col{
    border: 2px solid seagreen;
}
.price-col{
    background-color: seagreen;
}
.btn-col:hover{
    color: #1b39f7;
}

.navs{
    background-color: black;
    width: 100%;
    
}
.price-table{
height: 777px;
}
.logo img{
    width: 35px;
    
    
}
.price-row{
    height: 100vh;
}
</style>
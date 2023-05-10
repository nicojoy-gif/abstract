<template>
    <div class="mx-4 ">
<div class="">
    <router-link to="/" class="text-decoration-none text-dark">
      <div class="logo py-5 d-flex align-items-center ">
        <img src="../assets/a1.png" alt="abstract-logo" />
    <h1 class="fs-4 px-2">Abstract </h1>
    </div>
    </router-link>
    <div class=" d-flex py-5 justify-content-center align-items-end">
    <div class="sign-box px-5 align-items-center ">
<div class="py-5 text-center">
    <h1>Sign in</h1>
    <p class="fw-semibold">New to Abstract? <router-link to="/sign" class="col text-decoration-none">Create a new account</router-link></p>
</div>
<div class="mb-3 ">
  <label for="exampleFormControlInput1" class="form-label fw-semibold fs-5">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
<div class="d-flex text-center my-4 ">
  <button class="btn text-white fw-semibold  text-center  btn-col">Continue</button>
</div>
</div>
    </div>
    </div>
    </div>
    </div>
</template>

<script setup>

</script>

<style  scoped>
.sign-box{
    background-color: #dadbf163;
    width: 40%;
    height: 400px;
    min-width: 400px;
    border-radius: 3em 3em 0 0;
}
.logo img{
    width: 3%;
    
}
.sign-box button{
    width: 100%;
}
.btn-col{
    background-color: #4C5FD5;
}
.btn-col:hover{
    background-color: #354ef2;
}
.col{
color:#4C5FD5;
}
.sign-container{
    height: 200px;
}
</style>
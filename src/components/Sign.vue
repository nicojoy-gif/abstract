<template>
    <div class="mx-4">

<div class="mx-4 d-sm-flex d-lg-block flex-column  align-items-center ">
  <router-link to="/" class="text-decoration-none text-dark">   
  <div class="logo py-5 d-flex align-items-center ">
        <img src="../assets/a1.png" alt="abstract-logo" />
    <h1 class="fs-4 px-2">Abstract </h1>
    </div>
    </router-link>
    <div class=" d-flex py-5 justify-content-center align-items-end">
    <div class="sign-box py-4 px-5 align-items-center ">
<div class="py-5 text-center">
    <h1>A little bit about you</h1>
    <p class="fs-5 fw-semibold">Let’s get your account set up!</p>
    <p class=" fw-semibold">Already have an account? <router-link to="/login" class="col text-decoration-none">Sign in here</router-link></p>
</div>
<form>
<div class="mb-3 ">
  <label for="exampleFormControlInput1" class="form-label  fs-5">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required>
</div>

<div class="mb-3 ">
  <label for="exampleFormControlInput1" class="form-label fs-5">Full name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Mika Sharp" required>
</div>

<div class="mb-3 input-icons position-relative">
  <label for="exampleFormControlInput1" class="form-label fs-5">Password</label>
  <input type="password" class="form-control " id="exampleFormControlInput1" placeholder=".........." required>
<i class="fa-solid fa-eye icon"></i>
</div>


  <div class="mb-3 form-check ">
    <input type="checkbox" class="form-check-input my-2" id="exampleCheck1">
    <label class="form-check-label fs-5 " for="exampleCheck1">Send me product news and training
        <br /> emails.</label>
  </div>
  
  <div class="mb-3  form-check">
    <input type="checkbox" class="form-check-input my-2" id="exampleCheck1">
    <label class="form-check-label fs-5" for="exampleCheck1">I’ve read and accept the Terms of <br /> Service. </label>
  </div>

  
<div class="mb-3 ">
<div class="d-flex text-center my-4 ">
  <button class="btn fs-5 text-white fw-semibold  text-center  btn-col">Create account</button>
</div>
</div>

</form>
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
    min-width: 440px;
    border-radius: 3em 3em 0 0;
}
.logo img{
    width: 35px;
    
}
.icon {
  position: absolute;
  right: 2px;  
  top: 41px;
  padding: 7px 5px;

   }   
        .input-icons {
            width: 100%;
        }
          
        .icon {
            min-width: 50px;
            text-align: center;
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
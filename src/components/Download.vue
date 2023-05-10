<template>
    <div class="mx-4">
<router-link to="/" class="text-decoration-none text-dark">
      <div class="logo py-5 d-flex align-items-center ">
        <img src="../assets/a1.png" alt="abstract-logo" />
    <h1 class="fs-4 px-2">Abstract </h1>
    </div>
    </router-link>
    <section class="d-flex justify-content-center py-5 align-items-center">
        <div class="text-center">
        <div class="download-icon py-2">
            <i class="fa-solid fs-1 fa-solid fa-circle-arrow-down"></i>
            </div>
            <h1 class="">Download</h1>
            <p class="py-3">
                The Abstract desktop app is currently only available for macOS.
            </p>
            <section class="text-center">
                <router-link to="/sign" class="text-decoration-none">
            <button class="btn btn-col fw-semibold text-white">Open the web app</button>
                </router-link>    
        </section>
        </div>
    </section>
    </div>
</template>

<script setup>

</script>

<style  scoped>

.logo img{
    width: 35px;
    
}
.download-icon {
    color: rgba(165, 42, 42, 0.456);
}
.btn-col{
    background-color: #4C5FD5;
width: 100%;
}
.btn-col:hover{
    background-color: #354ef2;
}
</style>
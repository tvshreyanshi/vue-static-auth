<template>
    <div>
        <h1>Welcome to home</h1>
        <button @click="logOut()">LogOut</button>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const logOut = () => {
  localStorage.removeItem('useremail');
  localStorage.removeItem('authToken');
  router.push('/login');
};
</script>

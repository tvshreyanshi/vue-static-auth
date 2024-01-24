<template>
  <div class="max-w-xl mx-auto py-12 h-full ">
    <div class="w-full p-5 border-1 rounded-md bg-white">
      <h2 class="text-2xl p-5">LogIn</h2>
      <form class="max-w-sm mx-auto" @submit.prevent="logInUser">
        <div class="mb-5">
          <!-- <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Email</label> -->
          <input type="email" id="email" v-model="loginData.email" class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Email" required>
        </div>
        <div class="mb-5">
          <!-- <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label> -->
          <input type="password" id="password" v-model="loginData.password" class="bg-gray-50 border-1 border-[#d3d3d3] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-100 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Password" required>
        </div>
        <div class="flex items-start mb-5">
          <div class="flex items-center h-5">
            <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required>
          </div>
          <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
        </div>
        <button type="submit" class="text-white bg-blue-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Submit</button>
        <p class="my-4">Not have an Account? <router-link to="/register">Register</router-link></p>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const loginData = ref({
  email: '',
  password: '',
});
const logInUser = () => {
};
</script>

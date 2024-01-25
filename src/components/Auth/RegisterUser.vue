<template>
    <div class="max-w-xl mx-auto py-12 divide-y md:max-w-4xl">
      <div class="mt-8 max-w-md">
        <h2>Register</h2>
        <form class="max-w-sm mx-auto" @submit.prevent="registerUser">
          <div class="mb-5">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <input type="text" id="name" v-model="registerData.name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
          </div>
          <div class="mb-5">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input type="email" id="email" v-model="registerData.email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required>
          </div>
          <div class="mb-5">
            <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
            <textarea id="address" v-model="registerData.address" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <div class="mb-5">
            <label for="mobileNo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile No</label>
            <input type="mobileNo" id="mobileNo" v-model="registerData.mobileNo" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
          </div>
          <div class="mb-5">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="password" id="password" v-model="registerData.password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
          </div>
          <div class="flex items-start mb-5">
            <div class="flex items-center h-5">
              <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required>
            </div>
            <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
          </div>
          <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          <p>already have an Account? <RouterLink to="/">LogIn</RouterLink></p>
        </form>
      </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useToast } from 'vue-toast-notification';

const $toast = useToast();

const registerData = ref({
  name: '',
  email: '',
  password: '',
  address: '',
  mobileNo: '',
});
const registerUser = () => {
  const data = localStorage.getItem('registerUser');
  const userData = data ? JSON.parse(data) : [];
  const emailExists = userData.some((user) => user.email === registerData.value.email);
  if (emailExists) {
    console.log('email is already taken');
    $toast.error('email is already taken!', {
      position: 'top-right',
    });
  } else {
    const register = {
      name: registerData.value.name,
      email: registerData.value.email,
      address: registerData.value.address,
      phone: registerData.value.mobileNo,
      password: registerData.value.password,
    };
    userData.push(register);
    console.log('userdata', userData);
    localStorage.setItem('registerUser', JSON.stringify(userData));
    registerData.value.name = '';
    registerData.value.email = '';
    registerData.value.address = '';
    registerData.value.mobileNo = '';
    registerData.value.password = '';
  }
};
</script>

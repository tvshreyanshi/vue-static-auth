<template>
    <div class="max-w-xl mx-auto py-12 divide-y md:max-w-4xl h-[100%]">
      <div class="w-full p-5 border-1 rounded-md bg-white mt-8 max-w-md mx-auto  items-center justify-center">
        <h2 class="text-2xl p-5">Register</h2>
        <form class="max-w-sm mx-auto" @submit.prevent="registerUser">
          <div class="mb-5">
            <input type="text" placeholder="User Name" id="name" v-model="registerData.name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div class="mb-5">
            <input type="email" id="email" v-model="registerData.email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="User Email" required />
          </div>
          <div class="mb-5">
            <textarea id="address" v-model="registerData.address" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="User Address" />
          </div>
          <div class="mb-5">
            <input type="mobileNo" id="mobileNo" v-model="registerData.mobileNo" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="User Phone Number" required />
          </div>
          <div class="mb-5">
            <input type="password" id="password" v-model="registerData.password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="User Password" required />
          </div>
          <div>
            <button @click="recaptcha">Execute recaptcha</button>
            <!-- <vue-recaptcha-v3
              ref="recaptcha"
              siteKey="your-recaptcha-site-key"
              @verify="recaptcha"
            ></vue-recaptcha-v3> -->
            <p class="text-center">
              <small>This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy"><u>Privacy Policy</u></a> and <a href="https://policies.google.com/terms"><u>Terms of Service</u></a> apply.</small>
          </p>
          </div>
          <div class="flex items-start mb-5">
            <div class="flex items-center h-5">
              <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800">
            </div>
            <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-500">Remember me</label>
          </div>
          <button type="submit" class="text-white bg-blue-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Submit</button>
          <p class="mt-3 font-medium text-gray-900 dark:text-gray-500">Already have an Account? <RouterLink to="/">LogIn</RouterLink></p>
        </form>
      </div>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { useToast } from 'vue-toast-notification';
import { useReCaptcha } from 'vue-recaptcha-v3';

const $toast = useToast();
const router = useRouter();
const { executeRecaptcha, recaptchaLoaded } = useReCaptcha();
const registerData = ref({
  name: '',
  email: '',
  password: '',
  address: '',
  mobileNo: '',
});
const recaptcha = async () => {
  // (optional) Wait until recaptcha has been loaded.
  await recaptchaLoaded();

  // Execute reCAPTCHA with action "login".
  const token = await executeRecaptcha('login');
  console.log('token', token);

  // Do stuff with the received token.
};
const registerUser = () => {
  const data = localStorage.getItem('registerUser');
  const userData = data ? JSON.parse(data) : [];
  const emailExists = userData.some((user) => user.email === registerData.value.email);
  if (emailExists) {
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
    $toast.success('user create Successfully!', {
      position: 'top-right',
    });
    userData.push(register);
    localStorage.setItem('registerUser', JSON.stringify(userData));
    router.push({ path: '/login' });
    registerData.value.name = '';
    registerData.value.email = '';
    registerData.value.address = '';
    registerData.value.mobileNo = '';
    registerData.value.password = '';
  }
};
</script>

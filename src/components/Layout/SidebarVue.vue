<template>
    <div>
        <div class="bg-dark-blue h-screen w-72 p-5 duration-300 relative" :class="isOpen ? 'w-72' : 'w-20'" >
            <i class="fa-solid fa-arrow-left bg-white text-dark-blue text-xl rounded-full p-2 absolute -right-3 top-5 border border-dark-blue cursor-pointer" @click="toggleSidebar()" :class="!isOpen && 'rotate-180'"></i>
            <div class="flex">
                <i class="fa-solid fa-anchor text-white top-10 text-2xl rounded cursor-pointer block float-left mr-2 duration-500" :class="isOpen && 'rotate-[360deg]'"></i>
                <h1 class="text-white origin-left font-medium text-2xl duration-300" :class="!isOpen && 'scale-0'">Vue 3</h1>
            </div>
            <div class="flex items-center rounded-md bg-light-white mt-6 py-2" :class="!isOpen ? 'px-2.5' : 'px-4'">
                <i class="fa-solid fa-magnifying-glass text-white text-lg block float-left cursor-pointer" :class="isOpen && 'mr-2'"></i>
                <input type="search" placeholder="Search" class="text-base bg-transparent w-full text-white focus:outline-none" :class="!isOpen && 'hidden'" />
            </div>
            <div>
                <ul class="pt-2" v-for="(item, index) in sidebarMenu" :key="index">
                    <li class="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2">
                        <span class="text-2xl" v-html="item.icon">
                        </span>
                        <span class="text-base font-medium duration-200" :class="!isOpen && 'hidden'">{{ item.title }}</span>
                        <span v-if="item.subMenu && isOpen"><i class="fa-solid fa-chevron-down" :class="isSubMenuOpen && 'rotate-180'" @click="openSubMenu()"></i></span>
                    </li>
                    <span v-if="item.subMenu && isSubMenuOpen && isOpen">
                        <ul v-for="(subMenu, index) in item.subMenuItems" :key="index">
                            <li class="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-light-white rounded-md">{{ subMenu.title }}</li>
                        </ul>
                    </span>
                </ul>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const isOpen = ref(true);
const isSubMenuOpen = ref(false);

const sidebarMenu = [
  {
    title: 'Dashboard',
    icon: '<i class="fa-solid fa-gauge"></i>',
  },
  {
    title: 'Pages',
    icon: '<i class="fa-regular fa-file-lines"></i>',
  },
  {
    title: 'Media',
    icon: '<i class="fa-regular fa-image"></i>',
  },
  {
    title: 'Projects',
    icon: '<i class="fa-solid fa-file-contract"></i>',
    subMenu: true,
    subMenuItems: [
      {
        title: 'SubMenu 1',
      },
      {
        title: 'SubMenu 2',
      },
      {
        title: 'SubMenu 3',
      },
    ],
  },
  {
    title: 'Analytics',
    icon: '<i class="fa-solid fa-chart-line"></i>',
  },
  {
    title: 'Inbox',
    icon: '<i class="fa-solid fa-inbox"></i>',
  },
  {
    title: 'Profile',
    icon: '<i class="fa-solid fa-user"></i>',
  },
  {
    title: 'Setting',
    icon: '<i class="fa-solid fa-gear"></i>',
  },
  {
    title: 'Logout',
    icon: '<i class="fas fa-sign-out-alt"></i>',
  },
];

const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
};
const openSubMenu = () => {
  isSubMenuOpen.value = !isSubMenuOpen.value;
};

</script>

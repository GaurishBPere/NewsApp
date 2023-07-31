<template>
<header class="bg-white shadow h-16 flex justify-between items-stretch">
      <router-link :to="{name: 'home'}" class="inline-flex items-center h-full px-5">
        Home
      </router-link>

      <div class="flex items-center gap-1">
        <router-link 
        :to="{ name: 'byName' }" 
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-blue-100">
        Search news
        </router-link>
        <router-link 
        :to="{ name: 'byCategory' }"  
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-blue-100">
        Search by letter
        </router-link>
  
      </div>
    </header>
</template>
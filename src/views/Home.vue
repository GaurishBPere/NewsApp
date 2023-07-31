<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 p-8">
        <div class="newsFlexContainer">
        <div v-for="(news,index) of articles" :key="news.source.name" class="bg-white shadow rounded-xl">
            <img :src="news.urlToImage" alt="title" class="rounded-t-xl w-full h-48 object-cover">
            <div class="p-3"> 
                <h3 class="font-semibold">{{ news.title }}</h3>
                <p class="mb-4">{{ news.description }}</p>
                <h3 class="px-2 py-2">Author : {{ news.author }}</h3>
                <h3 class="px-2 py-2">Date : {{ news.publishedAt }}</h3>
                <div>
                    <!-- <router-link :to="{name: 'NewsDetails', params: {id: index, newsDetails: news}}" class="px-3 py-2 rounded border-2 border-blue-600 bg-blue-600 hover:bg-blue-600 hover:text-white"> -->
                    <router-link to="/" class="px-3 py-2 rounded border-2 border-blue-600 bg-blue-600 hover:bg-blue-600 hover:text-white"> 
                        View
                    </router-link>    
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import store from '../store';
import axiosClient from '../axiosClient.js';

const articles = computed(() => store.state.randomNews);

function randomNews() {
    store.dispatch('randomNews')
}

onMounted(() => {
  randomNews()
})



</script>
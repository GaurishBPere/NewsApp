<template>
  <!-- <div class="w-[800px] mx-auto">
    <h1 class="text-5xl font-bold mb-5">{{ newsDetails.title }</h1>}
    <img :src="newsDetails.urlToImage" alt="title" class="rounded-t-xl w-full h-48 object-cover">
    <p class="mb-4">{{ newsDetails.description }}</p>
  </div> -->
</template>

<script>
    export default {
        props:{
          id:{
            type: String|Number,
            required: true,
          },
          newsDetails:{
            type: Object,
            required: true,
          }
        }
    }
</script>
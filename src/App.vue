<script setup>
import { RouterLink, RouterView } from 'vue-router'
import links from './router/index.js'

</script>

<template>
          <div class="flex font-roboto">
            <nav class="flex flex-col w-72 border-r-2 m-5">
              <div v-for="link in links.options.routes" :key="link.name" >
                <router-link :to="link.path" class=" block px-9 py-5  hover:bg-[#DCF1FC] cursor-pointer font-semibold text-lg border-b font-Roboto ">{{link.name}}</router-link>
              </div>
          </nav>
            <RouterView/>
          </div>     
</template>



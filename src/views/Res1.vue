<template>
    <div>
        <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <li v-for="person in people" :key="person.email" class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
      <div class="flex w-full items-center justify-between space-x-6 p-6">
        <div class="flex-1 truncate">
          <div class="flex items-center space-x-3">
            <h3 class="truncate text-sm font-medium text-gray-900">{{ person.name }}</h3>
            <span class="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">{{ person.role }}</span>
          </div>
          <p class="mt-1 truncate text-sm text-gray-500">{{ person.title }}</p>
        </div>
       
      </div>
      <div>
        <div class="-mt-px flex">
          <div class="flex w-0 flex-1 mt-5 px-3">
            <a href="" data-bs-toggle="tooltip" title="Delete"><svg    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9EB3CC" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" 
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg></a>
        <a href="" data-bs-toggle="tooltip" title="Edit"><svg  class="w-6 h-6" fill="none" stroke="#9EB3CC" viewBox="0 0 24 24" 
                                                        xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" 
                                                        stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg></a>  
        </div>
          <!-- <div class="-ml-px flex w-0 flex-1"> -->
            
              <div class="flex divide-x divide-gray-200 mt-1 mr-5">
                <span>view</span>
              <span class="ml-3">Call</span>
              </div>
             
        
          <!-- </div> -->
        </div>
      </div>
    </li>
  </ul>
    </div>

  </template>

<script setup>
import { EnvelopeIcon, PhoneIcon } from '@heroicons/vue/20/solid'

const people = [
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  // More people...
]
</script>
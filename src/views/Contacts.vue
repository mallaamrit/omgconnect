<template>
   
  <div class="w-full px-5 pt-10 rounded overflow-hidden shadow-lg m-5 ">
      <h1 class="border-b py-5 not-italic font-semibold text-sm leading-5">Frequently Asked Questions</h1>
    <div class="w-full max-w-md rounded-2xl bg-white p-2  ">
      <Disclosure v-slot="{ open }">
        <DisclosureButton
          class=" flex w-full justify-between rounded-lg bg-white px-4 py-2 text-left text-sm font-medium  hover:bg-white"
        >
          <span class="font-normal text-sm leading-5 not-italic">What is your refund policy?</span>
          <div class="flex gap-2">
              <div  data-bs-toggle="tooltip" title="Delete">
              <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9EB3CC" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" 
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>
              </div>
    
              <div data-bs-toggle="tooltip" title="Edit">
              <svg  class="w-6 h-6" fill="none" stroke="#9EB3CC" viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" 
              stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
              </div>
              <ChevronUpIcon
              :class="open ? 'rotate-180 transform' : ''"
              class="h-5 w-5 text-[#9EB3CC]"
                  />
          </div>
        </DisclosureButton>
        <DisclosurePanel class="px-4 pt-4 pb-2 font-normal  leading-5 not-italic text-sm text-secondary border-b">
          If you're unhappy with your purchase for any reason, email us within
          90 days and we'll refund you in full, no questions asked.
        </DisclosurePanel>
      </Disclosure>
      
      </div>
<div class="m-5">
 <button class="text-primary font-normal  leading-5 not-italic text-sm"><a href="">Add</a></button>
</div>

     
    
  </div>

     
  
</template>
      
<script setup>
      import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
      import { ChevronUpIcon } from '@heroicons/vue/20/solid'
      </script>
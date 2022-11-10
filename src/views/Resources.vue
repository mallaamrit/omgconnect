<template>
     <div class="flex justify-between rounded overflow-hidden shadow-lg m-5">
        <div class="grid grid-cols-4 gap-8">
           
            <div v-for="item in items" :key="item.title">
               
                <img class="w-full" :src="item.img" alt="Sunset in the mountains">

                <div class=" p-4">
                    <h1 class="text-gray-900 text-lg font-semibold not-italic">{{ item.title }}</h1>

                    <h2 class="font-normal leading-5 not-italic text-secondary">{{ item.desc }}</h2>

                </div>

                <div class="mt-9 flex  w-full justify-between shadow-lg p-7 ">
                    <div class="flex gap-2">
                        <div data-bs-toggle="tooltip" title="Delete">
                            <a href=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="#9EB3CC" class="w-6 h-6 ">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg></a>
                        </div>
                
                        <div data-bs-toggle="tooltip" title="Edit">
                            <a href=""><svg class="w-6 h-6" fill="none" stroke="#9EB3CC" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
                                    </path>
                                </svg></a>
                
                        </div>
                        <div data-bs-toggle="tooltip" title="Archive">
                            <a href=""> <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    strokeWidth={1.5} stroke="#9EB3CC" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                </svg></a>
                
                        </div>
                    </div>
                
                    <div class="flex divide-x divide-gray-400 text-primary">
                        <a href=""><span class="text-xs text-primary font-normal leading-4 float-right">{{ item.list }}</span></a>
                
                    </div>
               
                
                
                                       
                       
                      
                      
                    <!-- </div> -->
                   
              
                </div>
                
            </div>
            <div class="relative border h-52 w-52 text-secondary ">
                <button> <span class="absolute bottom-9 m-6 font-semibold">+</span></button>
               
                <p class="absolute bottom-7 inset-x-6 font-semibold">Add Category</p>
                <p class="absolute  text-sm bottom-2 inset-x-6 font-semibold">Add description</p>
            </div>
           
        </div>
       
     
    </div>
   
</template>


<script>

export default {

   
  

    data() {
        return {
            
            items: [
                {
                    img: '../assets/images/res1.png',
                    title: "Inflation Report",
                    list: 'View all',
                    desc: ' This is dec',
        
                },
                {
                    img: '../assets/images/res2.png',
                    title: "Media Landcape",
                    list: 'View all',
                    desc: ' This is dec',
                 
                },
                {
                    img: '../assets/images/res3.png',
                    title: "POV Documents",
                    list: 'View all',
                    desc: ' This is dec',
                  
                },   
            ]

        }
    }
}

</script>



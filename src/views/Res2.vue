<template>
    <div class="w-full m-5 ">
        <div class="flex justify-between m-2 ">
            <div class="text-2xl font-bold">Media Landscape</div>
           <div><button class="bg-primary rounded text-white px-5 py-3">Edit</button></div>
        </div>
        <div class=" m-2 flex h-96 justify-between gap-3">
            <div class="w-full">
                <img :src="img" alt="" class="w-full border">
                
            </div>
           
            <div class="w-full border">
                <div class="m-5 p-5">
                    <div class="flex gap-1 ">
                        <span><svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="#9EB2CC">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                            </svg>
                        </span>
                        <p class="text-secondary text-xs font-semibold leading-8">2 Aug, 2022</p>
                    </div>
                <h1 class="text-2xl mt-4 not-italic">Video Resource File</h1>
                <p class="text-sm mt-5 leading-4 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia suscipit similique deserunt, eos minus
                    minima pariatur ex itaque hic.
                    Ex nisi, perferendis repudiandae quidem harum voluptate corrupti veniam quos in.</p>
            </div>
                    
        </div>
               
            
    </div>

</div>

</template>

<script>
    export default {
        data() {
            return {
                img: '../assets/images/video.png'
            }
        }
          
        
    }
</script>


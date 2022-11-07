<template>
    <div class="m-9 p-6 border">
        <div v-for="item in items" :key="item.title"> 
            <div  class="flex justify-between border p-4">
                <h1 class="text-gray-900 text-xl font-semibold not-italic">{{ item.title }}</h1>
                <p class="text-md text-skynetblue font-normal leading-4">{{ item.list }}</p>
            </div>
            <div class="p-4 border">
                
                <h3 class="text-lg font-normal not-italic leading-5 inline">{{item.subtitle}}</h3>
                <span class="float-right py-2 px-3 bg-background rounded-full text-green-600">{{item.task}}</span>
                <p class="font-normal py-2 leading-5 not-italic text-skynetsecondaryblue">{{item.desc}}</p>
            </div>
            <div class="p-4">
                
            </div>
            
        </div>
        
    </div>
</template>

<script>
    export default {

        data() {
            return{
                items: [
                    {
                        title: "Onboarding",
                        list: "view all",
                        subtitle: "Welcome to OMG Connect",
                        desc: "This is it you are awesome",
                        task: 'Complete'
                    },
                ]

            }
           
        }
       
        
    }
</script>


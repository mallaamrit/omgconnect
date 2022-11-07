<template>
    <div class="flex justify-between rounded overflow-hidden shadow-lg m-5">
        <div class="grid grid-cols-4 gap-8  ">
            <div v-for="item in items" :key="item.title" class="m-5">
                <img class="w-full" :src="item.img" alt="Sunset in the mountains">

                <div class=" p-4">
                    <h1 class="text-gray-900 text-lg font-semibold not-italic">{{ item.title }}</h1>
                  
                    <h2 class="font-normal leading-5 not-italic text-secondary">{{ item.desc }}</h2>
                
                </div>

                <div class="p-7 shadow-lg">
                    <a href=""><span class="text-md text-primary font-normal leading-4 float-right">{{ item.list }}</span></a>
                </div>
            </div>
            <div class="relative border h-52 w-52 text-secondary ">
                <span class="absolute bottom-9 m-6 font-semibold">+</span>
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
                img: '../assets/images/tran1.png',
                title: "Training",
                list: 'View all',
                desc: ' This is dec',
                updatedDate: '21.02.2022'
            },
            {
                img: '../assets/images/tran2.png',
                title: "Training",
                list: 'View all',
                desc: ' This is dec',
                updatedDate: '21.02.2022'
            },
            {
                img: '../assets/images/tran3.png',
                title: "Training",
                list: 'View all',
                desc: ' This is dec',
                updatedDate: '21.02.2022'
            },
            {
                img: '../assets/images/tran3.png',
                title: "Training",
                list: 'View all',
                desc: ' This is dec',
                updatedDate: '21.02.2022'
            },
            {
                img: '../assets/images/tran3.png',
                title: "Training",
                list: 'View all',
                desc: ' This is dec',
                updatedDate: '21.02.2022'
            },
        ]

    }

}
}
    
</script>





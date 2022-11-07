<template>
    <div class=" m-9 rounded overflow-hidden shadow-lg">
        <div v-for="item in items" :key="item.title">
        <img class="w-full" :src="item.img" alt="Sunset in the mountains">

        <div class="flex justify-between border p-4">
            <h1 class="text-gray-900 text-xl font-semibold not-italic">{{ item.title }}</h1>
            <p class="text-md text-skynetblue font-normal leading-4">{{ item.list }}</p>
        
        </div>
        <div class="px-6 py-4">
            <div class="font-normal leading-5 not-italic text-skynetsecondaryblue">{{item.updatedDate}}</div>
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
                    img:'../assets/images/img1.png',
                    title: "Training",
                    list: 'View all',
                    updatedDate: '21.02.2022'
                },
            ]

        }

    }
}
</script>


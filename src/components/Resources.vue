<template>
    <div class="m-9 p-6 border">
        <div v-for="item in items" :key="item.title">
            <div  class="flex justify-between border p-4">
                <h1 class="text-gray-900 text-xl font-semibold not-italic">{{ item.title }}</h1>
                <p class="text-md text-skynetblue font-normal leading-4">{{ item.list }}</p>
            </div>
            <div class="flex justify-between p-4 border">
                <h2 class="text-lg font-normal not-italic leading-5">{{ item.desc }}</h2>
                <p class="font-normal text-sm leading-4 text-skynetsecondaryblue">{{ item.date }}</p>
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
                    title: "Resources",
                    list: "view all",
                    desc: "Recently added resources name",
                    date: "21.10.2020",
                },
            ]

        }

    }


}
</script>
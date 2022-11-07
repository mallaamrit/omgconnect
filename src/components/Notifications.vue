<template>
    <div class="m-9 p-6 border">
        <div v-for="item in items" :key="item.title">
            <div class="flex justify-between border p-4">
                <h1 class="text-gray-900 text-xl font-semibold not-italic">{{ item.title }}</h1>
                <p class="text-md text-skynetblue font-normal leading-4">{{ item.list }}</p>
            </div>
            <div class="border p-4">
                <h3 class="text-base font-semibold not-italic leading-5">{{ item.subtitle }}</h3>
                <p class="font-normal leading-5 not-italic text-skynetsecondaryblue">{{ item.desc }}</p>
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
                   
                    title: "Notifications",
                    list: 'View all',
                    subtitle: 'Notifications here',
                    desc: 'this is it'
                },
            ]

        }

    }


}
</script>
<template>
    
    <div class="mt-5">
        <div class="flex justify-end mr-12">
            <button class="bg-blue-500 hover:bg-blue-700 block text-white font-bold py-4 px-8 border border-blue-700 rounded">
                Button
            </button>
        </div>

        <div class=" p-6 mt-20">
            <div class="grid grid-cols-4 border">
                <Resources/>
                <Training />
                <Contacts />
                <Notifications />
                <Onboarding /> 
            </div>
        </div>
        
    </div>    
   
</template>

<script>
import Contacts from '../components/Contacts.vue'
import Notifications from '../components/Notifications.vue'
import Onboarding from '../components/Onboarding.vue'
import Resources from '../components/Resources.vue'
import Training from '../components/Training.vue'
    
    export default {
    components: {
        Resources,
        Onboarding,
        Resources,
        Training,
        Contacts,
        Notifications
    },
        
    }
</script>


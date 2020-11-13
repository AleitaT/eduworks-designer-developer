<template>
    <!-- section is a bulma class -->
    <div class="section">
        <img
            alt="Vue logo"
            src="../assets/logo.png">
        <div class="section">
            <!-- example input using v-model -->
            <input v-model="myInformation">
        </div>
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
    name: 'Home',
    components: {
        HelloWorld
    },
    data() {
        return {
            myInformation: 'example data property'
        };
    }
};
</script>

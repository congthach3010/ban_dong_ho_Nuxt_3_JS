<template lang="">
    <div>
        <!-- <span>{{counter.count}}</span> -->
        <button class="btn btn-primary" v-on:click="token.removeToken()">Theem</button>
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'admin',
    middleware: 'auth'
})
const token = useTokenStore();

</script>
<style lang="">
    
</style>
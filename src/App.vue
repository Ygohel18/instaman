<template>
<div class="container">
    <router-view></router-view>
</div>
</template>

<script>
import services from './services'

export default {
    computed: services,
    data () {
        return {
            apiUrl: '/api/',
        }
    }
}
</script>

<style scoped></style>

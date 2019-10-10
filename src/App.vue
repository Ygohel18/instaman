<template>
<div class="container">
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

<style scoped>

</style>

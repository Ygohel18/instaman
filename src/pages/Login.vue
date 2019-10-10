<template>
<div>
    <div>
    </div>
    <router-link to="/accounts/new" tag="button">TEST</router-link>
</div>
</template>

<script>
export default {
    data: function () {
        return {
        }
    },
    methods: {
    },
    notifications: {
        successNotify: {
            title: '',
            message: 'Successful finished',
            type: 'success'
        },
        errorNotify: {
            title: '',
            message: 'Unknown error',
            type: 'error'
        }
    }
}
</script>

<template>
<div>
    <div>LOGIN</div>
    <router-link to="/accounts/new" tag="button">TEST</router-link>
</div>
</template>

<script>
export default {
    data: function () {
        return {
        }
    },
    beforeCreate() {
        this.$root.Context.get().then(resp => {
            if (resp.body.session) {
                this.$router.push('/')
            }
        })
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

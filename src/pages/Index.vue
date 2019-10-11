<template>
    <div>INDEX</div>
</template>

<script>
import AuthMixin from 'src/mixins/AuthMixin'

export default {
    data: function () {
        return {
        }
    },
    mixins: [AuthMixin],
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

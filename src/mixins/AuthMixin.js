export default {
    beforeCreate() {
        this.$root.Context.get().then(resp => {
            if (!resp.body.session) {
                this.$router.push('/login')
            }
        })
    }
}

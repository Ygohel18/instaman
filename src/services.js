export default {
    Context() {
        return this.$resource(this.apiUrl + 'context')
    },
}

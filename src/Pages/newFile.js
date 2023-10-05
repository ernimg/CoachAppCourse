export default (await import('vue')).defineComponent({
    components: { RequestItem, BaseDialog },
    data() {
        return {
            isLoading: false,
            err: null
        };
    },
    computed: {
        recivedRequests() {
            return this.$store.getters['requests/getRequests'];
        },
        hasRequests() {
            return this.$store.getters['requests/hasRequests'];
        },
    },
    methods: {
        async loadRequest() {
            this.isLoading = true;
            try {
                await this.$store.dispatch('requests/fetchRequests');
            } catch (error) {
                this.err = error.message || 'Something went wrong!';
            }
            this.isLoading = false,
            ;
        }
    },
});

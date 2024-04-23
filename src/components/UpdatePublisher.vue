<template>
    <q-btn icon="fas fa-reply" to="/publishers"</q-btn>
    <q-form class="column q-pa-md shadow-2" @submit.prevent="submitForm">
        <q-input outlined name="name" placeholder="Book Title" v-model="publisher.name"/>
        <q-input outlined name="address" placeholder="Dia chi noi o" v-model="publisher.address"/>
        <q-input outlined name="image" placeholder="Ảnh sách" v-model="publisher.image"/>
        <q-btn type="submit" label="Cập Nhật Nhà Xuất Bản" color="primary" class="q-mt-md"/>
    </q-form>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            publisher: {
                name: '',
                address:'',
                image: ''
            }
        };
    },
    mounted() {
        // Extract parameters from the URL and set them as initial values for book object
        const params = this.$route.query;
        this.publisher.name = params.name || '';
        this.publisher.address = params.address || '';
        this.publisher.image = params.image || '';
    },
    methods: {
        async submitForm() {
            try {
                const response = await axios.put('http://localhost:3000/api/publisher/' + this.$route.params.id, this.publisher);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        }
    }
};
</script>
<style scoped>
.icon-button {
    margin-right: 10px; /* Khoảng cách giữa icon và nội dung khác */
}
</style>
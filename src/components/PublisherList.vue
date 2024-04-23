<template>
    <div class="publisherlist">
        <div class="row">
            <div class="publishercard" v-for="publisher in publishers" :key="publisher.id" >
                <PublisherCard v-bind="publisher"/>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import PublisherCard from '@/components/PublisherCard.vue';

export default {
    components: {
        PublisherCard
    },
    data() {
        return {
            publishers: []
        };
    },
    async created() {
        try {
            const response = await axios.get('http://localhost:3000/api/publisher/');
            this.publishers = response.data;
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }
};
</script>

<style scoped>
.publisher-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.publishercard {
    flex: 1 0 200px;
    margin: 25px;
    max-width: 300px;
}
</style>
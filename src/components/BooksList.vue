<template>
    <div class="booklist">
        <div class="row">
            <div class="bookcard" v-for="book in books" :key="book.id" >
                <BookCard v-bind="book"/>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import BookCard from '@/components/BookCard.vue';

export default {
    components: {
        BookCard
    },
    data() {
        return {
            books: []
        };
    },
    async created() {
        try {
            const response = await axios.get('http://localhost:3000/api/book/');
            this.books = response.data;
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }
};
</script>

<style scoped>
.book-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.bookcard {
    flex: 1 0 200px;
    margin: 25px;
    max-width: 300px;
}
</style>
<template>
    <div class="add-publisher-form q-pa-md">
        <q-form class="column q-pa-md shadow-2" @submit.prevent="submitForm">
            <q-input outlined name="name" placeholder="Tên tác phẩm" v-model="publisher.name"/>
            <q-input outlined name="address" placeholder="Địa chỉ" v-model="publisher.address"/>
            <q-input outlined name="image" placeholder="Ảnh sách" v-model="publisher.image"/>
            <q-btn type="submit" label="Thêm Nhà Xuất Bản" color="primary" class="q-mt-md"/>
        </q-form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      publisher: {
        name: '',
        address: '',
        image: ''
 
      }
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post('http://localhost:3000/api/publisher/', this.publisher);
        console.log(response.data);
      } catch (error) {
        console.log(this.publisher)
        console.error(error);
      }
    }
  }
};
</script>

<style>
.add-publisher-form {
    padding-top: 5%;
    padding-left: 30%;
    width: 700px;
}

</style>
<template lang="vi">
    <div>
      <div class="container mt-5">
        <div class="card shadow-sm">
          <div class="card-body text-center">
            <input 
              v-model="userInput" 
              type="text" 
              class="form-control mb-3" 
              placeholder="Nhập dữ liệu vào đây" 
            />
            <p class="fs-5 text-success">Giá trị bạn nhập: {{ userInput }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: "Lab5Bai2",
    setup() {
      const userInput = ref('FPL');
      return { userInput };
    }
  };
  </script>
  
  <style lang="css">
  </style>
  
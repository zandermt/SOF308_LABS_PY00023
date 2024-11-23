<template lang="vi">
    <div>
      <div class="container mt-5">
        <div class="col-lg-6 mx-auto">
          <h1 class="text-primary mb-4">Thông tin cá nhân</h1>
          <form>
            <div class="mb-3">
              <label for="name" class="form-label">Họ và Tên:</label>
              <input 
                v-model="userInfo.name" 
                type="text" 
                class="form-control shadow-sm" 
                id="name" 
                placeholder="Nhập họ và tên" 
              />
            </div>
            <div class="mb-3">
              <label for="age" class="form-label">Tuổi:</label>
              <input 
                v-model="userInfo.age" 
                type="number" 
                class="form-control shadow-sm" 
                id="age" 
                placeholder="Nhập tuổi" 
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email:</label>
              <input 
                v-model="userInfo.email" 
                type="email" 
                class="form-control shadow-sm" 
                id="email" 
                placeholder="Nhập email" 
              />
            </div>
          </form>
  
          <!-- Hiển thị thông tin ngay sau khi nhập -->
          <div class="info-display mt-4 p-4 bg-primary opacity-75 text-white rounded shadow-lg">
            <h2 class="mb-3">Thông tin đã nhập:</h2>
            <p><strong>Họ và Tên:</strong> {{ userInfo.name || 'Chưa nhập' }}</p>
            <p><strong>Tuổi:</strong> {{ userInfo.age || 'Chưa nhập' }}</p>
            <p><strong>Email:</strong> {{ userInfo.email || 'Chưa nhập' }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { reactive } from 'vue';
  
  export default {
    name: "Lab5Bai3",
    setup() {
      const userInfo = reactive({
        name: '',
        age: null,
        email: ''
      });
  
      return { userInfo };
    }    
  };
  </script>
  
  <style lang="css">
  </style>
  
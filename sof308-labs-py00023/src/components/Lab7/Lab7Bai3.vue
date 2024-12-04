<template>
  <div class="container">
    <div class="col-md-6 col-sm-12 p-4">
      <h3 class="text-center mb-4">Form Đăng ký</h3>
      <form @submit.prevent="register" class="bg-light p-4 rounded shadow-sm">
        <div class="mb-3">
          <label>Họ tên:</label>
          <input
            v-model="user.fullName"
            class="form-control"
            placeholder="Nhập họ tên"
          />
        </div>
        <div class="mb-3">
          <label>Email:</label>
          <input
            v-model="user.email"
            type="email"
            class="form-control"
            placeholder="Nhập email"
          />
        </div>
        <div class="mb-3">
          <label>Mật khẩu:</label>
          <input
            v-model="user.password"
            type="password"
            class="form-control"
            placeholder="Nhập mật khẩu"
          />
        </div>
        <div class="mb-3">
          <label>Ngày sinh:</label>
          <input v-model="user.birthDate" type="date" class="form-control" />
        </div>
        <button type="submit" class="btn btn-success w-100 mt-3">
          Đăng ký
        </button>
      </form>
    </div>

    <div class="col-md-6 col-sm-12 mt-4 mt-md-0">
      <div v-if="registeredUser" class="bg-light p-4 rounded shadow-sm">
        <h4 class="text-center mb-3">Thông tin đã đăng ký:</h4>
        <p><strong>Họ tên:</strong> {{ registeredUser.fullName }}</p>
        <p><strong>Email:</strong> {{ registeredUser.email }}</p>
        <p><strong>Ngày sinh:</strong> {{ registeredUser.birthDate }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Lab7Bai3",
  setup() {
    const user = ref({
      fullName: "",
      email: "",
      password: "",
      birthDate: "",
    });
    const registeredUser = ref(null);

    const register = () => {
      registeredUser.value = { ...user.value }; // Save user data
      // Clear the form after registration
      user.value = { fullName: "", email: "", password: "", birthDate: "" };
    };

    return {
      user,
      registeredUser,
      register,
    };
  },
};
</script>

<style scoped>
form {
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.container {
  padding-left: 400px;
}

h3 {
  font-size: 1.75rem;
  font-weight: 600;
}

input[type="email"],
input[type="password"],
input[type="date"],
input[type="text"] {
  border-radius: 8px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
}

button {
  border-radius: 8px;
}

.text-center {
  text-align: center;
}

.bg-light {
  background-color: #f8f9fa !important;
}

.btn-success {
  background-color: #28a745;
  border-color: #28a745;
}

.btn-success:hover {
  background-color: #218838;
  border-color: #1e7e34;
}
</style>

<template>
  <div class="container align-items-center">
    <div v-if="!isLoggedIn" class="p-5">
      <h3 class="text-center mb-4">Form Đăng nhập</h3>
      <form @submit.prevent="login" class="bg-light p-4 rounded shadow-sm">
        <div class="mb-3">
          <label>Email:</label>
          <input
            type="email"
            class="form-control"
            v-model="email"
            placeholder="Nhập email"
          />
          <p v-if="emailError" class="text-danger">{{ emailError }}</p>
        </div>
        <div class="mb-3">
          <label>Mật khẩu:</label>
          <input
            type="password"
            class="form-control"
            v-model="password"
            placeholder="Nhập mật khẩu"
          />
          <p v-if="passwordError" class="text-danger">{{ passwordError }}</p>
        </div>
        <button type="submit" class="btn btn-primary w-100">Đăng nhập</button>
      </form>
    </div>
    <div v-else class="p-5 text-center">
      <h3>Chào mừng, {{ email }}!</h3>
      <button @click="logout" class="btn btn-danger w-100 mt-3">
        Đăng xuất
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Lab7Bai2",
};
</script>

<script setup>
import { ref } from "vue";
const isLoggedIn = ref(false);
const email = ref("");
const password = ref("");
const emailError = ref("");
const passwordError = ref("");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const login = () => {
  // Reset thông điệp lỗi
  emailError.value = "";
  passwordError.value = "";

  // Validate email
  if (!email.value) {
    emailError.value = "Email là bắt buộc.";
  } else if (!emailRegex.test(email.value)) {
    emailError.value = "Vui lòng nhập email hợp lệ.";
  }

  // Validate mật khẩu
  if (!password.value) {
    passwordError.value = "Mật khẩu là bắt buộc.";
  }

  // Nếu không có lỗi, xử lý login
  if (!emailError.value && !passwordError.value) {
    isLoggedIn.value = true;
  }
};

const logout = () => {
  isLoggedIn.value = false;
  email.value = "";
  password.value = "";
  emailError.value = "";
  passwordError.value = "";
};
</script>

<style scoped>
form {
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h3 {
  font-size: 1.75rem;
  font-weight: 600;
}

input[type="email"],
input[type="password"] {
  border-radius: 8px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
}

button {
  border-radius: 8px;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #004085;
}

.btn-danger {
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-danger:hover {
  background-color: #c82333;
  border-color: #bd2130;
}

.text-danger {
  color: red;
}
</style>

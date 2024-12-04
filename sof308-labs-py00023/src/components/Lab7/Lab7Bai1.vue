<template>
  <div class="col-sm-4 p-5 container align-items-center">
    <h3 class="text-center mb-4">Quản lý công việc</h3>

    <!-- Form thêm công việc -->
    <form @submit.prevent="addList" class="bg-light p-4 rounded shadow-sm">
      <div class="mb-3">
        <label class="form-label">Tên công việc:</label>
        <input
          type="text"
          class="form-control"
          v-model="newToDo"
          placeholder="Nhập tên công việc"
        />
      </div>
      <button type="submit" class="btn btn-success w-100">
        Thêm công việc
      </button>
    </form>

    <!-- Danh sách công việc -->
    <ul class="list-group mt-4">
      <li
        class="list-group-item d-flex justify-content-between align-items-center shadow-sm mb-2"
        v-for="(job, index) in jobs"
        :key="index"
      >
        <span class="job-text">{{ job }}</span>
        <button class="btn btn-danger btn-sm" @click="removeList(index)">
          <i class="fas fa-trash"></i> Xóa
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Lab7Bai1",
};
</script>

<script setup>
import { ref } from "vue";

// Khai báo các biến phản ứng
const newToDo = ref("");
const jobs = ref(["Ăn sáng", "Đi học", "Chơi bóng rổ"]);

// Hàm thêm công việc mới
const addList = () => {
  if (newToDo.value.trim()) {
    jobs.value.push(newToDo.value.trim());
    newToDo.value = "";
  }
};

// Hàm xóa công việc
const removeList = (index) => {
  jobs.value.splice(index, 1);
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

input[type="text"] {
  border-radius: 8px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
}

button {
  border-radius: 8px;
}

.btn-success {
  background-color: #28a745;
  border-color: #28a745;
}

.btn-success:hover {
  background-color: #218838;
  border-color: #1e7e34;
}

.list-group-item {
  background-color: #fff;
  border: 1px solid #ddd;
  transition: background-color 0.3s ease;
}

.list-group-item:hover {
  background-color: #f1f1f1;
}

.job-text {
  font-size: 1.1rem;
}

.btn-danger {
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-danger:hover {
  background-color: #c82333;
  border-color: #bd2130;
}

.fas {
  margin-right: 5px;
}
</style>

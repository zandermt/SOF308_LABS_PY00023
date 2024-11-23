<template lang="vi">
    <div class="container mt-5">
      <!-- Tiêu đề -->
      <h1 class="text-center mb-4 text-primary">Quản lý sinh viên</h1>
  
      <!-- Form thêm/sửa -->
      <div class="card shadow mb-4 w-100">
        <div class="card-header bg-primary text-white">
          <h4 class="mb-0">{{ isEditing ? "Chỉnh sửa sinh viên" : "Thêm sinh viên mới" }}</h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="saveUser">
            <div class="mb-3">
              <label class="form-label">Tên:</label>
              <input
                type="text"
                v-model="student.name"
                class="form-control"
                placeholder="Nhập tên sinh viên"
                required
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Điểm:</label>
              <input
                type="number"
                v-model="student.score"
                class="form-control"
                placeholder="Nhập điểm (0-10)"
                required
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Ngày sinh:</label>
              <input
                type="date"
                v-model="student.dob"
                class="form-control"
                required
              />
            </div>
            <div class="d-flex justify-content-between">
              <button type="submit" class="btn btn-success">
                {{ isEditing ? "Cập nhật" : "Thêm" }}
              </button>
              <button type="button" class="btn btn-secondary" @click="resetForm">
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
  
      <!-- Danh sách sinh viên -->
      <div class="card shadow">
        <div class="card-header bg-secondary text-white">
          <h4 class="mb-0 text-center">Danh sách sinh viên</h4>
        </div>
        <div class="card-body p-0">
          <div class="table-responsive">
            <table class="table table-striped table-hover table-bordered mb-0 w-100">
              <thead class="table-primary">
                <tr>
                  <th style="width: 5%">#</th>
                  <th style="width: 35%">Tên</th>
                  <th style="width: 15%">Điểm</th>
                  <th style="width: 25%">Ngày sinh</th>
                  <th style="width: 20%">Hành động</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(student, index) in students" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ student.name }}</td>
                  <td>{{ student.score }}</td>
                  <td>{{ formatDate(student.dob) }}</td>
                  <td>
                    <div class="d-flex justify-content-center gap-2">
                      <button class="btn btn-warning btn-sm" @click="editStudent(index)">
                        Sửa
                      </button>
                      <button class="btn btn-danger btn-sm" @click="deleteStudent(index)">
                        Xóa
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
import { ref } from "vue";

export default {
  name: "Lab5Bai4",
  setup() {
    const students = ref([
      { name: "Trương Minh Tiến", score: 9, dob: "2000-01-01" },
      { name: "Hồ Uyển Nhi", score: 10, dob: "2000-05-15" },
    ]);

    const student = ref({ name: "", score: null, dob: "" });
    const isEditing = ref(false);
    const editingIndex = ref(null);

    const saveUser = () => {
      if (isEditing.value) {
        students.value[editingIndex.value] = { ...student.value };
        isEditing.value = false;
        editingIndex.value = null;
      } else {
        students.value.push({ ...student.value });
      }
      resetForm();
    };

    const editStudent = (index) => {
      student.value = { ...students.value[index] };
      isEditing.value = true;
      editingIndex.value = index;
    };

    const deleteStudent = (index) => {
      students.value.splice(index, 1);
    };

    const resetForm = () => {
      student.value = { name: "", score: null, dob: "" };
      isEditing.value = false;
      editingIndex.value = null;
    };

    const formatDate = (date) => {
      return new Date(date).toLocaleDateString("vi-VN");
    };

    return {
      students,
      student,
      isEditing,
      editingIndex,
      saveUser,
      editStudent,
      deleteStudent,
      resetForm,
      formatDate,
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
}

h1 {
  font-size: 2.5rem;
}

button {
  border-radius: 0.25rem !important;
}

.gap-2 {
  gap: 0.5rem;
}
</style>

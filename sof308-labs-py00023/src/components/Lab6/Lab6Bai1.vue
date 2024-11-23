<template lang="vi">
    <div class="container mt-5">
      <div class="card shadow">
        <div class="card-header bg-primary text-white text-center">
          <h3>Nhập điểm của bạn</h3>
        </div>
        <div class="card-body">
          <form>
            <div class="mb-3">
              <label for="score" class="form-label">Điểm số (0 - 10):</label>
              <input 
                type="number" 
                id="score" 
                class="form-control" 
                v-model="score" 
                min="0" 
                max="10" 
                placeholder="Nhập điểm của bạn" 
              />
            </div>
          </form>
          <div class="alert alert-info mt-3 text-center" v-if="score >= 9">
            <strong>Xuất sắc!</strong>
          </div>
          <div class="alert alert-success mt-3 text-center" v-else-if="score >= 8">
            <strong>Giỏi!</strong>
          </div>
          <div class="alert alert-warning mt-3 text-center" v-else-if="score >= 6.5">
            <strong>Khá!</strong>
          </div>
          <div class="alert alert-secondary mt-3 text-center" v-else-if="score >= 5">
            <strong>Trung bình!</strong>
          </div>
          <div class="alert alert-danger mt-3 text-center" v-else>
            <strong>Yếu!</strong>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
import { ref } from "vue";
export default {
  name: "Lab6Bai1",
  setup() {
    const score = ref(0);
    return { score };
  },
};
</script>

<style lang="css"></style>

<template lang="vi">
    <div class="container mt-5">
      <div class="card shadow">
        <div class="card-header bg-primary text-white text-center">
          <h3>Nhập tháng để xác định mùa</h3>
        </div>
        <div class="card-body">
          <form>
            <div class="mb-3">
              <label for="month" class="form-label">Tháng (1 - 12):</label>
              <input 
                type="number" 
                id="month" 
                class="form-control" 
                v-model="month" 
                min="1" 
                max="12" 
                placeholder="Nhập tháng" 
              />
            </div>
          </form>
          <div class="alert alert-info mt-3 text-center" v-if="month >= 3 && month <= 5">
            <strong>Mùa Xuân!</strong>
          </div>
          <div class="alert alert-success mt-3 text-center" v-else-if="month >= 6 && month <= 8">
            <strong>Mùa Hè!</strong>
          </div>
          <div class="alert alert-warning mt-3 text-center" v-else-if="month >= 9 && month <= 11">
            <strong>Mùa Thu!</strong>
          </div>
          <div class="alert alert-secondary mt-3 text-center" v-else-if="month === 12 || month <= 2">
            <strong>Mùa Đông!</strong>
          </div>
          <div class="alert alert-danger mt-3 text-center" v-else>
            <strong>Vui lòng nhập tháng từ 1 đến 12!</strong>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
import { ref } from "vue";

export default {
  name: "Lab6Bai2",
  setup() {
    const month = ref(0);
    return { month };
  },
};
</script>

<style lang="css"></style>

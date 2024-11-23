<template lang="vi">
    <div>
      <div class="container mt-5">
        <div class="card shadow-sm">
          <div class="card-body text-center">
            <p class="mb-4 fs-5 fw-semibold text-primary">{{ message }}</p>
            <button class="btn btn-primary btn-lg" @click="updateMessage">Thay đổi thông điệp</button>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
import { ref } from "vue";

export default {
  name: "Lab5Bai1",
  setup() {
    const message = ref("Thông điệp ban đầu");
    const updateMessage = () => {
      message.value = "Thông điệp đã được thay đổi!";
    };

    return { message, updateMessage };
  },
};
</script>

<style lang="css"></style>

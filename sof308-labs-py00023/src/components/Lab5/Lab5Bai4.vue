<template lang="vi">
    <div class="container my-4">
      <h2 class="text-center mb-4">Quản lý bài viết</h2>
  
      <!-- Form tạo bài viết -->
      <div class="card p-4 shadow-sm mb-4">
        <Lab5Bai4CreatePost @add-post="addPost" />
      </div>
  
      <!-- Danh sách bài viết -->
      <div class="card p-4 shadow-sm">
        <Lab5Bai4PostList :posts="posts" />
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import Lab5Bai4CreatePost from "./Lab5Bai4CreatePost.vue";
  import Lab5Bai4PostList from "./Lab5Bai4PostList.vue";
  
  export default {
    name: "Lab5Bai4",
    components: { Lab5Bai4CreatePost, Lab5Bai4PostList },
    setup() {
      const posts = ref([]);
  
      function addPost(post) {
        posts.value.push(post);
      }
  
      return {
        posts,
        addPost,
      };
    },
  };
  </script>
  
  <style>
  /* Thêm một chút khoảng cách cho thẻ h2 */
  h2 {
    font-size: 2rem;
    font-weight: bold;
  }
  </style>
  
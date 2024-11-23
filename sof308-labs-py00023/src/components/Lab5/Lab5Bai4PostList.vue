<template lang="vi">
    <div>
      <h3 class="mb-3">Danh sách bài viết</h3>
      <div v-if="posts.length === 0" class="text-center text-muted">
        Không có bài viết nào.
      </div>
      <div v-else>
        <div v-for="(post, index) in posts" :key="index" class="card mb-3 shadow-sm">
          <div class="card-body">
            <h5 class="card-title text-primary">{{ post.title }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Tác giả: {{ post.author }}</h6>
            <p class="card-text">{{ post.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Lab5Bai4PostList",
    props: {
      posts: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style>
  </style>
  
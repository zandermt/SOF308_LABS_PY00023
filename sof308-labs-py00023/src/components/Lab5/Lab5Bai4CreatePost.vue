<template lang="vi">
    <div>
      <h3 class="mb-3">Tạo bài viết mới</h3>
      <form @submit.prevent="submitPost">
        <div class="mb-3">
          <label for="title" class="form-label">Tiêu đề bài viết</label>
          <input
            type="text"
            id="title"
            v-model="title"
            class="form-control"
            placeholder="Nhập tiêu đề bài viết"
          />
        </div>
        <div class="mb-3">
          <label for="author" class="form-label">Tên tác giả</label>
          <input
            type="text"
            id="author"
            v-model="author"
            class="form-control"
            placeholder="Nhập tên tác giả"
          />
        </div>
        <div class="mb-3">
          <label for="content" class="form-label">Nội dung bài viết</label>
          <textarea
            id="content"
            v-model="content"
            class="form-control"
            placeholder="Nhập nội dung bài viết"
            rows="5"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary w-100">Đăng bài</button>
      </form>
    </div>
  </template>

<script>
import { ref } from "vue";

export default {
  name: "Lab5Bai4CreatePost",
  emits: ["add-post"], // Khai báo emits ở đây
  setup(props, { emit }) {
    // Nhận emit từ context
    const title = ref("");
    const content = ref("");
    const author = ref("");

    function submitPost() {
      if (title.value && content.value && author.value) {
        const newPost = {
          title: title.value,
          content: content.value,
          author: author.value,
        };

        emit("add-post", newPost);

        title.value = "";
        content.value = "";
        author.value = "";
      } else {
        alert("Vui lòng điền đầy đủ thông tin bài viết!");
      }
    }

    return {
      title,
      content,
      author,
      submitPost,
    };
  },
};
</script>

<style>
button {
  margin-top: 10px;
}
</style>

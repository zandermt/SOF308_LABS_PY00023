<template lang="vi">
    <div>
      <div class="container mt-5">
        <h1 class="text-center mb-4">Kiến thức sức khỏe cộng đồng</h1>
        <div class="row">
          <div class="col-md-4 mb-4" v-for="(item, index) in items" :key="index">
            <div class="card h-100 shadow-sm">
              <img
                :src="item.image"
                alt="Hình ảnh"
                class="card-img-top custom-img"
              />
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-text flex-grow-1">{{ item.content }}</p>
                <button class="btn btn-info w-100 mt-2">Xem chi tiết</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
import { ref } from "vue";

import img1 from "../../assets/orange_300x300.jpg";
import img2 from "../../assets/sesameoil_300x300.jpg";
import img3 from "../../assets/spinach_300x300.jpg";

export default {
  name: "Lab6Bai3",
  setup() {
    const items = ref([
      {
        title: "8 loại rau củ quả giàu canxi",
        content:
          "Canxi là khoáng chất cần thiết đối với cơ thể người. Có nhiều cách để bổ sung canxi, trong đó bổ sung qua đường ăn uống là cách tốt nhất...",
        image: img1,
      },
      {
        title: "Các loại gia vị tốt cho sức khỏe",
        content:
          "Một số loại gia vị cung cấp nhiều polyphenol chống oxy hóa cao hơn các loại gia vị quen thuộc khác...",
        image: img2,
      },
      {
        title: "9 loại đậu bổ dưỡng nên dùng nhiều",
        content:
          "Đậu lăng, đậu nành, đậu phộng, đậu Hà Lan giàu chất xơ, protein cùng nhiều vitamin và khoáng chất...",
        image: img3,
      },
    ]);

    return {
      items,
    };
  },
};
</script>

<style lang="css">
.custom-img {
  height: 200px;
  object-fit: cover;
}
</style>

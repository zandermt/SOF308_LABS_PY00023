<template>
  <div>
    <h2 class="text-center">Bảng Thành Phần Dinh Dưỡng</h2>
    <div class="d-flex justify-content-center">
      <table class="table table-bordered">
        <thead>
          <tr class="align-middle text-center">
            <th rowspan="2">Thành phần</th>
            <th colspan="2">Giá trị</th>
          </tr>
          <tr>
            <th>Khối lượng</th>
            <th>% DV*</th>
          </tr>
        </thead>
        <tbody class="tbody">
          <tr>
            <td>Calories</td>
            <td>200 kcal</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>Chất Béo</td>
            <td>9 g</td>
            <td>14%</td>
          </tr>
          <tr>
            <td>Chất Béo Bão Hoà</td>
            <td>4 g</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>Chất Đạm</td>
            <td>8 g</td>
            <td>16%</td>
          </tr>
          <tr>
            <td>Chất xơ</td>
            <td>5 g</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>Đường</td>
            <td>12 g</td>
            <td>-</td>
          </tr>
          <tr>
            <td rowspan="2" class="align-middle">Vitamin</td>
            <td>Vitamin C</td>
            <td>25%</td>
          </tr>
          <tr>
            <td>Vitamin D</td>
            <td>10%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Lab2Bai1",
};
</script>

<style>
h2 {
  color: red;
}
table {
  max-width: 500px;
}
thead th {
  background-color: #ffc107 !important;
}
</style>

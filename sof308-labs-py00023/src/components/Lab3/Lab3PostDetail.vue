<template>
  <div>
    <div class="container-fluid">
      <nav class="row bg-info bg-gradient bg-opacity-25 p-2">
        <nav class="navbar navbar-expand-sm navbar-dark">
          <a class="navbar-brand" href="../Lab3/Sof308Lab3">
            <img
              src="@/assets/logo-energy-pilates.png"
              alt=""
              class="navbar-logo"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link" href="../Lab3/Lab3Post"
                  ><i class="fa-solid fa-list"></i> Bài viết</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"
                  ><i class="fa-solid fa-film"></i> Video</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"
                  ><i class="fa-solid fa-circle-info"></i> Giới thiệu</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"
                  ><i class="fa-solid fa-calendar-days"></i> Sự kiện</a
                >
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  ><i class="fa-solid fa-user"></i> Tài khoản</a
                >
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Đăng nhập</a></li>
                  <li><a class="dropdown-item" href="#">Quên mật khẩu</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Đăng ký thành viên</a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul class="navbar-nav d-flex navbar-language">
              <li class="nav-item">
                <a class="nav-link" href="#">Tiếng Việt</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Tiếng Anh</a>
              </li>
            </ul>
          </div>
        </nav>
      </nav>
    </div>

    <br />

    <div class="container">
      <div class="row">
        <div class="col-8">
          <h1 class="text-info">
            Phương pháp tập Pilates giúp phục hồi chấn thương cột sống
          </h1>
          <img class="imgdetail" src="@/assets/tap-pilates1.jpg" alt="" />
          <br />
          <br />
          <p>
            Tập Pilates có thể vẫn còn khá xa lạ với người Việt, nhưng tại các
            nước phương Tây thì đây chính là phương pháp tập thể dục giúp duy
            trì vóc dáng, tăng cường ý chí và cải thiện sự linh hoạt, dẻo dai
            cho người tập. Đặc biệt, các bài tập Pilates còn có khả năng trị đau
            lưng, là giải pháp hiệu quả để phục hồi chấn thương cột sống. Sau
            đây hãy cùng tìm hiểu các phương pháp tập luyện này giúp phục hồi
            chấn thương cột sống nhanh chóng nhé!
          </p>

          <h3>Pilates giúp phục hồi chấn thương cột sống nhanh chóng</h3>

          <p>
            Một trong những căn bệnh ngày càng phổ biến, đặc biệt là dân văn
            phòng, đó là đau lưng, thoái vị đĩa đệm. Tuy nhiên, nếu điều trị
            không đúng cách có thể dẫn đến nhiều biến chứng nguy hiểm, bao gồm:
            Vi diệu, điều trị bằng laser không đúng cách hoặc tập yoga không
            đúng cách có thể khiến bệnh nhân nằm liệt giường.
          </p>

          <img class="imgdetail" src="@/assets/tap-piltes.jpg" alt="" />

          <h3>Phương pháp tập Pilates Cat Cow</h3>
          <p>Các bước thực hiện:</p>
          <ul>
            <li>
              Bắt đầu với thư thế 4 điểm. Vai và cổ tay của bạn phải thẳng hàng
              và vuông góc với thảm, lưng của bạn phải bằng phẳng và xương chậu
              của bạn phải cân đối.
            </li>
            <li>Hít vào, võng lưng, nâng cầm lên, mở rộng ngực</li>
            <li>
              Thở ra, cong xương cụt, nâng cong lưng và đưa cằm về gần khoang
              ngực.
            </li>
            <li>Lặp đi lặp lại động tác từ 5-7 lần.</li>
          </ul>

          <h3>Lời kết</h3>

          <p>
            Trên đây là phương pháp tâph Pilates giúp phục hồi chấn thương cột
            sống nhanh chóng. Để đạt được kế cả tập lượng như mong muốn, bạn cần
            duy trì chế độ tập luyện đều đặn, thực hiện đúng động tác, kết hợp
            cùng chế độ ăn uống khoa học.
          </p>
        </div>
        <div class="col-4">
          <h3>Bình luận bài viết tại đây</h3>

          <textarea
            class="textarea"
            name="cmt"
            id="cmt"
            rows="auto"
            placeholder="Nhập bình luận của bạn tại đây"
          ></textarea>

          <button type="submit" id="cmt" class="btn btn-success">
            Gửi bình luận
          </button>
          <br />
          <br />
          <h3>Danh sách các bình luận:</h3>
          <ul>
            <li><strong>Bình An:</strong> Bài viết rất hữu ích</li>
            <li><strong>Bình An:</strong> Cảm ơn những chia sẽ bổ ích</li>
          </ul>
        </div>
      </div>
    </div>

    <div>
      <footer class="bg-dark p-3 footer">FPT Polytechnic</footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Lab3PostDetail",
};
</script>

<style>
.textarea {
  width: 100%;
}
.imgdetail {
  width: 100%;
}
</style>

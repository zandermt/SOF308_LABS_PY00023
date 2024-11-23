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

    <div id="carouselExampleIndicators" class="carousel slide">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/banner1.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="@/assets/banner2.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="@/assets/banner3.jpg" class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div class="container">
      <main>
        <section class="row content-section">
          <aside class="col-sm-4">
            <h3 class="text-info mt-2">Chuyên mục</h3>
            <ul class="list-group">
              <li
                class="list-group-item active bg-info d-flex justify-content-between align-items-center"
              >
                <a class="nav-link" href="#">Chế độ tập</a>
                <span class="badge bg-primary rounded-pill">12</span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                <a class="nav-link" href="#">Chế độ dinh dưỡng</a>
                <span class="badge bg-primary rounded-pill">15</span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                <a class="nav-link" href="#">Cẩm nang cuộc sống</a>
                <span class="badge bg-primary rounded-pill">99</span>
              </li>
            </ul>
            <!-- end Chuyên mục -->
            <br />

            <div class="card">
              <div class="card-header text-info font-weight-bold">
                <h3>Bài viết nổi bật</h3>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex align-items-start">
                  <img
                    src="@/assets/spinach_300x300.jpg"
                    class="rounded-circle mr-3 sideimg"
                    alt="Image 1"
                  />
                  <div>
                    <h6 class="fw-bold">Lợi ích khi ăn rau mỗi ngày</h6>
                    <p class="mb-0" style="font-size: 0.9em">
                      Tiêu thụ rau xanh hàng ngày sẽ giúp tăng cường thị lực,
                      kiểm soát cân nặng, ngăn ngừa ung thư...
                    </p>
                  </div>
                </li>
                <li class="list-group-item d-flex align-items-start">
                  <img
                    src="@/assets/orange_300x300.jpg"
                    class="rounded-circle mr-3 sideimg"
                    alt="Image 2"
                  />
                  <div>
                    <h6 class="fw-bold">9 tác dụng tuyệt vời của quả cam</h6>
                    <p class="mb-0">
                      Cam tự hào về khả năng chống lão hóa mạnh mẽ nhờ hàm lượng
                      chất chống oxy hóa cao...
                    </p>
                  </div>
                </li>
                <li class="list-group-item d-flex align-items-start">
                  <img
                    src="@/assets/sesameoil_300x300.jpg"
                    class="rounded-circle mr-3 sideimg"
                    alt="Image 3"
                  />
                  <div>
                    <h6 class="fw-bold">10 công dụng bất ngờ từ dầu dừa</h6>
                    <p class="mb-0">
                      Dầu dừa như một loại kem dưỡng ẩm tự nhiên cho cơ thể,
                      giúp việc sản xuất collagen trong các tế bào...
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </aside>

          <article class="col-sm-8">
            <h2 class="text-info mb-3 pt-2">Tất cả bài viết</h2>
            <div class="row">
              <div class="col-6">
                <div class="card">
                  <h5 class="card-header blog-title pb-2 fw-bold">
                    <a href="../Lab3/Lab3PostDetail" class="link-reset"
                      >Phương pháp tập Pilates giúp phục hồi chấn thương cột
                      sống</a
                    >
                    <i class="p-1 bi bi-chat-left"></i>16
                  </h5>
                  <img
                    src="@/assets/tap-piltes.jpg"
                    class="card-img-top blog-image"
                    alt="Pilates exercise"
                  />
                  <div class="card-body card-body-custom">
                    <p class="card-text blog-paragraph">
                      Ngoài việc giúp duy trì vóc dáng, cải thiện sự linh hoạt,
                      dẻo dai cho người tập, Pilates giúp cơ bắp và các khớp mọc
                      dài hơn, kéo giãn...
                    </p>
                  </div>
                </div>
                <br />
                <div class="card">
                  <h5 class="card-header blog-title pb-2 fw-bold">
                    Tập Pilates có thể cải thiện sức khoẻ tim mạch của bạn
                    <i class="p-1 bi bi-chat-left"></i>5
                  </h5>
                  <img
                    src="@/assets/tim-mach.jpg"
                    class="card-img-top blog-image"
                    alt="Pilates exercise"
                  />
                  <div class="card-body card-body-custom">
                    <p class="card-text blog-paragraph">
                      Tập Pilates không chỉ giúp bạn có một cơ thể khỏe mạnh và
                      linh hoạt mà còn có nhiều lợi ích cho sức khỏe tim
                      mạch.Bài viết này sẽ tìm hiểu sâu hơn về tác động tích cực
                      của việc tập Pilates đối với sức khỏe tim mạch.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="card">
                  <h5 class="card-header blog-title pb-2 fw-bold">
                    Đây là những gì 1 giờ tâph Pilates có thể làm cho cơ thể của
                    bạn
                    <i class="p-1 bi bi-chat-left"></i>8
                  </h5>
                  <img
                    src="@/assets/tap-pilates1.jpg"
                    class="card-img-top blog-image"
                    alt="Pilates exercise"
                  />
                  <div class="card-body card-body-custom">
                    <p class="card-text blog-paragraph">
                      Được thiết kế để xây dựng cơ bắp săn chắc, khỏe mạnh hơn
                      bài tập này đã trở thành một cái tên quen thuộc nhờ có rất
                      nhiều người nổi tiếng theo dõi.
                    </p>
                  </div>
                </div>
                <br />
                <div class="card">
                  <h5 class="card-header blog-title pb-2 fw-bold">
                    EAT CLEAN: Nên và không nên ăn thực phẩm nào?
                    <i class="p-1 bi bi-chat-left"></i>3
                  </h5>
                  <img
                    src="@/assets/eat-clean.png"
                    class="card-img-top blog-image"
                    alt="Pilates exercise"
                  />
                  <div class="card-body card-body-custom">
                    <p class="card-text blog-paragraph">
                      Chúng ta luôn chủ động lựa chọn thực phẩm sạch và duy trì
                      lối sống lành mạnh. Vậy chế độ ăn Eat Clean nên và không
                      nên ăn những gì trong thực đơn hằng ngày để cân bằng tháp
                      dinh dưỡng cho cơ thể?
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-3">
              <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </article>
        </section>
      </main>
    </div>

    <div>
      <footer class="bg-dark p-3 footer">FPT Polytechnic</footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Lab3Post",
};
</script>

<style>
.link-reset {
  text-decoration: none;
  color: inherit;
}

.nav-link[href="../Lab3/Lab3Post"] {
  position: relative;
}

.nav-link[href="../Lab3/Lab3Post"]::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -5px; /* Adjust position below text */
  width: 100%;
  height: 4px; /* Thickness of the underline */
  background-color: black; /* Color of the underline */
  border-radius: 2px; /* Rounded edges for the underline */
}

.sideimg {
  padding: 5px;
  width: 80px;
}
.videocard {
  width: 25rem;
}

.nav-tabs {
  padding-top: 15px;
}

.bg-danger {
  background-color: black;
}

.footer {
  text-align: center;
  color: white;
}

.blog-item {
  display: flex;
  align-items: center;
  background-color: white;
  padding: 6px;
  border-radius: 5px;
}

.blog-item img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 15px;
}

.blog-content {
  flex-grow: 1;
}

.blog-content p {
  margin: 0;
  font-size: 14px;
  color: #333;
}

.blog-content span {
  font-size: 12px;
  color: gray;
}

.blog-content span i {
  margin-right: 5px;
}

.nav-link {
  color: #212529;
}

.navbar-logo {
  width: 150px;
  margin-left: 120px;
}

.navbar-language {
  margin-right: 120px;
}

.content-section {
  padding: 20px;
}

.blog-bg {
  background-color: #eeeeee;
}

.content-padding {
  padding: 15px;
}

.blog-title {
  font-size: 17px;
  padding: 10px 10px 0px 10px;
}

.blog-image {
  padding: 10px;
}

.card-body-custom {
  padding: 5px;
}

.blog-paragraph {
  padding: 7px;
}
</style>

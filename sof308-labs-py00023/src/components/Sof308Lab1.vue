<template>
  <div class="container-fluid">
    <nav class="row bg-info bg-gradient bg-opacity-25 p-2">
      <nav class="navbar navbar-expand-sm navbar-dark">
        <div class="container">
          <a class="navbar-brand" href="Lab3Index.html">
            <img
              src="@/assets/logo-energy-pilates.png"
              alt=""
              style="width: 150px"
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
                <a
                  class="nav-link"
                  href="Lab3ChuyenMuc.html"
                  style="color: black"
                  ><i class="fa-solid fa-list"></i> Bài viết</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" style="color: black"
                  ><i class="fa-solid fa-film"></i> Video</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" style="color: black"
                  ><i class="fa-solid fa-circle-info"></i> Giới thiệu</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" style="color: black"
                  ><i class="fa-solid fa-calendar-days"></i> Sự kiện</a
                >
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  style="color: black"
                  ><i class="fa-solid fa-user"></i> Tài khoản</a
                >
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#" style="color: black"
                      >Đăng nhập</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="#" style="color: black"
                      >Quên mật khẩu</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="#" style="color: black"
                      >Đăng ký thành viên</a
                    >
                  </li>
                </ul>
              </li>
            </ul>
            <ul class="navbar-nav d-flex">
              <li class="nav-item">
                <a class="nav-link" href="#" style="color: black">Tiếng Việt</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" style="color: black">Tiếng Anh</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </nav>

    <main>
      <section class="row bigrow">
        <div class="col-sm-4">
          <h2 class="text-info mb-3">Về tôi</h2>
          <div class="card blog" style="background-color: #eeeeee">
            <img src="@/assets/avatar.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Giới thiệu bản thân</h5>
              <p class="card-text">
                TS. Trần Hoàng, Tổ chức Tư vấn sức khỏe quốc tế độc lập <br />
                Châm ngôn: Ta không được chọn nơi mình sinh ra, nhưng ta được
                chọn cách mình sẽ sống
              </p>
            </div>
          </div>

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
        </div>

        <div class="col-sm-8">
          <h2 class="text-info mb-3">Blog của tôi</h2>
          <div
            class="card blog-content"
            style="padding: 10px; background-color: #eeeeee"
          >
            <div class="row">
              <div class="col-md-6">
                <div class="card">
                  <h5 class="card-title" style="padding: 10px 10px 0px 10px">
                    Phương pháp tập Pilates giúp phục hồi chấn thương cột sống
                    <span><i class="bi bi-chat-left"></i> 16</span>
                  </h5>
                  <hr />
                  <div class="card-body">
                    <img
                      src="@/assets/tap-piltes.jpg"
                      class="card-img-top"
                      alt="Pilates exercise"
                    />
                    <p class="card-text">
                      Ngoài việc giúp duy trì vóc dáng, cải thiện sự linh hoạt,
                      dẻo dai cho người tập, Pilates giúp cơ bắp và các khớp mọc
                      dài hơn, kéo giãn...
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 blog-list">
                <div class="card">
                  <div class="blog-item">
                    <img src="@/assets/corevalue.jpg" alt="Core Value" />
                    <div class="blog-content">
                      <p style="font-weight: bold">
                        Biết ơn đời, đời sẽ thương ta
                      </p>
                      <span><i class="bi bi-chat-left"></i> 30</span>
                    </div>
                  </div>

                  <div class="blog-item">
                    <img src="@/assets/orange_300x300.jpg" alt="Orange" />
                    <div class="blog-content">
                      <p style="font-weight: bold">
                        9 tác dụng tuyệt vời của quả cam
                      </p>
                      <span><i class="bi bi-chat-left"></i> 28</span>
                    </div>
                  </div>

                  <div class="blog-item">
                    <img
                      src="@/assets/sesameoil_300x300.jpg"
                      alt="Sesame Oil"
                    />
                    <div class="blog-content">
                      <p style="font-weight: bold">
                        10 công dụng bất ngờ từ dầu dừa
                      </p>
                      <span><i class="bi bi-chat-left"></i> 15</span>
                    </div>
                  </div>

                  <div class="blog-item">
                    <img src="@/assets/spinach_300x300.jpg" alt="Spinach" />
                    <div class="blog-content">
                      <p style="font-weight: bold">
                        Lợi ích khi ăn rau mỗi ngày
                      </p>
                      <span><i class="bi bi-chat-left"></i> 12</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center mt-3">
                <button class="btn btn-info">Xem thêm</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer class="bg-dark p-3 footer">FPT Polytechnic</footer>
  </div>
</template>

<script>
export default {
  name: "Sof308Lab1",
};
</script>

<style>
.bigrow {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 1300px; /* or any desired width */
}

.container-fluid {
  padding-left: 0;
  padding-right: 0;
  margin-left: 0;
  margin-right: 0;
  width: 100%;
}

body {
  overflow-x: hidden;
  width: 100%;
}

footer {
  color: white;
  text-align: center;
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
</style>

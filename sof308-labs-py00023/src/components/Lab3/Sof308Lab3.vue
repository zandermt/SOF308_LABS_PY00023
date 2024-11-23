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
            <h2 class="text-info mb-3">Về tôi</h2>
            <div class="card blog blog-bg">
              <img src="@/assets/avatar.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Giới thiệu bản thân</h5>
                <p class="card-text">
                  TS. Trương Minh Tiến, Tổ chức Tư vấn sức khỏe quốc tế độc lập
                  <br />
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

            <div class="container mt-3">
              <ul class="nav nav-tabs" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active text-info"
                    data-bs-toggle="tab"
                    href="#docnhieu"
                    >Đọc nhiều</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link text-info"
                    data-bs-toggle="tab"
                    href="#xemnhieu"
                    >Xem nhiều</a
                  >
                </li>
              </ul>

              <div class="tab-content">
                <div id="docnhieu" class="container tab-pane active">
                  <br />
                  <div class="blog-item">
                    <div class="row g-0">
                      <div class="col-4">
                        <img
                          src="@/assets/corevalue.jpg"
                          alt="Core Value"
                          class="img-fluid rounded-start"
                        />
                      </div>
                      <div class="col-8">
                        <div class="blog-content">
                          <p>Biết ơn đời, đời sẽ thương ta</p>
                          <span><i class="bi bi-chat-left"></i> 30</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="blog-item">
                    <div class="row g-0">
                      <div class="col-4">
                        <img
                          src="@/assets/sesameoil_300x300.jpg"
                          alt="Sesame Oil"
                          class="img-fluid rounded-start"
                        />
                      </div>
                      <div class="col-8">
                        <div class="blog-content">
                          <p>10 công dụng bất ngờ từ dầu dừa</p>
                          <span><i class="bi bi-chat-left"></i> 15</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="blog-item">
                    <div class="row g-0">
                      <div class="col-4">
                        <img
                          src="@/assets/spinach_300x300.jpg"
                          alt="Spinach"
                          class="img-fluid rounded-start"
                        />
                      </div>
                      <div class="col-8">
                        <div class="blog-content">
                          <p>Lợi ích khi ăn rau mỗi ngày</p>
                          <span><i class="bi bi-chat-left"></i> 12</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="xemnhieu" class="container tab-pane fade">
                  <br />
                  <div class="blog-item">
                    <div class="row g-0">
                      <div class="col-4">
                        <img
                          src="@/assets/corevalue.jpg"
                          alt="Core Value"
                          class="img-fluid rounded-start"
                        />
                      </div>
                      <div class="col-8">
                        <div class="blog-content">
                          <p>Biết ơn đời, đời sẽ thương ta</p>
                          <span><i class="bi bi-chat-left"></i> 30</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="blog-item">
                    <div class="row g-0">
                      <div class="col-4">
                        <img
                          src="@/assets/sesameoil_300x300.jpg"
                          alt="Sesame Oil"
                          class="img-fluid rounded-start"
                        />
                      </div>
                      <div class="col-8">
                        <div class="blog-content">
                          <p>10 công dụng bất ngờ từ dầu dừa</p>
                          <span><i class="bi bi-chat-left"></i> 15</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="blog-item">
                    <div class="row g-0">
                      <div class="col-4">
                        <img
                          src="@/assets/spinach_300x300.jpg"
                          alt="Spinach"
                          class="img-fluid rounded-start"
                        />
                      </div>
                      <div class="col-8">
                        <div class="blog-content">
                          <p>Lợi ích khi ăn rau mỗi ngày</p>
                          <span><i class="bi bi-chat-left"></i> 12</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <article class="col-sm-8">
            <h2 class="text-info mb-3">Blog của tôi</h2>
            <div class="card blog-content blog-bg content-padding">
              <div class="row">
                <div class="col-md-6">
                  <div class="card">
                    <h5 class="card-title blog-title">
                      Phương pháp tập Pilates giúp phục hồi chấn thương cột sống
                      <i class="bi bi-chat-left"></i>16
                    </h5>
                    <img
                      src="@/assets/tap-piltes.jpg"
                      class="card-img-top blog-image"
                      alt="Pilates exercise"
                    />
                    <div class="card-body card-body-custom">
                      <p class="card-text blog-paragraph">
                        Ngoài việc giúp duy trì vóc dáng, cải thiện sự linh
                        hoạt, dẻo dai cho người tập, Pilates giúp cơ bắp và các
                        khớp mọc dài hơn, kéo giãn...
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 blog-list">
                  <div class="card">
                    <div class="blog-item">
                      <div class="row g-0">
                        <div class="col-4">
                          <img
                            src="@/assets/corevalue.jpg"
                            alt="Core Value"
                            class="img-fluid rounded-start"
                          />
                        </div>
                        <div class="col-8">
                          <div class="blog-content">
                            <p>Biết ơn đời, đời sẽ thương ta</p>
                            <span><i class="bi bi-chat-left"></i> 30</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="blog-item">
                      <div class="row g-0">
                        <div class="col-4">
                          <img
                            src="@/assets/orange_300x300.jpg"
                            alt="Orange"
                            class="img-fluid rounded-start"
                          />
                        </div>
                        <div class="col-8">
                          <div class="blog-content">
                            <p>9 tác dụng tuyệt vời của quả cam</p>
                            <span><i class="bi bi-chat-left"></i> 28</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="blog-item">
                      <div class="row g-0">
                        <div class="col-4">
                          <img
                            src="@/assets/sesameoil_300x300.jpg"
                            alt="Sesame Oil"
                            class="img-fluid rounded-start"
                          />
                        </div>
                        <div class="col-8">
                          <div class="blog-content">
                            <p>10 công dụng bất ngờ từ dầu dừa</p>
                            <span><i class="bi bi-chat-left"></i> 15</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="blog-item">
                      <div class="row g-0">
                        <div class="col-4">
                          <img
                            src="@/assets/spinach_300x300.jpg"
                            alt="Spinach"
                            class="img-fluid rounded-start"
                          />
                        </div>
                        <div class="col-8">
                          <div class="blog-content">
                            <p>Lợi ích khi ăn rau mỗi ngày</p>
                            <span><i class="bi bi-chat-left"></i> 12</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center mt-3">
                <button class="btn btn-info">Xem thêm</button>
              </div>
            </div>

            <div class="row">
              <h2 class="text-center pt-5 text-info">VIDEO - ĐỪNG BỎ LỠ</h2>
              <div class="col-6">
                <div class="card videocard">
                  <img
                    src="@/assets/video1.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title fw-bold">
                      Đi xa để trưởng thành hơn
                    </h5>
                    <p class="card-text">
                      Tuổi trẻ chỉ nghĩ đến những chuyến đi, đợi mong một ngày
                      được bay nhảy trên những phương trời mới lạ. Để rồi những
                      cô đơn mê mãi, tuổi trẻ ấy mới muốn một nơi để trở về.
                    </p>
                  </div>
                </div>
                <br />
                <div class="card videocard">
                  <img
                    src="@/assets/video3.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title fw-bold">
                      Ước gì được trở về tuổi thơ
                    </h5>
                    <p class="card-text">
                      Tuổi trẻ chỉ nghĩ đến những chuyến đi, đợi mong một ngày
                      được bay nhảy trên những phương trời mới lạ. Để rồi những
                      cô đơn mê mãi, tuổi trẻ ấy mới muốn một nơi để trở về.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="card videocard">
                  <img
                    src="@/assets/video2.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title fw-bold">
                      Chút tâm tư những ngày cuối năm
                    </h5>
                    <p class="card-text">
                      Cuồng quay cuộc sống dẫu có vội vàng, dẫu có tấp nập đến
                      đâu thì cũng chẳng nằm ngoài quy luật tự nhiên và bất biến
                      xuân, hạ, thu, đông. Và rồi một năm cũ sắp trôi qua.
                    </p>
                  </div>
                </div>
                <br />
                <div class="card videocard">
                  <img
                    src="@/assets/video4.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title fw-bold">Ba người thầy vĩ đại</h5>
                    <p class="card-text">
                      Cuồng quay cuộc sống dẫu có vội vàng, dẫu có tấp nập đến
                      đâu thì cũng chẳng nằm ngoài quy luật tự nhiên và bất biến
                      xuân, hạ, thu, đông. Và rồi một năm cũ sắp trôi qua.
                    </p>
                  </div>
                </div>
              </div>
              <div class="text-center mt-3">
                <button class="btn btn-info">Xem thêm</button>
              </div>
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
  name: "Sof308Lab3",
};
</script>

<style>
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

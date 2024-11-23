<template>
  <div>
    <div class="container mt-3">
      <ul class="nav nav-tabs" role="tablist">
        <li class="nav-item">
          <a class="nav-link active" data-bs-toggle="tab" href="#register"
            >Đăng ký</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" data-bs-toggle="tab" href="#login">Đăng nhập</a>
        </li>
      </ul>

      <div class="tab-content">
        <div id="register" class="container tab-pane active">
          <br />
          <h2>Form đăng kí thông tin</h2>
          <form action="" class="form-control was-validated">
            <div class="mb-2">
              <label for="fullname" class="form-label">Họ và Tên</label>
              <input
                type="text"
                class="form-control"
                id="fullname"
                placeholder="Nhập họ và tên"
                required
              />
              <div class="valid-feedback">Hợp lệ</div>
              <div class="invalid-feedback">Vui lòng điền vào trường này</div>
            </div>
            <div class="mb-2">
              <label for="email" class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Nhập email"
                required
              />
              <div class="valid-feedback">Hợp lệ</div>
              <div class="invalid-feedback">Vui lòng điền vào trường này</div>
            </div>
            <div class="mb-2">
              <label for="phonenumber" class="form-label">Số Điện Thoại</label>
              <input
                type="text"
                class="form-control"
                id="phonenumber"
                placeholder="Nhập số điện thoại"
                required
              />
              <div class="valid-feedback">Hợp lệ</div>
              <div class="invalid-feedback">Vui lòng điền vào trường này</div>
            </div>
            <div class="mb-2">
              <label for="password" class="form-label">Mật Khẩu</label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Nhập mật khẩu"
                required
              />
              <div class="valid-feedback">Hợp lệ</div>
              <div class="invalid-feedback">Vui lòng điền vào trường này</div>
            </div>
            <div class="mb-2">
              <label for="password2" class="form-label"
                >Xác Nhận Mật khẩu</label
              >
              <input
                type="password"
                class="form-control"
                id="password2"
                placeholder="Nhập mật khẩu"
                required
              />
              <div class="valid-feedback">Hợp lệ</div>
              <div class="invalid-feedback">Vui lòng điền vào trường này</div>
            </div>
            <div class="mb-2">
              <label for="sex" class="form-label sex">Giới tính:</label>
              <div class="form-check form-check-inline">
                <input
                  type="radio"
                  class="form-check-input"
                  id="sex1"
                  name="sex"
                />
                <label class="form-check-label" for="sex1">Nam</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  type="radio"
                  class="form-check-input"
                  id="sex2"
                  name="sex"
                  checked
                />
                <label class="form-check-label" for="sex2">Nữ</label>
              </div>
            </div>
            <div class="mb-2">
              <label for="language" class="form-label">Ngôn Ngữ</label>
              <select class="form-select" id="language">
                <option value="vi">Tiếng Việt</option>
                <option value="en">English</option>
              </select>
            </div>
            <div class="mb-2">
              <input type="checkbox" name="tot" id="tot" required />
              <label for="tot"
                >Tôi đồng ý với các điều khoản và điều kiện</label
              >
              <div class="valid-feedback">Hợp lệ</div>
              <div class="invalid-feedback">Vui lòng điền vào trường này</div>
            </div>
            <div class="mb-2">
              <button type="submit" class="btn btn-primary">Đăng ký</button>
            </div>
          </form>
        </div>
        <div id="login" class="container tab-pane fade">
          <br />
          <h2>Form đăng Nhập</h2>
          <form action="" class="form-control was-validated">
            <div class="mb-2">
              <label for="email" class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Nhập email"
                required
              />
              <div class="valid-feedback">Hợp lệ</div>
              <div class="invalid-feedback">Vui lòng điền vào trường này</div>
            </div>
            <div class="mb-2">
              <label for="password" class="form-label">Mật Khẩu</label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Nhập mật khẩu"
                required
              />
              <div class="valid-feedback">Hợp lệ</div>
              <div class="invalid-feedback">Vui lòng điền vào trường này</div>
            </div>
            <div class="mb-2">
              <button type="submit" class="btn btn-primary">Đăng nhập</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Lab2Bai3",
};
</script>

<style></style>

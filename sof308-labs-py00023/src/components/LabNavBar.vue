<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">Labs</a>
      <!-- Navbar Toggler -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar Links -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto d-flex">
          <li class="nav-item">
            <a class="nav-link" href="/Sof308Lab1">Lab 1</a>
          </li>
          <li class="nav-item">
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Lab 2
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/Lab2/Lab2Bai1">Bài 1</a>
                </li>
                <li>
                  <a class="dropdown-item" href="/Lab2/Lab2Bai2">Bài 2</a>
                </li>
                <li>
                  <a class="dropdown-item" href="/Lab2/Lab2Bai3">Bài 3</a>
                </li>
                <li>
                  <a class="dropdown-item" href="/Lab2/Lab2Bai4">Bài 4</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Lab3/Sof308lab3">Lab 3</a>
          </li>
          <li class="nav-item"><a class="nav-link" href="#">Lab 4</a></li>
          <li class="nav-item">
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Lab 5
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/Lab5/Lab5Bai1">Bài 1</a>
                </li>
                <li>
                  <a class="dropdown-item" href="/Lab5/Lab5Bai2">Bài 2</a>
                </li>
                <li>
                  <a class="dropdown-item" href="/Lab5/Lab5Bai3">Bài 3</a>
                </li>
                <li>
                  <a class="dropdown-item" href="/Lab5/Lab5Bai4">Bài 4</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Lab 6
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/Lab6/Lab6Bai1">Bài 1</a>
                </li>
                <li>
                  <a class="dropdown-item" href="/Lab6/Lab6Bai2">Bài 2</a>
                </li>
                <li>
                  <a class="dropdown-item" href="/Lab6/Lab6Bai3">Bài 3</a>
                </li>
                <li>
                  <a class="dropdown-item" href="/Lab6/Lab6Bai4">Bài 4</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item"><a class="nav-link" href="#">Lab 7</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Lab 8</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "LabNavBar",
};
</script>

<style>
.nav-link {
  font-weight: bold;
  font-size: 1.2rem;
}
</style>

export const content = document.getElementById("content");

export function renderNavbar() {
  content.innerHTML = `

  <nav class="navbar navbar-expand-lg fixed-top bg-dark" data-bs-theme="dark">
    <div class="container-xxl">
      <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a href="#" class="navbar-brand fw-bold">
        <img src="/src/images/logo.png" alt="Logo" style="width: 50px;">
        Pizza Shop
      </a>
      <div class="row collapse navbar-collapse justify-content-end" id="navbarNav">
        <nav class="navbar-nav nav-fill p-0">
          <a href="#" class="offset-lg-4 nav-link active" aria-current="page">Home</a>
          <a href="#" class="nav-link">Menu</a>
          <a href="#" class="nav-link">Our advantages</a>
          <a href="#" class="nav-link">Credits</a>
        </nav>
      </div>
    </div>
  </nav>
  `;
}

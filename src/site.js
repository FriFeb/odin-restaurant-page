export function renderSitePages() {
  const content = document.getElementById("content");

  content.innerHTML = `

  <!-- Header -->
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

  <!-- Home -->
  <div style="
        position: relative;
        background-image: 
        linear-gradient(to right, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.4) 50%, transparent 55%), 
        url(/src/images/hero_background.jpg);
        background-position: 50%;
        background-size: cover;
        height: 100vh;">
    <div class="container-lg h-100 text-white overflow-hidden" style="padding-top: 4rem;">
      <div class="row align-content-center h-100 g-2">
        <h6 class="col-7 col-md-6 col-lg-5 display-6 fw-bold">Delicious pizza for <span
            style="color: hsl(35, 100%, 50%);">every</span> taste
        </h6>

        <div class="w-100"></div>

        <p class="col-7 col-md-6 col-lg-5 fs-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Voluptatibus quis expedita aut
          iste magni est, culpa esse velit.</p>

        <div class="w-100"></div>

        <div class="col-7 col-md-6 col-lg-5">
          <a href="#" class="btn btn-light">Order Now</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Menu -->
  <div class="container-lg text-center py-3">
    <h1 class="mb-4 fw-bold">Menu</h1>

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-3">

      <div class="col">
        <div class="card h-100">
          <img src="/src/images/menu/diabolo-pizzapieces.avif" class="card-image-top"></img>

          <div class="card-body d-flex flex-column">
            <div class="d-flex justify-content-center align-items-center flex-grow-1">
              <h5 class="card-title mb-3 fw-bold">
                Pizza Carbonara
              </h5>
            </div>

            <p class="card-text text-start mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <div class="d-flex align-items-center justify-content-around">
              <span class="fw-bold">$14.99</span>
              <a href="#" class="btn btn-dark w-50">Order</a>
            </div>

          </div>
        </div>
      </div>

      <div class="col">
        <div class="card h-100">
          <img src="/src/images/menu/havaiska-300dpi-min.avif" class="card-image-top"></img>

          <div class="card-body d-flex flex-column">
            <div class="d-flex justify-content-center align-items-center flex-grow-1">
              <h5 class="card-title mb-3 fw-bold">
                Pizza Hawaii
              </h5>
            </div>

            <p class="card-text text-start mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <div class="d-flex align-items-center justify-content-around">
              <span class="fw-bold">$15.99</span>
              <a href="#" class="btn btn-dark w-50">Order</a>
            </div>

          </div>
        </div>
      </div>

      <div class="col">
        <div class="card h-100">
          <img src="/src/images/menu/manhatten-slice-collageweb-min.avif" class="card-image-top"></img>

          <div class="card-body d-flex flex-column">
            <div class="d-flex justify-content-center align-items-center flex-grow-1">
              <h5 class="card-title mb-3 fw-bold">
                Pizza Manhattan
              </h5>
            </div>

            <p class="card-text text-start mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <div class="d-flex align-items-center justify-content-around">
              <span class="fw-bold">$19.99</span>
              <a href="#" class="btn btn-dark w-50">Order</a>
            </div>

          </div>
        </div>
      </div>

      <div class="col">
        <div class="card h-100">
          <img src="/src/images/menu/piat-syrov-300dpi-min.avif" class="card-image-top"></img>

          <div class="card-body d-flex flex-column">
            <div class="d-flex justify-content-center align-items-center flex-grow-1">
              <h5 class="card-title mb-3 fw-bold">
                Pizza Five Cheeses
              </h5>
            </div>

            <p class="card-text text-start mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <div class="d-flex align-items-center justify-content-around">
              <span class="fw-bold">$15.99</span>
              <a href="#" class="btn btn-dark w-50">Order</a>
            </div>

          </div>
        </div>
      </div>

      <div class="col">
        <div class="card h-100">
          <img src="/src/images/menu/royal-slice-retoch-min-min.avif" class="card-image-top"></img>

          <div class="card-body d-flex flex-column">
            <div class="d-flex justify-content-center align-items-center flex-grow-1">
              <h5 class="card-title mb-3 fw-bold">
                Pizza Royal Cheeseburger
              </h5>
            </div>

            <p class="card-text text-start mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <div class="d-flex align-items-center justify-content-around">
              <span class="fw-bold">$18.99</span>
              <a href="#" class="btn btn-dark w-50">Order</a>
            </div>

          </div>
        </div>
      </div>

      <div class="col">
        <div class="card h-100">
          <img src="/src/images/menu/spaisy-300dpi-min.avif" class="card-image-top"></img>

          <div class="card-body d-flex flex-column">
            <div class="d-flex justify-content-center align-items-center flex-grow-1">
              <h5 class="card-title mb-3 fw-bold">
                Pizza Spicy
              </h5>
            </div>

            <p class="card-text text-start mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <div class="d-flex align-items-center justify-content-around">
              <span class="fw-bold">$15.99</span>
              <a href="#" class="btn btn-dark w-50">Order</a>
            </div>

          </div>
        </div>
      </div>

      <div class="col">
        <div class="card h-100">
          <img src="/src/images/menu/tekhas-300dpi-min.avif" class="card-image-top"></img>

          <div class="card-body d-flex flex-column">
            <div class="d-flex justify-content-center align-items-center flex-grow-1">
              <h5 class="card-title mb-3 fw-bold">
                Pizza Texas
              </h5>
            </div>

            <p class="card-text text-start mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <div class="d-flex align-items-center justify-content-around">
              <span class="fw-bold">$19.99</span>
              <a href="#" class="btn btn-dark w-50">Order</a>
            </div>

          </div>
        </div>
      </div>

      <div class="col">
        <div class="card h-100">
          <img src="/src/images/menu/vetchina-i-griby.avif" class="card-image-top"></img>

          <div class="card-body d-flex flex-column">
            <div class="d-flex justify-content-center align-items-center flex-grow-1">
              <h5 class="card-title mb-3 fw-bold">
                Pizza Ham and Mushrooms
              </h5>
            </div>

            <p class="card-text text-start mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <div class="d-flex align-items-center justify-content-around">
              <span class="fw-bold">$14.99</span>
              <a href="#" class="btn btn-dark w-50">Order</a>
            </div>

          </div>
        </div>
      </div>

    </div>

  </div>

  <!-- Advantages -->
  <div style="background-image: radial-gradient(rgba(255,255,255,1) 70%, transparent), 
    url(/src/images/advantages_background.jpg); margin-top: 100px;">
    <div class="container-lg text-center py-3">
      <h1 class="mb-4 fw-bold">Our advantages</h1>

      <div class="row align-items-center mb-5">
        <div class="col-md-4 order-md-2 mb-3 mb-md-0">
          <img src="/src/images/advantages/friends.png" alt="" style="width: 150px;">
        </div>

        <div class="col-md-8 order-md-1 text-md-start">
          <h2 class="fw-bold" style="color: hsl(35, 100%, 50%); text-shadow: 1px 1px 0 black;">Friendliness</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque illo
            reprehenderit delectus
            fugit et? Eligendi repudiandae corrupti ex, inventore eaque ipsam rerum possimus exercitationem
            perspiciatis
            quo mollitia, aspernatur dicta molestias.
          </p>
        </div>
      </div>

      <div class="row align-items-center mb-5">
        <div class="col-md-4 order-md-1 mb-3 mb-md-0">
          <img src="/src/images/advantages/engagement.png" alt="" style="width: 150px;">
        </div>

        <div class="col-md-8 order-md-2 text-md-start">
          <h2 class="fw-bold" style="color: hsl(35, 100%, 50%); text-shadow: 1px 1px 0 black;">Responsibility</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque illo
            reprehenderit delectus
            fugit et? Eligendi repudiandae corrupti ex, inventore eaque ipsam rerum possimus exercitationem
            perspiciatis
            quo mollitia, aspernatur dicta molestias.
          </p>
        </div>
      </div>

      <div class="row align-items-center mb-5">
        <div class="col-md-4 order-md-2 mb-3 mb-md-0">
          <img src="/src/images/advantages/fast-delivery.png" alt="" style="width: 150px;">
        </div>

        <div class="col-md-8 order-md-1 text-md-start">
          <h2 class="fw-bold" style="color: hsl(35, 100%, 50%); text-shadow: 1px 1px 0 black;">Fast delivery</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque illo
            reprehenderit delectus
            fugit et? Eligendi repudiandae corrupti ex, inventore eaque ipsam rerum possimus exercitationem
            perspiciatis
            quo mollitia, aspernatur dicta molestias.
          </p>
        </div>
      </div>

      <div class="row align-items-center mb-5">
        <div class="col-md-4 order-md-1 mb-3 mb-md-0">
          <img src="/src/images/advantages/vegetables.png " alt="" style="width: 150px;">
        </div>

        <div class="col-md-8 order-md-2 text-md-start">
          <h2 class="fw-bold" style="color: hsl(35, 100%, 50%); text-shadow: 1px 1px 0 black;">Fresh ingredients
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque illo
            reprehenderit delectus
            fugit et? Eligendi repudiandae corrupti ex, inventore eaque ipsam rerum possimus exercitationem
            perspiciatis
            quo mollitia, aspernatur dicta molestias.
          </p>
        </div>
      </div>

    </div>
  </div>

  <!-- Credits -->
  <div class="container-lg py-3">
    <h1 class="mb-4 fw-bold text-center">Credits</h1>

    <ol class="list-group list-group-numbered">
      <li class="list-group-item list-group-item-action d-flex">
        <div class="d-flex justify-content-between align-items-center flex-grow-1 ms-3">
          <div class="d-flex flex-column me-3">
            <h6 class="fw-bold">Logo icon</h6>
            <p>Created by <a href="https://www.flaticon.com/free-icons/pizza" title="pizza icons">Freepik -
                Flaticon</a></p>
          </div>
          <img src="/src/images/logo.png" alt="" style="width: 3.25rem; height: 3.25rem;">
        </div>
      </li>

      <li class="list-group-item list-group-item-action d-flex">
        <div class="d-flex justify-content-between align-items-center flex-grow-1 ms-3">
          <div class="d-flex flex-column me-3">
            <h6 class="fw-bold">Home section background</h6>
            <p>Created by <a
                href="https://www.freepik.com/free-vector/hand-drawn-pizza-pattern-background_73940775.htm">Freepik</a>
            </p>
          </div>
          <img src="/src/images/hero_background.jpg" alt="" style="width: 3.25rem; height: 3.25rem;">
        </div>
      </li>

      <li class="list-group-item list-group-item-action d-flex">
        <div class="d-flex justify-content-between flex-grow-1 ms-3">
          <div class="d-flex flex-column me-3 flex-grow-1">
            <h6 class="fw-bold">Pizza menu images</h6>
            <p>Created by <a href="https://dominos.ua/uk/kyiv/">Dominos.ua</a></p>
          </div>
          <div class="d-flex flex-wrap justify-content-end justify-content-lg-between align-items-center flex-grow-1">
            <img src="/src/images/menu/diabolo-pizzapieces.avif" alt="" style="width: 3.25rem; height: 3.25rem;">
            <img src="/src/images/menu/havaiska-300dpi-min.avif" alt="" style="width: 3.25rem; height: 3.25rem;">
            <img src="/src/images/menu/manhatten-slice-collageweb-min.avif" alt=""
              style="width: 3.25rem; height: 3.25rem;">
            <img src="/src/images/menu/piat-syrov-300dpi-min.avif" alt="" style="width: 3.25rem; height: 3.25rem;">
            <img src="/src/images/menu/royal-slice-retoch-min-min.avif" alt=""
              style="width: 3.25rem; height: 3.25rem;">
            <img src="/src/images/menu/spaisy-300dpi-min.avif" alt="" style="width: 3.25rem; height: 3.25rem;">
            <img src="/src/images/menu/tekhas-300dpi-min.avif" alt="" style="width: 3.25rem; height: 3.25rem;">
            <img src="/src/images/menu/vetchina-i-griby.avif" alt="" style="width: 3.25rem; height: 3.25rem;">
          </div>
        </div>
      </li>

      <li class="list-group-item list-group-item-action d-flex">
        <div class="d-flex flex-column justify-content-between flex-grow-1 ms-3">
          <h6 class="fw-bold">Advantages icons</h6>

          <div class="d-flex flex-column">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <p class="m-0 me-3">Friends icon created by by <a href="https://www.flaticon.com/free-icons/friends"
                  title="friends icons">Freepik - Flaticon</a></p>
              <img src="/src/images/advantages/friends.png" alt="" style="width: 3.25rem; height: 3.25rem;">
            </div>
            <div class="d-flex justify-content-between align-items-center mb-3">
              <p class="m-0 me-3">Engagement icon created by <a
                  href="https://www.flaticon.com/free-icons/responsibility" title="responsibility icons">Jagat
                  Icon - Flaticon</a></p>
              <img src="/src/images/advantages/engagement.png" alt="" style="width: 3.25rem; height: 3.25rem;">
            </div>
            <div class="d-flex justify-content-between align-items-center mb-3">
              <p class="m-0 me-3">Fast Delivery icon created by <a href="https://www.flaticon.com/free-icons/delivery"
                  title="delivery icons">Freepik -
                  Flaticon</a></p>
              <img src="/src/images/advantages/fast-delivery.png" alt="" style="width: 3.25rem; height: 3.25rem;">
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <p class="m-0 me-3">Vegetables icon created by <a href="https://www.flaticon.com/free-icons/ingredient"
                  title="ingredient icons">Eucalyp
                  - Flaticon</a></p>
              <img src="/src/images/advantages/vegetables.png" alt="" style="width: 3.25rem; height: 3.25rem;">
            </div>
          </div>
        </div>
      </li>
    </ol>
  </div>
  `;
}

import { content, renderNavbar } from "./navbar";

export function renderMenuPage() {
  renderNavbar(1);

  content.innerHTML += `
 
  <div style="height: 100vh; padding-top: 4rem;"> 
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
  </div>`;
}

import { content, renderNavbar } from "./navbar";

export function renderCreditsPage() {
  renderNavbar(3);

  content.innerHTML += `

  <div style="padding-top: 4rem;"> 
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
  </div>
  `;
}

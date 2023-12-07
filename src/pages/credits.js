import logoImage from "/src/images/logo.png";
import homeBackgroundImage from "/src/images/hero_background.jpg";
import carbonaraImage from "/src/images/menu/diabolo-pizzapieces.avif";
import havaiiImage from "/src/images/menu/havaiska-300dpi-min.avif";
import manhattanImage from "/src/images/menu/manhatten-slice-collageweb-min.avif";
import fiveCheesesImage from "/src/images/menu/piat-syrov-300dpi-min.avif";
import royalCheeseburgerImage from "/src/images/menu/royal-slice-retoch-min-min.avif";
import spicyImage from "/src/images/menu/spaisy-300dpi-min.avif";
import texasImage from "/src/images/menu/tekhas-300dpi-min.avif";
import hamMushroomsImage from "/src/images/menu/vetchina-i-griby.avif";
import advantagesBackgroundImage from "/src/images/advantages_background.jpg";
import friendsImage from "/src/images/advantages/friends.png";
import engagementImage from "/src/images/advantages/engagement.png";
import deliveryImage from "/src/images/advantages/fast-delivery.png";
import ingredientsImage from "/src/images/advantages/vegetables.png";
import { content, renderNavbar, highlightNavLink } from "./navbar";

export function renderCreditsPage() {
  renderNavbar();
  highlightNavLink(3);

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
            <img src="${logoImage}" alt="" style="width: 3.25rem; height: 3.25rem;">
          </div>
        </li>

        <li class="list-group-item list-group-item-action d-flex">
          <div class="d-flex justify-content-between align-items-center flex-grow-1 ms-3">
            <div class="d-flex flex-column me-3">
              <h6 class="fw-bold">Home page background</h6>
              <p>Created by <a
                  href="https://www.freepik.com/free-vector/hand-drawn-pizza-pattern-background_73940775.htm">Freepik</a>
              </p>
            </div>
            <img src="${homeBackgroundImage}" alt="" style="width: 3.25rem; height: 3.25rem;">
          </div>
        </li>

        <li class="list-group-item list-group-item-action d-flex">
          <div class="d-flex justify-content-between flex-grow-1 ms-3">
            <div class="d-flex flex-column me-3 flex-grow-1">
              <h6 class="fw-bold">Pizza menu images</h6>
              <p>Created by <a href="https://dominos.ua/uk/kyiv/">Dominos.ua</a></p>
            </div>
            <div class="d-flex flex-wrap justify-content-end justify-content-lg-between align-items-center flex-grow-1">
              <img src="${carbonaraImage}" alt="" style="width: 3.25rem; height: 3.25rem;">
              <img src="${havaiiImage}" alt="" style="width: 3.25rem; height: 3.25rem;">
              <img src="${manhattanImage}" alt=""
                style="width: 3.25rem; height: 3.25rem;">
              <img src="${fiveCheesesImage}" alt="" style="width: 3.25rem; height: 3.25rem;">
              <img src="${royalCheeseburgerImage}" alt=""
                style="width: 3.25rem; height: 3.25rem;">
              <img src="${spicyImage}" alt="" style="width: 3.25rem; height: 3.25rem;">
              <img src="${texasImage}" alt="" style="width: 3.25rem; height: 3.25rem;">
              <img src="${hamMushroomsImage}" alt="" style="width: 3.25rem; height: 3.25rem;">
            </div>
          </div>
        </li>

        <li class="list-group-item list-group-item-action d-flex">
          <div class="d-flex flex-column justify-content-between flex-grow-1 ms-3">
            <h6 class="fw-bold">Advantages page</h6>

            <div class="d-flex flex-column">

              <div class="d-flex justify-content-between align-items-center mb-3">
                <p class="m-0 me-3">Background created by <a href="https://www.freepik.com/free-vector/hand-drawn-food-pattern-background_72159777.htm#query=pizza%20background%20handdrown&position=1&from_view=search&track=ais&uuid=6be1bb20-a4af-46b4-8e8e-d432db9d1cf5">pikisuperstar</a></p>
                <img src="${advantagesBackgroundImage}" alt="" style="width: 3.25rem; height: 3.25rem;">
              </div>
              <div class="d-flex justify-content-between align-items-center mb-3">
                <p class="m-0 me-3">Friends icon created by by <a href="https://www.flaticon.com/free-icons/friends"
                    title="friends icons">Freepik - Flaticon</a></p>
                <img src="${friendsImage}" alt="" style="width: 3.25rem; height: 3.25rem;">
              </div>
              <div class="d-flex justify-content-between align-items-center mb-3">
                <p class="m-0 me-3">Engagement icon created by <a
                    href="https://www.flaticon.com/free-icons/responsibility" title="responsibility icons">Jagat
                    Icon - Flaticon</a></p>
                <img src="${engagementImage}" alt="" style="width: 3.25rem; height: 3.25rem;">
              </div>
              <div class="d-flex justify-content-between align-items-center mb-3">
                <p class="m-0 me-3">Fast Delivery icon created by <a href="https://www.flaticon.com/free-icons/delivery"
                    title="delivery icons">Freepik -
                    Flaticon</a></p>
                <img src="${deliveryImage}" alt="" style="width: 3.25rem; height: 3.25rem;">
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <p class="m-0 me-3">Vegetables icon created by <a href="https://www.flaticon.com/free-icons/ingredient"
                    title="ingredient icons">Eucalyp
                    - Flaticon</a></p>
                <img src="${ingredientsImage}" alt="" style="width: 3.25rem; height: 3.25rem;">
              </div>
            </div>
          </div>
        </li>
      </ol>
    </div>
  </div>
  `;
}

import { content, renderNavbar, highlightNavLink } from "./navbar";

export function renderHomePage() {
  renderNavbar();
  highlightNavLink(0);

  content.innerHTML += `

  <div style="
        position: relative;
        background-image: 
        linear-gradient(to right, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.4) 50%, transparent 55%), 
        url(/src/images/hero_background.jpg);
        background-position: 50%;
        background-size: cover;
        height: 100vh;
        padding-top: 4rem;">
    <div class="container-lg h-100 text-white overflow-hidden">
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
  `;
}

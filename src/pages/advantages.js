import { content, renderNavbar, highlightNavLink } from "./navbar";

export function renderAdvantagesPage() {
  renderNavbar();
  highlightNavLink(2);

  content.innerHTML += `

  <div style="background-image: radial-gradient(rgba(255,255,255,1) 70%, transparent), 
    url(/src/images/advantages_background.jpg); padding-top: 4rem;">
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

      <div class="row align-items-center">
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
  `;
}

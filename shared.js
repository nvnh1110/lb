/*================ DONATE =================*/
class MyDonate extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="donate" id="donate-content">
        <form action="" class="donate__form">
            <img src="assets/img/donate.jpg" alt="image" class="donate__qr">
            <p class="donate__message">Cảm ơn bạn đã ủng hộ 💖</p>
        </form>

        <i class="ri-close-line donate__close" id="donate-close"></i>
    </div>
    `;
  }
}
customElements.define("my-donate", MyDonate);

/*================ SEARCH =================*/
class MySearch extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="search" id="search-content">
          <form action="" class="search__form">
              <i class="ri-search-line search__icon"></i>
              <input type="search" placeholder="What are you looking for?" class="search__input" />
          </form>
          <i class="ri-close-line search__close" id="search-close"></i>
      </div>
    `;

    const input = this.querySelector(".search__input");

    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const keyword = input.value.trim();
        if (keyword) {
          const encoded = encodeURIComponent(keyword);
          window.location.href = `yoursearch.html?query=${encoded}`;
        }
      }
    });

    const closeBtn = this.querySelector("#search-close");
    closeBtn.addEventListener("click", () => {
      input.value = "";
    });
  }
}

customElements.define("my-search", MySearch);

/*================ FOOTER =================*/
class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer class="footer">
        <div class="footer__container container grid">
            <div>
                <a href="home.html" class="footer__logo">
                    <span class="lang">LANG</span><span class="bridge">BRIDGE</span>
                </a>

                <p class="footer__description">
                    Find and explore the best <br>
                    eBooks from all your <br>
                    favorite writers.
                </p>
            </div>

            <div>
                <h3 class="footer__tittle">Contact</h3>
                <ul class="footer__infor">
                    <li>
                        <address class="footer__infor">
                            langbridge.contact@gmail.com <br>
                        </address>
                    </li>
                </ul>
            </div>

            <div>
                <h3 class="footer__tittle">Social</h3>

                <div class="footer__social">
                    <a href="#" target="_blank" class="footer__social-link">
                        <i class="ri-facebook-circle-line"></i>
                    </a>

                    <a href="#" target="_blank" class="footer__social-link">
                        <i class="ri-instagram-line"></i>
                    </a>
                </div>
            </div>
        </div>

        <span class="footer__copy">
            &#169; All Rights Reserved By Bedimcode
        </span>
    </footer>    
    `;
  }
}
customElements.define("my-footer", MyFooter);

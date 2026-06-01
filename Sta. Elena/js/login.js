/**
 * Portal landing: carousel, scroll animations, login modal
 */
(function () {
  if (Auth.getSession()) {
    window.location.href = "dashboard.html";
    return;
  }

  const modal = document.getElementById("login-modal");
  const form = document.getElementById("login-form");
  const roleSelect = document.getElementById("role");
  const alertEl = document.getElementById("login-alert");

  // Carousel with Ken Burns reset
  const slides = document.querySelectorAll(".portal-hero__slide");
  const dots = document.querySelectorAll(".portal-hero__dot");
  let slideIndex = 0;
  let carouselTimer;

  function showSlide(i) {
    slideIndex = (i + slides.length) % slides.length;
    slides.forEach((s, j) => {
      const active = j === slideIndex;
      s.classList.toggle("active", active);
      if (active) {
        const img = s.querySelector("img");
        if (img) {
          img.style.animation = "none";
          img.offsetHeight;
          img.style.animation = "";
        }
      }
    });
    dots.forEach((d, j) => d.classList.toggle("active", j === slideIndex));
  }

  function startCarousel() {
    clearInterval(carouselTimer);
    carouselTimer = setInterval(() => showSlide(slideIndex + 1), 5500);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      showSlide(i);
      startCarousel();
    });
  });

  if (slides.length) {
    showSlide(0);
    startCarousel();
  }

  // Pause carousel when tab hidden
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) clearInterval(carouselTimer);
    else startCarousel();
  });

  // Scroll-triggered card animations
  const cards = document.querySelectorAll(".portal-card");
  const cardObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  cards.forEach((card) => cardObserver.observe(card));

  // Login modal
  function openLogin(role) {
    if (role) roleSelect.value = role;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => {
      document.getElementById("username").focus();
    });
  }

  function closeLogin() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    alertEl.classList.remove("show");
  }

  document.getElementById("btn-hero-login").addEventListener("click", () => openLogin(""));
  document.querySelectorAll("[data-open-login]").forEach((btn) => {
    btn.addEventListener("click", () => openLogin(btn.dataset.role || ""));
  });

  document.querySelectorAll("[data-register]").forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("Please visit the Registrar's Office at Sta. Elena High School to register for portal access.");
    });
  });

  document.getElementById("modal-close").addEventListener("click", closeLogin);
  modal.querySelector(".login-modal__backdrop").addEventListener("click", closeLogin);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) closeLogin();
  });

  // Smooth scroll with offset for sticky header
  document.querySelectorAll("[data-scroll-to]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      const top = target.getBoundingClientRect().top + window.scrollY - 20;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const btn = document.getElementById("btn-login");

    const result = Auth.login(
      document.getElementById("username").value,
      document.getElementById("password").value,
      roleSelect.value
    );

    if (!result.ok) {
      alertEl.textContent = result.message;
      alertEl.classList.add("show");
      return;
    }

    alertEl.classList.remove("show");
    btn.disabled = true;
    btn.textContent = "Signing in…";
    btn.style.opacity = "0.8";
    window.location.href = "dashboard.html";
  });

  document.getElementById("forgot-link").addEventListener("click", function (e) {
    e.preventDefault();
    alert("Contact the school registrar to reset your password.");
  });
})();

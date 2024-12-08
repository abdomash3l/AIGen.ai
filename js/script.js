const parent = document.querySelector(".content1");
const childDivs = parent.querySelectorAll("div");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
});

childDivs.forEach((div) => observer.observe(div));

const backToTopButton = document.getElementById("backToTop");

window.onscroll = function () {
  if (window.scrollY > 300) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
};

backToTopButton.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

document.addEventListener("DOMContentLoaded", function () {
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: ["#ff00ff", "#00ff00", "#00ffff"] },
      shape: { type: "circle", stroke: { width: 1 } },
      opacity: {
        value: 0.8,
        random: true,
        anim: { enable: true, speed: 6, opacity_min: 0.1, sync: false },
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: true, speed: 6, size_min: 0.1, sync: false },
      },
      line_linked: {
        enable: true,
        distance: 120,
        color: "#9900ff",
        opacity: 0.6,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: true, rotateX: 600, rotateY: 1200 },
      },
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: { enable: true, mode: ["repulse", "grab"] },
        onclick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        grab: { distance: 150, line_linked: { opacity: 0.8 } },
        repulse: { distance: 100, duration: 0.4 },
        push: { particles_nb: 6 },
      },
    },
    retina_detect: true,
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuItem = document.querySelector(".menu-item");
  const megaMenu = document.querySelector(".mega-menu");
  const links = megaMenu.querySelectorAll("a");

  menuItem.addEventListener("click", function (e) {
    e.preventDefault();
    menuItem.classList.toggle("active");
  });

  document.addEventListener("click", function (e) {
    if (!menuItem.contains(e.target) && !megaMenu.contains(e.target)) {
      menuItem.classList.remove("active");
    }
  });

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  });
});

document.querySelectorAll(".content1 a").forEach((link) => {
  link.href = "";
});

function openWindow(url) {
  const width = 800;
  const height = 600;
  const left = (window.innerWidth - width) / 2;
  const top = (window.innerHeight - height) / 2;
  window.open(
    url,
    "_blank",
    `width=${width},height=${height},left=${left},top=${top}`
  );
}

const buttons = {
  learn:
    "https://www.youtube.com/playlist?list=PLtsZ69x5q-X9j44MdSX-NGuOhGXOY0aqH",
  ChatGPT: "https://chat.openai.com/",
  Copilot: "https://github.com/features/copilot",
  Gemini: "https://gemini.google.com/",
  Alexa: "https://www.amazon.com/b?ie=UTF8&node=16067270011",
  "Google Assistant": "https://assistant.google.com/",
  Siri: "https://www.apple.com/siri/",
  "Hugging Face": "https://huggingface.co/",
  "IBM Watson": "https://www.ibm.com/watson",
  Q1: "https://sotor.com/%D9%85%D8%A7_%D9%87%D9%8A_%D8%A3%D8%A8%D8%B1%D8%B2_%D9%81%D9%88%D8%A7%D8%A6%D8%AF_%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1_%D8%A7%D9%84%D8%A7%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%8A%D8%9F",
  Q2: "https://www.cdw.com/content/cdw/en/brand/intel-client/intel-device-refresh.html",
  Q3: "https://jenni.ai/ar/artificial-intelligence/history",
  A1: "https://www.unite.ai/ar/%D8%B9%D9%85%D9%84%D8%A9-%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1-%D8%A7%D9%84%D8%A7%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%8A-%D8%A7%D9%84%D8%A5%D9%86%D8%AA%D8%A7%D8%AC%D9%8A%D8%A9-%D9%88%D8%A7%D9%84%D8%B9%D9%86%D8%B5%D8%B1-%D8%A7%D9%84%D8%A8%D8%B4%D9%8A%D8%B1%D9%8A/",
  A2: "https://ar.wikipedia.org/wiki/%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE_%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1_%D8%A7%D9%84%D8%A7%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%8A",
  A3: "https://bakkah.com/ar/knowledge-center/%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE-%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1-%D8%A7%D9%84%D8%A7%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%8A",
  learn1:
    "https://www.youtube.com/playlist?list=PLtsZ69x5q-X9j44MdSX-NGuOhGXOY0aqH",
  ckp: "https://ckp.eg",
  facebook: "https://www.facebook.com/profile.php?id=61550070507694",
  linkedin: "https://www.linkedin.com/in/abdo-mash3l",
  twitter: "https://x.com/abdomashl",
  youtube: "https://www.youtube.com/@abdomashl",
};

Object.keys(buttons).forEach((id) => {
  document.getElementById(id).addEventListener("click", function (e) {
    e.preventDefault();
    openWindow(buttons[id]);
  });
});

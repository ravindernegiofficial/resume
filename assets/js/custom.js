(function ($) {
  "use strict";

  new WOW().init();

  // Sticky Header
  const header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    header.classList.toggle("headerscroll", scrollY > 0);
  });

  // Go Top Button
  const goTop = document.querySelector(".go-top");
  window.addEventListener("scroll", () => {
    goTop.classList.toggle("go-top-active", window.pageYOffset > 300);
  });
  $("#go-top-btn").click(() => $("html").animate({ scrollTop: 0 }, 500));

  // Smooth Scroll for Nav
  $(".nav-link").on("click", function (e) {
    e.preventDefault();
    const anchor = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(anchor).offset().top - 40 }, 800);
  });
})(jQuery);

// ===========================
// TYPEWRITER EFFECT
// ===========================
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.getElementsByClassName("typewrite");
  for (let i = 0; i < elements.length; i++) {
    const toRotate = elements[i].getAttribute("data-type");
    const period = elements[i].getAttribute("data-period");
    if (toRotate) new TxtType(elements[i], JSON.parse(toRotate), period);
  }
  const css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
});

function TxtType(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.isDeleting = false;
  this.tick();
}

TxtType.prototype.tick = function () {
  const i = this.loopNum % this.toRotate.length;
  const fullTxt = this.toRotate[i];
  this.txt = this.isDeleting
    ? fullTxt.substring(0, this.txt.length - 1)
    : fullTxt.substring(0, this.txt.length + 1);
  this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;
  let delta = 200 - Math.random() * 100;
  if (this.isDeleting) delta /= 2;
  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }
  setTimeout(() => this.tick(), delta);
};

// ===========================
// DYNAMIC PORTFOLIO SECTION
// ===========================
const projectData = [
  {
    id: "website1",
    title: "Restaurant Website",
    category: "Website",
    desc: `
      <strong>Website:</strong> bombaycafepalma.com<br>
      <strong>Client:</strong> Bombay Cafe Palma (Spanish–Indian Restaurant)<br>
      <strong>Year:</strong> 2025<br>
      <strong>Role:</strong> Full-Stack Web Developer & Designer<br>
      <strong>Desc:</strong> Responsive restaurant website with menu, booking, and gallery.<br>
      <strong>Overview:</strong> Developed the official website for Bombay Cafe Palma using WordPress, custom HTML, CSS & Bootstrap.<br>
      <strong>Key Work:</strong> Custom theme, menu page, multilingual setup, and reservation system.<br>
      <strong>Result:</strong> Improved site speed, SEO, and customer conversions.<br>
      👉 <strong>Visit:</strong> <a href="https://www.bombaycafepalma.com/" target="_blank">bombaycafepalma.com</a>
    `,
    images: ["assets/img/ravindernegi-portfolio-01.jpg", "assets/img/resturant-website.jpg"]
  },
  {
    id: "ev1",
    title: "Electric Vehicle Website",
    category: "Website",
    desc: `
      <strong>Website:</strong> sunandagreentech.com<br>
      <strong>Client:</strong> Sunanda Greentech (Electric Vehicle Manufacturer)<br>
      <strong>Year:</strong> 2025<br>
      <strong>Role:</strong> Web Developer & SEO Specialist<br>
      <strong>Desc:</strong> Multi-page responsive website built with HTML, CSS, PHP & MySQL.<br>
      <strong>Overview:</strong> Designed a professional EV website with product listings and dealership form.<br>
      <strong>Key Work:</strong> Frontend UI/UX design, PHP form integration, SEO setup.<br>
      <strong>Result:</strong> Enhanced digital presence and lead generation.<br>
      👉 <strong>Visit:</strong> <a href="https://www.sunandagreentech.in/" target="_blank">sunandagreentech.in</a>
    `,
    images: ["assets/img/ev-1.jpg", "assets/img/ev-2.jpg"]
  },

  {
    id: "akhilcloth",
    title: "Electric Vehicle Website",
    category: "Website",
    desc: `
      <strong>Client:</strong> Akhil Fashion Hub <br>
<strong>Year:</strong> 2025<br>
<strong>Role:</strong> Shopify Web Developer & Ads Manager<br>
<strong>Desc:</strong> Designed and developed a dropshipping-based clothing website for Akhil Fashion Hub using Shopify.<br>
<strong>Overview:</strong> Built a fully responsive Shopify store with custom-coded features, app integrations, and secure payment gateway setup. Managed product ads to drive sales and traffic.<br>
<strong>Key Work:</strong> Theme customization, product catalog setup, dropshipping integration, payment configuration, and Meta Ads campaign management.<br>
<strong>Result:</strong> Successfully launched a modern fashion eCommerce store within a ₹15K project budget, enhancing sales and brand visibility.<br>

    `,
    images: ["assets/img/fashion-hub-1.jpg","assets/img/fashion-hub-2.jpg","assets/img/fashion-hub-3.jpg","assets/img/fashion-hub-4.jpg","assets/img/fashion-hub-5.jpg","assets/img/fashion-hub-6.jpg",]
  },
  {
    id: "meta1",
    title: "Meta Ads – EV Company",
    category: "Meta Ads",
    desc: `
      <strong>Client:</strong> Sunanda Greentech<br>
      <strong>Year:</strong> 2025<br>
      <strong>Role:</strong> Meta Ads Expert<br>
      <strong>Desc:</strong> Managed ad campaigns for electric vehicles.<br>
      <strong>Overview:</strong> Created audience-targeted ad sets for EV buyers.<br>
      <strong>Key Work:</strong> Creative design, targeting, and optimization.<br>
      <strong>Result:</strong> ROI increased by 200% with reduced CPL.<br>
    `,
    images: ["assets/img/meta-front-1.jpeg", "assets/img/meta-ev-1.jpeg"]
  },
  {
    id: "meta2",

    title: "Meta Ads – Real Estate",
    category: "Meta Ads",
    desc: `
      <strong>Client:</strong> Real Deal Realtors<br>
      <strong>Year:</strong> 2025<br>
      <strong>Role:</strong> Campaign Strategist<br>
      <strong>Desc:</strong> Ads for luxury residential properties.<br>
      <strong>Overview:</strong> Ran multiple ad sets for different projects.<br>
      <strong>Key Work:</strong> Ad copywriting, visuals & A/B testing.<br>
      <strong>Result:</strong> 1000+ quality leads generated.<br>
    `,
    images: ["assets/img/realeastate-1.jpeg", "assets/img/realeastate-2.jpeg"]
  },

 {
    id: "meta3",
    title: "Meta Ads – Real Estate",
    category: "Meta Ads",
    desc: `
   <strong>Client:</strong> USA Education <br>
<strong>Year:</strong> 2025<br>
<strong>Role:</strong> Campaign Strategist<br>
<strong>Desc:</strong> Planned and executed Meta Ads campaigns for Smart USA Education, focusing on student enrollment across the United States.<br>
<strong>Overview:</strong> Designed and optimized multiple ad sets for different education programs and audience demographics using Meta Business Suite.<br>
<strong>Key Work:</strong> Ad copywriting, visual concept creation, audience segmentation, campaign optimization, and A/B testing for performance improvement.<br>
<strong>Result:</strong> Generated 1,200+ qualified leads, increased CTR by 40%, and significantly enhanced brand visibility among prospective students.<br>

    `,
    images: ["assets/img/meta3-1.jpeg", "assets/img/meta3-2.jpeg",]
  },


//   {
//     id: "seo1",
//     title: "SEO Optimization",
//     category: "SEO",
//     desc: `
//      <strong>Client:</strong> USA Education <br>
// <strong>Year:</strong> 2025<br>
// <strong>Role:</strong> Campaign Strategist<br>
// <strong>Desc:</strong> Created and managed Meta Ads campaigns for Smart USA Education, targeting students across the United States.<br>
// <strong>Overview:</strong> Executed multiple ad sets focusing on various education programs, audience segments, and conversion objectives.<br>
// <strong>Key Work:</strong> Strategic ad copywriting, engaging visuals, audience targeting, budget optimization, and A/B testing for maximum ROI.<br>
// <strong>Result:</strong> Generated 1000+ high-quality leads and improved CTR by 35%, significantly boosting enrollment inquiries.<br>
//     `,
//     images: ["assets/img/seo-sample.jpg"]
//   },
  {
    id: "logo1",
    title: "Corporate Logo Design",
    category: "Logo",
    desc: `
     <strong>Project:</strong> Logo & Brand Identity Design<br>
<strong>Client:</strong> Multiple Businesses & Startups (StyleHub, Aior Italy, Nyra, Clat Success, Shree Homes, Easy Learn, ProperTypeBaat, Tara E-Rickshaw, Samdox & more)<br>
<strong>Year:</strong> 2024–2025<br>
<strong>Role:</strong> Graphic Designer & Brand Identity Specialist<br>
<strong>Desc:</strong> Created cohesive brand identities and logo systems for diverse clients across fashion, education, real estate, tech, and automotive industries.<br>
<strong>Overview:</strong> Designed simple yet modern logos tailored to each brand’s vision. Delivered complete branding systems including color palettes, typography, and visual guidelines to ensure strong market presence and recognition.<br>
<strong>Key Work:</strong> Concept development, vector logo design, color palette creation, brand strategy, and final digital & print-ready delivery.<br>
<strong>Result:</strong> Enhanced brand consistency, recognition, and trust across platforms. Many clients reported increased visibility and customer engagement post-launch.<br>
👉 <strong>Portfolio:</strong> Available upon request / showcased in design portfolio.<br>
    `,
    images: ["assets/img/logo.jpeg", "assets/img/logo2.jpeg", "assets/img/logo3.jpeg"]
  },
  // {
  //   id: "graphic1",
  //   title: "Poster Design Campaign",
  //   category: "Graphic",
  //   desc: `
  //     <strong>Client:</strong> Event Company<br>
  //     <strong>Role:</strong> Graphic Designer<br>
  //     <strong>Desc:</strong> Designed event posters & creatives.<br>
  //     <strong>Overview:</strong> Used Adobe Illustrator & Photoshop for vector-based design.<br>
  //     <strong>Key Work:</strong> Layout, color grading, brand alignment.<br>
  //     <strong>Result:</strong> Eye-catching visuals with high engagement.<br>
  //   `,
  //   images: ["assets/img/graphic1.jpg"]
  // }
];

// === PAGINATION + SEARCH ===
const portfolioContainer = document.getElementById("portfolio-container");
const paginationContainer = document.createElement("div");
paginationContainer.className = "pagination text-center mt-4";
portfolioContainer.parentNode.appendChild(paginationContainer);

const searchBar = document.createElement("div");
searchBar.className = "text-center mb-4";
searchBar.innerHTML = `
  <input type="text" id="searchInput" class="form-control text-center"
  placeholder="Search projects by title or category" 
  style="max-width:500px; margin:auto; border-radius:30px; padding:10px 15px;">
`;
portfolioContainer.parentNode.insertBefore(searchBar, portfolioContainer);

let currentPage = 1;
const itemsPerPage = 6;
let currentFilter = "all";
let currentSearch = "";

function renderProjects(filter = "all", page = 1, search = "") {
  if (!portfolioContainer) return;
  portfolioContainer.innerHTML = "";
  currentFilter = filter;
  currentPage = page;
  currentSearch = search;

  let filtered = projectData;
  if (filter !== "all") filtered = filtered.filter(p => p.category.toLowerCase() === filter.toLowerCase());
  if (search.trim() !== "") {
    const term = search.toLowerCase();
    filtered = filtered.filter(p => p.title.toLowerCase().includes(term) || p.category.toLowerCase().includes(term));
  }

  const start = (page - 1) * itemsPerPage;
  const paginated = filtered.slice(start, start + itemsPerPage);

  if (paginated.length === 0) {
    portfolioContainer.innerHTML = `<p class="text-center text-muted">No projects found.</p>`;
    paginationContainer.innerHTML = "";
    return;
  }

  paginated.forEach(proj => {
    const col = document.createElement("div");
    col.className = "col-lg-4 col-md-6 mb-4 mix " + proj.category.toLowerCase();
    col.innerHTML = `
      <div class="portfolio-card" data-project="${proj.id}">
        <img src="${proj.images[0]}" alt="${proj.title}">
        <div class="card-overlay">
          <h5>${proj.title}</h5>
          <p>${proj.category}</p>
        </div>
      </div>`;
    portfolioContainer.appendChild(col);
  });

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  let buttonsHTML = "";
  if (totalPages > 1) {
    buttonsHTML += `<button class="btn btn-outline-light mx-1" ${page === 1 ? "disabled" : ""} id="prevPage">Prev</button>`;
    buttonsHTML += `<span class="mx-2 text-white">Page ${page} of ${totalPages}</span>`;
    buttonsHTML += `<button class="btn btn-outline-light mx-1" ${page === totalPages ? "disabled" : ""} id="nextPage">Next</button>`;
  }
  paginationContainer.innerHTML = buttonsHTML;

  $("#prevPage").off("click").on("click", () => renderProjects(currentFilter, currentPage - 1, currentSearch));
  $("#nextPage").off("click").on("click", () => renderProjects(currentFilter, currentPage + 1, currentSearch));
}

renderProjects();

$(".filter-btn").on("click", function () {
  $(".filter-btn").removeClass("active");
  $(this).addClass("active");
  const filter = $(this).data("filter");
  renderProjects(filter === "all" ? "all" : filter);
});

$("#searchInput").on("input", function () {
  const term = $(this).val();
  renderProjects(currentFilter, 1, term);
});

// ===============================
// PROJECT DETAIL POPUP
// ===============================
let currentProject = [];
let currentIndex = 0;

$(document).on("click", ".portfolio-card", function () {
  const id = $(this).data("project");
  const data = projectData.find(p => p.id === id);
  if (!data) return;

  $("#detailTitle").text(data.title);
  $("#detailCategory").text(data.category);
  $("#detailDesc").html(data.desc);

  currentProject = data.images;
  currentIndex = 0;
  showImage();

  $("#portfolioDetail").addClass("active").attr("aria-hidden", "false");
  $("html, body").animate({ scrollTop: $("#portfolioDetail").offset().top - 60 }, 400);
});

$(document).on("click", "#closeDetail", function () {
  $("#portfolioDetail").removeClass("active");
  $("html, body").animate({ scrollTop: $("#portfolio").offset().top - 80 }, 400);
});

function showImage() {
  let imgHTML = "";
  currentProject.forEach((src, i) => {
    imgHTML += `
      <div class="carousel-item ${i === currentIndex ? "active" : ""}">
        <img src="${src}" class="d-block w-100" alt="Project Image">
      </div>`;
  });
  $("#galleryImages").html(imgHTML);
}

$("#nextImg").on("click", function () {
  if (currentProject.length < 2) return;
  currentIndex = (currentIndex + 1) % currentProject.length;
  showImage();
});

$("#prevImg").on("click", function () {
  if (currentProject.length < 2) return;
  currentIndex = (currentIndex - 1 + currentProject.length) % currentProject.length;
  showImage();
});

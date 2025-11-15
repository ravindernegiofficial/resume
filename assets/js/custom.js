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
    images: ["assets/img/ravindernegi-portfolio-01.jpg", "assets/img/resturant-website-2.jpg", "assets/img/resturant-website-3.jpg", "assets/img/resturant-website-4.jpg"]
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
    title: "Akhil Fashion Hub – Shopify Clothing Store",
    category: "Website",
    desc: `
    <strong>Client:</strong> Akhil Fashion Hub <br>
    <strong>Year:</strong> 2025<br>
    <strong>Role:</strong> Shopify Web Developer & Ads Manager<br>

    <strong>Desc:</strong> Designed and developed a modern dropshipping-based clothing eCommerce store for Akhil Fashion Hub using Shopify. Focused on creating a high-conversion layout with a smooth shopping experience.<br>

    <strong>Overview:</strong> Built a fully responsive Shopify store with custom theme adjustments, advanced product layout sections, essential app integrations, and a secure payment gateway setup. Managed product advertising to boost traffic and sales across social platforms.<br>

    <strong>Key Work:</strong> Custom theme styling, product catalog creation, dropshipping system integration, checkout & payment configuration, store optimization, and Meta Ads campaign management for targeted sales growth.<br>

    <strong>Result:</strong> Successfully launched a professional, mobile-optimized fashion store within a ₹15K budget, improving sales potential and strengthening the brand’s online presence.<br>
      <strong>Website:</strong>https://akhilfashionhub.com/
    `,
    images: [
      "assets/img/fashion-hub-1.jpg",
      "assets/img/fashion-hub-2.jpg",
      "assets/img/fashion-hub-3.jpg",
      "assets/img/fashion-hub-4.jpg",
      "assets/img/fashion-hub-5.jpg",
      "assets/img/fashion-hub-6.jpg"
    ]
  },
  {
    id: "usawebstories",
    title: "USA WebStories Blog Website",
    category: "Website",
    desc: `
    <strong>Client:</strong> USA WebStories <br>
    <strong>Year:</strong> 2025<br>
    <strong>Role:</strong> Web Developer & Content Strategist<br>
    <strong>Desc:</strong> Developed a blog website for USA WebStories focusing on visual storytelling format (Web Stories).<br>
    <strong>Overview:</strong> Created a mobile-first, full-screen story experience using the open web “Web Stories” format, optimized for SEO and Google Discover. Integrated story layouts, fast-loading AMP pages, and custom theme for blog content.<br>
    <strong>Key Work:</strong> Theme development, AMP story implementation, structured data for Web Stories, responsive design, content layout for blog posts and stories.<br>
    <strong>Result:</strong> Launched a modern blog platform leveraging Web Stories format, improving mobile engagement and search visibility within budget and timeline.<br>
    <strong>Website:</strong>https://usawebstory.com/
  `,
    images: [
      "assets/img/webstories-1.jpg",
      "assets/img/webstories-2.jpg",
      "assets/img/webstories-3.jpg",
      "assets/img/webstories-4.jpg",
      "assets/img/webstories-5.jpg",
      "assets/img/webstories-6.jpg"
    ]
  },
  {
    id: "propertypebaat",
    title: "Property Pe Baat Real-Estate Platform",
    category: "Website",
    desc: `
    <strong>Client:</strong> Property Pe Baat <br>
    <strong>Year:</strong> 2025<br>
    <strong>Role:</strong> Web Developer & Real-Estate Content Strategist<br>
    <strong>Desc:</strong> Designed and developed a professional property listing and advisory website for Property Pe Baat, focusing on land, plots and homes around the Mohali / New Chandigarh region.<br>
    <strong>Overview:</strong> Built a responsive website that showcases real-estate listings (plots, houses, rentals) with high-quality imagery, structured listing pages, contact forms, and easy navigation. Integrated SEO-friendly layouts tailored for property search and lead generation.<br>
    <strong>Key Work:</strong> Custom theme design, listing database integration, filter/search functionality, contact/lead capture forms, mobile-first performance optimisation, and on-page SEO for real-estate keywords.<br>
    <strong>Result:</strong> Launched a robust property platform with strong mobile engagement, improved enquiry flow and enhanced regional visibility in the competitive Mohali/New Chandigarh real-estate market.<br>
    <strong>Website:</strong> <a href="https://propertypebaat.in/" target="_blank">https://propertypebaat.in/</a><br>
  `,
    images: [
      "assets/img/real-1.jpg",
      "assets/img/real-2.jpg",
      "assets/img/real-3.jpg",
      "assets/img/real-4.jpg",
      "assets/img/real-5.jpg"
    ]
  },
  {
    id: "meta1",
    title: "Meta Ads – Electric Vehicle Lead Generation",
    category: "Meta Ads",
    desc: `
    <strong>Client:</strong> Sunanda Greentech<br>
    <strong>Year:</strong> 2025<br>
    <strong>Role:</strong> Meta Ads Specialist<br>
    <strong>Desc:</strong> Planned and executed high-performing Meta Ads campaigns for Sunanda Greentech to generate qualified leads for electric scooters and e-bikes.<br>
    <strong>Overview:</strong> Developed laser-targeted ad sets based on buyer intent, demographics, EV interests, and location segmentation. Designed conversion-focused creatives to showcase features, pricing, and test-ride benefits.<br>
    <strong>Key Work:</strong> Audience research, creative design, campaign setup, A/B testing, budget optimization, retargeting, and continuous performance monitoring to lower CPL and maximize lead quality.<br>
    <strong>Result:</strong> Achieved a significant boost in campaign performance with over 200% ROI, improved lead quality, and a noticeably reduced cost-per-lead (CPL).<br>
  `,
    images: ["assets/img/meta-front-1.jpeg", "assets/img/meta-ev-1.jpeg"]
  },
  {
    id: "meta2",
    title: "Meta Ads – Real Estate Lead Generation",
    category: "Meta Ads",
    desc: `
    <strong>Client:</strong> Real Deal Realtors<br>
    <strong>Year:</strong> 2025<br>
    <strong>Role:</strong> Meta Ads Campaign Strategist<br>

    <strong>Desc:</strong> Planned and executed Meta Ads campaigns for premium and luxury residential real-estate projects aimed at generating high-quality buyer enquiries.<br>
    <strong>Overview:</strong> Managed multiple campaigns across different property segments, including luxury apartments, plots and investment-focused projects. Developed audience-specific targeting strategies optimized for location, income range and buyer behaviour.<br>
    <strong>Key Work:</strong> High-impact ad copywriting, creative visual design, A/B testing of creatives and audiences, lead form optimization, retargeting strategy, and continuous performance scaling.<br>

    <strong>Result:</strong> Generated 1,000+ verified, high-intent leads with strong conversion potential, significantly improving project visibility and reducing overall cost-per-lead.<br>
  `,
    images: ["assets/img/realeastate-1.jpeg", "assets/img/realeastate-2.jpeg"]
  },
  {
    id: "meta3",
    title: "Meta Ads – USA Education Lead Campaigns",
    category: "Meta Ads",
    desc: `
    <strong>Client:</strong> USA Education<br>
    <strong>Year:</strong> 2025<br>
    <strong>Role:</strong> Meta Ads Campaign Strategist<br>
    <strong>Desc:</strong> Planned and executed high-performing Meta Ads campaigns for Smart USA Education to boost student enrollment for multiple academic programs across the United States.<br>
    <strong>Overview:</strong> Designed, tested, and optimized multiple ad sets tailored to various education programs, target age groups, and regional audience segments. Leveraged Meta Business Suite for precise targeting and data-driven campaign optimization.<br>
    <strong>Key Work:</strong> Strategic ad copywriting, creative visual development, audience segmentation, budget allocation, lead form optimization, and continuous A/B testing to improve performance and reduce costs.<br>
    <strong>Result:</strong> Generated 1,200+ qualified student leads, improved CTR by 40%, and significantly strengthened brand visibility among U.S.–based prospective students.<br>
  `,
    images: ["assets/img/meta3-1.jpeg", "assets/img/meta3-2.jpeg"]
  },
  {
    id: "logo1",
    title: "Corporate Logo Design",
    category: "Graphic",
    desc: `
     <strong>Project:</strong> Logo & Brand Identity Design<br>
<strong>Client:</strong> Multiple Businesses & Startups (StyleHub, Aior Italy, Nyra, Clat Success, Shree Homes, Easy Learn, PropertypeBaat, Tara E-Rickshaw, Samdox & more)<br>
<strong>Year:</strong> 2024–2025<br>
<strong>Role:</strong> Graphic Designer & Brand Identity Specialist<br>
<strong>Desc:</strong> Created cohesive brand identities and logo systems for diverse clients across fashion, education, real estate, tech, and automotive industries.<br>
<strong>Overview:</strong> Designed simple yet modern logos tailored to each brand’s vision. Delivered complete branding systems including color palettes, typography, and visual guidelines to ensure strong market presence and recognition.<br>
<strong>Key Work:</strong> Concept development, vector logo design, color palette creation, brand strategy, and final digital & print-ready delivery.<br>
<strong>Result:</strong> Enhanced brand consistency, recognition, and trust across platforms. Many clients reported increased visibility and customer engagement post-launch.<br>
👉 <strong>Portfolio:</strong> Available upon request / showcased in design portfolio.<br>
    `,
    images: ["assets/img/logo.jpeg", "assets/img/logo2.jpeg", "assets/img/logo3.jpeg","assets/img/new-logo-1.jpg","assets/img/new-logo-2.jpg","assets/img/new-logo-3.jpg","assets/img/new-logo-4.jpg","assets/img/new-logo-5.jpg"]
  },
  {
    id: "Poster1",
    title: "Graphic & Poster Designing",
    category: "Graphic",
    desc: `
    <strong>Service:</strong> Premium Graphic & Poster Designing<br>
    <strong>Year:</strong> 2025<br>
    <strong>Role:</strong> Creative Designer & Branding Specialist<br>

    <strong>Desc:</strong> Designed high-quality posters, social media creatives, product ads, and promotional graphics for multiple brands across different industries.<br>

    <strong>Overview:</strong> Delivered fully customized posters tailored to brand identity, campaign goals, and platform formats. Expertise in modern design trends, color psychology, typography, and conversion-focused layouts for digital ads.<br>

    <strong>Poster Types I Create:</strong><br>
    • Product Launch / Product Promo Graphics<br>
    • Social Media Ads (Instagram/Facebook)<br>
    <strong>Formats Delivered:</strong><br>
    • Instagram Square (1080×1080)<br>
    • Story / Vertical Ads (1080×1920)<br>
    • Facebook/LinkedIn Post Sizes<br>
  `,
    images: [
      "assets/img/graphic-1.jpeg",
      "assets/img/graphic-2.jpeg",
      "assets/img/graphic-3.jpeg",
      "assets/img/graphic-4.jpeg",
      "assets/img/graphic-5.jpeg",
      "assets/img/graphic-6.jpeg",
      "assets/img/graphic-7.jpeg"
    ]
  },

{
  id: "LocalSEO1",
  title: "Local SEO & Google Business Optimization",
  category: "SEO",
  desc: `
    <strong>Service:</strong> Google Business Profile Optimization<br>
    <strong>Year:</strong> 2025<br>
    <strong>Role:</strong> Local SEO Specialist<br>

    <strong>Desc:</strong> Local SEO setup to improve Google Maps ranking and visibility.<br>

    <strong>Key Work:</strong><br>
    • Google Business Setup<br>
    • NAP Fix<br>
    • Local Citations<br>
    • Local Keywords<br>
    • Geo-tag Photos<br>
    • Competitor Analysis<br>
    • 3-Pack Optimization<br>
  `,
  images: [
    "assets/img/seo1.jpg",
    "assets/img/seo-chd.jpg",
    "assets/img/seo-moh.jpg",
     "assets/img/seo-fir.jpg"
   
  ]
}

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

  // SHOW LATEST FIRST: reverse a shallow copy so original array order stays intact
  let sortedProjects = [...projectData].reverse();

  let filtered = sortedProjects;
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

    // safe image fallback if missing
    const imgSrc = proj.images && proj.images.length > 0 ? proj.images[0] : "assets/img/default.jpg";

    col.innerHTML = `
      <div class="portfolio-card" data-project="${proj.id}">
        <img src="${imgSrc}" alt="${proj.title}">
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

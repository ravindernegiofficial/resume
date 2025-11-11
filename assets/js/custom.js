(function ($) {
  "use strict";

  new WOW().init();

  // sticky header
  var header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    header.classList.toggle("headerscroll", scrollY > 0);
  });

  // resume section
  $("#resume-education-btn").click(() => {
    $("#resume-education-btn").addClass("button-active");
    $("#resume-skills-btn, #resume-experience-btn, #resume-interview-btn").removeClass("button-active");
    $(".resume-education").fadeIn("slow");
    $(".resume-skills, .resume-experience, .resume-interview").fadeOut(1);
  });

  $("#resume-skills-btn").click(() => {
    $("#resume-skills-btn").addClass("button-active");
    $("#resume-education-btn, #resume-experience-btn, #resume-interview-btn").removeClass("button-active");
    $(".resume-skills").fadeIn("slow");
    $(".resume-education, .resume-experience, .resume-interview").fadeOut(1);
  });

  $("#resume-experience-btn").click(() => {
    $("#resume-experience-btn").addClass("button-active");
    $("#resume-education-btn, #resume-skills-btn, #resume-interview-btn").removeClass("button-active");
    $(".resume-experience").fadeIn("slow");
    $(".resume-education, .resume-skills, .resume-interview").fadeOut(1);
  });

  $("#resume-interview-btn").click(() => {
    $("#resume-interview-btn").addClass("button-active");
    $("#resume-education-btn, #resume-skills-btn, #resume-experience-btn").removeClass("button-active");
    $(".resume-interview").fadeIn("slow");
    $(".resume-education, .resume-skills, .resume-experience").fadeOut(1);
  });

  // feedback slider
  $(".testimonial-slider").owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    navText: ['<i class="icofont-arrow-left"></i>', '<i class="icofont-arrow-right"></i>']
  });

  // color theme switcher
  $(".icofont-ui-settings").click(function () {
    $(".colors").fadeToggle();
  });

  var color = document.querySelectorAll(".color");
  color.forEach(item => {
    item.addEventListener("click", function () {
      color.forEach(c => c.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // typing animation
  var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
    this.txt = this.isDeleting ? fullTxt.substring(0, this.txt.length - 1) : fullTxt.substring(0, this.txt.length + 1);
    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 100 - Math.random() * 100;
    if (this.isDeleting) delta /= 2;

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName("typewrite");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-type");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) new TxtType(elements[i], JSON.parse(toRotate), period);
    }
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 1px solid gray}";
    document.body.appendChild(css);
  };

  // go top button
  var goTop = document.querySelector(".go-top");
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      goTop.classList.add("go-top-active");
    } else {
      goTop.classList.remove("go-top-active");
    }
  });
  $("#go-top-btn").click(() => {
    $("html").animate({ scrollTop: 0 }, 500);
  });

  // smooth scroll nav
  $(".nav-link").on("click", function (e) {
    var anchor = $(this);
    $("html, body").stop().animate({
      scrollTop: $(anchor.attr("href")).offset().top - 40
    }, 1000);
    e.preventDefault();
  });

  $(document).on("click", ".navbar-collapse.show", function (e) {
    if ($(e.target).is("a") && $(e.target).attr("class") != "dropdown-toggle") {
      $(this).collapse("hide");
    }
  });
})(jQuery);


// ===========================
// Portfolio Filter Section
// ===========================
var mixer = mixitup(".portfolio-container", {
  selectors: { target: ".mix" },
  animation: { duration: 300 }
});

// Active button highlight
$(".filter-btn").on("click", function () {
  $(".filter-btn").removeClass("active");
  $(this).addClass("active");
});


// ==== Portfolio Section Interactions ====
var projectData = {
  website1: {
    title: "Restaurant Website",
    category: "Website Design",
    desc: `
<strong>Website:</strong> bombaycafepalma.com<br>
<strong>Client:</strong> Bombay Cafe Palma (Spanish–Indian Restaurant)<br>
<strong>Year:</strong> 2025<br>
<strong>Role:</strong> Full-Stack Web Developer & Designer<br><br>
<strong>Desc:</strong> Responsive restaurant website with menu, booking, and gallery.<br><br>
<strong>Overview:</strong> Developed the official website for Bombay Cafe Palma, a Spanish–Indian restaurant in Mallorca. Built on WordPress with custom HTML, CSS & Bootstrap, ensuring a fast, responsive, and SEO-friendly design.<br><br>
<strong>Key Work:</strong> Brand design, multi-language setup, custom theme, and pages for Menu, Gallery, Reservations & Contact.<br><br>
<strong>Result:</strong> Modern, high-performing site that boosts online visibility and user engagement.<br><br>
👉 <strong>Visit:</strong> <a href="https://www.bombaycafepalma.com/" target="_blank">bombaycafepalma.com</a>
`,
    images: [
      "assets/img/ravindernegi-portfolio-01.jpg",
      "assets/img/ravindernegi-portfolio-02.jpg",
      "assets/img/ravindernegi-portfolio-03.jpg"
    ]
  },
  meta1: {
    title: "Meta Ads Campaign",
    category: "Meta Ads",
    desc: `
<strong>Client:</strong> Sunanda Greentech (Electric Vehicle Company)<br>
<strong>Year:</strong> 2025<br>
<strong>Role:</strong> Meta Ads Expert & Marketing Strategist<br>
<strong>Description:</strong> Performance-driven ad campaigns for Electric Scooters & Rickshaws.<br>
<strong>Overview:</strong> Managed Meta Ads for Sunanda Greentech, an EV company specializing in electric scooters and rickshaws. Executed full-funnel ad strategies with a daily ad spend of ₹6K–₹7K, targeting leads across Mohali, Zirakpur, and Chandigarh.<br>
<strong>Key Work:</strong> Campaign setup, creative design, audience targeting, lead optimization, and ad performance tracking.<br>
<strong>Result:</strong> Consistent lead generation, improved CTR, and strong sales growth through high-quality conversions. 🚀
`,
    images: [
      "assets/img/meta-front-1.jpeg",
      "assets/img/meta-ev-1.jpeg",
      "assets/img/meta-ev-2.jpeg"
    ]
  },
  seo1: {
    title: "SEO Optimization",
    category: "SEO",
    desc: "Technical and on-page SEO for improved search rankings.",
    images: [
      "assets/img/seo-sample.jpg"
    ]
  }
};

let currentProject = [];
let currentIndex = 0;

// open project details
$(document).on("click", ".portfolio-card", function () {
  const id = $(this).data("project");
  const data = projectData[id];
  if (!data) return;

  $("#detailTitle").text(data.title);
  $("#detailCategory").text(data.category);
  $("#detailDesc").html(data.desc);

  currentProject = data.images;
  currentIndex = 0;
  showImage();

  $("#portfolioDetail").addClass("active").attr("aria-hidden", "false");
  $("html, body").animate({ scrollTop: $("#portfolioDetail").offset().top - 80 }, 400);
});

// close details
$(document).on("click", "#closeDetail", function () {
  $("#portfolioDetail").removeClass("active");
  $("html, body").animate({ scrollTop: $("#portfolio").offset().top - 80 }, 400);
});

// ✅ Image slider logic (Fixed)
function showImage() {
  if (!currentProject.length) return;

  let imgHTML = `
    <div class="carousel-wrapper" style="position:relative;overflow:hidden;width:100%;border-radius:10px;">
      <img src="${currentProject[currentIndex]}" class="d-block w-100" style="object-fit:cover;border-radius:10px;" alt="Project Image">
      <button id="prevImg" style="position:absolute;top:50%;left:10px;transform:translateY(-50%);background:rgba(0,0,0,0.5);color:#fff;border:none;border-radius:50%;width:36px;height:36px;font-size:20px;cursor:pointer;">❮</button>
      <button id="nextImg" style="position:absolute;top:50%;right:10px;transform:translateY(-50%);background:rgba(0,0,0,0.5);color:#fff;border:none;border-radius:50%;width:36px;height:36px;font-size:20px;cursor:pointer;">❯</button>
    </div>
  `;
  $("#galleryImages").html(imgHTML);
}

// ✅ Next / Prev functional buttons
$(document).on("click", "#nextImg", function () {
  if (currentProject.length > 1) {
    currentIndex = (currentIndex + 1) % currentProject.length;
    showImage();
  }
});

$(document).on("click", "#prevImg", function () {
  if (currentProject.length > 1) {
    currentIndex = (currentIndex - 1 + currentProject.length) % currentProject.length;
    showImage();
  }
});

(function ($){
    'use strict';
    new WOW().init();
    // sticky header
    var header=document.querySelector('.header');
    window.addEventListener('scroll',()=>{
        header.classList.toggle('headerscroll',scrollY>0)
    })
    // resume
    $('#resume-education-btn').click(()=>{
        $('#resume-education-btn').addClass('button-active');
        $('#resume-skills-btn').removeClass('button-active');
        $('#resume-experience-btn').removeClass('button-active');
        $('#resume-interview-btn').removeClass('button-active');

        $('.resume-education').fadeIn('slows');
        $('.resume-skills').fadeOut(1);
        $('.resume-experience').fadeOut(1);
        $('.resume-interview').fadeOut(1);
    });
    $('#resume-skills-btn').click(()=>{
        $('#resume-education-btn').removeClass('button-active');
        $('#resume-skills-btn').addClass('button-active');
        $('#resume-experience-btn').removeClass('button-active');
        $('#resume-interview-btn').removeClass('button-active');

        $('.resume-education').fadeOut(1);
        $('.resume-skills').fadeIn('slows');
        $('.resume-experience').fadeOut(1);
        $('.resume-interview').fadeOut(1);
    });
    $('#resume-experience-btn').click(()=>{
        $('#resume-education-btn').removeClass('button-active');
        $('#resume-skills-btn').removeClass('button-active');
        $('#resume-experience-btn').addClass('button-active');
        $('#resume-interview-btn').removeClass('button-active');

        $('.resume-education').fadeOut(1);
        $('.resume-skills').fadeOut(1);
        $('.resume-experience').fadeIn('slows');
        $('.resume-interview').fadeOut(1);

    });
    $('#resume-interview-btn').click(()=>{
        $('#resume-education-btn').removeClass('button-active');
        $('#resume-skills-btn').removeClass('button-active');
        $('#resume-experience-btn').removeClass('button-active');
        $('#resume-interview-btn').addClass('button-active');

        $('.resume-education').fadeOut(1);
        $('.resume-skills').fadeOut(1);
        $('.resume-experience').fadeOut(1);
        $('.resume-interview').fadeIn('slows');
    });
    // feedback slider
    $('.testimonial-slider').owlCarousel({
        items:1,
        loop:true,
        margin:0,
        nav:true,
        dots:true,
        navText:['<i class="icofont-arrow-left"></i>','<i class="icofont-arrow-right"></i>']
    })
    // change colors
    $('.white').click(()=>{
        $(':root').css('--color-lightn','#c4cfde');
        $(':root').css('--color-white','#fff');
        $(':root').css('--color-midgray','#878787');
    });
    $('.BlueViolet').click(()=>{
        $(':root').css('--color-lightn','#8A2BE2');
        $(':root').css('--color-white','#8A2BE2');
        $(':root').css('--color-midgray','#8A2BE2');
    });
    $('.Coral').click(()=>{
        $(':root').css('--color-lightn','Coral');
        $(':root').css('--color-white','Coral');
        $(':root').css('--color-midgray','Coral');
    });
    $('.DarkMagenta').click(()=>{
        $(':root').css('--color-lightn','DarkMagenta');
        $(':root').css('--color-white','DarkMagenta');
        $(':root').css('--color-midgray','DarkMagenta');
    });
    $('.FireBrick').click(()=>{
        $(':root').css('--color-lightn','FireBrick');
        $(':root').css('--color-white','FireBrick');
        $(':root').css('--color-midgray','FireBrick');
    });
    $('.GoldenRod').click(()=>{
        $(':root').css('--color-lightn','GoldenRod');
        $(':root').css('--color-white','GoldenRod');
        $(':root').css('--color-midgray','GoldenRod');
    });
    $('.HotPink').click(()=>{
        $(':root').css('--color-lightn','HotPink');
        $(':root').css('--color-white','HotPink');
        $(':root').css('--color-midgray','HotPink');
    });
    $('.Khaki').click(()=>{
        $(':root').css('--color-lightn','Khaki');
        $(':root').css('--color-white','Khaki');
        $(':root').css('--color-midgray','Khaki');
    });
    $('.LightSkyBlue').click(()=>{
        $(':root').css('--color-lightn','LightSkyBlue');
        $(':root').css('--color-white','LightSkyBlue');
        $(':root').css('--color-midgray','LightSkyBlue');
    });

    $('.Teal').click(()=>{
        $(':root').css('--color-lightn','Teal');
        $(':root').css('--color-white','Teal');
        $(':root').css('--color-midgray','Teal');
    });
    $('.Sienna').click(()=>{
        $(':root').css('--color-lightn','Sienna');
        $(':root').css('--color-white','Sienna');
        $(':root').css('--color-midgray','Sienna');
    });
    $('.SandyBrown').click(()=>{
        $(':root').css('--color-lightn','SandyBrown');
        $(':root').css('--color-white','SandyBrown');
        $(':root').css('--color-midgray','SandyBrown');
    });
    $('.RosyBrown').click(()=>{
        $(':root').css('--color-lightn','RosyBrown');
        $(':root').css('--color-white','RosyBrown');
        $(':root').css('--color-midgray','RosyBrown');
    });
    $('.Plum').click(()=>{
        $(':root').css('--color-lightn','Plum');
        $(':root').css('--color-white','Plum');
        $(':root').css('--color-midgray','Plum');
    });
    $('.PapayaWhip').click(()=>{
        $(':root').css('--color-lightn','PapayaWhip');
        $(':root').css('--color-white','PapayaWhip');
        $(':root').css('--color-midgray','PapayaWhip');
    });
    $('.icofont-ui-settings').click(function(){
        $('.colors').fadeToggle();
    })
    // multiple color active
    var color=document.querySelectorAll('.color');
    function activeLinkk(){
        color.forEach(item=>{
            item.classList.remove('active');
            this.classList.add('active');
    });
    };
    color.forEach(item=>{
        item.addEventListener('click',activeLinkk)
    })
    // text typin Animation
    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 100 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 1px solid gray}";
        document.body.appendChild(css);
    };

    // go top
    var goTop=document.querySelector('.go-top');
    window.addEventListener('scroll',function(){
        if(window.pageYOffset>300){
            goTop.classList.add('go-top-active');
        }else{
            goTop.classList.remove('go-top-active');
        }
    });
    $('#go-top-btn').click(()=>{
        $('html').animate({scrollTop:0},500)
    });


    $('.nav-link').on('click',function(e){
        var anchor=$(this);
        $('html, body').stop().animate({
            scrollTop:$(anchor.attr('href')).offset().top - 40
        },1000);
        e.preventDefault();
    });
    
    $(document).on('click','.navbar-collapse.show',function(e){
        if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ){
            $(this).collapse('hide');
        }
    });
})(jQuery);
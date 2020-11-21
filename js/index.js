console.log('jquery connected');
$(() => {
   $(window).scroll(function () {
      const navbarDark = $('.navbar-dark');
      // console.log(navbarDark);
      if (this.pageYOffset > 220) {
         navbarDark.removeClass('bg-dark');
         navbarDark.css({
            "background": "repeating-linear-gradient(45deg, rgb(27, 27, 27) 0px, rgb(27, 27, 27) 97px,rgb(24, 24, 24) 97px, rgb(24, 24, 24) 194px,rgb(20, 20, 20) 194px, rgb(20, 20, 20) 291px)",
            "transition": "all .5s ease"
         });
         // navbarDark.addClass("scrolled-header");
      }
      else {
         navbarDark.addClass('bg-dark');
         navbarDark.css({
            "background": "",
            "transition": "all .5s ease"
         });
         // navbarDark.removeClass("scrolled-header");
      }
   });
});


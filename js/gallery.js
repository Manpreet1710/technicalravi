$(document).ready(function(){



  // video events triggerd 
  const v1 = $('.v1');
  const v2 = $('.v2');
  $(v1).on({
     mouseover: function () {
        $(v1).trigger('play');
     },
     mouseout: function () {
        $(v1).trigger('pause');
     }
  });
  $(v2).on({
     mouseover: function () {
        $(v2).trigger('play');
     },
     mouseout: function () {
        $(v2).trigger('pause');
     }
  });
  
     //  gallery-js
   const webWork = $('#some-project-work');
   const canvaWork = $('#some-canva-work');
   const personaImg = $('#some-personal-Images');
   const gameWork = $('#some-game-work');

   const all = $('#all');
   const web = $('#web');
   const canva = $('#canva');
   const photo = $('#photo');
   const game = $('#game');

   $(all).click(function () {
      $(this).css({
          "border-bottom": "6px solid deepskyblue",
          "border-radius": "4px"
      })
      webWork.show('slow');
      canvaWork.show('slow');
      personaImg.show('slow');
      gameWork.show('slow');

      web.css("border", "none");
      canva.css("border", "none");
      photo.css("border", "none");
      game.css("border", "none");
   });

   $(web).click(function () {
    $(this).css({
        "border-bottom": "6px solid deepskyblue",
        "border-radius": "4px"
    })
      webWork.show('slow');
      canvaWork.hide();
      personaImg.hide();
      gameWork.hide();

      all.css("border", "none");
      canva.css("border", "none");
      photo.css("border", "none");
      game.css("border", "none");
   });

   $(canva).click(function () {
    $(this).css({
        "border-bottom": "6px solid deepskyblue",
        "border-radius": "4px"
    })
      canvaWork.show('slow');
      personaImg.hide();
      gameWork.hide();
      webWork.hide();

      all.css("border", "none");
      web.css("border", "none");
      photo.css("border", "none");
      game.css("border", "none");
   });

   $(photo).click(function () {
      $(this).css("border-bottom", "6px solid deepskyblue");
      personaImg.show('slow');
      canvaWork.hide();
      gameWork.hide();
      webWork.hide();

      all.css("border", "none");
      web.css("border", "none");
      canva.css("border", "none");
      game.css("border", "none");
   });
   
   $(game).on({
      click: function () {
        $(this).css({
            "border-bottom": "6px solid deepskyblue",
            "border-radius": "4px"
        })
         gameWork.show('slow');
         canvaWork.hide();
         personaImg.hide();
         webWork.hide();

         all.css("border", "none");
         web.css("border", "none");
         canva.css("border", "none");
         photo.css("border", "none");
      },
   });
})
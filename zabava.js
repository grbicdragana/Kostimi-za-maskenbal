$(document).ready(function() {
  $("#myCarousel").carousel();
    
  $(".item1").click(function(){
    $("#myCarousel").carousel(0);
  });
  $(".item2").click(function(){
    $("#myCarousel").carousel(1);
  });
  $(".item3").click(function(){
    $("#myCarousel").carousel(2);
  });
  $(".item4").click(function(){
    $("#myCarousel").carousel(3);
  });
    

  $(".left").click(function(){
    $("#myCarousel").carousel("prev");
  });
  $(".right").click(function(){
    $("#myCarousel").carousel("next");
  });


  $("#dugme2").click(function() {
      $("#pasus1").html("Happy <mark>Halloween</mark>");
  })

  $("#dugme3").click(function() {
      $("#polje4").css({"background-color": "orange", "font-size":"12px", "text-align":"center"}).animate({
          left:'250px',
          opacity: '0.5',
          height: '150px',
          width: '180px'
      },4000)
  })
    
  $("#dugme5").click(function() {
      $("#polje1").val("Trik ili poslastica!");
  })

  $(document).ready(function(){
      $('[data-toggle="tooltip"]').tooltip();   
  })

  $("#dugme9").click(function(){
      $("#polje3").fadeOut(3000).fadeIn(3000).slideUp(2000).slideDown(2000)
  })
    
  $("#dugme12").click(function() {
      $("button").addClass("dugme-orange");
  })
    
  $("#dugme13").click(function() {
      $("button").removeClass("dugme-orange");
  })

  $("#dugme14").click(function() {
      $("button").toggleClass("dugme-orange");
  })
});



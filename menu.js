(function(){

  $(document).ready(function(){
    //this is just a test
      $("#over_map").click(function(){
        console.log("hi");

        $("section").toggleClass("active");
        // $(".content").toggleClass("showContent");
      });

      // $(':not(.content)').click(function() {
      //   // $().hide();
      //   console.log("bye");
      //   $("section").toggleClass("active");
      // });

      //if press on x button
      $(".close").click(function(){
        console.log("bye");

        $("section").toggleClass("active");
        // $(".content").toggleClass("showContent");

      });

    });

})();

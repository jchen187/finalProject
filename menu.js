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

//find image from instagram
function findPictureOf(keyword){

  var response = getResultsFromSite(keyword);
  //loop through the responses and find the ones with location
  for (var i = 0; i < response.length; i++){
    //can create a function out side and call it
    //encapsulated anonymous function - put in a function because the part with the marker is async and takes longer, so you will be done with the for loop before you reach
    if (response[i].images.standard_resolution.url){
      console.log("Image found at index " + i);
      console.log(response[i].images.standard_resolution.url);
      (function(i){
        image = '<img src='+response[i].images.standard_resolution.url+' />';
      })(i);
      break;
    }
  }

  return image;
}
/*
  var originalWord = keyword;
  //remove the whitespaces and then put back together.
  keyword = keyword.split(" ").join("");
  console.log(keyword);

  var site = "http://cooper-union-instagram-proxy.herokuapp.com/search/tag/"+keyword+"?count=100";

  var image;
  //Add markers to the site
  $.getJSON(site, function(response){
    console.log(site);
    console.log(response);

    //loop through the responses and find the ones with location
      for (var i = 0; i < response.length; i++){
        //can create a function out side and call it
        //encapsulated anonymous function - put in a function because the part with the marker is async and takes longer, so you will be done with the for loop before you reach
        if (response[i].images.standard_resolution.url){
          console.log("Image found at index " + i);
          console.log(response[i].images.standard_resolution.url);
          (function(i){
              image = '<img src='+response[i].images.standard_resolution.url+' />';
          })(i);
          break;
        }
      }
  });
  return image;

  */

//remove all the spaces from the word
function splitAndJoin(word) {
  word = word.split(" ").join("");
  return word;
}

function removeLastWordFrom(word) {
  //take the words apart, remove the last one and put everything back together
  word = word.split(" ").pop().join();
  return word;
}

//get the response from instagram api
function getResultsFromSite(originalWord) {
  var keyword = splitAndJoin(originalWord);
  var site = "http://cooper-union-instagram-proxy.herokuapp.com/search/tag/"+keyword+"?count=100";

  $.getJSON(site, function(response){
    console.log(site);
    console.log(response);

    //and you have one word at least
    //sometimes you might not get any results, and then you should remove one word from the original
    if (response.length == 0 && originalWord.split(" ").length > 1) {
      var newWord = removeLastWordFrom(originalWord);
      getResultsFromSite(newWord);
    }
    else {
      return response;
    }
  });
}

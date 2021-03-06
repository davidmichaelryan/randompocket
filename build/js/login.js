(function() {
  var getBaseURL;

  getBaseURL = function(full_url) {
    var base_url, divided;
    divided = full_url.split('/');
    base_url = divided[2];
    return base_url;
  };

  $.post("/authorize", function(data) {
    console.log("SUCCESS");
    $("#auth").remove();
    $("#button").show();
  });

  $("#button").click(function() {
    return $.post("/random", function(data) {
      var title, url, website;
      title = data.resolved_title;
      website = getBaseURL(data.resolved_url);
      url = "http://getpocket.com/a/read/" + data.item_id;
      $("#content .title").html(title);
      $("#content .website").html(website);
      $("#content a").attr('href', url);
      $("article").show();
    });
  });

}).call(this);

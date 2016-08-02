(function() {
  $(document).ready(function() {
    var frameArray, framesArray, i, j, results;
    framesArray = [];
    frameArray = [];
    results = [];
    for (i = j = 0; j <= 1319; i = ++j) {
      results.push($(".container").append("<input type='checkbox' id='" + i + "' name='" + i + "'>"));
    }
    return results;
  });

}).call(this);


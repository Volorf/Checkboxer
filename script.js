(function() {
  $(document).ready(function() {
    var frameArray, i, j;
    frameArray = [];
    for (i = j = 0; j <= 1319; i = ++j) {
      $(".container").append("<input type='checkbox' id='" + i + "' name='" + i + "'>");
    }
    return $(":checkbox").change(function() {
      console.log(this.name);
      return frameArray.push("" + name);
    });
  });

}).call(this);


(function() {
  $(document).ready(function() {
    var frameArray, i, j;
    frameArray = [];
    for (i = j = 0; j <= 1319; i = ++j) {
      $(".container").append("<input type='checkbox' id='" + i + "' name='" + i + "'>");
    }
    return $(":checkbox").change(function() {
      var checkBoxName;
      checkBoxName = this.name;
      console.log(checkBoxName);
      return frameArray.push(checkBoxName);
    });
  });

}).call(this);


(function() {
  $(document).ready(function() {
    var frameArray, framesArray, i, k;
    framesArray = [];
    frameArray = [];
    for (i = k = 0; k <= 1319; i = ++k) {
      $(".container").append("<input type='checkbox' id='" + i + "' name='" + i + "'>");
    }
    $(":checkbox").change(function() {
      var checkBoxId;
      checkBoxId = this.id;
      console.log(checkBoxId);
      return frameArray.push(checkBoxId);
    });
    $("#saveFrame").click(function() {
      framesArray.push(frameArray.slice());
      console.log(framesArray);
      return $("#saveFrame").text("Save frame" + (" (" + framesArray.length + ")"));
    });
    return $("#play").click(function() {
      var currentArray, l, ref, renderFrame, results;
      results = [];
      for (i = l = 0, ref = framesArray.length; 0 <= ref ? l < ref : l > ref; i = 0 <= ref ? ++l : --l) {
        currentArray = framesArray[i];
        console.log(currentArray);
        window.setTimeout(renderFrame, 1000);
        results.push(renderFrame = function() {
          var j, len, m, results1;
          $(":checkbox").prop("checked", false);
          results1 = [];
          for (m = 0, len = currentArray.length; m < len; m++) {
            j = currentArray[m];
            $("#" + j).prop("checked", true);
            results1.push(console.log(j));
          }
          return results1;
        });
      }
      return results;
    });
  });

}).call(this);


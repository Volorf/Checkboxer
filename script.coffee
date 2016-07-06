$(document).ready ->
  framesArray = []
  frameArray = []
  for i in [0..1319]
    $(".container").append("<input type='checkbox' id='#{i}' name='#{i}'>")

  $(":checkbox").change ->
    checkBoxId = @.id
    console.log checkBoxId
    frameArray.push(checkBoxId)


  $("#saveFrame").click ->
    framesArray.push(frameArray.slice())
    # alert framesArray
    console.log framesArray
    # alert framesArray.length
    $("#saveFrame").text("Save frame" + " (#{framesArray.length})")

  $("#play").click ->
    for i in [0...framesArray.length]
      currentArray = framesArray[i]
      console.log currentArray
      window.setTimeout(renderFrame, 1000)
      renderFrame = () ->
        $(":checkbox").prop("checked", false)
        for j in currentArray
          $("##{j}").prop("checked", true)
          console.log j

$(document).ready ->
  frameArray = []
  for i in [0..1319]
    $(".container").append("<input type='checkbox' id='#{i}' name='#{i}'>")

  $(":checkbox").change ->
    checkBoxName = @.name
    frameArray.push(checkBoxName)

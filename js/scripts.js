function ToDo(listItem, done) {
  this.listItem = listItem;
  this.done = done;
}


$(document).ready(function() {
  var newArray = [];
  $("#formList").submit(function(event) {
    event.preventDefault();
    var listItem = $("input#item").val();
    var newToDo = new ToDo(listItem, false);
    newArray.push(newToDo);
    console.log(newArray);

    $("#listShow").append("<p>" + newToDo.listItem + "</p>");
    $("#remove").hide();

  });
});

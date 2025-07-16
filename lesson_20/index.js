$("form").click(function (event) {
  event.preventDefault();
  const task = $("#new-task").val().trim();
  if (!task) {
    return;
  }
  const circleIcon = "<i class='bi bi-circle'></i>";
  const checkedIcon = "<i class='bi bi-check2-circle hide'></i>";
  const trashIcon = "<i class='bi bi-trash'></i>";
  const item = $("<li class='list-group-item'></li>");
  const span =
    "<span data-bs-toggle='modal' data-bs-target='#exampleModal'>" +
    task +
    "</span>";
  $(item.prepend(circleIcon, checkedIcon).append(span).append(trashIcon));
  $(".task-list").append(item);
  $("#new-task").val("");
  if ($("ul").children().length === 1) {
    $(".btn-warning").removeClass("d-none");
  }
});

$("ul").on("click", ".bi-trash", function () {
  $(this).parent("li").remove();
  if ($("ul").children().length === 0) {
    $(".btn-warning").addClass("d-none");
  }
});

$("ul").on("click", ".bi-circle", function () {
  $(this).addClass("hide");
  $(this).next().removeClass("hide");
  $(this).siblings("span").css("text-decoration", "line-through");
});

$("ul").on("click", "span", function () {
  $(".modal-body").text($(this).text());
});

$(".btn-warning").bind("click", function () {
  $("ul").empty();
  $(".btn-warning").addClass("d-none");
});

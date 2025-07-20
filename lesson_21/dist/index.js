(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function () {
  "use strict";

  $("form").click(function (event) {
    event.preventDefault();
    var task = $("#new-task").val().trim();
    if (!task) {
      return;
    }
    var circleIcon = $("<i class='bi bi-circle'></i>");
    var trashIcon = $("<i class='bi bi-trash'></i>");
    var item = $("<li class='list-group-item'></li>");
    var span = "<span data-bs-toggle='modal' data-bs-target='#exampleModal'>" + task + "</span>";
    $(item.prepend(circleIcon).append(span).append(trashIcon));
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
    $(this).removeClass("bi-circle");
    $(this).addClass("bi-check2-circle");
    $(this).siblings("span").css("text-decoration", "line-through");
  });
  $("ul").on("click", "span", function () {
    $(".modal-body").text($(this).text());
  });
  $(".btn-warning").bind("click", function () {
    $("ul").empty();
    $(".btn-warning").addClass("d-none");
  });
});
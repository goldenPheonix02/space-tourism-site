import { db } from "../data/data.js";
import { templates } from "../templates/templates.js";

$(".nav-bar").empty().append(templates.navbar());

$(".navbar-links #tech").addClass("active");
$("main.container").prepend(templates.pageHeader(db.tech));
$(".options .option[data-id=1]").addClass("active");

function showTech(id = 1) {
  let def = db.tech.tech.find((ele) => id == ele.id);
  console.log(def);
  Object.keys(def).forEach((e) => {
    $(".main-container").find(`[data-value=${e}]`).text(def[e]);
  });
  $(".image").find("img").attr("src", def.img);
  $(`.option`).removeClass("active");
  $(`.option[data-id=${id}]`).addClass("active");
}
showTech();

$("body").on("click", ".option", function () {
  let id = $(this).data("id");
  showTech(id);
});

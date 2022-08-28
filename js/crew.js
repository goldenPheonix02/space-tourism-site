import { db } from "../data/data.js";
import { templates } from "../templates/templates.js";

$(".nav-bar").empty().append(templates.navbar());

$(".navbar-links #crew").addClass("active");

$("main.container").prepend(templates.pageHeader(db.crew));

const img_url = (name) =>
  `./assets//crew//image-${name.toLowerCase().replace(" ", "-")}.webp`;

function showCrew(id = 1) {
  let def = db.crew.crew.find((ele) => id == ele.id);
  console.log(def);
  Object.keys(def).forEach((e) => {
    $(".main-container").find(`[data-value=${e}]`).text(def[e]);
  });
  $(`.slider > .option`).removeClass("active");
  $(`.slider [data-id=${id}]`).addClass("active");
  $(".image img").attr("src", img_url(def.name));
}

showCrew();

$("body").on("click", ".slider > .option", function () {
  let id = $(this).data("id");
  showCrew(id);
});
// let id = 1;
// setInterval(() => {
//   showCrew(id);
//   id = (id + 1) % 5;
//   id = id ? id : 1;
// }, 5000);

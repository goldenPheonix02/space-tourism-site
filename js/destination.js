import { db } from "../data/data.js";
import { templates } from "../templates/templates.js";

$(".nav-bar").empty().append(templates.navbar());

$(".navbar-links #dest").addClass("active");

$("main.container").prepend(templates.pageHeader(db.dest));

const img_url = (name) =>
  `./assets//destination//image-${name.toLowerCase()}.webp`;

function showPlanet(id) {
  let def = db.dest.planets.find((ele) => id == ele.id);
  console.log(def);
  Object.keys(def).forEach((e) => {
    $(".main-container").find(`[data-value=${e}]`).text(def[e]);
  });
  $(".image").find("img").attr("src", img_url(def.name));
  $(`.planet-list li`).removeClass("active");
  $(`li[data-id=${id}]`).addClass("active");
}

showPlanet(db.dest.default);

$("body").on("click", ".planet-list > li", function () {
  let id = $(this).data("id");
  console.log(id);
  showPlanet(id);
});
let id = 1;
// setInterval(() => {
//   showPlanet(id);
//   id = (id + 1) % 5;
//   id = id ? id : 1;
// }, 5000);

import { db } from "../data/data.js";
import { templates } from "../templates/templates.js";

$(".nav-bar").empty().append(templates.navbar());

$(".navbar-links #tech").addClass("active");
$("main.container").prepend(templates.pageHeader(db.tech));

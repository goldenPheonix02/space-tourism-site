const templates = {};

templates.navbar = () => {
  return `<div class="logo">
      <a href="index.html"
        ><img src="assets/shared/logo.svg" alt="company logo"
      /></a>
    </div>

    <div class="navbar-links">
      <ul>
        <li id="home">
          <a href="index.html"><span class="bold">00</span> HOME</a>
        </li>
        <li id="dest">
          <a href="destination.html"
            ><span class="bold">01</span> DESTINATION</a
          >
        </li>
        <li id="crew">
          <a href="crew.html"><span class="bold">02</span> CREW</a>
        </li>
        <li id="tech">
          <a href="technology.html"
            ><span class="bold">03</span> TECHNOLOGY</a
          >
        </li>
      </ul>
    </div>
 `;
};

templates.pageHeader = (data) => {
  return `<div class="page-header">
  <div class="head1">${data.index}</div>
  <div class="head2">${data.title}</div>
</div>`;
};

templates.planetPage = (data) => {
  return `<div class="image">
  <img src="./assets//destination//image-${data.name.toLowerCase()}.webp" alt="" />
</div>
<div class="right-container">
  <div class="filter">
    <ul class="planet-list">
      <li data-id="1">MOON</li>
      <li data-id="2">MARS</li>
      <li data-id="3">EUROPA</li>
      <li data-id="4">TITAN</li>
    </ul>
  </div>
  <h1 class="planet" data-value="name">${data.name}</h1>
  <p class="info" data-value="desc">
    ${data.desc}
  </p>
  <hr />
  <div class="travel-info">
    <div class="dist">
      <div>AVG. DISTANCE</div>
      <div class="data" data-value="dist">${data.dist}</div>
    </div>
    <div class="time">
      <div>AVG. TRAVEL TIME</div>
      <div class="data" data-value="time">${data.time}</div>
    </div>
  </div>
</div>`;
};

export { templates };

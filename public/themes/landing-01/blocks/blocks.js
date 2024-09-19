Vvveb.Blocks.add("base/1-columns", {
  name: "Column 1",
  image: Vvveb.themeBaseUrl + "/screenshots/blocks/base/1-column-thumb.jpeg",
  html: `<section title="one column" class="py-4">
  <div class="container">
    <div class="row">
      <div class="col"></div>
    </div>
  </div>
</section>`,
});
Vvveb.Blocks.add("base/2-columns", {
  name: "2 columns",
  image: Vvveb.themeBaseUrl + "/screenshots/blocks/base/2-columns-thumb.jpeg",
  html: `<section title="two columns" class="py-4">
  <div class="container">
    <div class="row">
      <div class="col"></div>
      <div class="col"></div>
    </div>
  </div>
</section>`,
});
Vvveb.Blocks.add("base/3-columns", {
  name: "3 columns",
  image: Vvveb.themeBaseUrl + "/screenshots/blocks/base/3-columns-thumb.jpeg",
  html: `<section title="three columns" class="py-4">
  <div class="container">
    <div class="row">
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
    </div>
  </div>
</section>`,
});
Vvveb.Blocks.add("base/4-columns", {
  name: "4 columns",
  image: Vvveb.themeBaseUrl + "/screenshots/blocks/base/4-columns-thumb.jpeg",
  html: `<section title="four columns" class="py-4">
  <div class="container">
    <div class="row">
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
    </div>
  </div>
</section>`,
});
Vvveb.Blocks.add("base/6-columns", {
  name: "6 columns",
  image: Vvveb.themeBaseUrl + "/screenshots/blocks/base/6-columns-thumb.jpeg",
  html: `<section title="six columns" class="py-4">
  <div class="container">
    <div class="row">
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
    </div>
  </div>
</section>`,
});
Vvveb.Blocks.add("base/8-columns", {
  name: "8 columns",
  image: Vvveb.themeBaseUrl + "/screenshots/blocks/base/8-columns-thumb.jpeg",
  html: `<section title="eight columns" class="py-4">
  <div class="container">
    <div class="row">
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
    </div>
  </div>
</section>`,
});
Vvveb.Blocks.add("base/12-columns", {
  name: "12 columns",
  image: Vvveb.themeBaseUrl + "/screenshots/blocks/base/12-columns-thumb.jpeg",
  html: `<section title="twelve columns" class="py-4">
  <div class="container">
    <div class="row">
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
    </div>
  </div>
</section>`,
});
Vvveb.Blocks.add("base/blank", {
  name: "Blank",
  image: Vvveb.themeBaseUrl + "/screenshots/blocks/base/blank-thumb.jpeg",
  html: `<section title="blank" class="py-4">
  <div class="container">
    <h1>Blank container</h1>
  </div>
</section>`,
});
Vvveb.BlocksGroup["Columns"] = [
  "base/1-columns",
  "base/2-columns",
  "base/3-columns",
  "base/4-columns",
  "base/6-columns",
  "base/8-columns",
  "base/12-columns",
  "base/blank",
];

Vvveb.BlocksGroup["Reusable"] = [""];

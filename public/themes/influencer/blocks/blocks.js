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

Vvveb.BlocksGroup["Reusable"] = [];

Vvveb.Blocks.add("reusable/contact-info", {
  name: "Contact info",
  //image: Vvveb.themeBaseUrl + "/../../media/img/logo-small.png",
  image: "img/logo-small.png",
  html: `<div class="contact-info-block text-center mb-4">
              <i class="ti-headphone-alt"></i>
              <p class="mb-0">Contact Quickly</p>
              <h5>+23-68017684</h5>
            </div>`,
});
Vvveb.BlocksGroup["Reusable"].push("reusable/contact-info");

Vvveb.Blocks.add("reusable/heading-label", {
  name: "Heading label",
  //image: Vvveb.themeBaseUrl + "/../../media/img/logo-small.png",
  image: "img/logo-small.png",
  html: `<h4>
 &nbsp;Harga cuma :- <font color="#cc302b">IDR. 50.000</font>
                </h4>`,
});
Vvveb.BlocksGroup["Reusable"].push("reusable/heading-label");

Vvveb.Blocks.add("reusable/point-list", {
  name: "Point list",
  //image: Vvveb.themeBaseUrl + "/../../media/img/logo-small.png",
  image: "img/logo-small.png",
  html: `<ul class="list-unstyled mt-4 mb-5">
                <li style="">
                  <i class="ti-check mr-3"></i>&nbsp;Point Pertama - Optimasi
 SEO </li>
                <li style="">
                  <i class="ti-check mr-3"></i>&nbsp;Point Kedua - Strategi
 Media Social </li>
                <li style="">
                  <i class="ti-check mr-3"></i>&nbsp;Point Ketiga - Iklan
 Berbayar PPC </li>
                <li style="">
                  <i class="ti-check mr-3"></i>&nbsp;Point Keempat - Pendekatan
 Data Driven </li>
              </ul>`,
});
Vvveb.BlocksGroup["Reusable"].push("reusable/point-list");

Vvveb.Blocks.add("reusable/profile-penulis", {
  name: "Profile penulis",
  //image: Vvveb.themeBaseUrl + "/../../media/img/logo-small.png",
  image: "img/logo-small.png",
  html: `<div class="about section" id="author">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5">
            <div class="about-img">
              <img src="/cms-editor-builder/public/media/pexels-olly-3808904.jpg" alt="" class="img-fluid w-100">
            </div>
          </div>

          <div class="col-lg-6">
            <div class="author-info pl-4 mt-5 mt-lg-0">
              <h2 class="text-lg">Fajar Riza Fauzi</h2>
              <p class="mb-4 lead">- Seorang Digital Marketer</p>
              <p>
 Apakah Anda ingin menjadi lebih sukses? Belajarlah untuk
 mencintai pembelajaran dan pertumbuhan. Semakin banyak upaya
 yang Anda lakukan untuk meningkatkan keterampilan Anda, semakin
 besar hasil yang akan Anda dapatkan. </p>

              <p class="mb-5">
 Sudah menjadi fakta umum bahwa pembaca akan terganggu oleh
 konten halaman yang dapat dibaca saat melihat tata letaknya. </p>

              <img src="images/about/2.png" alt="" class="img-fluid">
            </div>
          </div>
        </div>
      </div>
    </div>`,
});
Vvveb.BlocksGroup["Reusable"].push("reusable/profile-penulis");

Vvveb.Blocks.add("reusable/tombol-editable", {
  name: "Tombol editable",
  //image: Vvveb.themeBaseUrl + "/../../media/img/logo-small.png",
  image: "img/logo-small.png",
  html: `<a href="#" class="btn btn-main-2 btn-info">pesan di whatsapp</a>`,
});
Vvveb.BlocksGroup["Reusable"].push("reusable/tombol-editable");

Vvveb.Blocks.add("reusable/tombol", {
  name: "Tombol",
  //image: Vvveb.themeBaseUrl + "/../../media/img/logo-small.png",
  image: "img/logo-small.png",
  html: `<a href="#" target="_blank" class="btn btn-main mt-2">
 Pesan sekarang&nbsp;<i class="ti-angle-right ml-3"></i></a>`,
});
Vvveb.BlocksGroup["Reusable"].push("reusable/tombol");

Vvveb.Blocks.add("reusable/youtube-card", {
  name: "Youtube card",
  //image: Vvveb.themeBaseUrl + "/../../media/img/logo-small.png",
  image: "img/logo-small.png",
  html: `<div class="row">
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="blog-item card mb-4 mb-lg-0 border-0">
              <div data-component-oembed="" data-url="https://www.youtube.com/watch?v=Ll1e8cs_hIQ"><iframe width="100%" height="190em" src="https://www.youtube.com/embed/Ll1e8cs_hIQ?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="" title="Cara Bangun Tim Digital Marketing dari NOL"></iframe></div>
              <div class="blog-item-content p-4">
                <div class="blog-meta mb-2">
                  <span> <i class="ti-time mr-2"></i>17 june 2019 </span>
                  <a href="#">by Rahat Rishab</a>
                </div>
                <h4 class="mt-2 mb-3">
                  <a href="blog-single.html">C</a>ara membangun team digital marketing</h4>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="blog-item card mb-4 mb-lg-0 border-0">
              <div data-component-oembed="" data-url="https://www.youtube.com/watch?v=2Nc6I5BIbHc"><iframe width="100%" height="190px" src="https://www.youtube.com/embed/2Nc6I5BIbHc?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="" title="5 Cara Meningkatkan Kualitas &amp; Closing Rate CS/ Admin (PART 2)"></iframe></div>
              <div class="blog-item-content p-4">
                <div class="blog-meta mb-2">
                  <span> <i class="ti-time mr-2"></i>17 june 2019 </span>
                  <a href="#">by Rahat Rishab</a>
                </div>

                <h4 class="mt-2 mb-3">
                  <a href="blog-single.html">3 cara meningkatkan kualitas &amp; closing rate&nbsp;</a></h4>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="blog-item card mb-4 mb-lg-0 border-0">
              <div data-component-oembed="" data-url="https://www.youtube.com/watch?v=iclty3xgJlE&amp;t=2612s"><iframe width="100%" height="190px" src="https://www.youtube.com/embed/iclty3xgJlE?start=2612&amp;feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="" title="Tutorial Lengkap Beriklan di Facebook dan Instagram Ads Untuk Pemula (UPDATE 2024) PART 1"></iframe></div>
              <div class="blog-item-content p-4">
                <div class="blog-meta mb-2">
                  <span> <i class="ti-time mr-2"></i>17 june 2019 </span>
                  <a href="#">by Rahat Rishab</a>
                </div>

                <h4 class="mt-2 mb-3">
                  <a href="blog-single.html">Tutorial beriklan facebook dan instagram ads</a>
                </h4>
              </div>
            </div>
          </div>
        </div>`,
});
Vvveb.BlocksGroup["Reusable"].push("reusable/youtube-card");

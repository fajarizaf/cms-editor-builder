Vvveb.Blocks.add("contact-form/contact-form-1", {
    name: "Contact form 1",
    image: Vvveb.themeBaseUrl + "/screenshots/blocks/contact-form/contact-form-1-thumb.jpeg",
    html: `<div data-v-component-plugin-contact-form-form data-v-storage="database" data-v-name="contact-form-1">

  <div class="notifications" data-v-notifications>

    <div class="alert alert-danger d-flex alert-dismissable" role="alert" data-v-notification-error>

      <div class="icon align-middle me-2">
        <i class="align-middle la la-2x lh-1 la-exclamation-triangle"></i>
      </div>

      <div class="flex-grow-1 align-self-center text-small">
        <div>
          <div data-v-notification-text>
            This is a placeholder for a notification message.
          </div>
        </div>
      </div>


      <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">
          <!-- <i class="la la-times"></i> -->
        </span>
      </button>
    </div>

    <div class="alert alert-success d-flex  alert-dismissable d-flex" role="alert" data-v-notification-success>

      <div class="icon align-middle me-2">
        <i class="align-middle la la-2x lh-1 la-check-circle"></i>
      </div>

      <div class="flex-grow-1 align-self-center align-middle" data-v-notification-text>
        This is a placeholder for a success message.
      </div>

      <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">
          <!-- <i class="la la-times"></i> -->
        </span>
      </button>
    </div>

    <div class="alert alert-primary d-flex alert-dismissable d-flex" role="alert" data-v-notification-info>

      <div class="icon align-middle me-2">
        <i class="align-middle la la-2x lh-1  la-info-circle"></i>
      </div>

      <div class="flex-grow-1 align-self-center" data-v-notification-text>
        This is a placeholder for a info message.
      </div>

      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">
          <!-- <i class="la la-times"></i> -->
        </span>
      </button>
    </div>

  </div>

  <form action="" method="post">
    <input type="hidden" class="form-control" placeholder="First name" name="firstname-empty">
    <input type="hidden" class="form-control" placeholder="Email" name="csrf" data-v-csrf>

    <div class="row">
      <div class="col">
        <input type="text" class="form-control" placeholder="First name" name="firstname" required>
      </div>
      <div class="col">
        <input type="text" class="form-control" placeholder="Last name" name="lastname" required>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col">
        <input type="email" class="form-control" placeholder="Enter email" name="email" required>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col">
        <input type="text" class="form-control" placeholder="Subject" name="subject" required>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col">
        <textarea class="form-control" name="message" rows="3" placeholder="How can we help?" required></textarea>
      </div>
    </div>


    <!-- if these hidden inputs are filled then ignore, robots -->

    <input type="text" class="form-control d-none" placeholder="Contact form" name="contact-form">

    <input type="text" class="form-control d-none" placeholder="Subject" name="subject-empty">

    <input type="text" class="form-control visually-hidden" placeholder="Last name" name="lastname-empty" tabindex="-1">


    <div class="row mt-4">
      <div class="col">
        <button type="submit" class="btn btn-primary">Submit <i class="la la-long-arrow-alt-right ms-1"></i>
        </button>
      </div>
    </div>
  </form>
</div>`
});Vvveb.Blocks.add("contact-form/contact-form-appointment", {
    name: "Contact form appointment",
    image: Vvveb.themeBaseUrl + "/screenshots/blocks/contact-form/contact-form-appointment-thumb.jpeg",
    html: `<div data-v-component-plugin-contact-form-form data-v-storage="database" data-v-confirm-email="true" data-v-name="contact-form-appointment">

  <div class="notifications" data-v-notifications>

    <div class="alert alert-danger d-flex alert-dismissable" role="alert" data-v-notification-error>

      <div class="icon align-middle me-2">
        <i class="align-middle la la-2x lh-1 la-exclamation-triangle"></i>
      </div>

      <div class="flex-grow-1 align-self-center text-small">
        <div>
          <div data-v-notification-text>
            This is a placeholder for a notification message.
          </div>
        </div>
      </div>


      <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">
          <!-- <i class="la la-times"></i> -->
        </span>
      </button>
    </div>

    <div class="alert alert-success d-flex  alert-dismissable d-flex" role="alert" data-v-notification-success>

      <div class="icon align-middle me-2">
        <i class="align-middle la la-2x lh-1 la-check-circle"></i>
      </div>

      <div class="flex-grow-1 align-self-center align-middle" data-v-notification-text>
        This is a placeholder for a success message.
      </div>

      <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">
          <!-- <i class="la la-times"></i> -->
        </span>
      </button>
    </div>

    <div class="alert alert-primary d-flex alert-dismissable d-flex" role="alert" data-v-notification-info>

      <div class="icon align-middle me-2">
        <i class="align-middle la la-2x lh-1  la-info-circle"></i>
      </div>

      <div class="flex-grow-1 align-self-center" data-v-notification-text>
        This is a placeholder for a info message.
      </div>

      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">
          <!-- <i class="la la-times"></i> -->
        </span>
      </button>
    </div>

  </div>

  <form action="" method="post">
    <input type="hidden" class="form-control" placeholder="First name" name="firstname-empty">
    <input type="hidden" class="form-control" placeholder="Email" name="csrf" data-v-csrf>

    <div class="row">
      <div class="col">
        <input type="text" class="form-control" placeholder="First name" name="firstname" required>
      </div>
      <div class="col">
        <input type="text" class="form-control" placeholder="Last name" name="lastname" required>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col">
        <input type="email" class="form-control" placeholder="Enter email" name="email" required>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col">
        <input type="date" class="form-control" placeholder="Date" name="datetime-local" required>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col">
        <textarea class="form-control" name="message" rows="3" placeholder="Message"></textarea>
      </div>
    </div>


    <!-- if these hidden inputs are filled then ignore, robots -->

    <input type="text" class="form-control d-none" placeholder="Contact form" name="contact-form">

    <input type="text" class="form-control d-none" placeholder="Subject" name="subject-empty">

    <input type="text" class="form-control visually-hidden" placeholder="Last name" name="lastname-empty" tabindex="-1">


    <div class="row mt-4">
      <div class="col">
        <button type="submit" class="btn btn-primary">Make appointment <i class="la la-long-arrow-alt-right ms-1"></i>
        </button>
      </div>
    </div>
  </form>
</div>`
});Vvveb.Blocks.add("contact-form/contact-form-reservation", {
    name: "Contact form reservation",
    image: Vvveb.themeBaseUrl + "/screenshots/blocks/contact-form/contact-form-reservation-thumb.jpeg",
    html: `<div data-v-component-plugin-contact-form-form data-v-storage="database" data-v-confirm-email="true" data-v-name="contact-form-appointment">

  <div class="notifications" data-v-notifications>

    <div class="alert alert-danger d-flex alert-dismissable" role="alert" data-v-notification-error>

      <div class="icon align-middle me-2">
        <i class="align-middle la la-2x lh-1 la-exclamation-triangle"></i>
      </div>

      <div class="flex-grow-1 align-self-center text-small">
        <div>
          <div data-v-notification-text>
            This is a placeholder for a notification message.
          </div>
        </div>
      </div>


      <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">
          <!-- <i class="la la-times"></i> -->
        </span>
      </button>
    </div>

    <div class="alert alert-success d-flex  alert-dismissable d-flex" role="alert" data-v-notification-success>

      <div class="icon align-middle me-2">
        <i class="align-middle la la-2x lh-1 la-check-circle"></i>
      </div>

      <div class="flex-grow-1 align-self-center align-middle" data-v-notification-text>
        This is a placeholder for a success message.
      </div>

      <button type="button" class="btn-close align-middle" data-bs-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">
          <!-- <i class="la la-times"></i> -->
        </span>
      </button>
    </div>

    <div class="alert alert-primary d-flex alert-dismissable d-flex" role="alert" data-v-notification-info>

      <div class="icon align-middle me-2">
        <i class="align-middle la la-2x lh-1  la-info-circle"></i>
      </div>

      <div class="flex-grow-1 align-self-center" data-v-notification-text>
        This is a placeholder for a info message.
      </div>

      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">
          <!-- <i class="la la-times"></i> -->
        </span>
      </button>
    </div>

  </div>

  <form action="" method="post">
    <input type="hidden" class="form-control" placeholder="First name" name="firstname-empty">
    <input type="hidden" class="form-control" placeholder="Email" name="csrf" data-v-csrf>

    <div class="row">
      <div class="col">
        <input type="text" class="form-control" placeholder="First name" name="firstname" required>
      </div>
      <div class="col">
        <input type="text" class="form-control" placeholder="Last name" name="lastname" required>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col">
        <input type="email" class="form-control" placeholder="Enter email" name="email" required>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col">
        <input type="start-date" class="form-control" placeholder="Start Date" name="datetime-local" required>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col">
        <input type="end-date" class="form-control" placeholder="End Date" name="datetime-local" required>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col">
        <textarea class="form-control" name="message" rows="3" placeholder="Message"></textarea>
      </div>
    </div>


    <!-- if these hidden inputs are filled then ignore, robots -->

    <input type="text" class="form-control d-none" placeholder="Contact form" name="contact-form">

    <input type="text" class="form-control d-none" placeholder="Subject" name="subject-empty">

    <input type="text" class="form-control visually-hidden" placeholder="Last name" name="lastname-empty" tabindex="-1">


    <div class="row mt-4">
      <div class="col">
        <button type="submit" class="btn btn-primary">Make reservation <i class="la la-long-arrow-alt-right ms-1"></i>
        </button>
      </div>
    </div>
  </form>
</div>`
});
	Vvveb.BlocksGroup['Contact form'] = ["contact-form/contact-form-1","contact-form/contact-form-appointment","contact-form/contact-form-reservation"];
Vvveb.Blocks.add("post/post-1", {
    name: "Post 1",
    image: Vvveb.themeBaseUrl + "/screenshots/blocks/post/post-1-thumb.jpeg",
    html: `<div data-v-component-post>
  <div class="mb-2">

    <article class="card ">
      <div class="card-img-top" data-v-if="post.image">
        <img src="img/demo/video-1.jpg" alt="" class="w-100" loading="lazy" data-v-size="thumb" data-v-post-image>
      </div>
      <!-- Post Title -->
      <div class="card-body">
        <div class="post-title card-title">
          <a href="#" data-v-post-url>
            <h3 data-v-post-name>
              Vivamus sed nunc in arcu cursus mollis quis et orci. Interdum et malesuada
            </h3>
          </a>
        </div>
        <!-- Hover Content -->
        <p class="card-text text-muted" data-v-post-excerpt>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla tortor. Phasellus purus dignissim convallis.</p>
        <a href="#" title="Read more" role="button" data-v-post-url>
          <span>Read more</span>
          <i class="la la-angle-right"></i>
        </a>
      </div>
    </article>


  </div>
</div>`
});Vvveb.Blocks.add("post/posts-1", {
    name: "Posts 1",
    image: Vvveb.themeBaseUrl + "/screenshots/blocks/post/posts-1-thumb.jpeg",
    html: `<div class="container" data-v-component-posts="posts-1" data-v-limit="3" data-v-image_size="medium">
  <div class="row">



    <div class="col-12 col-lg-4 mb-2" data-v-post>

      <article class="card h-100 shadow-sm">
        <div class="card-img-top" data-v-if="post.image">
          <img src="img/demo/video-1.jpg" alt="" class="w-100" loading="lazy" data-v-size="thumb" data-v-post-image>
        </div>
        <!-- Post Title -->
        <div class="card-body">
          <div class="post-title card-title">
            <a href="#" data-v-post-url>
              <h3 data-v-post-name>
                Vivamus sed nunc in arcu cursus mollis quis et orci. Interdum et malesuada
              </h3>
            </a>
          </div>
          <!-- Hover Content -->
          <p class="card-text text-muted" data-v-post-excerpt>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla tortor. Phasellus purus dignissim convallis.</p>
          <a href="#" title="Read more" role="button" data-v-post-url>
            <span>Read more</span>
            <i class="la la-angle-right"></i>
          </a>
        </div>
      </article>


    </div>



    <div class="col-12 col-lg-4 mb-2" data-v-post>

      <article class="card h-100 shadow-sm">
        <div class="card-img-top" data-v-if="post.image">
          <img src="img/demo/video-1.jpg" alt="" class="w-100" loading="lazy" data-v-size="thumb" data-v-post-image>
        </div>
        <!-- Post Title -->
        <div class="card-body">
          <div class="post-title card-title">
            <a href="#" data-v-post-url>
              <h3 data-v-post-name>
                Vivamus sed nunc in arcu cursus mollis quis et orci. Interdum et malesuada
              </h3>
            </a>
          </div>
          <!-- Hover Content -->
          <p class="card-text text-muted" data-v-post-excerpt>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla tortor. Phasellus purus dignissim convallis.</p>
          <a href="#" title="Read more" role="button" data-v-post-url>
            <span>Read more</span>
            <i class="la la-angle-right"></i>
          </a>
        </div>
      </article>


    </div>



    <div class="col-12 col-lg-4 mb-2" data-v-post>

      <article class="card h-100 shadow-sm">
        <div class="card-img-top" data-v-if="post.image">
          <img src="img/demo/video-1.jpg" alt="" class="w-100" loading="lazy" data-v-size="thumb" data-v-post-image>
        </div>
        <!-- Post Title -->
        <div class="card-body">
          <div class="post-title card-title">
            <a href="#" data-v-post-url>
              <h3 data-v-post-name>
                Vivamus sed nunc in arcu cursus mollis quis et orci. Interdum et malesuada
              </h3>
            </a>
          </div>
          <!-- Hover Content -->
          <p class="card-text text-muted" data-v-post-excerpt>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla tortor. Phasellus purus dignissim convallis.</p>
          <a href="#" title="Read more" role="button" data-v-post-url>
            <span>Read more</span>
            <i class="la la-angle-right"></i>
          </a>
        </div>
      </article>


    </div>



  </div>
</div>`
});
	Vvveb.BlocksGroup['Post'] = ["post/post-1","post/posts-1"];
Vvveb.Blocks.add("product/product-1", {
    name: "Product 1",
    image: Vvveb.themeBaseUrl + "/screenshots/blocks/product/product-1-thumb.jpeg",
    html: `<div data-v-component-product>
  <div class="mb-3">

    <article class="single-product-wrapper">
      <!-- Product Image -->
      <a href="product/product.html" data-v-product-url> </a>
      <div class="product-image">
        <a href="product/product.html" data-v-product-url>

          <img src="img/demo/product.jpg" loading="lazy" data-v-product-alt alt="" data-v-size="thumb" loading="lazy" data-v-product-image />

          <!-- Hover Thumb -->
          <img class="hover-img" src="img/demo/product-2.jpg" loading="lazy" data-v-product-alt alt="" loading="lazy" data-v-size="thumb" data-v-product-image-1 />
        </a>

        <!-- Favourite -->
        <div class="product-favourite">
          <a href="product/product.html" class="la la-heart" data-v-vvveb-action="addToWishlist" data-v-product-add_wishlist_url>
            <span></span>
          </a>
        </div>

        <!-- Compare -->
        <div class="product-compare">
          <a href="product/product.html" class="la la-random" data-v-vvveb-action="addToCompare" data-v-product-add_compare_url>
            <span></span>
          </a>
        </div>
      </div>

      <!-- Product Description -->
      <div class="product-content">

        <a href="product/product.html" class="text-body" data-v-product-url>
          <span data-v-product-name>Product 8</span>
        </a>

        <p class="product-price" data-v-if="_product.price > 0" data-v-product-price_tax_formatted>100.0000</p>

        <!-- Hover Content -->
        <div class="hover-content" data-v-if="_product.price > 0">
          <!-- Add to Cart -->
          <div class="add-to-cart-btn">
            <input type="hidden" name="product_id" value="" data-v-product-product_id />
            <a href="" class="btn btn-primary w-100" data-v-product-add_cart_url data-v-vvveb-action="addToCart" data-product_id="1">
              <span class="loading d-none">
                <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true"> </span>
                <span>Add to cart</span>...
              </span>

              <span class="button-text">
                Add to cart
              </span>
            </a>
          </div>
        </div>
      </div>
    </article>


  </div>
</div>`
});Vvveb.Blocks.add("product/products-1", {
    name: "Products 1",
    image: Vvveb.themeBaseUrl + "/screenshots/blocks/product/products-1-thumb.jpeg",
    html: `<div class="container" data-v-component-products="popular" data-v-limit="8" data-v-image_size="medium">
  <div class="row">



    <div class="col-md-3" data-v-product>

      <article class="single-product-wrapper">
        <!-- Product Image -->
        <a href="product/product.html" data-v-product-url> </a>
        <div class="product-image">
          <a href="product/product.html" data-v-product-url>

            <img src="img/demo/product.jpg" loading="lazy" data-v-product-alt alt="" data-v-size="thumb" loading="lazy" data-v-product-image />

            <!-- Hover Thumb -->
            <img class="hover-img" src="img/demo/product-2.jpg" loading="lazy" data-v-product-alt alt="" loading="lazy" data-v-size="thumb" data-v-product-image-1 />
          </a>

          <!-- Favourite -->
          <div class="product-favourite">
            <a href="product/product.html" class="la la-heart" data-v-vvveb-action="addToWishlist" data-v-product-add_wishlist_url>
              <span></span>
            </a>
          </div>

          <!-- Compare -->
          <div class="product-compare">
            <a href="product/product.html" class="la la-random" data-v-vvveb-action="addToCompare" data-v-product-add_compare_url>
              <span></span>
            </a>
          </div>
        </div>

        <!-- Product Description -->
        <div class="product-content">

          <a href="product/product.html" class="text-body" data-v-product-url>
            <span data-v-product-name>Product 8</span>
          </a>

          <p class="product-price" data-v-if="_product.price > 0" data-v-product-price_tax_formatted>100.0000</p>

          <!-- Hover Content -->
          <div class="hover-content" data-v-if="_product.price > 0">
            <!-- Add to Cart -->
            <div class="add-to-cart-btn">
              <input type="hidden" name="product_id" value="" data-v-product-product_id />
              <a href="" class="btn btn-primary w-100" data-v-product-add_cart_url data-v-vvveb-action="addToCart" data-product_id="1">
                <span class="loading d-none">
                  <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true"> </span>
                  <span>Add to cart</span>...
                </span>

                <span class="button-text">
                  Add to cart
                </span>
              </a>
            </div>
          </div>
        </div>
      </article>


    </div>



    <div class="col-md-3" data-v-product>

      <article class="single-product-wrapper">
        <!-- Product Image -->
        <a href="product/product.html" data-v-product-url> </a>
        <div class="product-image">
          <a href="product/product.html" data-v-product-url>

            <img src="img/demo/product.jpg" loading="lazy" data-v-product-alt alt="" data-v-size="thumb" loading="lazy" data-v-product-image />

            <!-- Hover Thumb -->
            <img class="hover-img" src="img/demo/product-2.jpg" loading="lazy" data-v-product-alt alt="" loading="lazy" data-v-size="thumb" data-v-product-image-1 />
          </a>

          <!-- Favourite -->
          <div class="product-favourite">
            <a href="product/product.html" class="la la-heart" data-v-vvveb-action="addToWishlist" data-v-product-add_wishlist_url>
              <span></span>
            </a>
          </div>

          <!-- Compare -->
          <div class="product-compare">
            <a href="product/product.html" class="la la-random" data-v-vvveb-action="addToCompare" data-v-product-add_compare_url>
              <span></span>
            </a>
          </div>
        </div>

        <!-- Product Description -->
        <div class="product-content">

          <a href="product/product.html" class="text-body" data-v-product-url>
            <span data-v-product-name>Product 8</span>
          </a>

          <p class="product-price" data-v-if="_product.price > 0" data-v-product-price_tax_formatted>100.0000</p>

          <!-- Hover Content -->
          <div class="hover-content" data-v-if="_product.price > 0">
            <!-- Add to Cart -->
            <div class="add-to-cart-btn">
              <input type="hidden" name="product_id" value="" data-v-product-product_id />
              <a href="" class="btn btn-primary w-100" data-v-product-add_cart_url data-v-vvveb-action="addToCart" data-product_id="1">
                <span class="loading d-none">
                  <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true"> </span>
                  <span>Add to cart</span>...
                </span>

                <span class="button-text">
                  Add to cart
                </span>
              </a>
            </div>
          </div>
        </div>
      </article>


    </div>



    <div class="col-md-3" data-v-product>

      <article class="single-product-wrapper">
        <!-- Product Image -->
        <a href="product/product.html" data-v-product-url> </a>
        <div class="product-image">
          <a href="product/product.html" data-v-product-url>

            <img src="img/demo/product.jpg" loading="lazy" data-v-product-alt alt="" data-v-size="thumb" loading="lazy" data-v-product-image />

            <!-- Hover Thumb -->
            <img class="hover-img" src="img/demo/product-2.jpg" loading="lazy" data-v-product-alt alt="" loading="lazy" data-v-size="thumb" data-v-product-image-1 />
          </a>

          <!-- Favourite -->
          <div class="product-favourite">
            <a href="product/product.html" class="la la-heart" data-v-vvveb-action="addToWishlist" data-v-product-add_wishlist_url>
              <span></span>
            </a>
          </div>

          <!-- Compare -->
          <div class="product-compare">
            <a href="product/product.html" class="la la-random" data-v-vvveb-action="addToCompare" data-v-product-add_compare_url>
              <span></span>
            </a>
          </div>
        </div>

        <!-- Product Description -->
        <div class="product-content">

          <a href="product/product.html" class="text-body" data-v-product-url>
            <span data-v-product-name>Product 8</span>
          </a>

          <p class="product-price" data-v-if="_product.price > 0" data-v-product-price_tax_formatted>100.0000</p>

          <!-- Hover Content -->
          <div class="hover-content" data-v-if="_product.price > 0">
            <!-- Add to Cart -->
            <div class="add-to-cart-btn">
              <input type="hidden" name="product_id" value="" data-v-product-product_id />
              <a href="" class="btn btn-primary w-100" data-v-product-add_cart_url data-v-vvveb-action="addToCart" data-product_id="1">
                <span class="loading d-none">
                  <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true"> </span>
                  <span>Add to cart</span>...
                </span>

                <span class="button-text">
                  Add to cart
                </span>
              </a>
            </div>
          </div>
        </div>
      </article>


    </div>



    <div class="col-md-3" data-v-product>

      <article class="single-product-wrapper">
        <!-- Product Image -->
        <a href="product/product.html" data-v-product-url> </a>
        <div class="product-image">
          <a href="product/product.html" data-v-product-url>

            <img src="img/demo/product.jpg" loading="lazy" data-v-product-alt alt="" data-v-size="thumb" loading="lazy" data-v-product-image />

            <!-- Hover Thumb -->
            <img class="hover-img" src="img/demo/product-2.jpg" loading="lazy" data-v-product-alt alt="" loading="lazy" data-v-size="thumb" data-v-product-image-1 />
          </a>

          <!-- Favourite -->
          <div class="product-favourite">
            <a href="product/product.html" class="la la-heart" data-v-vvveb-action="addToWishlist" data-v-product-add_wishlist_url>
              <span></span>
            </a>
          </div>

          <!-- Compare -->
          <div class="product-compare">
            <a href="product/product.html" class="la la-random" data-v-vvveb-action="addToCompare" data-v-product-add_compare_url>
              <span></span>
            </a>
          </div>
        </div>

        <!-- Product Description -->
        <div class="product-content">

          <a href="product/product.html" class="text-body" data-v-product-url>
            <span data-v-product-name>Product 8</span>
          </a>

          <p class="product-price" data-v-if="_product.price > 0" data-v-product-price_tax_formatted>100.0000</p>

          <!-- Hover Content -->
          <div class="hover-content" data-v-if="_product.price > 0">
            <!-- Add to Cart -->
            <div class="add-to-cart-btn">
              <input type="hidden" name="product_id" value="" data-v-product-product_id />
              <a href="" class="btn btn-primary w-100" data-v-product-add_cart_url data-v-vvveb-action="addToCart" data-product_id="1">
                <span class="loading d-none">
                  <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true"> </span>
                  <span>Add to cart</span>...
                </span>

                <span class="button-text">
                  Add to cart
                </span>
              </a>
            </div>
          </div>
        </div>
      </article>


    </div>



    <div class="col-md-3" data-v-product>

      <article class="single-product-wrapper">
        <!-- Product Image -->
        <a href="product/product.html" data-v-product-url> </a>
        <div class="product-image">
          <a href="product/product.html" data-v-product-url>

            <img src="img/demo/product.jpg" loading="lazy" data-v-product-alt alt="" data-v-size="thumb" loading="lazy" data-v-product-image />

            <!-- Hover Thumb -->
            <img class="hover-img" src="img/demo/product-2.jpg" loading="lazy" data-v-product-alt alt="" loading="lazy" data-v-size="thumb" data-v-product-image-1 />
          </a>

          <!-- Favourite -->
          <div class="product-favourite">
            <a href="product/product.html" class="la la-heart" data-v-vvveb-action="addToWishlist" data-v-product-add_wishlist_url>
              <span></span>
            </a>
          </div>

          <!-- Compare -->
          <div class="product-compare">
            <a href="product/product.html" class="la la-random" data-v-vvveb-action="addToCompare" data-v-product-add_compare_url>
              <span></span>
            </a>
          </div>
        </div>

        <!-- Product Description -->
        <div class="product-content">

          <a href="product/product.html" class="text-body" data-v-product-url>
            <span data-v-product-name>Product 8</span>
          </a>

          <p class="product-price" data-v-if="_product.price > 0" data-v-product-price_tax_formatted>100.0000</p>

          <!-- Hover Content -->
          <div class="hover-content" data-v-if="_product.price > 0">
            <!-- Add to Cart -->
            <div class="add-to-cart-btn">
              <input type="hidden" name="product_id" value="" data-v-product-product_id />
              <a href="" class="btn btn-primary w-100" data-v-product-add_cart_url data-v-vvveb-action="addToCart" data-product_id="1">
                <span class="loading d-none">
                  <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true"> </span>
                  <span>Add to cart</span>...
                </span>

                <span class="button-text">
                  Add to cart
                </span>
              </a>
            </div>
          </div>
        </div>
      </article>


    </div>



    <div class="col-md-3" data-v-product>

      <article class="single-product-wrapper">
        <!-- Product Image -->
        <a href="product/product.html" data-v-product-url> </a>
        <div class="product-image">
          <a href="product/product.html" data-v-product-url>

            <img src="img/demo/product.jpg" loading="lazy" data-v-product-alt alt="" data-v-size="thumb" loading="lazy" data-v-product-image />

            <!-- Hover Thumb -->
            <img class="hover-img" src="img/demo/product-2.jpg" loading="lazy" data-v-product-alt alt="" loading="lazy" data-v-size="thumb" data-v-product-image-1 />
          </a>

          <!-- Favourite -->
          <div class="product-favourite">
            <a href="product/product.html" class="la la-heart" data-v-vvveb-action="addToWishlist" data-v-product-add_wishlist_url>
              <span></span>
            </a>
          </div>

          <!-- Compare -->
          <div class="product-compare">
            <a href="product/product.html" class="la la-random" data-v-vvveb-action="addToCompare" data-v-product-add_compare_url>
              <span></span>
            </a>
          </div>
        </div>

        <!-- Product Description -->
        <div class="product-content">

          <a href="product/product.html" class="text-body" data-v-product-url>
            <span data-v-product-name>Product 8</span>
          </a>

          <p class="product-price" data-v-if="_product.price > 0" data-v-product-price_tax_formatted>100.0000</p>

          <!-- Hover Content -->
          <div class="hover-content" data-v-if="_product.price > 0">
            <!-- Add to Cart -->
            <div class="add-to-cart-btn">
              <input type="hidden" name="product_id" value="" data-v-product-product_id />
              <a href="" class="btn btn-primary w-100" data-v-product-add_cart_url data-v-vvveb-action="addToCart" data-product_id="1">
                <span class="loading d-none">
                  <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true"> </span>
                  <span>Add to cart</span>...
                </span>

                <span class="button-text">
                  Add to cart
                </span>
              </a>
            </div>
          </div>
        </div>
      </article>


    </div>



    <div class="col-md-3" data-v-product>

      <article class="single-product-wrapper">
        <!-- Product Image -->
        <a href="product/product.html" data-v-product-url> </a>
        <div class="product-image">
          <a href="product/product.html" data-v-product-url>

            <img src="img/demo/product.jpg" loading="lazy" data-v-product-alt alt="" data-v-size="thumb" loading="lazy" data-v-product-image />

            <!-- Hover Thumb -->
            <img class="hover-img" src="img/demo/product-2.jpg" loading="lazy" data-v-product-alt alt="" loading="lazy" data-v-size="thumb" data-v-product-image-1 />
          </a>

          <!-- Favourite -->
          <div class="product-favourite">
            <a href="product/product.html" class="la la-heart" data-v-vvveb-action="addToWishlist" data-v-product-add_wishlist_url>
              <span></span>
            </a>
          </div>

          <!-- Compare -->
          <div class="product-compare">
            <a href="product/product.html" class="la la-random" data-v-vvveb-action="addToCompare" data-v-product-add_compare_url>
              <span></span>
            </a>
          </div>
        </div>

        <!-- Product Description -->
        <div class="product-content">

          <a href="product/product.html" class="text-body" data-v-product-url>
            <span data-v-product-name>Product 8</span>
          </a>

          <p class="product-price" data-v-if="_product.price > 0" data-v-product-price_tax_formatted>100.0000</p>

          <!-- Hover Content -->
          <div class="hover-content" data-v-if="_product.price > 0">
            <!-- Add to Cart -->
            <div class="add-to-cart-btn">
              <input type="hidden" name="product_id" value="" data-v-product-product_id />
              <a href="" class="btn btn-primary w-100" data-v-product-add_cart_url data-v-vvveb-action="addToCart" data-product_id="1">
                <span class="loading d-none">
                  <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true"> </span>
                  <span>Add to cart</span>...
                </span>

                <span class="button-text">
                  Add to cart
                </span>
              </a>
            </div>
          </div>
        </div>
      </article>


    </div>



    <div class="col-md-3" data-v-product>

      <article class="single-product-wrapper">
        <!-- Product Image -->
        <a href="product/product.html" data-v-product-url> </a>
        <div class="product-image">
          <a href="product/product.html" data-v-product-url>

            <img src="img/demo/product.jpg" loading="lazy" data-v-product-alt alt="" data-v-size="thumb" loading="lazy" data-v-product-image />

            <!-- Hover Thumb -->
            <img class="hover-img" src="img/demo/product-2.jpg" loading="lazy" data-v-product-alt alt="" loading="lazy" data-v-size="thumb" data-v-product-image-1 />
          </a>

          <!-- Favourite -->
          <div class="product-favourite">
            <a href="product/product.html" class="la la-heart" data-v-vvveb-action="addToWishlist" data-v-product-add_wishlist_url>
              <span></span>
            </a>
          </div>

          <!-- Compare -->
          <div class="product-compare">
            <a href="product/product.html" class="la la-random" data-v-vvveb-action="addToCompare" data-v-product-add_compare_url>
              <span></span>
            </a>
          </div>
        </div>

        <!-- Product Description -->
        <div class="product-content">

          <a href="product/product.html" class="text-body" data-v-product-url>
            <span data-v-product-name>Product 8</span>
          </a>

          <p class="product-price" data-v-if="_product.price > 0" data-v-product-price_tax_formatted>100.0000</p>

          <!-- Hover Content -->
          <div class="hover-content" data-v-if="_product.price > 0">
            <!-- Add to Cart -->
            <div class="add-to-cart-btn">
              <input type="hidden" name="product_id" value="" data-v-product-product_id />
              <a href="" class="btn btn-primary w-100" data-v-product-add_cart_url data-v-vvveb-action="addToCart" data-product_id="1">
                <span class="loading d-none">
                  <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true"> </span>
                  <span>Add to cart</span>...
                </span>

                <span class="button-text">
                  Add to cart
                </span>
              </a>
            </div>
          </div>
        </div>
      </article>


    </div>



  </div>
</div>`
});
	Vvveb.BlocksGroup['Product'] = ["product/product-1"];

Vvveb.BlocksGroup["Reusable"] = [];

Vvveb.Blocks.add("reusable/header-custom", {
    name: "Header custom",
    //image: Vvveb.themeBaseUrl + "/../../media/img/logo-small.png",
	image: "img/logo-small.png",
    html: `<div class="collapse navbar-collapse" id="navbar" data-v-component-menu="header" data-v-slug="main-menu"><img src="/public/media/logo.png" class="mw-100 align-center">
          <ul class="navbar-nav ms-auto" data-v-menu-items="">
            <li class="nav-item dropdown vvveb-hidden  has-dropdown" data-v-menu-item="" data-v-class-if-has-dropdown="category.children > 0" data-v-class-if-position-static="category.has-text" data-v-id="1" data-v-component="menu" data-v-type="menu-item">

              <a class="nav-link   dropdown-toggle" href="" data-v-class-if-dropdown-toggle="category.children > 0" data-v-class-if-active="category.active" aria-expanded="false" data-v-menu-item-url="">
                <span data-v-menu-item-name="" data-v-if-not="category.type = 'text'" class="   "></span>                <span data-v-menu-item-content=""></span>
              </a>

                          <div class="dropdown-menu" data-v-menu-item-recursive="">
                <div data-v-menu-item="" class="nav-item vvveb-hidden " data-v-class-if-dropdown="category.children > 0" data-v-id="2" data-v-component="menu" data-v-type="menu-item">
                  <a class="dropdown-item  " data-v-class-if-active="category.active" href="" data-v-menu-item-url="">
                    <span data-v-menu-item-name="" data-v-if-not="category.type = 'text'" class="   "></span>                                      </a>
                </div>                
              </div></li><li class="nav-item dropdown vvveb-hidden " data-v-menu-item="" data-v-class-if-has-dropdown="category.children > 0" data-v-class-if-position-static="category.has-text" data-v-id="3" data-v-component="menu" data-v-type="menu-item">

              <a class="nav-link  " href="" data-v-class-if-dropdown-toggle="category.children > 0" data-v-class-if-active="category.active" aria-expanded="false" data-v-menu-item-url="">
                <span data-v-menu-item-name="" data-v-if-not="category.type = 'text'" class="   "></span>                <span data-v-menu-item-content=""></span>
              </a>

                          </li><li class="nav-item dropdown  " data-v-menu-item="" data-v-class-if-has-dropdown="category.children > 0" data-v-class-if-position-static="category.has-text" data-v-id="42" data-v-component="menu" data-v-type="menu-item">

              <a class="nav-link  " href="/" data-v-class-if-dropdown-toggle="category.children > 0" data-v-class-if-active="category.active" aria-expanded="false" data-v-menu-item-url="">
                <span data-v-menu-item-name="" data-v-if-not="category.type = 'text'" class="   ">Home</span>                <span data-v-menu-item-content=""></span>
              </a>

                          </li><li class="nav-item dropdown  " data-v-menu-item="" data-v-class-if-has-dropdown="category.children > 0" data-v-class-if-position-static="category.has-text" data-v-id="59" data-v-component="menu" data-v-type="menu-item">

              <a class="nav-link  " href="/page/about-11" data-v-class-if-dropdown-toggle="category.children > 0" data-v-class-if-active="category.active" aria-expanded="false" data-v-menu-item-url="">
                <span data-v-menu-item-name="" data-v-if-not="category.type = 'text'" class="   ">About</span>                <span data-v-menu-item-content=""></span>
              </a>

                          </li><li class="nav-item dropdown  " data-v-menu-item="" data-v-class-if-has-dropdown="category.children > 0" data-v-class-if-position-static="category.has-text" data-v-id="43" data-v-component="menu" data-v-type="menu-item">

              

                          </li><li class="nav-item dropdown   has-dropdown position-static" data-v-menu-item="" data-v-class-if-has-dropdown="category.children > 0" data-v-class-if-position-static="category.has-text" data-v-id="67" data-v-component="menu" data-v-type="menu-item">

              

                          <div class="dropdown-menu" data-v-menu-item-recursive="">
                <div data-v-menu-item="" class="nav-item  " data-v-class-if-dropdown="category.children > 0" data-v-id="68" data-v-component="menu" data-v-type="menu-item">
                  <a class="dropdown-item  " data-v-class-if-active="category.active" href="/page/about-11" data-v-menu-item-url="">
                                                          </a>
                </div>                
              </div></li><li class="nav-item dropdown   has-dropdown" data-v-menu-item="" data-v-class-if-has-dropdown="category.children > 0" data-v-class-if-position-static="category.has-text" data-v-id="63" data-v-component="menu" data-v-type="menu-item">

              <a class="nav-link   dropdown-toggle" href="/page/services-12" data-v-class-if-dropdown-toggle="category.children > 0" data-v-class-if-active="category.active" aria-expanded="false" data-v-menu-item-url="">
                <span data-v-menu-item-name="" data-v-if-not="category.type = 'text'" class="   ">Services</span>                <span data-v-menu-item-content=""></span>
              </a>

                          <div class="dropdown-menu" data-v-menu-item-recursive="">
                <div data-v-menu-item="" class="nav-item  " data-v-class-if-dropdown="category.children > 0" data-v-id="64" data-v-component="menu" data-v-type="menu-item">
                  <a class="dropdown-item  " data-v-class-if-active="category.active" href="/page/pricing-13" data-v-menu-item-url="">
                    <span data-v-menu-item-name="" data-v-if-not="category.type = 'text'" class="   ">Pricing</span>                                      </a>
                </div><div data-v-menu-item="" class="nav-item  " data-v-class-if-dropdown="category.children > 0" data-v-id="65" data-v-component="menu" data-v-type="menu-item">
                  <a class="dropdown-item  " data-v-class-if-active="category.active" href="/page/services-12" data-v-menu-item-url="">
                    <span data-v-menu-item-name="" data-v-if-not="category.type = 'text'" class="   ">Services</span>                                      </a>
                </div><div data-v-menu-item="" class="nav-item  " data-v-class-if-dropdown="category.children > 0" data-v-id="66" data-v-component="menu" data-v-type="menu-item">
                  <a class="dropdown-item  " data-v-class-if-active="category.active" href="/page/portfolio-14" data-v-menu-item-url="">
                    <span data-v-menu-item-name="" data-v-if-not="category.type = 'text'" class="   ">Portfolio</span>                                      </a>
                </div>                
              </div></li><li class="nav-item dropdown  " data-v-menu-item="" data-v-class-if-has-dropdown="category.children > 0" data-v-class-if-position-static="category.has-text" data-v-id="46" data-v-component="menu" data-v-type="menu-item">

              

                          </li><li class="nav-item dropdown  " data-v-menu-item="" data-v-class-if-has-dropdown="category.children > 0" data-v-class-if-position-static="category.has-text" data-v-id="49" data-v-component="menu" data-v-type="menu-item">

              <a class="nav-link  " href="/page/contact-7" data-v-class-if-dropdown-toggle="category.children > 0" data-v-class-if-active="category.active" aria-expanded="false" data-v-menu-item-url="">
                <span data-v-menu-item-name="" data-v-if-not="category.type = 'text'" class="   ">Contact</span>                <span data-v-menu-item-content=""></span>
              </a>

                          </li>            
            
            
            <li class="nav-toggle">
              
              <div class="dropdown user-box nav-item">
                <a class="dropdown-toggle nav-link " href="/user" role="button" id="user-dropdown" data-bs-toggle="dropdown" aria-expanded="false" data-v-url="user/index">
                  
                  <i class="la la-lg la-user"></i>
                  <span class="visually-hidden">User</span>
                </a>

                <div class="dropdown-menu dropdown-menu-end login-box p-4" aria-labelledby="user-dropdown">

                  <div data-v-component-user="">                    <div class="notifications" data-v-notifications="">

                      
                      
                      <div class="alert alert-primary d-flex alert-dismissable d-flex" role="alert" data-v-notification-info="" data-v-type="login">

                        <div class="icon align-middle me-2">
                          <i class="align-middle la la-2x lh-1  la-info-circle"></i>
                        </div>

                        <div class="flex-grow-1 align-self-center" data-v-notification-text="">This is a dummy info message!</div>

                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                          <span aria-hidden="true">
                            
                          </span>
                        </button>
                      </div>                    </div>

                    <form action="" method="post" enctype="multipart/form-data" data-v-url="user/login" data-v-vvveb-action="login" data-v-vvveb-on="submit" class="login-form">

                      <input type="hidden" name="csrf" data-v-csrf="" value="QGOuu6ITJiKmPqWt">

                      <div class="login-form   " data-v-if-not="component.user_id">

                        <div class="mb-3">
                          <label class="form-label" for="input-email">E-Mail Address</label>
                          <input type="email" name="email" value="" placeholder="E-Mail Address" id="input-email" class="form-control" required="">
                        </div>

                        <div class="mb-3">
                          <label class="form-label" for="input-password">Password</label>
                          <input type="password" minlength="4" autocorrect="off" autocomplete="current-password" name="password" value="" placeholder="Password" id="input-password" class="form-control" required="">
                        </div>

                        <button type="submit" value="Login" class="btn btn-primary btn-login w-100">

                          <span class="loading d-none">
                            <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true">
                            </span>
                            <span>Authenticating</span>... </span>

                          <span class="button-text">
 Login <i class="la la-arrow-right float-end ms-2"></i>
                          </span>

                        </button>
                        <div class="my-2"></div>
                        <a href="/user/reset" data-v-url="user/reset/index" class="my-2">Forgotten Password</a>

                        <div class="my-2"></div>
                        
                        <hr>
                        <span>Don’t have an account?</span>
                        <a href="/user/signup" data-v-url="user/signup/index">Register Account</a>

                      </div>                      <div class="user-form   vvveb-hidden" data-v-if="component.user_id">
                        <div class="text-center">Welcome <b data-v-user-first_name=""></b>
                          <b data-v-user-last_name=""></b>
                        </div>

                        <div class="dropdown-divider opacity-50 my-3"></div>

                        <ul class="m-3 list-unstyled">
                          <li>
                            <a href="/user" data-v-url="user/index">
                              <i class="la la-user la-lg text-muted m-1"></i>
                              <span>My account</span>
                            </a>
                          </li>
                          <li>
                            <a href="/user/comments" data-v-url="user/comments/index">
                              <i class="la la-comment la-lg text-muted m-1"></i>
                              <span>Comments</span>
                            </a>
                          </li>
                          <li>
                            <a href="/user/orders" data-v-url="user/orders/index">
                              <i class="la la-shopping-bag la-lg text-muted m-1"></i>
                              <span>Orders</span>
                            </a>
                          </li>
                          <li>
                            <a href="/user/downloads" data-v-url="user/downloads/index">
                              <i class="la la-hand-holding-heart la-lg text-muted m-1"></i>
                              <span>Downloads</span>
                            </a>
                          </li>
                          <li>
                            <a href="/user/wishlist" data-v-url="user/wishlist/index">
                              <i class="la la-download la-lg text-muted m-1"></i>
                              <span>Wishlist</span>
                            </a>
                          </li>
                          <li>
                            <a href="/user/profile" data-v-url="user/profile/index">
                              <i class="la la-cogs la-lg text-muted m-1"></i>
                              <span>Profile</span>
                            </a>
                          </li>
                        </ul>


                        <input type="hidden" name="logout">

                        <button type="submit" value="logout" class="btn btn-sm btn-primary w-100">

                          <span class="loading d-none">
                            <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true">
                            </span>
                            <span>Loading ...</span>... </span>

                          <span class="button-text">
                            <i class="la la-sign-out-alt la-lg m-1"></i>
                            <span>Log out</span>
                            
                          </span>

                        </button>
                      </div>                    </form>

                  </div>
                </div>
              </div>

            </li>
            <li class="nav-toggle">
              
              <div class="dropdown nav-item mini-cart" data-v-component-cart="">                <a class="dropdown-toggle cart-info nav-link " href="/cart" role="button" id="cart-dropdown" data-bs-toggle="dropdown" aria-expanded="false" data-v-url="cart/cart/index">
                  
                  <i class="la la-lg la-shopping-bag"></i>
                  <span class="visually-hidden">Cart</span>
                  <strong class="text-top text-bold   vvveb-hidden" data-v-total_items="" data-v-if="cart.total_items > 0">0</strong>                </a>


                <div class="dropdown-menu dropdown-menu-end cart-box" aria-labelledby="cart-dropdown">

                  <div>
                    <div class="table-responsive">
                      <table class="table cart-table align-middle mb-0">
                        <tbody>


                          <tr data-v-cart-product="" data-product_id="1" data-key="0">
                            <td class="text-center">
                              <a href="" data-v-cart-product-url="">
                                <img src="#" alt="Product name" class="img-rounded" loading="lazy" data-v-cart-product-image="" width="50">
                              </a>
                            </td>
                            <td class="text-start">
                              <a href="" class="d-block" data-v-cart-product-url="" data-v-cart-product-name=""></a>

                              <span data-v-cart-product-quantity=""></span>
                              <i class="la la-times text-muted"></i>
                              <span data-v-cart-product-price_tax_formatted=""></span>

                              <div class="option   vvveb-hidden" data-v-if="product.option">
                                <div class="" data-v-product-option="">
                                  <span data-v-product-option-option=""></span>: <span data-v-product-option-name=""></span>
                                  <span data-v-if="value.price" class="   vvveb-hidden">(<span data-v-product-option-price=""></span>)</span>                                </div>                                
                                
                              </div>                              <div class="subscription   vvveb-hidden" data-v-if="product.subscription">
                                <span>Subscription plan</span>:
                                <span data-v-cart-product-subscription_name=""></span>
                              </div>                            </td>
                            <td class="text-end">
                              <a class="btn btn-outline-secondary btn-sm border-0" data-v-vvveb-action="removeFromCart" data-v-cart-product-remove-url="" href="/?module=cart&amp;action=remove&amp;product_id=1">
                                <i class="la la-times"></i>
                              </a>
                            </td>
                          </tr>                          
                          <tr data-v-if-not="cart.total_items" class="   ">
                            <td colspan="100">
                              <div class="d-flex  p-2">
                                <div class="text-center p-2 opacity-75">
                                  
                                  <i class="la la-2x la-shopping-bag"></i>
                                </div>
                                <div class="p-2">
                                  <strong>Empty cart</strong>
                                  <br>
                                  <span class="text-muted">No products added yet!</span>
                                </div>
                              </div>
                            </td>
                          </tr>                        </tbody>

                      </table>
                    </div>

                    <div class="p-3 pt-0 border-top   vvveb-hidden" data-v-if="cart.total_items">
                      <div class="table-responsive mb-2" data-v-cart-totals="">
                        <table class="table mb-0 cart-table cart-total" cellspacing="0">
                          <tfoot>
                            <tr data-v-cart-total="">
                              <td colspan="5" class="text-end">
                                <small data-v-cart-total-title=""></small>:
                              </td>
                              <td class="text-end">
                                <span data-v-cart-total-text="" data-v-if="total.text" class="   vvveb-hidden"></span>                                <span data-v-cart-total-value_formatted="" data-v-if="total.value > 0" class="   vvveb-hidden"></span>                              </td>
                            </tr>                            
                            
                            
                            <tr>
                              <td colspan="5" class="text-end">Total:</td>
                              <td class="text-end" data-v-grand-total_formatted="">$0.00</td>
                            </tr>
                          </tfoot>

                        </table>
                      </div>

                    </div>                    <div class="row mt-2 g-2 px-3 pb-2   vvveb-hidden" data-v-if="cart.total_items">
                      <div class="col-6">
                        <a href="/cart" class="btn btn-light btn-sm border w-100" data-v-url="cart/cart/index">
                          <i class="la la-shopping-cart la-lg"></i>
                          <span>View cart</span>
                        </a>
                      </div>
                      <div class="col-6">
                        <a href="/checkout" class="btn btn-primary btn-sm w-100" data-v-url="checkout/checkout/index">
                          <span>Checkout</span>
                          <i class="la la-arrow-right la-lg"></i>
                        </a>
                      </div>
                    </div>                  </div>
                </div>

              </div>

            </li>
          </ul>

          <div class="search-area toggle-hover">
            <form action="/search" method="get" data-v-action="/search">
              <input type="hidden" name="route" value="search">
              <div class="input-group">
                <input type="search" name="search" class="form-control" id="headerSearch" placeholder="Type for search" data-v-vvveb-action="search" data-v-vvveb-on="keyup">
                <button class="btn border-0" type="submit" title="Search">
                  <div class="la-flip-horizontal">
                    <i class="la la-search la-lg" aria-hidden="true"></i>
                  </div>
                </button>
              </div>
            </form>
          </div>

        </div>`
});
Vvveb.BlocksGroup['Reusable'].push("reusable/header-custom");

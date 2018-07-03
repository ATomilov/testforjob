<?php
/*
  Template Name: Checkout-and-cart
*/
get_header();
the_post();?>
<div class="wrap">
  <div id="primary" class="content-area"><main id="main" class="site-main" role="main">
    <?php the_content();?>
    <?php foreach( WC()->cart->get_cart() as $cart_item ){
    	var_dump($cart_item);
		}?>
  </div>
</div>
<?php get_footer();
?>
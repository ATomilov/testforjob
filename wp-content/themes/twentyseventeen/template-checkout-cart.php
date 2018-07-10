<?php
/*
	Template Name: Checkout-and-cart
*/
get_header();
the_post();?>
<div class="wrap">
	<div id="primary" class="content-area">
		<?php the_content();?>
		<?php
			// foreach( WC()->cart->get_cart() as $cart_item ) :
			// 	var_dump($cart_item);
			// endforeach;
			// global $post;
			// $all_orders = wc_get_orders( $post->id );
			// // var_dump( $all_orders );
			// // $items = $order->get_item();
			// foreach ($all_orders as $orders) :
			// 	$orders_ids[] = $orders->get_id();
			// endforeach;
	  		// echo max( $orders_ids );
			// foreach ( $order->get_items() as $item ) :
			
			//     // Compatibility for woocommerce 3+
			//     $product_id = version_compare( WC_VERSION, '3.0', '<' ) ? $item['product_id'] : $item->get_product_id();
			
			//     // Here you get your data
			//     $custom_field = get_post_meta( $product_id, '_tmcartepo_data', true); 
			
			//     // To test data output (uncomment the line below)
			//     // print_r($custom_field);
			
			//     // If it is an array of values
			//     if( is_array( $custom_field ) ) :
			//         echo implode( '<br>', $custom_field ); // one value displayed by line 
			//     // just one value (a string)
			//     else :
			//         echo $custom_field;
			// 	endif;
			// endforeach;
		?>
	</div>
</div>
<?php get_footer();
?>
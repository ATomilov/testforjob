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
		// var_dump( wp_upload_dir() );
			// foreach( WC()->cart->get_cart() as $cart_item ) :
			// 	var_dump($cart_item);
			// endforeach;
		// 	global $post;
		// 	$all_orders = wc_get_orders( $post->id );
		// 	// var_dump( $all_orders );
		// 	// $items = $order->get_item();
		// 	foreach ($all_orders as $orders) :
		// 		// $orders_ids[] = $orders->get_id();
		// 		// echo $orders->get_items() . "<br>";
		// 		// var_dump( $orders );
		// 		// var_dump( $orders->get_items() );
		// 		$order_items = $orders->get_items();
		// 		foreach ($order_items as $item_id => $item_data) :
    // // Get the product name
    // // $product_name = $item_data['name'];
    // // Get the item quantity
    // $item_quantity = $orders->get_item_meta($item_id, 'Image', true);
    // // Get the item line total
    // // $item_total = $orders->get_item_meta($item_id, '_line_total', true);

    // // Displaying this data (to check)
    // // echo 'Product name: '.$product_name.' | Quantity: '.$item_quantity.' | Item total: '. $item_total;
		// 		endforeach;
		// 	endforeach;
// 			$order = wc_get_order( $post->id );
// // Getting the items in the order
// $order_items = $order->get_items();
// // Iterating through each item in the order
// foreach ($order_items as $item_id => $item_data) {
//     // Get the product name
//     $product_name = $item_data['name'];
//     // Get the item quantity
//     $item_quantity = $order->wc_get_order_item_meta($item_id, '_qty', true);
//     // Get the item line total
//     $item_total = $order->wc_get_order_item_meta($item_id, '_line_total', true);

//     // Displaying this data (to check)
//     echo 'Product name: '.$product_name.' | Quantity: '.$item_quantity.' | Item total: '. $item_total;
// }
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
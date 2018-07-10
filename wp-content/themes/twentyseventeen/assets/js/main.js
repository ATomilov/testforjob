jQuery(document).ready(function($) {
	var chosenFile = $('#custom-image-input').prop('files').length;
	if (chosenFile == 0) {
		$('form.cart button[name="add-to-cart"]').addClass("disabled-button");
		// alert("!");
	}
	// $('body').on('click', '.ajax-add-to-cart-test', function (e) {
	// 	e.preventDefault();
	// 	// var name = document.getElementById("fileToUpload").files[0].name;
	// 	// var form_data = new FormData();
	// 	// var oFReader = new FileReader();
	// 	// oFReader.readAsDataURL(document.getElementById("fileToUpload").files[0]);
	// 	// var f = document.getElementById("fileToUpload").files[0];
	// 	// var myFormData = new FormData();
	// 	// myFormData.append('fileToUpload', fileToUpload.files[0]);
	// 	var data_productId = $('#post_id').val();
	// 	var data_productQuantity = $('.quantity input[type="number"]').val();
	// 	// console.log(JSON.parse(JSON.stringify(myFormData)));
	// 	// alert(name);
	// 	$.ajax({
	//  		url: tfjAjaxUploadFile.ajaxurl,
	//  		method: 'post',
	//  		data: {
	// 			action: 'twAddToCart',
	// 			data_productId: data_productId,
	// 			// data_productFile: form_data,
	// 			data_productQuantity: data_productQuantity,
	// 		},
	// 		// contentType: false,
	// 		// cache: false,
	// 		// processData: false,
	// 		success: function(response) {
	// 			if ( response['data']['possible'] ) {
	// 				alert("Product added to cart!");
	// 			}
	// 			else {
	// 				alert("Ajax - yes, add to cart - no.")
	// 			}
	// 		},
	// 		error: function(response) {
	// 			alert("Error with add to cart request");
	// 		}
	// 	});
	// });

	$('body').on('submit', 'form.cart', function (e) {
		// e.preventDefault();
		var chosenFile = $('#custom-image-input').prop('files').length;
			// alert($('#custom-image-input').prop('files').length);
			// alert(chosenFile == 0);
			// var ext = $('#custom-image-input').prop('files')[0]['name'].split('.').pop().toLowerCase();
		var ext = $("#custom-image-input").val().split('.').pop().toLowerCase();
		// alert(ext);
		if (chosenFile == 0) {
			e.preventDefault(); 
			alert("Please, choose file first");
		}
		else if (ext!='png' && ext!='jpg' && ext!='jpeg' && ext!='bmp' && ext!='gif') {
			e.preventDefault();
			alert("Please, choose correct file type first");
		}
	});

	$('#custom-image-input').change(function(){
		var formdata = new FormData();
		if($(this).prop('files').length > 0)
		{
			file =$(this).prop('files')[0];
			formdata.append("image", file);
		}
		// console.log($(this).prop('files'));
		// console.log(formdata);
		// $('input[name="upload-image-name"]').val($(this).prop('files')[0]['name']);
		formdata.append('action', 'tfjAjaxUploadFile');
		jQuery.ajax({
			url: tfjAjaxUploadFile.ajaxurl,
			type: "POST",
			data:formdata,
			contentType: false,
			cache: false,
			processData: false,
			success: function (response) {
				// console.log(response['data']['url']);
				// console.log(response);
				// alert(response['data']['is_file_correct']);
				if (response['data']['is_file_correct']) {
					if ($('form.cart button[name="add-to-cart"]').hasClass("disabled-button")) {
						$('form.cart button[name="add-to-cart"]').removeClass("disabled-button");
				}
					$('.custom-uploated-image').html('<img src="'+ response['data']['url'] + response['data']['name'] +'" alt="">');
					$('input[name="upload-image-name"]').val(response['data']['name']);
				}
				else if ( response['data']['is_file_empty'] ) {
					if (!$('form.cart button[name="add-to-cart"]').hasClass("disabled-button")) {
						$('form.cart button[name="add-to-cart"]').addClass("disabled-button");
					}
					$('.custom-uploated-image').html('');
					alert("You don't choose any file");
				}
				else {
					if (!$('form.cart button[name="add-to-cart"]').hasClass("disabled-button")) {
						$('form.cart button[name="add-to-cart"]').addClass("disabled-button");
					}
					$('.custom-uploated-image').html('');
					alert("Wrong file type or file already exists or file is too large");
				}
		 		// alert("Good.");
			},
			error: function (response) {
				alert("Not so good.");
			}
		});
		$('form.cart button[name="add-to-cart"]').addClass("disabled-button");
	});
});
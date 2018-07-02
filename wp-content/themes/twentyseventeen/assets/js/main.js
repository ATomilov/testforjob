jQuery(document).ready(function($) {
  $('body').on('click', '.test-add-to-cart', function (e) {
    e.preventDefault();
    // var name = document.getElementById("fileToUpload").files[0].name;
    // var form_data = new FormData();
    // var oFReader = new FileReader();
    // oFReader.readAsDataURL(document.getElementById("fileToUpload").files[0]);
    // var f = document.getElementById("fileToUpload").files[0];
    // var myFormData = new FormData();
    // myFormData.append('fileToUpload', fileToUpload.files[0]);
    var data_productId = $('#post_id').val();
    var data_productQuantity = $('.quantity input[type="number"]').val();
    // console.log(JSON.parse(JSON.stringify(myFormData)));
    // alert(name);
    $.ajax({
      url: tfjAjaxUploadFile.ajaxurl,
      method: 'post',
      data: {
          action: 'twAddToCart',
          data_productId: data_productId,
          // data_productFile: form_data,
          data_productQuantity: data_productQuantity,
      },
      // contentType: false,
      // cache: false,
      // processData: false,
      success: function(response) {
          if ( response['data']['possible'] ) {
            alert("Product added to cart!");
          }
          else {
            alert("Ajax - yes, add to cart - no.")
          }
          
      },
      error: function(response) {
          alert("Error with add to cart request");
      }
    });
  });
  $('#custom-image-input').change(function(){  
    var formdata = new FormData();
    if($(this).prop('files').length > 0)
    {
        file =$(this).prop('files')[0];
        formdata.append("image", file);
    }
    // console.log($(this).prop('files')[0]);
    // console.log(formdata);
    $('input[name="upload-image-name"]').val($(this).prop('files')[0]['name']);
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
        $('.custom-uploated-image').html('<img src="'+ response['data']['url'] + response['data']['name'] +'" alt="">');
        // alert("Good.");
      },
      error: function (response) {
        alert("Not so good.");
      }
  });
});
});
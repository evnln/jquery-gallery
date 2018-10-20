$(function() {
    console.log('ready');

    //listen for a click on thumbnail image

    $('.js-thumbnails li').on('click', function(){

    	const image = $(this).children('img');
    	const imageSrc = image.data('bigimg');
    	//console.log(image.data('main'));

    	//update large main image with new src
    	$('#main').attr('src', imageSrc);
    	$('.selected').removeClass('selected');
    	$(this).addClass('selected');

    })











});
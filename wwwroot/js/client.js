$(function(){
    // preload audio
     var toast = new Audio('media/toast.wav');

     $('.code').on('click', function(e) {
         e.preventDefault();
         // first pause the audio (in case it is still playing)
         toast.pause();
         // reset the audio
         toast.currentTime = 0;
         // play audio
         toast.play();
         $('#toast').toast({ autohide: false }).toast('show');
         
         let target = $(e.target)
         let product = target.data('product');
         let code = target.data('code');
         
         $('#product').text(product);
         $('#code').text(code);
     });
     
     $(document).on('keydown', (event) => {
        if (event.key == 'Escape') {
            $('#toast').toast('hide')
        }
     });
 });

  $(document).on('click', '#hidepic', function()
  {
       $('.homepic').fadeToggle();
  });
  
  
  $(window).resize(function()
  {
      console.log( 'Browser Width: ' + $(window).width() );
  });
 
 
  $(document).on('click', "img", function()
  {
        console.log('Alt text: ' + $(this).attr('alt'));
        console.log('Width: ' + $(this).width());
        console.log('Height: ' +  $(this).height());
  });

  
  $(document).on('click', "h1, h2, h3, h4, h5, h6", function()
  {
        console.log('Text: ' + $(this).text());
        console.log('Color: ' + $(this).css('color'));
        console.log('Font-size: ' + $(this).css('font-size'));
  });
  


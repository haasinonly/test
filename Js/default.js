function executeHandler(){
 $(document).ready(function(){    
   justForTest(); 
});
 
  function justForTest() {
  
    var url = window.location.href;  
    
	$('input[type=button]').click(function(){	  	  
	  $('input[type=text]').val(url);
	});
   
    var $newdiv = $("<div class='aJsdiv'><p>Lorem ipsum dolor sit amet</p><p>Lorem ipsum dolor sit amet</p></div>").hide();
	var $close = $("<span class='close'>X</span>");
    $newdiv.appendTo('div.contact');
    $close.appendTo($newdiv);
	
    $('a.generate').click(function(){
     $newdiv.fadeIn('slow');
	 return false;
	});
    
	$close.click(function(){
	 $(this).parent().fadeOut();
	});
	
  }
  
}
	
	
	
	
	
	


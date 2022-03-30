var btn = document.getElementById('btn-div');
var container = document.querySelector('.minha-div-1');
btn.addEventListener('click', function() {
    
  if(container.style.display === 'block') {
      container.style.display = 'none';
  } else {
      container.style.display = 'block';
  }
});

var espera = 100;
var timeout = null;

$(window).bind('scroll',function(){
    clearTimeout(timeout);
    timeout = setTimeout(function(){

    if($(window).scrollTop() > 200)
    {
        $('.js').animate({height:"900px" });
    }
    else
    {
        $('.js').animate({height:"0px"});
    }    
    

    },espera);
});

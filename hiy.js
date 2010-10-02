(function(){
  $(document).ready(init);
 
  function init () {
    $('.fib p').each(
        function(index,value) {
          var margin = fib(index + 1) * 15;
          console.log(margin);
          $(value).css({
            'margin-bottom': margin
          });
        }
      );

    $('.social_media').each(
        function(index,value) {
          var margin = index==0? 0 : Math.pow(2,index) * 80;
          $(value).css({
            position:'fixed',
            bottom:'30px',
            left:margin
          });
        }
      );
  }

  // naive fibonnacci. can't handle more than 30
  function fib (n) {
    if(n == 0 || n == 1) return 1;
    return fib(n - 1) + fib(n - 2);
  }

})();

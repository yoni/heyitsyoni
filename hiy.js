(function(){
  $(document).ready(init);
 
  function init () {

    // vertically space out the links according to fibonacci sequence
    $('.fib p').each(
        function(index,value) {
          var fibonacci_number = fib(index + 1) * 15;
          $(value).css({
            'margin-top': fibonacci_number * 1/3,
            'margin-left': fibonacci_number
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

var adder = function( ){
  var args = Array.prototype.slice.call( arguments );
  return args.reduce( function( prev, curr ){
    return prev + curr;
  }, 0 );
};
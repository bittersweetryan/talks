var adder = function(){
    var args = Array.prototype.slice.call( arguments );
    
    return args.reduce( function( curr, previous ){
        if( !isNaN( Number( curr ) ) ){
            return previous + curr;
        }
    }, 0 );
};

if( module && module.exports){
    module.exports =  adder;
}

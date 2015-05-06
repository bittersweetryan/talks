var adder = function(){
    var args = Array.prototype.slice.call( arguments );
    
    return args.reduce( function( previous, curr ){
        if( !isNaN( Number( curr ) ) ){
            return previous + curr;
        }
        else{
        	return curr;
        }
    }, 0 );
};

if( typeof module !== 'undefined' && module.exports ){
    module.exports =  adder;
}

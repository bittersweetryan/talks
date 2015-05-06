var expect = require( 'chai' ).expect;
var adder = require( '../../src/adder' );

describe( 'adder', function(){
    it( 'should return zero if no args are passed in', function(){
        expect( adder(  ) ).to.equal( 0 );
    });
    
    it( 'should add an array of numbers', function(){
        expect( adder( 1,2,3 ) ).to.equal( 6 );
    });
    
    it( 'should skip non numbers', function(){
        expect( adder( 1,2,'a' ) ).to.equal( 3 );
    });
});

describe( 'adder', function(){
    it( 'should return zero if no args are passed in', function(){
        expect( adder(  ) ).toEqual( 0 );
    });
    
    it( 'should add an array of numbers', function(){
        expect( adder( 1,2,3 ) ).toEqual( 6 );
    });
    
    it( 'should skip non numbers', function(){
        expect( adder( 1,2,'a' ) ).toEqual( 3 );
    });
});

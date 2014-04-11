describe( 'adder', function(){

	it( 'should return zero when no arguments are passed in', function(){
		expect( adder() ).to.equal( 0 );
	} );

	it( 'should add two numbers', function(){
		expect( adder( 1,2 ) ).to.equal( 3 );
	} );

	it( 'should ignore non-numeric input', function(){
		expect( adder(1,2,a) ).to.equal( 3 );
	} );
} );
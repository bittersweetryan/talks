describe( 'adder', function(){
	it( 'should add two numbers', function(){
		expect( adder( 1,2 ) ).toEqual( 3 );
	} );

	it( 'should add three numbers', function(){
		expect( adder(1,2,3) ).toEqual( 6 );
	} );
} );
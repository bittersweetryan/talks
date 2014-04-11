describe( 'adder', function(){

	
	it( 'should return 0 when no arguments are passed in', function(){
		expect( adder( ) ).toEqual( 0 );
	} );

	it( 'should add two numbers', function(){
		expect( adder( 1,2 ) ).toEqual( 3 );
	} );

	it( 'should add three numbers', function(){
		expect( adder(1,2,3) ).toEqual( 6 );
	} );
} );
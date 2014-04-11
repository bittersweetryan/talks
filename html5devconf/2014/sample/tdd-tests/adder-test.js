test( 'test adder', function(){

	equal( adder(), 0, 'adder should return zero when no arguments are passed in');

	ok( adder( 1,3 ) === 4, 'adder should add two numbers');

	equal( adder( 1,2,a ), 3, 'adder should igonre non numeric input' );
});
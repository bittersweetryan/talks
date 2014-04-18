//qunit
test( 'adder', function(){
	ok( adder() === 0, 'should return 0');
} );

//chai
describe( 'adder', function(){
	assert.equal( adder() , 0, 'should return 0' );
});
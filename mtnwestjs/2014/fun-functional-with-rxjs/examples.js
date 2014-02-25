var clicksOnElement = 
	Observable.fromEvent( el, 'click' );

clicksOnElement
	.map( function(){
		return a;
	})
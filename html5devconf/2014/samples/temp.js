asyncTest( 'should read the config file' , 
  function( done ){
    var callback = function( readystate ){
      ok( readystate === 'config ready' );
      start();
    }
    readConfig( callback );
} );
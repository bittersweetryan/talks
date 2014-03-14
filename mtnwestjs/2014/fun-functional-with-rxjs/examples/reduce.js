var html = results.reduce( function( prev,curr ) {
    return prev + '<li>' + curr.name + '</li>';
},'' );

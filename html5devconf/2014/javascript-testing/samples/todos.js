$(function(){
    var $list = $( '.todo-list' ),
        $input = $( '.new-todo' ),
        todos = $.ajax(...);
  
    todos.forEach( function( item, index){
      $list.append( '<li class="todo-item">' + item.name + '</li>');
    } );
  
  $input.on( 'keypress', function( e ){
      if( e.which === 13 ){
        $list.append( '<li class="todo-item">' +
          $(this).val() + '</li>');
        $(this).val( '' );
      }
  } );
});

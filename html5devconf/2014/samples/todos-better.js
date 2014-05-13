//moar
var Todos = function( $list, $input ){
  this.$list = $list;
  this.$input = $input;
};

Todos.prototype.getData = function( callback ){
    setTimeout( function(){
        callback( [
          { id : 1, name : "One", done : false},
          { id : 2, name : "Two", done : true},
          { id : 3, name : "Three", done : false}
        ] );
    }, 300 );
};

Todos.prototype.addItem = function( name ){    
  this.$list.append( '<li class="todo-item">' + name + '</li>');
};

Todos.prototype.addItems = function( items ){
  items.forEach( function( item, index){
      this.addItem( item.name );
    }, this );
};


Todos.prototype.handleKeypress = function( e ){
    
  if( e.which === 13 ){
    this.addItem( this.$input.val() );
    this.$input.val( '' );
  }
};

Todos.prototype.init = function(){
  this.$input.on( 'keyup', $.proxy( this.handleKeypress, this ) );
  
  this.getData( this.addItems );
};

/*
$(function(){
   var todos = new Todos( $( '.todo-list' ), $( '.new-todo' ) );
   app.init();
});
*/ 

if( typeof module !== 'undefined' && module.exports ){
    module.exports = Todos;
}
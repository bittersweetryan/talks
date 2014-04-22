//moar
var App = function( $list, $input ){
  this.$list = $list;
  this.$input = $input;
};

App.prototype.getData = function(){
  return [
    { id : 1, name : "One", done : false},
    { id : 2, name : "Two", done : true},
    { id : 3, name : "Three", done : false}
  ];
};

App.prototype.addItems = function( items ){
  items.forEach( function( item, index){
      this.addItem( item.name );
    }, this );
};

App.prototype.addItem = function( name ){
  this.$list.append( '<li class="todo-item">' + name + '</li>');
};

App.prototype.handleKeypress = function( e ){
  var $input = $(e.target);
  
  if( e.which === 13 ){
    this.addItem( $input.val() );
    $input.val( '' );
  }
};

App.prototype.init = function(){
  this.$input.on( 'keyup', $.proxy( this.handleKeypress, this ) );
  
  this.addItems( this.getData() );
};

$(function(){
   var app = new App( $( '.todo-list' ), $( '.new-todo' ) );
   app.init();
});

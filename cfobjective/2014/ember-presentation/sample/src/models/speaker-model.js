App.Speaker = DS.Model.extend({
  firstName  : DS.attr( 'string' ),
  lastName   : DS.attr('string'),
  fullName   : function(){
    return this.get( 'firstName' ) + ' '  + this.get( 'lastName' );
  }.property( 'firstName', 'lastName' ),
  bio : DS.attr( 'string' ),
  sessions: DS.hasMany('session' )
});

App.Speaker.FIXTURES = [
   {
    id : 1,
    firstName : 'Ryan',
    lastName : 'Anklam',
    bio : 'Ryan Anklam is a Senior UI Engineer at Netflix where is working on reinventing TV and continually improving the Netflix user experience. He has been developing for the web since JavaScript was mainly used for mouseover images and crude form validation. Ryan is also a passionate open source advocate and contributor.',
    sessions : [ 1,2 ]
  },
  {
    id : 2,
    firstName : 'Ben',
    lastName : 'Farrell',
    bio : 'Ben Farrell calls himself a Creative Developer because he likes dealing with emerging, fun, and off the wall technologies. With a focus on the user interface, Ben does go full stack, and also lately he\'s been trying to put aside the screen and get more physical with technology . Ben  works at GE and lives in the Bay Area of California.',
    sessions : [3]
  },
  {
    id : 3,
    firstName : 'Dan',
    lastName : 'Wilson',
    bio : 'Dan is an avid participant in technology communities; an Adobe Community Professional, manager of the Triangle ColdFusion User Group in Research Triangle Park, North Carolina, Managing Director of the popular Model-Glue framework and contributor to numerous open source projects based on ColdFusion, Flex and AIR platforms.',
    sessions : [4]
  },
  {
    id : 4,
    firstName : 'Adam',
    lastName : 'Tuttle',
    bio : 'Adam is a jack of all trades but he specializes in JavaScript, REST, SOA, Security, and Responsive mobile-optimized design.<br><br> In addition to working with and speaking about ColdFusion, he is an Adobe Community Professional for ColdFusion, and maintains a growing library of open source projects including Taffy. Adam also blogs, mostly about tech stuff, at fusiongrokker.com and tweets as @AdamTuttle.',
    sessions : [5,6]
  }
];
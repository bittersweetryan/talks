App.Session = DS.Model.extend({
  track : DS.attr( 'string' ),
  name  : DS.attr( 'string' ),
  description: DS.attr( 'string' ),
  going: DS.attr( 'boolean', {defaultValue : false} ),
  speaker : DS.belongsTo('speaker')
});

App.Session.FIXTURES = [
   {
    name : 'Creative Node.JS',
    track : 'JS',
    id : 3,
    description : 'Maybe not so much at cfObjective, but some of us think that web servers are a little boring. We like to push around graphics, interact with real world gadgets, and get front-end related tasks done. In this session I\'ll cover what Node.js can do without a webserver: no HTTP requests allowed!',
    going: false,
    speaker : 2
  },
  {
    name : 'Stop Making Excuses And Start Testing Your JavaScript',
    track : 'JS',
    id :  1,
    going : false,
    description : 'Most developers know that it\'s important to test their JavaScript, however there are a plethora of reasons why they don\'t.  This session will give attendees the tools to get started with JavaScript unit testing. Attendees will learn: how to setup a testing environment, how to write testable JavaScript code, how to solve some common JavaScript testing issues such as testing the DOM, and how to save time by automating running tests with tools like, Grunt and Testem.',
    speaker : 1
  },
  {
    name : 'EmberJS: A Framework For Making Ambitious Web Applications',
    track : 'JS',
    description : 'Ember.js  is an extremely powerful and robust framework that includes powerful data bindgings, a robust router, templates based on the popular Handlebars library, and encapsulated components.   This session aims to solve one of the hardest parts of getting started with ember:  wrapping your head around how to combine all these concepts into a working web application.  Attendees will be introduced to all of the main components of Ember.js and shown how they all fit together.  In addition attendees will also learn about Ember\'s unique data persistence layer, ember-data.  ',
    id : 2,
    going : false,
    speaker : 1
  },
  {
    name : 'The Top 5 Things You are Doing Today to Hinder Scalability',
    track : 'Architecture',
    description : 'Decisions made in code today, can have far reaching consequences in the future. I\'m often asked to help a development team scale an application for better performance. I\'ve collected a number of programming decisions that affect how an application can be scaled up. In this session, we\'ll talk about what you are doing right now, that could prevent your application from reaching it\'s potential.',
    id : 4,
    going : false,
    speaker : 3
  },
  {
    name : 'Open Yourself to Colsures',
    track : 'JS',
    description : 'You don\’t need closures to write good code, but their benefits make it a skill worth learning. Closures provide extreme terseness, readability, and maintainability that you can’t get from any amount of encapsulation or abstraction, among other benefits. This session will start with a very brief history lesson to help you understand the reasons for their invention, and will use simple terminology and move from simple to progressively complex examples to make sure that everyone can keep up. We\'ll be looking at closures in both CFML and JavaScript. Even your boss could attend this session and truthfully say that they “get” closures afterward.',
    id : 5,
    going : false,
    speaker : 4
  },  
  {
    name : 'Building Communities: Lessons Learned From 4 Years Running a Successful Open Source CFML Project',
    track : 'Architecture',
    description : 'This session will explain why you (yes, you) should be participating in open source; how to decide what to build or contribute to; what makes an open source project successful; and how to encourage a community to thrive around that project -- all by using examples of my "failed" OSS projects and what I consider my single "successful" project. What differs between those projects? Did I behave differently?',
    id : 6,
    going : false,
    speaker : 4
  }
];
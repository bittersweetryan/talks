var React = require( 'react' );

class MyApp extends React.Component{
    render(){
        return (
            <section>
                <h1>Welcome to <span className="midwest-title">MidwestJS</span></h1>
                <label for="firstName" className="input-label">
                     First Name:
                 </label>
                <input name="firstName" id="firstName" className="text-input"/>
            </section>
       );
    }
}

module.exports = MyApp;

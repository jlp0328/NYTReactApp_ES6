var React = require("react");

var Saved = require("./panels/Saved.js");
var Search = require("./panels/Search.js");

var Main = React.createClass({

  // Here we set a generic state associated with the number of clicks
  getInitialState: function() {
    return {
      clicks: 0
    };
  },

  // Whenever the button is clicked we'll use setState to add to the clickCounter
  // Note the syntax for setting the state
  handleClick: function() {
    this.setState({ clicks: 1 + this.state.clicks });
  },

  // Here we describe this component's render method
  render: function() {
    return (

       <div className="container">

            <div className ="jumbotron jumbotron-fluid">
              <div className ="container">
                <h1 className ="display-3">New York Times Article Scrubber</h1>
                <p className ="lead">Search for and annotate articles of interest!</p>
              </div>
            </div>

                <div className="col-md-12">

                <Search clicks={this.state.clicks}/>

                </div>

                <div className="col-md-12">

                <Saved clicks={this.state.clicks}/>

                </div>

              </div>
    );
  }

});

// Export the component back for use in other files
module.exports = Main;

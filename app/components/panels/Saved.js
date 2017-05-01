var React = require("react");

var Saved = React.createClass({


  render: function() {
    return (

      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Saved Articles</h3>
        </div>
        <div className="panel-body text-center">

          {/*
            The number of clicks is passed to us from Main.js inside props.
            We use that number to show the value inside of this component
          */}
          <h1>{this.props.clicks}</h1>
        </div>
      </div>
    );
  }
});


module.exports = Saved;

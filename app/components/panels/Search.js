var React = require("react");

var Search = React.createClass({


  render: function() {
    return (

      <div className="panel panel-default">
        <div className="panel-heading">
          <h2 className="panel-title">Search</h2>
        </div>
        <div className="panel-body text-center">
            <input className="form-control form-control-lg" type="text" placeholder="Topic" />

            <input className="form-control form-control-lg" type="text" placeholder="Start Year" />

            <input className="form-control form-control-lg" type="text" placeholder="End Year" />

            <button type="button" className="btn btn-primary">Submit</button>

        </div>
      </div>
    );

}


});

module.exports = Search;

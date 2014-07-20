define([
    "react",
    "./msgMixin"
], function(React, msgMixin) {

  var ContactForm = React.createClass({

    mixins: [msgMixin],
    
    /*
      Since I'm using text inputs I can get away
      with a naive, but simple, means of getting
      key/value pairs (controlId/Value). But since
      I gave the input controls a "ref" prop, I 
      could also access them like this:
          txtInput = this.refs.firstName.getDOMNode();
      Regardless - it's likely still better to get
      what you need from the event object
    */
    handleChange: function(e) {
        var data = {};
        data[e.currentTarget.id] = e.currentTarget.value;
        this.publish("form.update", data);
    },

    render: function() {
        return <form className="form">
            <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input value={this.props.firstName}
                       className="form-control"
                       id="firstName"
                       type="text"
                       ref="firstName"
                       onChange={this.handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input value={this.props.lastName}
                       className="form-control"
                       id="lastName"
                       type="text"
                       ref="lastName"
                       onChange={this.handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="city">City:</label>
                <input value={this.props.city}
                       className="form-control"
                       id="city"
                       type="text"
                       ref="city"
                       onChange={this.handleChange} />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-default">Update</button>
            </div>
        </form>;
      }
  });

  return ContactForm;
});
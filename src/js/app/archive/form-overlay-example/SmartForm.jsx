define([
    "react",
    "jsx!./ContactForm",
    "jsx!./Overlay",
    "jsx!./OnChangeViewer",
    "./msgMixin"
], function(React, ContactForm, Overlay, OnChangeViewer, msgMixin) {

    var SmartForm = React.createClass({

        mixins: [msgMixin],
        
        getInitialState: function() {
            return {
                notReady: true
            };
        },

        componentWillMount: function() {
            this.subscribe("form.update", function(data){
                this.setState(data);
            });
            this.subscribe("data.response", function(data){
                this.replaceState(data);
            });
        },

        componentDidMount: function() {
            this.publish("data.request");
        },

        componentWillUnmount: function() {
            this.disposeSubscriptions();
        },
            
        render: function() {
            return <div className="form-container">
                { (this.state.notReady) ? this.transferPropsTo(<Overlay />) : null }
                <ContactForm
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    city={this.state.city}
                    channel={this.props.channel}/>
                <OnChangeViewer
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    city={this.state.city} />
            </div>;
        }
    });

    return SmartForm;
});
define([
    "react"
], function(React) {
	var OnChangeViewer = React.createClass({
		render: function() {
			return <div>
				{
					(this.props.firstName && this.props.lastName) ?
						<div><span className="label">Name:</span> 
							{this.props.firstName} {this.props.lastName}
						</div> :
						null
				}
				{this.props.city ?
					<div><span className="label">City:</span>
					{this.props.city}</div> : null }
            </div>;
		}
	});
	return OnChangeViewer;
});
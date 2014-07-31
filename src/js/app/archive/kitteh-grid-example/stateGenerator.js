define(function(){

	function generateRowState(props) {
		var minKitty = props.minKitty;
		var maxKitty = props.maxKitty;
		var width = props.width;
		var widths = [];
		var kitties = _.random(minKitty, maxKitty);
        var adjWidth = Math.floor(width * 0.8);
        var curWidth;
		var runningWidth = 0;
		while(kitties-1) {
			curWidth = _.random(10, adjWidth);
			curWidth = (curWidth < 0) ? 1 : curWidth;
			adjWidth -= curWidth;
			runningWidth += curWidth;
			widths.push(curWidth);
			kitties -= 1;
		}
        widths.push(width - runningWidth);
		return widths;
	}

	function generateWidths(props) {
		var rows = props.rows;
		var minKitty = props.minKitty;
		var maxKitty = props.maxKitty;
		var width = props.width;
		var rowWidths = [];
		var i = 0;
		for(; i < rows; i++) {
			rowWidths.push(generateRowState(props));
		} 
		return rowWidths;
	}

	// yay for mostly duplicating generateRowState :-/
	function generateHeights(props) {
		var minHeight = props.minHeight;
		var maxHeight = props.maxHeight;
		var height = props.height;
		var rowCount = props.rows;
		var heights = [];
        var adjHeight = Math.floor(height * 0.8);
        var curHeight;
		var runningHeight = 0;
		while(rowCount-1) {
			curHeight = _.random(50, adjHeight);
			adjHeight -= curHeight;
			runningHeight += curHeight;
			heights.push(curHeight);
			rowCount -= 1;
		}
        heights.push(height - runningHeight);
		return heights;
	}

	return {
		generateHeights: generateHeights,
		generateWidths: generateWidths,
		generateRowState: generateRowState
	};
});
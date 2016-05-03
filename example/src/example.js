var React = require('react');
var ReactDOM = require('react-dom');
var ImageEngine = require('react-imageengine');

var App = React.createClass({
	handleSubmit() {
    var height = (this.refs.height.getDOMNode().value);
    var width = (this.refs.width.getDOMNode().value);
    
	    this.setState({
	        height: height,
	        width: width,
	        
	    });
	},

	getInitialState(){
	     return {
	      height: 200,
	      width:200,
	      ImageSrc:"http://images.freeimages.com/images/previews/904/buddha-5-1417617.jpg"
	    };
  	},
	render () {
		var height = this.state.height;
		var width = this.state.width;
		var ImageUrl = this.state.ImageSrc;
		return (
			<div>
				<ImageEngine ImgSrc={ImageUrl} h={height} w={width}/>
			
			<br/>
			
			<br/>
			Height:<input  className="option" onChange={this.handleSubmit}  type="text" ref="height"  placeholder="Image Height"   maxLength="4" value={this.state.height}/>
			Width:<input  className="option"  onChange={this.handleSubmit}  type="text" ref="width"  placeholder="Image Width"     maxLength="4" value={this.state.width}/>
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));

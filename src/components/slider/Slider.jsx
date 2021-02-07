import React  from 'react';
import './slider.scss';
class Slider extends React.Component{
    constructor (props) {
        super(props);

        this.slideWidthEl = React.createRef();
        this.slider = React.createRef();

        this.state = {
            scrolled: 0
        }

        window.addEventListener('resize', () => {
           this.setState({scrolled: 0});
           this.slider.current.scrollLeft = 0;
        });
    }

    toLeft = () => {
        // Scroll restriction
        if (this.state.scrolled === 0) return;
        let slideWidth =  this.slideWidthEl.current.clientWidth + 15;
        this.setState(prev => ({scrolled: prev.scrolled + slideWidth}))
    }

    toRight = () => {
        let slideWidth =  this.slideWidthEl.current.clientWidth + 15;
        // Scroll restriction
        if (-(this.state.scrolled - slideWidth) + 100 > this.props.dataLength * slideWidth) return;
        this.setState(prev => ({scrolled: prev.scrolled - slideWidth}))
    }

    render() {
        return (
            <div className="slider-wrapper" ref={this.slider}>
                <div className="toLeft" onClick={this.toLeft}><span className="icon-circle-left"></span></div>
                <div className="slider" style={{left: this.state.scrolled+'px'}} ref={this.slideWidthEl}>  
                   {this.props.children}
                </div>
                <div className="toRight" onClick={this.toRight}><span className="icon-circle-right" ></span></div>
            </div>
        )
    }
}


export default Slider;
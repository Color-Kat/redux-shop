import React from 'react';
import {connect} from 'react-redux';
import Slider from '../slider/Slider';
import './product_of_day.scss';
class ProductOfDay extends React.Component{
    // constructor (props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="pr-of-day">
               <Slider dataLength={this.props.products_of_the_day.length}>
                    {this.props.products_of_the_day.map((product) => {
                        return (
                            <div className="slide" key={product.id} >
                                <img src={'/goods_images/'+product.img} alt=""/>
                            </div>
                        );
                    })}
               </Slider>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products_of_the_day: state.goods.goods.filter((a) => a.product_of_day)
    };
}

export default connect(mapStateToProps)(ProductOfDay);
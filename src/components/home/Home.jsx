import React from 'react';
import {connect} from 'react-redux';
import { loadGoods } from '../../redux/goods/goodsActions';
import ProductOfDay from '../product_of_day/ProductOfDay';
import './home.scss';
import TapeOfProducts from './tapeOfProducts/TapeOfProducts';

class Home extends React.Component{
    // constructor (props) {
    //     super(props);
    // }
    componentDidMount() {
        this.loadGoods();
        // setInterval(() => {
        //     this.loadGoods();
        // }, 10000);
    }

    loadGoods() {
        this.props.loadGoods();
    }

    render() {
        return (
            <>
                <div id="home">
                    <ProductOfDay />
                    <h1>Главная</h1>
                    <TapeOfProducts/>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        goods: state.goods.goods,
    };
}

const mapDispatchToProps = {
    loadGoods: loadGoods
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
import React from 'react';
import {connect} from 'react-redux';
import { loadGoodById } from '../../redux/goods/goodsActions';
import './productPage.scss';
class ProductPage extends React.Component{
    constructor (props) {
        super(props);

        console.log(this.props);
    }

    componentDidMount() {
        this.props.loadGoodById(this.props.match.params.id);
    }

    render() {
        return (
            <article className="pr-page">
                {this.props.product.name}
            </article>
        )
    }
}

const mapStateToProps = state => {
    return {
        product: state.goods.currentGood
    };
}

const mapDispatchToProps = {
    loadGoodById
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
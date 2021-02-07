import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import './tape_of_products.scss';
class TapaOfProducts extends React.Component{
    // constructor (props) {
    //     super(props);
    // }

    filterGoods() {
        return this.props.products;
    }

    render() {
        return (
            <article className="tape-of-pr">
                {this.filterGoods().map(product => 
                    <Link to={`products/${product.id}`} key={product.id}>
                        <section className="product">
                            <div className="product-head">
                                <img src={'/goods_images/'+product.img} alt=""/>
                            </div>

                            <div className="product-body">
                                <h3 className="product-title">{product.name}</h3>

                                <div className="product-footer">
                                    <span className="product-cost">{product.price}&#8381;</span>
                                </div>
                            </div>
                        </section>
                    </Link>
                )}
            </article>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.goods.goods
    };
}

export default connect(mapStateToProps)(TapaOfProducts);
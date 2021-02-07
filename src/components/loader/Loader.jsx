import React from 'react';
import {connect} from 'react-redux';
import './loader.scss';

function Loader(props){
    return (
        <div className={`loader ${props.isLoading ? 'active' : ''}`}>
            <div className={`lds-grid`}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        isLoading: state.app.loading,
    };
  }
  
export default connect(mapStateToProps)(Loader);
  
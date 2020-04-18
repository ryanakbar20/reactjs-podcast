import React from 'react'
import CardProduct from './CardProduct'
import Home from '../Home';
import Menu from './Menu';
import {connect} from 'react-redux';

class Product extends React.Component {
    // constructor () {
    //     super();
    //     this.state = {
    //         product: 0
    //     }
    // }

    stateHandle = (nilaiBaru) => {
        this.setState({
            product: nilaiBaru
        })
    }
    
    render(){
        return(
            <div>
                <div>
                    <Menu />
                    <h2>Product</h2>
                    <h3>{this.props.product}</h3>
                </div>
                <CardProduct onChangeProduct={(nilai) => this.stateHandle(nilai)} />
            </div>
        )
    }
}

const mapDispatchToProps = (state) => {
    return {
        product: state.totalOrder
    }
}

export default connect(mapDispatchToProps)(Product);
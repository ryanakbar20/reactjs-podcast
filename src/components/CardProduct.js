import React from 'react';
import {Card, Button, InputGroup} from 'react-bootstrap';
import {connect} from 'react-redux';
import ActionType from './redux/ActionType.js'


class CardProduct extends React.Component {
    // constructor () {
    //     super();
    //     this.state = {
    //         product: 0
    //     }
    // }
    
    handleMinus = () => {
        if (this.state.product > 0) {
            this.setState({
                product: this.state.product - 1
            }, () => this.handleState(this.state.product))
        }
    }

    handleState = (nilai) => {
        this.props.onChangeProduct(nilai);
    }

    handlePlus = () => {
        this.setState({
            product: this.state.product + 1
        }, () => this.handleState(this.state.product))
    }
    render(){
        console.log(this.props);
        return(
            <div>
                <Card>
                    <Card.Img src='./logo192.png' style={{height:'150px', width:'150px'}}/>
                    <Card.Title>Prodak pakanan</Card.Title>
                    <div style={{display: 'inline'}}>
                        <Button variant='success' style={{width: '50px'}} onClick={this.props.handleMinus}>-</Button>
                        <InputGroup style={{display: 'inline'}}>{this.props.product}</InputGroup>
                        <Button variant='success' style={{width: '50px'}} onClick={this.props.handlePlus}>+</Button>
                    </div>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        product: state.totalOrder
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handlePlus: () => dispatch({type: ActionType.PLUS_ORDER}),
        handleMinus: () => dispatch({type: ActionType.MINUS_ORDER})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CardProduct);
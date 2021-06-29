import React from "react";
import { Link } from "react-router-dom";
import * as actions from "../action/action";
import { connect } from "react-redux";

import {
    Row,
    Col,
    Form,
    Button,
    Card,
    Image,
    ListGroup,
    ListGroupItem,
    FormControl,
} from "react-bootstrap";

function Item1(props) {
    const editaddress = () => {

        props.editaddress(props.arr._id, props.arr);
    };

    const deladdress = (event) => {

        props.delete(props.arr._id);
    };

    const deliverToAddress = () => {

        props.OndeliverToAddress(props.arr._id, props.arr);
    }


    return (
        <Row>
            <Col md={8}>
                <ListGroup variant="flush">
                    <ListGroupItem>
                        <Row>
                            <Col md={1}>
                                <input
                                    type="radio"
                                    value={props.arr._id}
                                    checked={props.radio == props.arr._id}
                                    onChange={(e) => {
                                        props.setRadio(() => {
                                            console.log(e.target.value);
                                            return e.target.value;
                                        });
                                    }}
                                ></input></Col>


                            <Col>
                                <p className="name">{props.arr.name}</p>
                                <p>{props.arr.flat}</p>

                                {props.arr.landmark ? (
                                    <p>
                                        {props.arr.area}, {props.arr.landmark}
                                    </p>
                                ) : (
                                    <p>{props.arr.area}</p>
                                )}
                                {props.arr.city ? (
                                    <p>
                                        {props.arr.city} ,{props.arr.pincode}
                                    </p>
                                ) : (
                                    <p>{props.arr.pincode}</p>
                                )}

                                {props.arr.state ? <p>{props.arr.state}, India,{props.arr.mobile}</p> : <p>India,{props.arr.mobile}</p>}
                            </Col>
                        </Row>
                        {props.radio == props.arr._id ? (
                            <div className="button-div">
                                <Link to="/payment" >
                                    <button type="button" className="btn btn-primary deliver" onClick={deliverToAddress}>
                                        Deliver to this address
                                    </button>&nbsp;&nbsp;
                                </Link>
                                <button
                                    type="button"
                                    class="btn btn-danger delete"
                                    onClick={deladdress}
                                >
                                    Delete address
                                </button>&nbsp;&nbsp;

                                <button
                                    type="button"
                                    class="btn btn-warning edit"
                                    onClick={editaddress}
                                >
                                    Edit Address
                                </button>
                            </div>
                        ) : (
                            <header></header>
                        )}

                    </ListGroupItem>
                </ListGroup>
            </Col>
        </Row>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        OndeliverToAddress: (id, arr) => dispatch(actions.OndeliverToAddressAction(id, arr)),

    };
};

export default connect(null, mapDispatchToProps)(Item1);

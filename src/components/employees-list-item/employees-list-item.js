// import {Component} from 'react';

import "./employees-list-item.css";

const EmployeesListItem = (props) => {
    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         increase: false,
    //         star: false
    //     }
    // }
    // onIncrease = () => {
    //     this.setState(({increase}) => ({
    //         increase: !increase
    //     }))
    // }
    // onStar = () => {
    //     this.setState(({star}) => ({
    //         star: !star
    //     }))
    //
    // }
    // render() {
    const {name, profession, onDelete, onTogglePropItem, increase,  star} = props;

    let classNames = "list-group-item d-flex justify-content-between";
    if (increase){
        classNames += " increase";
    }
    if (star) {
        classNames += " like";
    }

    return (
        <div>
            <li className={classNames}>
                <span onClick={onTogglePropItem}
                      data-toggle="star"
                      className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={profession}/>
                <div className="d-flex justify-content-center align-items-center">
                    <button type={"button"}
                            className={"btn-cookie btn-sm"}
                            onClick={onTogglePropItem}
                            data-toggle="increase">
                        <i className="fas fa-cookie"></i>
                    </button>
                    <button type={"button"}
                            className={"btn-cookie btn-sm"}
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        </div>
    )
    // }

}

export default EmployeesListItem;
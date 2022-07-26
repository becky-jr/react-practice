import {Component} from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component{
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            profession: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        if (this.state.name.length < 3 || this.setState.profession < 3) return false;

        this.props.onAdd(this.state.name, this.state.profession);

        this.setState({
            name: '',
            profession: ''
        })
    }

    render(){
        const {name, profession} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                           className="form-control new-post-label"
                           placeholder="Как его зовут?"
                           name="name"
                           value={name}
                           onChange={this.onValueChange} />
                    <input type="text"
                           className="form-control new-post-label"
                           name="profession"
                           value={profession}
                           placeholder="Доктор или Фармацевт"
                           onChange={this.onValueChange} />

                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;
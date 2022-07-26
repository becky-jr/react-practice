import {Component} from 'react';

import './app-info.css';

class AppInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            doctor: "Доктора"
        }
    }





    render(){

        const {employees, increased, starItem} = this.props;
        const {doctor} = this.state;


        return (

                <div className="app-info">
                    <h1>Список докторов и фармацевтов: {employees}</h1>
                    <h2>{doctor}: {increased}</h2>
                    <h2>Фармацевты: {starItem}</h2>
                </div>
            )
        }
    }




export default AppInfo;
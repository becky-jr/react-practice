import {Component} from 'react';

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import './app.css';



class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                {name: "John C", profession: 800, increase: true, star: false, idNum: 1},
                {name: "Jack", profession: 3000, increase: false, star: false, idNum: 2},
                {name: "Alex", profession: 2000, increase: false, star: false, idNum: 3},
                {name: "Leo", profession: 1000, increase: false, star: false, idNum: 4},
                {name: "Bob", profession: 4000, increase: false, star: false, idNum: 5},
                {name: "Harry", profession: 6000, increase: false, star: false, idNum: 6},
                {name: "Tom", profession: 5000, increase: false, star: false, idNum: 7},

            ],
            term: '',
            doctorFilter: 'all',
        }
        this.maxId = this.state.data.length + 1;
    }


    deleteItem = (idNum2) => {
        // console.log(idNum2);
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.idNum === idNum2);
            console.log(index);
            // const before = data.slice(0,index);
            // const after = data.slice(index + 1);
            //
            // const newArr = [...before, ...after];

            return {
                data: data.filter(item => item.idNum !== idNum2)
            }


        })
    }

    addItem = (name, profession) => {
        const newItem = {
            name,
            profession,
            increase: false,
            star: false,
            idNum: this.maxId++,
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleProp = (idNum2, prop) => {
        console.log(`increase ${idNum2}`);
        // this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.idNum === idNum2)
            // const oldObj = data[index];
            // const newObj = {...oldObj, increase: !oldObj.increase};
            // const newArr = [...data.slice(0,index), newObj, ...data.slice(index + 1)]
            // console.log(oldObj)
            // console.log(newObj)
            // return {
            //     data: newArr
            // }
        // })
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.idNum === idNum2){
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }
    //
    // onToggleRise = (idNum2) => {
    //     console.log(`Rise this ${idNum2}`)
    //
    //     this.setState(({data}) => ({
    //         data: data.map(item => {
    //             if (item.idNum === idNum2){
    //                 return {...item, star: !item.star}
    //             }
    //             return item;
    //         })
    //     }))
    // }



    searchItem = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term: term});
    }

    filterDoctor = (items, doctorFilter) => {
        switch (doctorFilter) {
            case 'doctor':
                return items.filter(item => item.increase);
            case 'chemist':
                return items.filter(item => item.star);
            default:
                return items
        }
    }

    onFilterSelect = (doctorFilter) => {
        this.setState({doctorFilter});
    }

    render() {

        const {data, term, doctorFilter} = this.state;

        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const starItem = this.state.data.filter(item => item.star).length;
        const visibleData = this.filterDoctor(this.searchItem(data,term), doctorFilter);


        return (
            <div className="app">
                <AppInfo employees={employees}
                         increased={increased}
                         starItem={starItem}/>

                <div className="search-panel">
                    <SearchPanel
                        onUpdateSearchItem={this.onUpdateSearch}/>
                    <AppFilter filterItem={doctorFilter}
                               onFilterSelectItem={this.onFilterSelect}/>
                </div>

                <EmployeesList
                    data={visibleData}
                    onDeleteItem={this.deleteItem}
                    onTogglePropItem={this.onToggleProp}/>
                <EmployeesAddForm onAdd={this.addItem}/>

            </div>
        )
    }
}

export default App;
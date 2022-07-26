import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";

const EmployeesList = ({data, onDeleteItem, onTogglePropItem}) => {



    const elements = data.map(item => {
        const {idNum, ...itemProps} = item;
        console.log(idNum)


        return (
            <EmployeesListItem
                key={idNum}
                {...itemProps}
                onDelete={() => onDeleteItem(idNum)}
                onTogglePropItem={(e) => onTogglePropItem(idNum, e.currentTarget.getAttribute("data-toggle"))}/>
        )
    })
    // console.log(elements);

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;
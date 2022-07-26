import "./app-filter.css";

const AppFilter = (props) => {

    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'doctor', label: 'Доктора'},
        {name: 'chemist', label: 'Фармацевты'},
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filterItem === name;

        const clazz = active ? 'btn-light' : 'btn-outline-light';

        return (
            <button type="button"
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={() => props.onFilterSelectItem(name)}>
                {label}
            </button>
        )
    })

    return (
        <div className={"btn-group"}>
            {buttons}

            {/*<button*/}
            {/*    className="btn btn-light"*/}
            {/*    type={"button"}>*/}
            {/*        Все сотрудники*/}
            {/*</button>*/}
            {/*<button*/}
            {/*    className="btn btn-outline-light"*/}
            {/*    type={"button"}>*/}
            {/*        Доктора*/}
            {/*</button>*/}
            {/*<button*/}
            {/*    className="btn btn-outline-light"*/}
            {/*    type={"button"}>*/}
            {/*        Фармацевты*/}
            {/*</button>*/}
        </div>
    )
}

export default AppFilter;
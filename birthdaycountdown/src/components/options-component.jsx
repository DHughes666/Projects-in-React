
const months = [
    {id: 1, month: 'January'},
    {id: 2, month: 'February'},
    {id: 3, month: 'March'},
    {id: 4, month: 'April'},
    {id: 5, month: 'May'},
    {id: 6, month: 'June'},
    {id: 7, month: 'July'},
    {id: 8, month: 'August'},
    {id: 9, month: 'September'},
    {id: 10, month: 'October'},
    {id: 11, month: 'November'},
    {id: 12, month: 'December'}
]

const Select = ({month, onChange}) => {
    return (

        <select value={month}>
            {months.map(mon => {
                if (mon.id === 1) {
                    <option selected value={mon.id}>{mon.month}</option>
                }
                <option value={mon.id} key={mon.id}>{mon.month}</option>
            })}
        </select>
    )
}

export default Select;
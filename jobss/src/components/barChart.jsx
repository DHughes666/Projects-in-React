import {
    ResponsiveContainer, 
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from 'recharts'

const BarChartComp = ({data}) => {
    return (
        <ResponsiveContainer width='100%' height={300}>
            <BarChart data={data} margin={{top: 50}}>
                <CartesianGrid strokeDasharray='10 10'/>
                <XAxis dataKey='date' />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey='count' barSize={75} 
                    fill='#3b82f6'/>
            </BarChart>
        </ResponsiveContainer>
    )
};

export default BarChartComp;
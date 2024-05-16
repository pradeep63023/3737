import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }
  const {VaccinationCoverageDetails} = props

  return (
    <ResponsiveContainer width="100%" height={500}>
      <h1>Vaccination Coverage</h1>
      <BarChart
        data={VaccinationCoverageDetails}
        width={900}
        height={400}
        margin={{
          top: 5,
        }}
      >
        <XAxis
          dataKey="vaccineData"
          tick={{
            stroke: 'gray',
            strokeWidth: 1,
            fontSize: 15,
          }}
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: 'gray',
            strokeWidth: 0.5,
            fontSize: 15,
          }}
        />
        <Legend
          wrapperStyle={{
            padding: 30,
            textAlign: 'center',
          }}
        />
        <Bar dataKey="dose1" name="Dose 1" fill="#5a8dee" barSize="20%" />
        <Bar dataKey="dose2" name="Dose 2" fill="#f54394" barSize="20%" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default VaccinationCoverage

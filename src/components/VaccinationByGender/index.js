// Write your code here

import {PieChart, Pie, Legend, Cell} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {VaccinationByGenderDetails} = props

  return (
    <div>
      <h1>Vaccination by gender</h1>
      <PieChart width="100%" height={300}>
        <Pie
          cx="50%"
          cy="60%"
          data={VaccinationByGenderDetails}
          startAngle={180}
          endAngle={0}
          innerRadius="30%"
          outerRadius="60%"
          datakey="count"
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#f54394" />
          <Cell name="Others" fill="#2cc6c6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{fontSize: 12, fontFamily: 'Roboto'}}
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByGender

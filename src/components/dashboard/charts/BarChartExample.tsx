
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Пример данных для графика
const data = [
  { name: 'Пн', value: 34 },
  { name: 'Вт', value: 45 },
  { name: 'Ср', value: 31 },
  { name: 'Чт', value: 65 },
  { name: 'Пт', value: 52 },
  { name: 'Сб', value: 25 },
  { name: 'Вс', value: 15 },
];

const BarChartExample: React.FC = () => {
  return (
    <div className="h-24 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 5, right: 10, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 8 }} 
            dy={5}
          />
          <YAxis hide={true} />
          <Tooltip 
            contentStyle={{ 
              borderRadius: '6px', 
              fontSize: '11px', 
              padding: '6px'
            }} 
          />
          <Bar 
            dataKey="value" 
            fill="#10B981" 
            radius={[4, 4, 0, 0]} 
            barSize={12}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartExample;

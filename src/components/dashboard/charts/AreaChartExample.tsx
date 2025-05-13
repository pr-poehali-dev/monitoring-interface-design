
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Пример данных для графика
const data = [
  { name: '00:00', value: 5 },
  { name: '04:00', value: 7 },
  { name: '08:00', value: 10 },
  { name: '12:00', value: 14 },
  { name: '16:00', value: 11 },
  { name: '20:00', value: 8 },
  { name: '24:00', value: 6 },
];

const AreaChartExample: React.FC = () => {
  return (
    <div className="h-24 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
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
          <Area 
            type="monotone" 
            dataKey="value" 
            stroke="#3B82F6" 
            fill="#3B82F6" 
            fillOpacity={0.2} 
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChartExample;

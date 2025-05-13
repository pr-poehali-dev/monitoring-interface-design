
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Пример данных для графика
const data = [
  { name: '00:00', value: 12 },
  { name: '04:00', value: 19 },
  { name: '08:00', value: 15 },
  { name: '12:00', value: 32 },
  { name: '16:00', value: 27 },
  { name: '20:00', value: 45 },
  { name: '24:00', value: 30 },
];

const LineChartExample: React.FC = () => {
  return (
    <div className="h-24 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
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
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="hsl(var(--primary))" 
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartExample;

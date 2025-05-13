
import React from 'react';
import { Activity, Server, Cloud, Cpu, Database, Zap } from 'lucide-react';
import DashboardCard from './DashboardCard';
import LineChartExample from './charts/LineChartExample';
import BarChartExample from './charts/BarChartExample';
import AreaChartExample from './charts/AreaChartExample';

const DashboardGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-in py-4">
      <DashboardCard
        title="CPU Нагрузка"
        value="78%"
        change={{ value: 12, type: 'increase' }}
        icon={<Cpu className="h-4 w-4 text-monitor-purple" />}
        chart={<LineChartExample />}
        color="purple"
      />
      
      <DashboardCard
        title="Использование RAM"
        value="12.4 GB"
        change={{ value: 5, type: 'increase' }}
        icon={<Server className="h-4 w-4 text-monitor-info" />}
        chart={<AreaChartExample />}
        color="info"
      />
      
      <DashboardCard
        title="Дисковое пространство"
        value="64%"
        change={{ value: 2, type: 'decrease' }}
        icon={<Database className="h-4 w-4 text-monitor-success" />}
        chart={<BarChartExample />}
        color="success"
      />
      
      <DashboardCard
        title="Активные сессии"
        value="1,245"
        change={{ value: 18, type: 'increase' }}
        icon={<Activity className="h-4 w-4 text-monitor-warning" />}
        color="warning"
      />
      
      <DashboardCard
        title="Время отклика"
        value="235ms"
        change={{ value: 8, type: 'decrease' }}
        icon={<Zap className="h-4 w-4 text-monitor-alert" />}
        chart={<LineChartExample />}
        color="alert"
      />
      
      <DashboardCard
        title="Облачные сервисы"
        value="4/5"
        icon={<Cloud className="h-4 w-4" />}
      />
    </div>
  );
};

export default DashboardGrid;

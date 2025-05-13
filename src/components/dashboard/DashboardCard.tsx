
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { MoreHorizontal, ArrowUp, ArrowDown, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { useToast } from '@/hooks/use-toast';

interface DashboardCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    type: 'increase' | 'decrease';
  };
  icon?: React.ReactNode;
  chart?: React.ReactNode;
  color?: 'default' | 'purple' | 'success' | 'warning' | 'info' | 'alert';
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  change,
  icon,
  chart,
  color = 'default'
}) => {
  const { toast } = useToast();
  
  const colorClasses = {
    default: '',
    purple: 'border-monitor-purple/20',
    success: 'border-monitor-success/20',
    warning: 'border-monitor-warning/20',
    info: 'border-monitor-info/20',
    alert: 'border-monitor-alert/20'
  };
  
  const valueColorClasses = {
    default: 'text-foreground',
    purple: 'text-monitor-purple',
    success: 'text-monitor-success',
    warning: 'text-monitor-warning',
    info: 'text-monitor-info',
    alert: 'text-monitor-alert'
  };
  
  const handleCardAction = (action: string) => {
    toast({
      title: `Действие: ${action}`,
      description: `Вы выбрали действие "${action}" для карточки "${title}"`,
    });
  };
  
  const handleExpandCard = () => {
    toast({
      title: "Развернуть карточку",
      description: `Разворачивание карточки "${title}" на весь экран`,
    });
  };

  return (
    <Card className={`card-hover ${colorClasses[color]}`}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7"
            onClick={handleExpandCard}
          >
            <Maximize2 className="h-4 w-4" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-7 w-7">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleCardAction("Обновить")}>
                Обновить
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleCardAction("Настроить")}>
                Настроить
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleCardAction("Экспортировать")}>
                Экспортировать
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className={`text-2xl font-bold ${valueColorClasses[color]}`}>
              {value}
            </p>
            {change && (
              <p className={`flex items-center text-xs ${
                change.type === 'increase' ? 'text-monitor-success' : 'text-monitor-alert'
              }`}>
                {change.type === 'increase' ? (
                  <ArrowUp className="mr-1 h-3 w-3" />
                ) : (
                  <ArrowDown className="mr-1 h-3 w-3" />
                )}
                {Math.abs(change.value)}%
              </p>
            )}
          </div>
          {icon && (
            <div className="rounded-full p-2 bg-muted">{icon}</div>
          )}
        </div>
        
        {chart && (
          <div className="mt-3">
            {chart}
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-0 pb-2">
        <p className="text-xs text-muted-foreground">
          Обновлено: {new Date().toLocaleTimeString()}
        </p>
      </CardFooter>
    </Card>
  );
};

export default DashboardCard;

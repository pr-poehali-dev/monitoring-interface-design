
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import DashboardGrid from '@/components/dashboard/DashboardGrid';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell, PlusCircle, Settings } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Index: React.FC = () => {
  const { toast } = useToast();
  
  const handleAction = (action: string) => {
    toast({
      title: action,
      description: `Действие "${action}" успешно выполнено`,
    });
  };

  return (
    <MainLayout>
      <div className="flex flex-col gap-6 animate-fade-in">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-1">Панель мониторинга</h1>
            <p className="text-muted-foreground">
              Анализ производительности и состояния системы
            </p>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => handleAction("Настройка оповещений")}>
              <Bell className="h-4 w-4 mr-2" />
              Оповещения
            </Button>
            <Button variant="outline" onClick={() => handleAction("Настройка параметров")}>
              <Settings className="h-4 w-4 mr-2" />
              Параметры
            </Button>
            <Button onClick={() => handleAction("Добавление виджета")}>
              <PlusCircle className="h-4 w-4 mr-2" />
              Добавить виджет
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="overview" className="w-full">
          <TabsList>
            <TabsTrigger value="overview">Обзор</TabsTrigger>
            <TabsTrigger value="server">Сервер</TabsTrigger>
            <TabsTrigger value="database">База данных</TabsTrigger>
            <TabsTrigger value="applications">Приложения</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-4">
            <DashboardGrid />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">Активные оповещения</h3>
                  <div className="space-y-2">
                    <AlertItem 
                      level="high" 
                      message="Высокая нагрузка на ЦП (сервер app-02)" 
                      time="15 минут назад" 
                    />
                    <AlertItem 
                      level="medium" 
                      message="Замедление ответа базы данных" 
                      time="32 минуты назад" 
                    />
                    <AlertItem 
                      level="low" 
                      message="Обновление доступно для системы" 
                      time="2 часа назад" 
                    />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">Недавние события</h3>
                  <div className="space-y-2">
                    <EventItem 
                      type="restart" 
                      message="Перезапуск веб-сервера" 
                      time="10:45"
                      user="Система" 
                    />
                    <EventItem 
                      type="update" 
                      message="Обновление конфигурации" 
                      time="09:23"
                      user="admin@example.com" 
                    />
                    <EventItem 
                      type="backup" 
                      message="Резервное копирование завершено" 
                      time="03:15"
                      user="Система" 
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="server" className="mt-4">
            <div className="flex items-center justify-center p-12">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Мониторинг серверов</h3>
                <p className="text-muted-foreground mb-4">Подробная статистика серверов будет доступна здесь</p>
                <Button onClick={() => handleAction("Настройка серверов")}>
                  Настроить
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="database" className="mt-4">
            <div className="flex items-center justify-center p-12">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Мониторинг баз данных</h3>
                <p className="text-muted-foreground mb-4">Подробная статистика баз данных будет доступна здесь</p>
                <Button onClick={() => handleAction("Настройка баз данных")}>
                  Настроить
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="applications" className="mt-4">
            <div className="flex items-center justify-center p-12">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Мониторинг приложений</h3>
                <p className="text-muted-foreground mb-4">Подробная статистика приложений будет доступна здесь</p>
                <Button onClick={() => handleAction("Настройка приложений")}>
                  Настроить
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

// Вспомогательные компоненты для карточек
interface AlertItemProps {
  level: 'high' | 'medium' | 'low';
  message: string;
  time: string;
}

const AlertItem: React.FC<AlertItemProps> = ({ level, message, time }) => {
  const levels = {
    high: "bg-monitor-alert/10 text-monitor-alert border-monitor-alert/20",
    medium: "bg-monitor-warning/10 text-monitor-warning border-monitor-warning/20",
    low: "bg-monitor-info/10 text-monitor-info border-monitor-info/20",
  };

  return (
    <div className={`p-3 rounded-md border ${levels[level]}`}>
      <div className="flex justify-between items-start">
        <p className="font-medium">{message}</p>
        <span className="text-xs text-muted-foreground">{time}</span>
      </div>
    </div>
  );
};

interface EventItemProps {
  type: 'restart' | 'update' | 'backup';
  message: string;
  time: string;
  user: string;
}

const EventItem: React.FC<EventItemProps> = ({ type, message, time, user }) => {
  return (
    <div className="p-3 rounded-md border bg-muted/20">
      <div className="flex justify-between items-start">
        <p className="font-medium">{message}</p>
        <span className="text-xs text-muted-foreground">{time}</span>
      </div>
      <div className="text-xs text-muted-foreground mt-1">
        {user}
      </div>
    </div>
  );
};

export default Index;

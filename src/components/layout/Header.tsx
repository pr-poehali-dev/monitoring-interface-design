
import React from 'react';
import { Bell, Search, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Header: React.FC = () => {
  const { toast } = useToast();
  
  const handleNotificationClick = () => {
    toast({
      title: "Новые уведомления",
      description: "У вас 3 непрочитанных уведомления",
    });
  };
  
  const handleCreateDashboard = () => {
    toast({
      title: "Создание дашборда",
      description: "Функция создания дашборда пока в разработке",
    });
  };

  return (
    <header className="border-b p-4 bg-white dark:bg-card">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-1">
          <h1 className="text-2xl font-bold font-montserrat hidden md:block">Дашборды</h1>
        </div>
        
        <div className="flex items-center gap-2 md:gap-4 ml-auto">
          <div className="relative max-w-sm w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Поиск..." 
              className="pl-8 w-full bg-background"
            />
          </div>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="relative"
            onClick={handleNotificationClick}
          >
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-monitor-alert text-[10px] font-medium text-white">
              3
            </span>
          </Button>
          
          <Button onClick={handleCreateDashboard}>
            <Plus className="h-4 w-4 mr-2" />
            Создать дашборд
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

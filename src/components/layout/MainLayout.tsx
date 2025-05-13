
import React from 'react';
import { SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarFooter, SidebarInset } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Settings, Bell, FileBarChart, PieChart, Users, Moon, Sun, LogOut } from "lucide-react";
import Icon from "@/components/ui/icon";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/layout/Header";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { toast } = useToast();
  const [organization, setOrganization] = React.useState("acme-corp");
  const [theme, setTheme] = React.useState<"light" | "dark">("light");
  
  // Пример переключения темы
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
    
    toast({
      title: "Тема изменена",
      description: `Тема переключена на ${newTheme === "light" ? "светлую" : "тёмную"}`,
    });
  };
  
  // Пример уведомления при выходе
  const handleLogout = () => {
    toast({
      title: "Выход из системы",
      description: "Вы успешно вышли из системы",
    });
  };

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen bg-monitor-background">
        <Sidebar variant="sidebar">
          <SidebarHeader>
            <div className="flex items-center justify-start gap-2 py-2 px-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-monitor-purple">
                <PieChart className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-monitor-purple">MonitorPro</h1>
            </div>
            
            <Select value={organization} onValueChange={setOrganization}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите организацию" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="acme-corp">Acme Corporation</SelectItem>
                <SelectItem value="skynet">Skynet Technologies</SelectItem>
                <SelectItem value="umbrella">Umbrella Inc.</SelectItem>
              </SelectContent>
            </Select>
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Дашборды" isActive>
                  <Icon name="LayoutDashboard" />
                  <span>Дашборды</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Мониторинг">
                  <Icon name="Activity" />
                  <span>Мониторинг</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Отчеты">
                  <Icon name="FileBarChart" />
                  <span>Отчеты</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Настройки">
                  <Icon name="Settings" />
                  <span>Настройки</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Оповещения">
                  <Icon name="Bell" />
                  <span>Оповещения</span>
                  <div className="absolute right-1.5 top-1.5 flex h-5 min-w-5 items-center justify-center rounded-md bg-monitor-alert px-1 text-xs font-medium text-white">
                    3
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
            
            <Separator className="my-4" />
            
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Пользователи">
                  <Icon name="Users" />
                  <span>Пользователи</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          
          <SidebarFooter>
            <div className="flex justify-between px-4 py-2">
              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              
              <Button variant="ghost" size="icon" onClick={handleLogout}>
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex items-center gap-2 px-4 py-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" alt="Пользователь" />
                <AvatarFallback>АП</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm font-medium">Алексей Петров</span>
                <span className="text-xs text-muted-foreground">admin@example.com</span>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>
        
        <SidebarInset>
          <Header />
          <main className="container mx-auto p-4 md:p-6">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default MainLayout;

import { useState } from "react";
import { AuthForm } from "@/components/auth/AuthForm";
import { TaskDashboard } from "@/components/dashboard/TaskDashboard";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ email: string; name: string } | null>(null);
  const { toast } = useToast();

  const handleAuthSuccess = (userData: { email: string; name: string }) => {
    setUser(userData);
    setIsAuthenticated(true);
    toast({
      title: "Welcome!",
      description: `Successfully logged in as ${userData.name}`,
    });
  };

  const handleLogout = () => {
    setUser(null);
    setIsAuthenticated(false);
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {!isAuthenticated ? (
        <AuthForm onAuthSuccess={handleAuthSuccess} />
      ) : (
        <TaskDashboard user={user!} onLogout={handleLogout} />
      )}
    </div>
  );
};

export default Index;
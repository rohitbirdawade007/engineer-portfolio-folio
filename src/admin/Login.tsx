import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { API_URL, resetAdminPassword } from '@/services/api';
import { ShieldCheck, Lock, User, ArrowLeft, Loader2, KeyRound, Cpu, LifeBuoy } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Reset Password State
  const [resetUsername, setResetUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [masterToken, setMasterToken] = useState('');
  const [resetLoading, setResetLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem('adminToken', data.token);
        toast.success("Identity Verified. Directing to Command Center.");
        navigate('/admin/dashboard');
      } else {
        toast.error(data.msg || "Invalid credentials. Access denied.");
      }
    } catch (error) {
      toast.error("Network error. Firewall interference or server offline.");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setResetLoading(true);

    try {
      const data = await resetAdminPassword({
        username: resetUsername,
        newPassword,
        masterToken
      });

      if (data.success) {
        toast.success("Security override successful. Password updated.");
        setIsDialogOpen(false);
        setResetUsername('');
        setNewPassword('');
        setMasterToken('');
      } else {
        toast.error(data.msg || "Reset failed. Check your Master Token.");
      }
    } catch (error) {
      toast.error("Connection failed during override.");
    } finally {
      setResetLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative bg-background overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-10">
          <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6 group cursor-default">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-3xl blur opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-pulse" />
            <div className="relative w-full h-full bg-white border border-slate-100 rounded-3xl flex items-center justify-center shadow-xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
              <span className="text-4xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-primary to-secondary relative z-10 drop-shadow-sm">
                RB
              </span>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground tracking-tight mb-2">Admin Access</h1>
          <p className="text-muted-foreground font-medium">Verify your identity to continue.</p>
        </div>

        <Card className="shadow-lg border border-border">
          <CardContent className="p-8">
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-xs font-semibold text-muted-foreground">Username</Label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
                  <Input
                    id="username"
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="h-12 pl-12 bg-background border-border rounded-xl focus-visible:ring-primary focus-visible:ring-offset-0 transition-all font-medium text-foreground"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-xs font-semibold text-muted-foreground">Password</Label>
                  
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <button type="button" className="text-xs font-medium text-primary hover:underline">
                        Forgot Password?
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Security Override</DialogTitle>
                        <DialogDescription>
                          Provide your Admin Master Token from your .env file to reset access.
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleResetPassword} className="space-y-4 py-4">
                        <div className="space-y-2">
                          <Label htmlFor="reset-user">Admin Username</Label>
                          <Input 
                            id="reset-user" 
                            placeholder="username" 
                            value={resetUsername}
                            onChange={(e) => setResetUsername(e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="reset-token">Master Registration Token</Label>
                          <Input 
                            id="reset-token" 
                            type="password" 
                            placeholder="••••••••" 
                            value={masterToken}
                            onChange={(e) => setMasterToken(e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="new-pass">New Password</Label>
                          <Input 
                            id="new-pass" 
                            type="password" 
                            placeholder="New password" 
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                          />
                        </div>
                        <DialogFooter>
                          <Button type="submit" className="w-full" disabled={resetLoading}>
                            {resetLoading ? <Loader2 className="animate-spin mr-2" /> : <ShieldCheck className="mr-2" size={16} />}
                            Authorize Password Reset
                          </Button>
                        </DialogFooter>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={18} />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 pl-12 bg-background border-border rounded-xl focus-visible:ring-primary focus-visible:ring-offset-0 transition-all font-medium text-foreground"
                    required
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 bg-primary hover:bg-primary/90 text-white rounded-xl font-semibold shadow-md active:scale-[0.98] transition-all mt-4" 
                disabled={loading}
              >
                {loading ? <Loader2 className="animate-spin" /> : "Sign In"}
              </Button>
            </form>
          </CardContent>
          <div className="px-8 py-5 bg-muted/30 border-t border-border flex items-center justify-center">
             <Link to="/admin/register" className="text-xs font-medium text-muted-foreground hover:text-primary flex items-center gap-2 transition-colors">
               <KeyRound size={14} /> Create Admin Account
             </Link>
          </div>
        </Card>

        <div className="mt-8 text-center">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;


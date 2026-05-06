import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard, FolderKanban, Award, BookOpen, MessageSquare,
  LogOut, Code, Trophy, Briefcase, GraduationCap, BarChart, User,
  ChevronRight, PanelLeftClose, PanelLeft, Settings, Bell
} from "lucide-react";
import { cn } from "@/lib/utils";
import Dashboard from './Dashboard';
import ProjectManager from './ProjectManager';
import SkillManager from './SkillManager';
import ResearchManager from './ResearchManager';
import MessageViewer from './MessageViewer';
import AchievementManager from './AchievementManager';
import ExperienceManager from './ExperienceManager';
import CertificationManager from './CertificationManager';
import AnalyticsDashboard from './AnalyticsDashboard';
import BlogManager from './BlogManager';
import ProfileManager from './ProfileManager';
import EducationManager from './EducationManager';

const NAV_GROUPS = [
  {
    label: 'Core',
    items: [
      { to: '/admin/dashboard', icon: <LayoutDashboard size={18}/>, label: 'Overview' },
      { to: '/admin/analytics', icon: <BarChart size={18} />, label: 'Analytics' },
      { to: '/admin/profile', icon: <Settings size={18} />, label: 'Site Config' },
    ]
  },
  {
    label: 'Professional',
    items: [
      { to: '/admin/projects', icon: <FolderKanban size={18}/>, label: 'Projects' },
      { to: '/admin/experience', icon: <Briefcase size={18}/>, label: 'Work History' },
      { to: '/admin/skills', icon: <Code size={18}/>, label: 'Skill Set' },
      { to: '/admin/research', icon: <BookOpen size={18}/>, label: 'Research' },
    ]
  },
  {
    label: 'Academic & Growth',
    items: [
      { to: '/admin/education', icon: <GraduationCap size={18}/>, label: 'Education' },
      { to: '/admin/certifications', icon: <Award size={18}/>, label: 'Certifications' },
      { to: '/admin/achievements', icon: <Trophy size={18}/>, label: 'Recognition' },
      { to: '/admin/blogs', icon: <BookOpen size={18}/>, label: 'Articles' },
    ]
  },
  {
    label: 'Interactions',
    items: [
      { to: '/admin/messages', icon: <MessageSquare size={18}/>, label: 'Contact Leads' },
    ]
  }
];

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const token = localStorage.getItem('adminToken');

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  useEffect(() => {
    if (!token && !['/admin/login', '/admin/register'].includes(location.pathname)) {
      navigate('/admin/login', { replace: true });
    }
  }, [token, location.pathname, navigate]);

  if (!token) return null;

  return (
    <div className="flex h-screen bg-background transition-colors font-sans selection:bg-primary/20 selection:text-primary">
      {/* Sidebar */}
      <aside 
        className={cn(
          "flex flex-col transition-all duration-300 z-50 bg-card border-r border-border",
          sidebarOpen ? "w-72" : "w-20"
        )}
      >
        <div className="h-16 flex items-center justify-between px-6 border-b border-border">
          {sidebarOpen && (
            <span className="text-foreground font-bold text-lg uppercase">
              Control <span className="text-primary">Panel</span>
            </span>
          )}
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1.5 rounded-lg hover:bg-muted transition-colors text-muted-foreground"
          >
            {sidebarOpen ? <PanelLeftClose size={18} /> : <PanelLeft size={18} />}
          </button>
        </div>

        <nav className="flex-grow py-6 px-3 space-y-8 overflow-y-auto custom-scrollbar">
          {NAV_GROUPS.map((group, idx) => (
            <div key={idx} className="space-y-1">
              {sidebarOpen && (
                <p className="px-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 ml-1">
                  {group.label}
                </p>
              )}
              {group.items.map(item => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative",
                    location.pathname === item.to
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "hover:bg-muted text-muted-foreground hover:text-foreground"
                  )}
                >
                  <span className={cn(
                    "transition-transform group-hover:scale-110",
                    location.pathname === item.to ? "text-primary-foreground" : "text-muted-foreground group-hover:text-primary"
                  )}>
                    {item.icon}
                  </span>
                  {sidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
                  {!sidebarOpen && location.pathname === item.to && (
                    <div className="absolute left-0 w-1 h-6 bg-primary rounded-r-full" />
                  )}
                </Link>
              ))}
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-border">
          <Button
            onClick={handleLogout}
            variant="ghost"
            className={cn(
              "w-full justify-start text-destructive hover:text-destructive-foreground hover:bg-destructive rounded-xl transition-all",
              !sidebarOpen && "justify-center px-0"
            )}
          >
            <LogOut size={18} className={cn(sidebarOpen && "mr-3")} /> 
            {sidebarOpen && <span className="font-semibold text-sm">Logout</span>}
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow flex flex-col overflow-hidden relative bg-slate-50 dark:bg-slate-950">
        <header className="h-16 bg-background/80 backdrop-blur-xl border-b border-border flex items-center justify-between px-8 sticky top-0 z-20 overflow-visible transition-colors">
          <div className="flex items-center gap-4">
            <h1 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <span className="hidden md:inline">Management</span>
              <ChevronRight size={14} />
              <span className="text-foreground capitalize">
                {location.pathname.split('/').pop()?.replace('-', ' ')}
              </span>
            </h1>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center h-9 px-3 bg-emerald-100 border border-emerald-200 rounded-lg text-xs font-bold text-emerald-700 gap-2">
               <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
               ONLINE
            </div>
            <button className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-muted">
              <Bell size={18} />
            </button>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold shadow-md">
              RB
            </div>
          </div>
        </header>

        <div className="flex-grow overflow-y-auto p-4 md:p-8 scroll-smooth custom-scrollbar">
          <div className="max-w-7xl mx-auto animate-in fade-in duration-500 slide-in-from-bottom-4">
            <Routes>
              <Route path="dashboard"      element={<Dashboard />} />
              <Route path="profile"        element={<ProfileManager />} />
              <Route path="analytics"      element={<AnalyticsDashboard />} />
              <Route path="education"      element={<EducationManager />} />
              <Route path="projects"       element={<ProjectManager />} />
              <Route path="achievements"   element={<AchievementManager />} />
              <Route path="experience"     element={<ExperienceManager />} />
              <Route path="research"       element={<ResearchManager />} />
              <Route path="certifications" element={<CertificationManager />} />
              <Route path="skills"         element={<SkillManager />} />
              <Route path="blogs"          element={<BlogManager />} />
              <Route path="messages"       element={<MessageViewer />} />
            </Routes>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;

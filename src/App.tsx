import React, { lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";

const AdminLayout = lazy(() => import("./admin/AdminLayout"));
const Login = lazy(() => import("./admin/Login"));
const Register = lazy(() => import("./admin/Register"));
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PlantDiseasePage from "./pages/PlantDiseasePage";
import RetinopathyPage from "./pages/RetinopathyPage";
import SmartAgriculturePage from "./pages/SmartAgriculturePage";
import StudentAwardPage from "./pages/StudentAwardPage";
import ExcellenceAwardPage from "./pages/ExcellenceAwardPage";
import NLPCFirstPrizePage from "./pages/NLPCFirstPrizePage";
import NLPCSecondPrizePage from "./pages/NLPCSecondPrizePage";
import CarromFirstRankPage from "./pages/CarromFirstRankPage";
import NCRISTResearchPaperPage from "./pages/NCRISTResearchPaperPage";
import ProjectXpoThirdPrizePage from "./pages/ProjectXpoThirdPrizePage";
import AchievementDetailPage from "./pages/AchievementDetailPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import DietPredictionPage from "./pages/DietPredictionPage";
// import ThesisViewerPage from "./pages/ThesisViewerPage";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // Data remains "fresh" for 5 minutes
      gcTime: 1000 * 60 * 30,    // Cache remains in memory for 30 minutes
      retry: 1,                 // Retry once if failed
      refetchOnWindowFocus: false, // Don't refetch every time user tabs back
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects/plant-disease" element={<ProjectDetailPage />} />
          <Route path="/projects/retinopathy" element={<ProjectDetailPage />} />
          <Route path="/projects/smart-agriculture" element={<ProjectDetailPage />} />
          <Route path="/projects/diet-prediction" element={<DietPredictionPage />} />
          <Route path="/awards/student-of-computer-department" element={<AchievementDetailPage />} />
          <Route path="/awards/excellence-of-the-year" element={<AchievementDetailPage />} />
          <Route path="/achievements/student-of-computer-department" element={<AchievementDetailPage />} />
          <Route path="/achievements/excellence-of-the-year" element={<AchievementDetailPage />} />
          <Route path="/achievements/nlpc-first-prize" element={<AchievementDetailPage />} />
          <Route path="/achievements/nlpc-second-prize" element={<AchievementDetailPage />} />
          <Route path="/achievements/carrom-first-rank" element={<AchievementDetailPage />} />
          <Route path="/achievements/ncrist-research-paper" element={<AchievementDetailPage />} />
          <Route path="/achievements/project-xpo-third-prize" element={<AchievementDetailPage />} />
          
          {/* Dynamic Routes for items added via Admin */}
          <Route path="/achievements/:id" element={<AchievementDetailPage />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
          {/* <Route path="/thesis" element={<ThesisViewerPage />} /> */}
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <Login />
            </React.Suspense>
          } />
          <Route path="/admin/register" element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <Register />
            </React.Suspense>
          } />
          <Route path="/admin/*" element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <AdminLayout />
            </React.Suspense>
          } />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects/plant-disease" element={<PlantDiseasePage />} />
          <Route path="/projects/retinopathy" element={<RetinopathyPage />} />
          <Route path="/projects/smart-agriculture" element={<SmartAgriculturePage />} />
          <Route path="/awards/student-of-computer-department" element={<StudentAwardPage />} />
          <Route path="/awards/excellence-of-the-year" element={<ExcellenceAwardPage />} />
          <Route path="/achievements/nlpc-first-prize" element={<NLPCFirstPrizePage />} />
          <Route path="/achievements/nlpc-second-prize" element={<NLPCSecondPrizePage />} />
          <Route path="/achievements/carrom-first-rank" element={<CarromFirstRankPage />} />
          <Route path="/achievements/ncrist-research-paper" element={<NCRISTResearchPaperPage />} />
          <Route path="/achievements/project-xpo-third-prize" element={<ProjectXpoThirdPrizePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Form from "./pages/Form";
import Survey from "./pages/Survey";
import Survey2 from "./pages/Survey2";
import Survey3 from "./pages/Survey3";
import Survey4 from "./pages/Survey4";
import Survey5 from "./pages/Survey5";
import Survey6 from "./pages/Survey6";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/form" element={<Form />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/survey2" element={<Survey2 />} />
          <Route path="/survey3" element={<Survey3 />} />
          <Route path="/survey4" element={<Survey4 />} />
          <Route path="/survey5" element={<Survey5 />} />
          <Route path="/survey6" element={<Survey6 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

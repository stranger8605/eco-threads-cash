import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecycleProvider } from "./context/RecycleContext";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import ClothesPage from "./pages/ClothesPage";
import DistrictPage from "./pages/DistrictPage";
import ShopsPage from "./pages/ShopsPage";
import ContactPage from "./pages/ContactPage";
import QuantityPage from "./pages/QuantityPage";
import PricingPage from "./pages/PricingPage";
import ThankYouPage from "./pages/ThankYouPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <RecycleProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/clothes" element={<ClothesPage />} />
            <Route path="/district" element={<DistrictPage />} />
            <Route path="/shops" element={<ShopsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/quantity" element={<QuantityPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/thankyou" element={<ThankYouPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </RecycleProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

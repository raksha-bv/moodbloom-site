import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Gradient overlay background */}
      <div className="gradient-overlay" />
      
      {/* Main content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-light text-text-primary">404</h1>
          <p className="mb-4 text-xl text-text-secondary font-light">Oops! Page not found</p>
          <a href="/" className="text-button-primary underline hover:text-button-hover font-light">
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

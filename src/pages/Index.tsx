import React from "react";
import Header from "@/components/Header";
import LoginCard from "@/components/LoginCard";
import FooterNav from "@/components/FooterNav";

const Index: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <main
        className="flex-grow flex items-center justify-center p-4"
        style={{
          backgroundImage: "url('https://via.placeholder.com/1920x1080/A0A0A0/FFFFFF?text=Your+Background+Image')", // Placeholder image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center text-white z-0 relative">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 drop-shadow-lg">
            Humanising Financial Services
          </h1>
          <LoginCard />
        </div>
      </main>

      {/* Footer Navigation */}
      <FooterNav />
    </div>
  );
};

export default Index;
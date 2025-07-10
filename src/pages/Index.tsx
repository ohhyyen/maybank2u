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
        className="flex-grow grid grid-cols-1 md:grid-cols-2 items-center p-4" // Menggunakan grid untuk dua kolum
        style={{
          backgroundImage: "url('/imgi_29_homebg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Kolum kiri - kosong atau untuk kandungan lain (tersembunyi pada skrin kecil) */}
        <div className="hidden md:block"></div>

        {/* Kolum kanan - mengandungi tajuk dan LoginCard, berpusat di dalam kolum ini */}
        <div className="flex flex-col items-center justify-center text-white z-0 relative">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 drop-shadow-lg text-center">
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
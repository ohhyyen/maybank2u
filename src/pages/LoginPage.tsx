import React from "react";
import Header from "@/components/Header";
import LoginCard from "@/components/LoginCard";
import FooterNav from "@/components/FooterNav";

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <main
        className="flex-grow flex flex-col items-center justify-center p-4 text-white text-center" // Mengubah susun atur untuk memusatkan kandungan
        style={{
          backgroundImage: "url('/imgi_29_homebg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-8 drop-shadow-lg">
          Humanising Financial Services
        </h1>
        <LoginCard />
      </main>

      {/* Footer Navigation */}
      <FooterNav />
    </div>
  );
};

export default LoginPage;
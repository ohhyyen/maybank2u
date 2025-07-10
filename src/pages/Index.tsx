import React from "react";
import Header from "@/components/Header";
import FooterNav from "@/components/FooterNav";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <main
        className="flex-grow flex flex-col items-center justify-center p-4 text-white text-center"
        style={{
          backgroundImage: "url('/goldbar-promo.jpg')", // Menggunakan imej promosi
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-black bg-opacity-40 p-8 rounded-lg max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg text-maybank-gold">
            10g Gold Reward #ForYou
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-semibold">
            Menangi 10g Gold Bar! 300 Pemenang Setiap Bulan!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button className="bg-maybank-gold hover:bg-yellow-600 text-white font-semibold px-8 py-3 text-lg rounded-md">
                Log Masuk Sekarang
              </Button>
            </Link>
            <Button variant="outline" className="border-maybank-gold text-maybank-gold hover:bg-maybank-gold hover:text-white font-semibold px-8 py-3 text-lg rounded-md">
              Ketahui Lebih Lanjut
            </Button>
          </div>
        </div>
      </main>
      <FooterNav />
    </div>
  );
};

export default Index;
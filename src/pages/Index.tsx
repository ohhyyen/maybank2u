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
          backgroundImage: "url('https://picsum.photos/1920/1080?random=1')", // Menggunakan imej latar belakang generik yang lebih besar
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-black bg-opacity-40 p-8 rounded-lg w-full max-w-screen-lg mx-auto"> {/* Melaraskan lebar kontena */}
          {/* Imej goldbar-promo.jpg diletakkan di sini */}
          <img
            src="/goldbar-promo.jpg"
            alt="10g Gold Reward Promo"
            className="mx-auto mb-6 w-432 h-auto object-contain" // Saiz 3 kali ganda dari sebelumnya
          />
          {/* Imej baru diletakkan di sini */}
          <img
            src="/oh-my-gold-promo.jpg" // Laluan imej yang dikemas kini
            alt="Oh My Gold Promo"
            className="mx-auto mb-6 w-128 h-auto object-contain" // Saiz 2 kali ganda
          />
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg text-maybank-gold">
            10g Gold Reward #ForYou
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-semibold">
            Menangi Hadiah Istimewa "10g Gold Bar" Untuk 300 Pemenang Setiap Bulan! Mungkin Anda Pemenang Bulan ini , Log Masuk Dan Semak Di Bahagian Pemberitahuan , Mungkin 10g Gold Bar Adalah Milik Anda .
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button className="bg-maybank-gold hover:bg-yellow-600 text-white font-semibold px-8 py-3 text-lg rounded-md">
                Log Masuk Sekarang
              </Button>
            </Link>
            <Button className="bg-black/30 text-white hover:bg-black/40 font-semibold px-6 py-2 text-lg rounded-md">
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
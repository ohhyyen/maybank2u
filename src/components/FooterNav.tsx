import React from "react";
import { AlertTriangle, Heart, Building, Wallet, Shield, CreditCard, DollarSign, LineChart } from "lucide-react";

interface NavItemProps {
  icon: React.ElementType;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label }) => (
  <div className="flex flex-col items-center text-center text-gray-700 hover:text-maybank-gold cursor-pointer p-2">
    <Icon className="h-6 w-6 mb-1" />
    <span className="text-xs font-medium">{label}</span>
  </div>
);

const FooterNav: React.FC = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 shadow-lg py-4 px-4 md:px-6">
      <div className="container mx-auto grid grid-cols-4 md:grid-cols-8 gap-4">
        <NavItem icon={AlertTriangle} label="Scam Alert" />
        <NavItem icon={Heart} label="Repayment Assistance" />
        <NavItem icon={Building} label="Operating Branches" />
        <NavItem icon={Wallet} label="Open Account" />
        <NavItem icon={Shield} label="Insure Me" />
        <NavItem icon={CreditCard} label="Maybank Cards" />
        <NavItem icon={DollarSign} label="Get a loan/financing" />
        <NavItem icon={LineChart} label="Trade Online" />
      </div>
    </div>
  );
};

export default FooterNav;
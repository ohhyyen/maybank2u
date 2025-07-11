import React from "react";
import { AlertTriangle, Heart, Building, Wallet, Shield, CreditCard, DollarSign, LineChart, ChevronUp, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

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
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = React.useState(false); // State for collapsible

  // Set initial state based on mobile status
  React.useEffect(() => {
    if (!isMobile) {
      setIsOpen(true); // Always open on desktop
    } else {
      setIsOpen(false); // Start minimized on mobile
    }
  }, [isMobile]);

  const navItemsContent = (
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
  );

  return (
    <div className="w-full bg-white bg-opacity-80 shadow-lg py-4 px-4 md:px-6"> {/* Mengubah bg-opacity-90 kepada bg-opacity-80 */}
      {isMobile ? (
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="w-full"
        >
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-full flex justify-center items-center text-gray-700 hover:bg-gray-100">
              {isOpen ? (
                <>
                  <span>Show Less</span>
                  <ChevronUp className="h-4 w-4 ml-2" />
                </>
              ) : (
                <>
                  <span>Show More</span>
                  <ChevronDown className="h-4 w-4 ml-2" />
                </>
              )}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            {navItemsContent}
          </CollapsibleContent>
        </Collapsible>
      ) : (
        // Always show on desktop
        navItemsContent
      )}
    </div>
  );
};

export default FooterNav;
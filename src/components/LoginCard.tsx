import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { User, Lock, ChevronRight } from "lucide-react";

const LoginCard: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
      <div className="flex items-center gap-2 mb-4"> {/* New flex container for input and button */}
        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden flex-grow"> {/* Input part, now flex-grow */}
          <div className="h-10 px-3 bg-gray-50 border-r border-gray-300 flex items-center justify-center"> {/* Adjusted for consistent height */}
            <User className="h-5 w-5 text-gray-500" />
          </div>
          <Input
            type="text"
            placeholder="My Username"
            className="flex-grow border-none focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
        <Button className="bg-maybank-gold hover:bg-yellow-600 text-white font-semibold rounded-md flex items-center justify-center space-x-2"> {/* Removed w-full and py-2 for consistent height */}
          <Lock className="h-5 w-5" />
          <span>LOGIN</span>
        </Button>
      </div>
      <Button variant="ghost" className="w-full text-gray-700 hover:bg-gray-100 flex items-center justify-center space-x-2"> {/* Removed mt-4 as it's now handled by the mb-4 above */}
        <span>FORGOT LOGIN DETAILS</span>
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default LoginCard;
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { User, Lock, ChevronRight } from "lucide-react";

const LoginCard: React.FC = () => {
  return (
    <div className="w-full max-w-sm">
      <div className="flex items-center mb-4">
        {/* Username Input with integrated icon and white background */}
        <div className="flex items-center border border-gray-300 rounded-l-md overflow-hidden flex-grow h-10 bg-white"> {/* Added bg-white here */}
          <div className="px-3 flex items-center justify-center"> {/* Removed bg-gray-50 from here */}
            <User className="h-5 w-5 text-gray-500" />
          </div>
          <Input
            type="text"
            placeholder="My Username"
            className="flex-grow border-none focus-visible:ring-0 focus-visible:ring-offset-0 h-full"
          />
        </div>
        {/* Login Button */}
        <Button className="bg-maybank-gold hover:bg-yellow-600 text-white font-semibold rounded-r-md rounded-l-none flex items-center justify-center space-x-2 h-10 px-4">
          <Lock className="h-5 w-5" />
          <span>LOGIN</span>
        </Button>
      </div>
      <Button variant="ghost" className="w-full text-gray-700 hover:bg-gray-100 flex items-center justify-center space-x-2">
        <span>FORGOT LOGIN DETAILS</span>
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default LoginCard;
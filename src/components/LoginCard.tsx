import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { User, Lock, ChevronRight } from "lucide-react";

const LoginCard: React.FC = () => {
  return (
    <div className="w-full max-w-xs"> {/* Changed max-w-sm to max-w-xs to make the card narrower */}
      {/* Combined input and button container with thicker border */}
      <div className="flex items-center mb-4 border-2 border-gray-300 rounded-md overflow-hidden">
        {/* Icon and Input part */}
        <div className="flex items-center flex-grow h-10 bg-white pl-3">
          {/* Circle around the User icon */}
          <div className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center bg-gray-100">
            <User className="h-5 w-5 text-gray-500" />
          </div>
          <Input
            type="text"
            placeholder="My Username"
            className="flex-grow border-none focus-visible:ring-0 focus-visible:ring-offset-0 h-full px-2"
          />
        </div>
        {/* Login Button part */}
        <Button className="bg-maybank-gold hover:bg-yellow-600 text-white font-semibold flex items-center justify-center space-x-2 h-10 px-4 rounded-none">
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
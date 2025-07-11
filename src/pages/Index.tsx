import { MadeWithDyad } from "@/components/made-with-dyad";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Log masuk sekarang</CardTitle>
          <CardDescription className="text-center">
            Masukkan email dan kata sandi Anda untuk masuk.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Kata Sandi</Label>
            <Input id="password" type="password" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Masuk</Button>
        </CardFooter>
      </Card>

      {/* Placeholder untuk gambar promo Oh My Gold */}
      <div className="mt-8 w-full max-w-sm bg-yellow-200 dark:bg-yellow-800 p-6 rounded-lg shadow-md flex items-center justify-center text-center border border-yellow-300 dark:border-yellow-700">
        <p className="text-lg font-semibold text-yellow-800 dark:text-yellow-200">
          Gambar Promo Oh My Gold Akan Muncul Di Sini!
          <br />
          (Contoh: Banner Diskon, Penawaran Spesial)
        </p>
      </div>

      <MadeWithDyad />
    </div>
  );
};

export default Index;
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", { email, password });
  };

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <>
      {/* Back Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={handleBack}
        className="absolute top-4 left-4 flex items-center gap-1 text-sm text-foreground transition-all px-3 py-1.5 rounded-md bg-white/80 backdrop-blur-md shadow-sm hover:bg-gradient-to-r hover:from-racing-red hover:to-red-500 hover:text-white z-20"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </Button>

      <div className="min-h-screen bg-white flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full space-y-8 relative z-10">
          <Card className="relative overflow-hidden before:absolute before:top-0 before:right-0 before:w-32 before:h-32 before:bg-gradient-to-bl before:from-racing-red/20 before:to-transparent before:rounded-bl-full group-hover:before:animate-pulse bg-gradient-to-br from-white via-red-50 to-racing-red/10 shadow-2xl border border-red-100">
            <CardHeader className="text-center pb-2">
              <div className="w-20 h-20 bg-gradient-to-br from-racing-red to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-racing-red/25 hover:shadow-racing-red/40 transition-all duration-300 hover:scale-105">
                <span className="text-white font-bold text-3xl tracking-wider">F1</span>
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-racing-red to-red-600 bg-clip-text text-transparent">
                Welcome Back
              </h2>
              <p className="mt-3 text-slate-600 text-lg">
                Sign in to your racing account
              </p>
            </CardHeader>

            <CardContent className="px-8 pb-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-5">
                  <div className="group">
                    <Label htmlFor="email" className="text-slate-700 font-medium">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-2 h-12 border-red-200 focus:border-racing-red focus:ring-racing-red/20 transition-all duration-200 group-hover:border-red-300"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="group">
                    <Label htmlFor="password" className="text-slate-700 font-medium">
                      Password
                    </Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="mt-2 h-12 border-red-200 focus:border-racing-red focus:ring-racing-red/20 transition-all duration-200 group-hover:border-red-300"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <Link
                    to="/forgot-password"
                    className="text-racing-red hover:text-red-600 text-sm font-medium transition-colors duration-200"
                  >
                    Forgot your password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  variant="racing"
                  size="lg"
                  className="w-full h-12 bg-gradient-to-r from-racing-red to-red-600 hover:from-red-600 hover:to-racing-red shadow-lg shadow-racing-red/25 hover:shadow-racing-red/40 transition-all duration-300 transform hover:scale-[1.02] font-semibold text-lg"
                >
                  Sign In
                </Button>

                <div className="text-center pt-4 border-t border-red-100">
                  <span className="text-slate-600">Don't have an account? </span>
                  <Link
                    to="/signup"
                    className="text-racing-red hover:text-red-600 font-semibold group transition-colors duration-200"
                  >
                    Sign up
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};
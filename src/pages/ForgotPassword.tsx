import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [step, setStep] = useState<"email" | "otp" | "reset">("email");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Send OTP to email
    console.log("Sending OTP to:", email);
    setStep("otp");
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Verify OTP
    console.log("Verifying OTP:", otp);
    setStep("reset");
  };

  const handlePasswordReset = (e: React.FormEvent) => {
    e.preventDefault();
    // Reset password
    console.log("Resetting password for:", email);
    // Redirect to login or show success message
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-racing-red rounded-lg flex items-center justify-center mx-auto mb-6">
            <span className="text-racing-white font-bold text-2xl">F1</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground">Reset Password</h2>
          <p className="mt-2 text-muted-foreground">
            {step === "email" && "Enter your email to receive OTP"}
            {step === "otp" && "Enter the OTP sent to your email"}
            {step === "reset" && "Create your new password"}
          </p>
        </div>
        
        {step === "email" && (
          <form className="mt-8 space-y-6" onSubmit={handleEmailSubmit}>
            <div>
              <Label htmlFor="email" className="text-foreground">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1"
                placeholder="your@email.com"
              />
            </div>

            <Button type="submit" variant="racing" size="lg" className="w-full">
              Send OTP
            </Button>
          </form>
        )}

        {step === "otp" && (
          <form className="mt-8 space-y-6" onSubmit={handleOtpSubmit}>
            <div>
              <Label htmlFor="otp" className="text-foreground">Enter OTP</Label>
              <Input
                id="otp"
                name="otp"
                type="text"
                required
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="mt-1"
                placeholder="123456"
                maxLength={6}
              />
              <p className="text-sm text-muted-foreground mt-2">
                OTP sent to {email}
              </p>
            </div>

            <Button type="submit" variant="racing" size="lg" className="w-full">
              Verify OTP
            </Button>
          </form>
        )}

        {step === "reset" && (
          <form className="mt-8 space-y-6" onSubmit={handlePasswordReset}>
            <div>
              <Label htmlFor="newPassword" className="text-foreground">New Password</Label>
              <Input
                id="newPassword"
                name="newPassword"
                type="password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="mt-1"
                placeholder="••••••••"
              />
            </div>

            <Button type="submit" variant="racing" size="lg" className="w-full">
              Reset Password
            </Button>
          </form>
        )}
        
        <div className="text-center">
          <Link 
            to="/login" 
            className="text-racing-red hover:text-racing-red/80 text-sm"
          >
            Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};
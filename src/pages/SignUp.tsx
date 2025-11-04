import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";

export const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Signup attempt:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4">
      <Button
        variant="racing"
        size="sm"
        className="fixed top-4 left-4 z-20"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-racing-red rounded-lg flex items-center justify-center mx-auto mb-6">
            <span className="text-racing-white font-bold text-2xl">F1</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground">Join the Race</h2>
          <p className="mt-2 text-muted-foreground">Create your racing account</p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className="text-foreground">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1"
                  placeholder="First name"
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-foreground">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1"
                  placeholder="Last name"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="email" className="text-foreground">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <Label htmlFor="password" className="text-foreground">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="mt-1"
                placeholder="••••••••"
              />
            </div>
            
            <div>
              <Label htmlFor="confirmPassword" className="text-foreground">Confirm Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-1"
                placeholder="••••••••"
              />
            </div>
          </div>

          <Button type="submit" variant="racing" size="lg" className="w-full">
            Create Account
          </Button>
          
          <div className="text-center">
            <span className="text-muted-foreground">Already have an account? </span>
            <Link 
              to="/login" 
              className="text-racing-red hover:text-racing-red/80 font-medium"
            >
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
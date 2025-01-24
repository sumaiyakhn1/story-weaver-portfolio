import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Twitter } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import React from "react";

const ContactPage = () => {
  const { toast } = useToast();
  const [result, setResult] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "7018d372-5165-412d-a78f-541f2e0cfeb2");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        toast({
          title: "Success!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
        toast({
          title: "Error",
          description: data.message || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Fetch error: ", error);
      setResult("An error occurred. Please try again.");
      toast({
        title: "Error",
        description: "An error occurred. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-serif font-bold mb-8">Contact</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-serif">Get in Touch</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input name="name" placeholder="Your Name" required />
              </div>
              <div>
                <Input name="email" type="email" placeholder="Your Email" required />
              </div>
              <div>
                <Input name="subject" placeholder="Subject" required />
              </div>
              <div>
                <Textarea 
                  name="message"
                  placeholder="Your Message" 
                  className="min-h-[150px]" 
                  required 
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
            <span className="block mt-4 text-sm text-gray-500">{result}</span>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-serif">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <span>asifwork76@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <span>+91 9215000721</span>
            </div>
            <div className="flex items-center gap-3">
              <Linkedin className="h-5 w-5 text-primary" />
              <a 
                href="https://www.linkedin.com/in/mohammad-asif-khan-5b1a5420a/" 
                className="hover:text-primary"
              >
                LinkedIn Profile
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Twitter className="h-5 w-5 text-primary" />
              <a 
                href="https://x.com/Mohammad_Asif23" 
                className="hover:text-primary"
              >
                Twitter Profile
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactPage;

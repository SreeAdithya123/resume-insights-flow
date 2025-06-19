
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Download, Copy, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface GeneratedResumeProps {
  content: string;
  onBack: () => void;
}

const GeneratedResume = ({ content, onBack }: GeneratedResumeProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'improved-resume.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    toast({
      title: "Download Started",
      description: "Your improved resume has been downloaded!",
    });
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      toast({
        title: "Copied to Clipboard",
        description: "Resume content copied successfully!",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast({
        title: "Copy Failed",
        description: "Unable to copy to clipboard. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full mb-4">
            <CheckCircle className="w-4 h-4 mr-2" />
            <span className="font-medium">Resume Generated</span>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Your Improved Resume
          </h2>
          
          <p className="text-gray-600 mb-6">
            Here's your new professional resume incorporating all the feedback and suggestions
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              onClick={onBack}
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Feedback
            </Button>
            
            <Button
              onClick={handleCopy}
              variant="outline"
              className="border-blue-300 text-blue-700 hover:bg-blue-50"
            >
              {copied ? (
                <CheckCircle className="w-4 h-4 mr-2" />
              ) : (
                <Copy className="w-4 h-4 mr-2" />
              )}
              {copied ? "Copied!" : "Copy Text"}
            </Button>
            
            <Button
              onClick={handleDownload}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>

        <Card className="shadow-xl">
          <CardHeader className="bg-blue-50 border-b">
            <CardTitle className="text-xl text-blue-900">
              📄 Your Professional Resume
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono leading-relaxed">
                {content}
              </pre>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="font-semibold text-green-900 mb-2">🎉 Congratulations!</h3>
            <p className="text-green-800">
              Your resume has been improved with AI-powered suggestions. Review the content and make any final adjustments before using it for applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneratedResume;

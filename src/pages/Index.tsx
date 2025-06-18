
import { useState } from "react";
import FileUpload from "@/components/FileUpload";
import HowItWorks from "@/components/HowItWorks";
import FeedbackDisplay from "@/components/FeedbackDisplay";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Button } from "@/components/ui/button";
import { FileText, RefreshCw } from "lucide-react";

interface FeedbackData {
  summary: {
    issues: string[];
    suggestions: string[];
    replacements: string[];
  };
  experience: {
    issues: string[];
    suggestions: string[];
    replacements: string[];
  };
  education: {
    issues: string[];
    suggestions: string[];
    replacements: string[];
  };
  skills: {
    issues: string[];
    suggestions: string[];
    replacements: string[];
  };
}

const Index = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [feedbackData, setFeedbackData] = useState<FeedbackData | null>(null);

  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
    setFeedbackData(null);
  };

  const handleAnalyze = async () => {
    if (!uploadedFile) return;
    
    setIsScanning(true);
    
    // Simulate API call with mock data
    setTimeout(() => {
      const mockFeedback: FeedbackData = {
        summary: {
          issues: ["Summary is too generic", "Missing quantified achievements"],
          suggestions: ["Add specific metrics and results", "Include your unique value proposition"],
          replacements: ["Results-driven professional with 5+ years experience", "Increased team productivity by 30% through process optimization"]
        },
        experience: {
          issues: ["Lack of action verbs", "Missing impact statements"],
          suggestions: ["Start bullet points with strong action verbs", "Quantify your achievements with numbers"],
          replacements: ["Led", "Managed", "Implemented", "Achieved 25% cost reduction"]
        },
        education: {
          issues: [],
          suggestions: ["Consider adding relevant coursework", "Include GPA if above 3.5"],
          replacements: ["Relevant Coursework: Data Analysis, Project Management"]
        },
        skills: {
          issues: ["Too many soft skills listed"],
          suggestions: ["Focus on technical skills relevant to target role", "Group skills by category"],
          replacements: ["Technical Skills: Python, SQL, React", "Soft Skills: Leadership, Communication"]
        }
      };
      
      setFeedbackData(mockFeedback);
      setIsScanning(false);
    }, 3000);
  };

  const handleReScan = () => {
    setUploadedFile(null);
    setFeedbackData(null);
    setIsScanning(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-100 rounded-full">
              <FileText className="w-12 h-12 text-blue-600" />
            </div>
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Resume Scanner
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Get instant, smart feedback on your resume with AI-powered analysis 
            that helps you stand out to employers.
          </p>

          {/* File Upload and Analyze Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 max-w-2xl mx-auto">
            <FileUpload onFileUpload={handleFileUpload} />
            
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleAnalyze}
                disabled={!uploadedFile || isScanning}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                size="lg"
              >
                {isScanning ? "Analyzing..." : "Analyze Resume"}
              </Button>
              
              {(uploadedFile || feedbackData) && (
                <Button
                  onClick={handleReScan}
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold transition-all"
                  size="lg"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Re-scan
                </Button>
              )}
            </div>

            {uploadedFile && (
              <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 text-sm font-medium">
                  ✅ {uploadedFile.name} uploaded successfully
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Loading Spinner */}
      {isScanning && <LoadingSpinner />}

      {/* Feedback Display */}
      {feedbackData && !isScanning && (
        <FeedbackDisplay data={feedbackData} />
      )}

      {/* How It Works Section */}
      {!feedbackData && !isScanning && <HowItWorks />}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <p className="text-gray-400">
            © 2024 Resume Scanner. Powered by AI to help you succeed.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;


import { FileText } from "lucide-react";

const LoadingSpinner = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-2xl shadow-xl p-12">
          {/* Animated Icon */}
          <div className="mb-8">
            <div className="relative mx-auto w-20 h-20">
              <div className="absolute inset-0 border-4 border-blue-200 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
            </div>
          </div>

          {/* Loading Text */}
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Analyzing Your Resume
          </h3>
          
          <p className="text-gray-600 mb-8">
            Our AI is carefully reviewing your resume structure, content, and formatting...
          </p>

          {/* Progress Steps */}
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <span className="text-blue-800 font-medium">📝 Analyzing content structure</span>
              <div className="w-4 h-4 bg-blue-600 rounded-full animate-pulse"></div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-600">💼 Reviewing experience section</span>
              <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-600">🎯 Checking keywords and formatting</span>
              <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
            </div>
          </div>

          <div className="mt-8 text-sm text-gray-500">
            This usually takes 10-15 seconds...
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoadingSpinner;

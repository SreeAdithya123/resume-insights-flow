
import { Upload, FileText, Briefcase } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload Your Resume",
      description: "Simply drag and drop or click to upload your PDF or DOCX resume file.",
      color: "blue"
    },
    {
      icon: FileText,
      title: "AI Scans in Real-Time",
      description: "Our advanced AI analyzes your resume structure, content, and formatting instantly.",
      color: "green"
    },
    {
      icon: Briefcase,
      title: "Get Feedback & Suggestions",
      description: "Receive detailed insights and actionable recommendations to improve your resume.",
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-blue-100 text-blue-600";
      case "green":
        return "bg-green-100 text-green-600";
      case "purple":
        return "bg-purple-100 text-purple-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get professional resume feedback in just three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>

                {/* Card */}
                <div className="bg-gray-50 rounded-2xl p-8 h-full shadow-lg group-hover:shadow-xl transition-shadow">
                  <div className={`inline-flex p-4 rounded-full mb-6 ${getColorClasses(step.color)}`}>
                    <Icon className="w-8 h-8" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connecting Arrow (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-gray-300"></div>
                    <div className="w-0 h-0 border-l-4 border-l-gray-300 border-t-2 border-t-transparent border-b-2 border-b-transparent absolute right-0 top-1/2 transform -translate-y-1/2"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-blue-50 rounded-full">
            <span className="text-blue-800 font-medium">
              ⚡ Average scan time: 10-15 seconds
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

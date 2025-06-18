
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, AlertTriangle, CheckCircle, Lightbulb } from "lucide-react";

interface SectionData {
  issues: string[];
  suggestions: string[];
  replacements: string[];
}

interface FeedbackData {
  summary: SectionData;
  experience: SectionData;
  education: SectionData;
  skills: SectionData;
}

interface FeedbackDisplayProps {
  data: FeedbackData;
}

const FeedbackDisplay = ({ data }: FeedbackDisplayProps) => {
  const sections = [
    { key: 'summary', title: 'Summary', icon: '📝', data: data.summary },
    { key: 'experience', title: 'Experience', icon: '💼', data: data.experience },
    { key: 'education', title: 'Education', icon: '🎓', data: data.education },
    { key: 'skills', title: 'Skills', icon: '⚡', data: data.skills }
  ];

  const handleDownloadFeedback = () => {
    const feedbackText = sections.map(section => {
      const { title, data } = section;
      let sectionText = `\n${title.toUpperCase()}\n${'='.repeat(title.length)}\n`;
      
      if (data.issues.length > 0) {
        sectionText += '\nISSUES:\n';
        data.issues.forEach(issue => sectionText += `• ${issue}\n`);
      }
      
      if (data.suggestions.length > 0) {
        sectionText += '\nSUGGESTIONS:\n';
        data.suggestions.forEach(suggestion => sectionText += `• ${suggestion}\n`);
      }
      
      if (data.replacements.length > 0) {
        sectionText += '\nSUGGESTED PHRASES:\n';
        data.replacements.forEach(replacement => sectionText += `• ${replacement}\n`);
      }
      
      return sectionText;
    }).join('\n');

    const element = document.createElement('a');
    const file = new Blob([`RESUME FEEDBACK REPORT\n${'='.repeat(25)}\n${feedbackText}`], {
      type: 'text/plain'
    });
    element.href = URL.createObjectURL(file);
    element.download = 'resume-feedback.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full mb-4">
            <CheckCircle className="w-4 h-4 mr-2" />
            <span className="font-medium">Scan Complete</span>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Your Resume Feedback
          </h2>
          
          <p className="text-gray-600 mb-6">
            Here's what we found and how you can improve your resume
          </p>

          <Button
            onClick={handleDownloadFeedback}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Feedback
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {sections.map((section) => (
            <Card key={section.key} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-xl">
                  <span className="mr-3 text-2xl">{section.icon}</span>
                  {section.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Issues */}
                {section.data.issues.length > 0 && (
                  <div>
                    <div className="flex items-center mb-3">
                      <AlertTriangle className="w-4 h-4 text-red-500 mr-2" />
                      <h4 className="font-semibold text-red-700">Issues Found</h4>
                    </div>
                    <div className="space-y-2">
                      {section.data.issues.map((issue, index) => (
                        <div key={index} className="flex items-start">
                          <Badge variant="destructive" className="mr-2 mt-0.5 px-2 py-1 text-xs">
                            !
                          </Badge>
                          <p className="text-sm text-gray-700">{issue}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Suggestions */}
                {section.data.suggestions.length > 0 && (
                  <div>
                    <div className="flex items-center mb-3">
                      <Lightbulb className="w-4 h-4 text-yellow-500 mr-2" />
                      <h4 className="font-semibold text-yellow-700">Suggestions</h4>
                    </div>
                    <div className="space-y-2">
                      {section.data.suggestions.map((suggestion, index) => (
                        <div key={index} className="flex items-start">
                          <Badge className="mr-2 mt-0.5 px-2 py-1 text-xs bg-yellow-100 text-yellow-800">
                            💡
                          </Badge>
                          <p className="text-sm text-gray-700">{suggestion}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Replacements */}
                {section.data.replacements.length > 0 && (
                  <div>
                    <div className="flex items-center mb-3">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <h4 className="font-semibold text-green-700">Suggested Phrases</h4>
                    </div>
                    <div className="space-y-2">
                      {section.data.replacements.map((replacement, index) => (
                        <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-3">
                          <p className="text-sm text-green-800 font-medium">"{replacement}"</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* No feedback case */}
                {section.data.issues.length === 0 && 
                 section.data.suggestions.length === 0 && 
                 section.data.replacements.length === 0 && (
                  <div className="text-center py-4">
                    <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <p className="text-green-700 font-medium">This section looks great!</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="font-semibold text-blue-900 mb-2">💡 Pro Tip</h3>
            <p className="text-blue-800">
              Focus on addressing the issues first, then implement the suggestions to make your resume stand out to employers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackDisplay;

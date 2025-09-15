import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, FileText, TrendingUp, Target, Lightbulb, CheckCircle, AlertCircle, Star, Award, Zap } from 'lucide-react';

interface AnalysisResult {
  score: number;
  analysis: string;
  suggestions: string[];
  professionalSuggestions: {
    structure: string[];
    formatting: string[];
    content: string[];
    language: string[];
    sections: string[];
  };
  keywordAnalysis: {
    foundKeywords: string[];
    missingKeywords: string[];
    keywordDensity: number;
    sectionMapping: { [key: string]: string[] };
    industryComparison: string;
  };
  aiImprovements: {
    specificChanges: { location: string; current: string; improved: string; reason: string }[];
    wordChoices: { weak: string; strong: string; context: string }[];
    sentenceRestructuring: { original: string; improved: string; section: string }[];
    quantifiableAchievements: string[];
  };
}

const Results = () => {
  const [results, setResults] = useState<AnalysisResult | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const [activeSection, setActiveSection] = useState<'overview' | 'professional' | 'keywords' | 'ai'>('overview');
  const navigate = useNavigate();

  useEffect(() => {
    const storedResults = sessionStorage.getItem('analysisResults');
    const storedFileName = sessionStorage.getItem('uploadedFileName');
    
    if (storedResults) {
      // Enhanced mock data with comprehensive analysis
      const enhancedResults: AnalysisResult = {
        score: Math.floor(Math.random() * 40) + 60,
        analysis: "Your resume demonstrates strong professional experience with well-structured content. The document shows clear career progression and relevant skills for your target role. Key strengths include comprehensive work history and educational background. Areas for improvement include keyword optimization, quantifiable achievements, and enhanced action-oriented language throughout all sections.",
        suggestions: [
          "Optimize keyword density for better ATS compatibility",
          "Add quantifiable metrics to demonstrate impact",
          "Strengthen action verbs in experience descriptions",
          "Enhance professional summary with value proposition",
          "Improve formatting consistency across all sections"
        ],
        professionalSuggestions: {
          structure: [
            "Move the Professional Summary to the top for immediate impact",
            "Reorganize sections in order of relevance: Summary, Experience, Skills, Education",
            "Create clear visual hierarchy with consistent spacing between sections",
            "Ensure chronological order in work experience (most recent first)"
          ],
          formatting: [
            "Use consistent bullet point styles throughout the document",
            "Maintain uniform font sizes: 11-12pt for body text, 14-16pt for headers",
            "Apply consistent date formatting (MM/YYYY or Month YYYY)",
            "Ensure adequate white space between sections for readability",
            "Use bold formatting strategically for job titles and company names"
          ],
          content: [
            "Expand work experience descriptions with specific accomplishments",
            "Include relevant certifications and professional development",
            "Add a skills section with both technical and soft skills",
            "Incorporate industry-specific terminology and buzzwords",
            "Remove outdated or irrelevant information older than 10-15 years"
          ],
          language: [
            "Replace passive voice with active, action-oriented language",
            "Use strong action verbs: 'Led', 'Implemented', 'Achieved', 'Optimized'",
            "Eliminate first-person pronouns (I, me, my) throughout",
            "Ensure consistent verb tense (past tense for previous roles)",
            "Use professional terminology appropriate for your industry"
          ],
          sections: [
            "Add a compelling Professional Summary (3-4 lines)",
            "Include a dedicated Technical Skills section if applicable",
            "Consider adding a Projects or Achievements section",
            "Ensure contact information is complete and professional",
            "Add LinkedIn profile URL and relevant social media links"
          ]
        },
        keywordAnalysis: {
          foundKeywords: [
            "Project Management", "Leadership", "Strategic Planning", "Team Building", 
            "Data Analysis", "Process Improvement", "Customer Service", "Communication",
            "Problem Solving", "Microsoft Office", "Budget Management", "Training"
          ],
          missingKeywords: [
            "Agile Methodology", "Stakeholder Management", "KPI Tracking", "Cross-functional",
            "Digital Transformation", "Change Management", "Performance Metrics", "Compliance",
            "Risk Assessment", "Vendor Management", "Quality Assurance", "Continuous Improvement"
          ],
          keywordDensity: 2.3,
          sectionMapping: {
            "Professional Summary": ["Leadership", "Strategic Planning"],
            "Work Experience": ["Project Management", "Team Building", "Data Analysis", "Process Improvement"],
            "Skills": ["Microsoft Office", "Communication", "Problem Solving"],
            "Education": ["Training", "Customer Service"]
          },
          industryComparison: "Your keyword usage is 15% below industry average. Top-performing resumes in your field typically include 18-25 relevant keywords with 3-4% density."
        },
        aiImprovements: {
          specificChanges: [
            {
              location: "Professional Summary, Line 1",
              current: "Experienced professional with background in management",
              improved: "Results-driven senior manager with 8+ years of proven success in leading cross-functional teams and driving operational excellence",
              reason: "More specific, quantified, and impact-focused"
            },
            {
              location: "Work Experience, Current Role, Bullet 2",
              current: "Managed team projects and deadlines",
              improved: "Led 12-member cross-functional team to deliver 15+ strategic projects on time and 20% under budget",
              reason: "Adds specific numbers and quantifiable results"
            },
            {
              location: "Work Experience, Previous Role, Bullet 1",
              current: "Responsible for customer service improvements",
              improved: "Implemented customer service optimization strategies that increased satisfaction scores by 35% and reduced response time by 50%",
              reason: "Transforms responsibility into achievement with metrics"
            }
          ],
          wordChoices: [
            { weak: "Responsible for", strong: "Led | Managed | Directed", context: "Use action verbs instead of passive language" },
            { weak: "Helped with", strong: "Collaborated | Facilitated | Supported", context: "Shows active participation and contribution" },
            { weak: "Worked on", strong: "Developed | Executed | Implemented", context: "Demonstrates ownership and initiative" },
            { weak: "Good at", strong: "Proficient in | Expert in | Specialized in", context: "More professional and specific skill description" }
          ],
          sentenceRestructuring: [
            {
              original: "I was involved in various projects that helped the company grow",
              improved: "Contributed to 25% company revenue growth through strategic project leadership and cross-departmental collaboration",
              section: "Work Experience"
            },
            {
              original: "My role included managing budgets and working with vendors",
              improved: "Managed $2.5M annual budget while negotiating vendor contracts that reduced costs by 18%",
              section: "Work Experience"
            }
          ],
          quantifiableAchievements: [
            "Add specific percentages to all improvement claims (e.g., 'increased efficiency by X%')",
            "Include dollar amounts for budget management, cost savings, or revenue impact",
            "Specify team sizes when mentioning leadership roles",
            "Add timeframes for project completion and goal achievement",
            "Include customer satisfaction scores, performance ratings, or quality metrics"
          ]
        }
      };
      
      setResults(enhancedResults);
    }
    
    if (storedFileName) {
      setFileName(storedFileName);
    }
    
    if (!storedResults) {
      navigate('/upload');
    }
  }, [navigate]);

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBarColor = (score: number) => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  if (!results) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading analysis results...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8 lg:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-6 sm:mb-8">
            <button
              onClick={() => navigate('/upload')}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-4 transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="text-sm sm:text-base">Back to Upload</span>
            </button>
            
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    Resume Analysis Results
                  </h1>
                  <p className="text-gray-600 flex items-center space-x-2">
                    <FileText className="h-5 w-5" />
                    <span className="text-sm sm:text-base break-all">{fileName}</span>
                  </p>
                </div>
                
                {/* Score Display */}
                <div className="mt-4 sm:mt-0 text-center">
                  <div className={`text-3xl sm:text-4xl font-bold ${getScoreColor(results.score)} mb-2`}>
                    {results.score}/100
                  </div>
                  <div className="w-24 sm:w-32 bg-gray-200 rounded-full h-3 mx-auto">
                    <div
                      className={`h-3 rounded-full transition-all duration-1000 ${getScoreBarColor(results.score)}`}
                      style={{ width: `${results.score}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="bg-white rounded-xl shadow-lg mb-6 sm:mb-8">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-0 overflow-x-auto">
                {[
                  { id: 'overview', label: 'Overview', icon: TrendingUp },
                  { id: 'professional', label: 'Professional Suggestions', icon: Star },
                  { id: 'keywords', label: 'Keyword Analysis', icon: Target },
                  { id: 'ai', label: 'AI Improvements', icon: Zap }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveSection(tab.id as any)}
                    className={`flex items-center space-x-2 px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-medium border-b-2 transition-colors duration-200 whitespace-nowrap ${
                      activeSection === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <tab.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6 sm:space-y-8">
            {/* Overview Section */}
            {activeSection === 'overview' && (
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center space-x-2">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                    <span>Overall Analysis</span>
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    {results.analysis}
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center space-x-2">
                    <Lightbulb className="h-6 w-6 text-yellow-600" />
                    <span>Quick Improvements</span>
                  </h2>
                  <ul className="space-y-3 sm:space-y-4">
                    {results.suggestions.map((suggestion, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm sm:text-base">{suggestion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Professional Suggestions Section */}
            {activeSection === 'professional' && (
              <div className="space-y-6 sm:space-y-8">
                <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center space-x-2">
                    <Star className="h-6 w-6 text-blue-600" />
                    <span>Professional Resume Suggestions</span>
                  </h2>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {Object.entries(results.professionalSuggestions).map(([category, suggestions]) => (
                      <div key={category} className="bg-gray-50 rounded-lg p-4 sm:p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 sm:mb-4 capitalize">
                          {category === 'sections' ? 'Section Completeness' : category}
                        </h3>
                        <ul className="space-y-2 sm:space-y-3">
                          {suggestions.map((suggestion, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                              <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                {suggestion}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Keyword Analysis Section */}
            {activeSection === 'keywords' && (
              <div className="space-y-6 sm:space-y-8">
                <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center space-x-2">
                    <Target className="h-6 w-6 text-green-600" />
                    <span>Detailed Keyword Analysis</span>
                  </h2>
                  
                  <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
                    <div className="bg-green-50 rounded-lg p-4 sm:p-6">
                      <h3 className="text-lg font-semibold text-green-800 mb-3 sm:mb-4 flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5" />
                        <span>Found Keywords ({results.keywordAnalysis.foundKeywords.length})</span>
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {results.keywordAnalysis.foundKeywords.map((keyword, index) => (
                          <span
                            key={index}
                            className="bg-green-100 text-green-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                          >
                            <strong>{keyword}</strong>
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-red-50 rounded-lg p-4 sm:p-6">
                      <h3 className="text-lg font-semibold text-red-800 mb-3 sm:mb-4 flex items-center space-x-2">
                        <AlertCircle className="h-5 w-5" />
                        <span>Missing Keywords ({results.keywordAnalysis.missingKeywords.length})</span>
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {results.keywordAnalysis.missingKeywords.map((keyword, index) => (
                          <span
                            key={index}
                            className="bg-red-100 text-red-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                          >
                            <strong>{keyword}</strong>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                    <div className="bg-blue-50 rounded-lg p-4 sm:p-6">
                      <h3 className="text-lg font-semibold text-blue-800 mb-3 sm:mb-4">
                        Keyword Density: {results.keywordAnalysis.keywordDensity}%
                      </h3>
                      <p className="text-blue-700 text-sm sm:text-base leading-relaxed">
                        {results.keywordAnalysis.industryComparison}
                      </p>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-4 sm:p-6">
                      <h3 className="text-lg font-semibold text-purple-800 mb-3 sm:mb-4">
                        Section Mapping
                      </h3>
                      <div className="space-y-2 sm:space-y-3">
                        {Object.entries(results.keywordAnalysis.sectionMapping).map(([section, keywords]) => (
                          <div key={section}>
                            <h4 className="font-medium text-purple-700 text-sm sm:text-base">{section}:</h4>
                            <p className="text-purple-600 text-xs sm:text-sm ml-2">
                              <strong>{keywords.join(', ')}</strong>
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* AI Improvements Section */}
            {activeSection === 'ai' && (
              <div className="space-y-6 sm:space-y-8">
                <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center space-x-2">
                    <Zap className="h-6 w-6 text-purple-600" />
                    <span>AI-Powered Improvement Suggestions</span>
                  </h2>
                  
                  {/* Specific Changes */}
                  <div className="mb-6 sm:mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                      Specific Location-Based Changes
                    </h3>
                    <div className="space-y-4 sm:space-y-6">
                      {results.aiImprovements.specificChanges.map((change, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-4 sm:p-6">
                          <div className="mb-3">
                            <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                              {change.location}
                            </span>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-medium text-red-700 mb-2 text-sm sm:text-base">Current:</h4>
                              <p className="text-gray-700 text-sm sm:text-base italic bg-red-50 p-3 rounded">
                                "{change.current}"
                              </p>
                            </div>
                            <div>
                              <h4 className="font-medium text-green-700 mb-2 text-sm sm:text-base">Improved:</h4>
                              <p className="text-gray-700 text-sm sm:text-base bg-green-50 p-3 rounded">
                                "{change.improved}"
                              </p>
                            </div>
                          </div>
                          <div className="mt-3 p-3 bg-blue-50 rounded">
                            <p className="text-blue-700 text-xs sm:text-sm">
                              <strong>Why:</strong> {change.reason}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Word Choices */}
                  <div className="mb-6 sm:mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                      Enhanced Word Choices
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                      {results.aiImprovements.wordChoices.map((choice, index) => (
                        <div key={index} className="bg-yellow-50 rounded-lg p-4">
                          <div className="mb-2">
                            <span className="text-red-600 line-through text-sm sm:text-base">
                              <strong>{choice.weak}</strong>
                            </span>
                            <span className="mx-2">→</span>
                            <span className="text-green-600 text-sm sm:text-base">
                              <strong>{choice.strong}</strong>
                            </span>
                          </div>
                          <p className="text-yellow-700 text-xs sm:text-sm">
                            {choice.context}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sentence Restructuring */}
                  <div className="mb-6 sm:mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                      Sentence Restructuring Examples
                    </h3>
                    <div className="space-y-4 sm:space-y-6">
                      {results.aiImprovements.sentenceRestructuring.map((restructure, index) => (
                        <div key={index} className="bg-indigo-50 rounded-lg p-4 sm:p-6">
                          <div className="mb-2">
                            <span className="bg-indigo-100 text-indigo-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                              {restructure.section}
                            </span>
                          </div>
                          <div className="space-y-3">
                            <div>
                              <h4 className="font-medium text-red-700 mb-1 text-sm sm:text-base">Original:</h4>
                              <p className="text-gray-700 text-sm sm:text-base italic">
                                "{restructure.original}"
                              </p>
                            </div>
                            <div>
                              <h4 className="font-medium text-green-700 mb-1 text-sm sm:text-base">Improved:</h4>
                              <p className="text-gray-700 text-sm sm:text-base font-medium">
                                "{restructure.improved}"
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quantifiable Achievements */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                      Focus on Quantifiable Achievements
                    </h3>
                    <div className="bg-orange-50 rounded-lg p-4 sm:p-6">
                      <ul className="space-y-2 sm:space-y-3">
                        {results.aiImprovements.quantifiableAchievements.map((achievement, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <Award className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                            <span className="text-orange-800 text-sm sm:text-base">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="mt-8 sm:mt-12 text-center space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button
              onClick={() => navigate('/upload')}
              className="w-full sm:w-auto bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg touch-manipulation"
            >
              Analyze Another Resume
            </button>
            <button
              onClick={() => window.print()}
              className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-blue-50 transition-all duration-300 touch-manipulation"
            >
              Print Analysis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
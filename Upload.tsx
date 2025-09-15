import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload as UploadIcon, FileText, Loader2, AlertCircle } from 'lucide-react';

interface FormData {
  file: File | null;
  jobDescription: string;
  analysisMode: 'Quick' | 'Detailed' | 'Optimize';
}

const Upload = () => {
  const [formData, setFormData] = useState<FormData>({
    file: null,
    jobDescription: '',
    analysisMode: 'Quick'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [dragActive, setDragActive] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (file: File | null) => {
    setError('');
    if (file) {
      if (file.type !== 'application/pdf') {
        setError('Please upload a PDF file only.');
        return;
      }
      if (file.size > 10 * 1024 * 1024) { // 10MB limit
        setError('File size must be less than 10MB.');
        return;
      }
    }
    setFormData(prev => ({ ...prev, file }));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const simulateAnalysis = async (data: FormData): Promise<any> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock analysis results
    return {
      score: Math.floor(Math.random() * 40) + 60, // Score between 60-100
      analysis: `Your resume shows strong potential with ${data.analysisMode.toLowerCase()} analysis completed. The document structure is well-organized and contains relevant professional information. Key areas have been evaluated including keyword optimization, formatting consistency, and ATS compatibility. ${data.jobDescription ? 'Job description matching has been incorporated into the analysis for targeted recommendations.' : 'Consider adding a job description for more targeted insights.'}`,
      suggestions: [
        "Add more industry-specific keywords to improve ATS compatibility",
        "Include quantifiable achievements with specific metrics and numbers",
        "Optimize the summary section to better highlight your unique value proposition",
        "Ensure consistent formatting throughout all sections",
        "Add relevant technical skills that match current industry requirements",
        "Consider reordering sections to highlight your strongest qualifications first"
      ].slice(0, Math.floor(Math.random() * 3) + 3) // Random 3-6 suggestions
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.file) {
      setError('Please upload a PDF file.');
      return;
    }

    setIsLoading(true);

    try {
      const result = await simulateAnalysis(formData);
      
      // Store results in sessionStorage to pass to Results page
      sessionStorage.setItem('analysisResults', JSON.stringify(result));
      sessionStorage.setItem('uploadedFileName', formData.file.name);
      
      navigate('/results');
    } catch (err) {
      setError('An error occurred while analyzing your resume. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-6 sm:py-8 lg:py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Upload Your Resume
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed px-4">
              Get instant AI-powered analysis and personalized recommendations to optimize your resume for ATS success.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              {/* File Upload */}
              <div>
                <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                  Resume File (PDF only) *
                </label>
                <div
                  className={`relative border-2 border-dashed rounded-lg p-4 sm:p-6 lg:p-8 text-center transition-colors duration-200 ${
                    dragActive 
                      ? 'border-blue-400 bg-blue-50' 
                      : formData.file 
                      ? 'border-green-400 bg-green-50' 
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  
                  {formData.file ? (
                    <div className="text-green-600">
                      <FileText className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 mx-auto mb-3 sm:mb-4" />
                      <p className="text-base sm:text-lg font-medium break-all">{formData.file.name}</p>
                      <p className="text-xs sm:text-sm text-gray-500 mt-2">
                        {(formData.file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  ) : (
                    <div className="text-gray-500">
                      <UploadIcon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 mx-auto mb-3 sm:mb-4" />
                      <p className="text-base sm:text-lg font-medium mb-2">
                        Drag and drop your PDF here, or click to browse
                      </p>
                      <p className="text-xs sm:text-sm">
                        Maximum file size: 10MB
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Job Description */}
              <div>
                <label htmlFor="jobDescription" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                  Job description (optional)
                </label>
                <textarea
                  id="jobDescription"
                  rows={3}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm sm:text-base"
                  placeholder="Paste the job description here to get targeted analysis and recommendations..."
                  value={formData.jobDescription}
                  onChange={(e) => setFormData(prev => ({ ...prev, jobDescription: e.target.value }))}
                />
              </div>

              {/* Analysis Mode */}
              <div>
                <legend className="block text-sm sm:text-base font-medium text-gray-700 mb-3 sm:mb-4">
                  Analysis Mode *
                </legend>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  {(['Quick', 'Detailed', 'Optimize'] as const).map((mode) => (
                    <label
                      key={mode}
                      className={`relative flex items-center justify-center p-3 sm:p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 touch-manipulation ${
                        formData.analysisMode === mode
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="analysisMode"
                        value={mode}
                        checked={formData.analysisMode === mode}
                        onChange={(e) => setFormData(prev => ({ 
                          ...prev, 
                          analysisMode: e.target.value as 'Quick' | 'Detailed' | 'Optimize'
                        }))}
                        className="sr-only"
                      />
                      <div className="text-center">
                        <div className="text-sm sm:text-base font-medium mb-1">{mode}</div>
                        <div className="text-xs sm:text-sm text-gray-500">
                          {mode === 'Quick' && 'Fast basic analysis'}
                          {mode === 'Detailed' && 'Comprehensive review'}
                          {mode === 'Optimize' && 'Advanced suggestions'}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="flex items-start space-x-2 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-md">
                  <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-red-700">{error}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading || !formData.file}
                className={`w-full py-3 sm:py-4 px-4 rounded-md font-semibold text-base sm:text-lg transition-all duration-200 touch-manipulation ${
                  isLoading || !formData.file
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105 shadow-lg'
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center space-x-2">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Analyzing Resume...</span>
                  </span>
                ) : (
                  'Analyze'
                )}
              </button>
            </form>
          </div>

          {/* Info Cards */}
          <div className="mt-8 sm:mt-12 grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Secure & Private</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Your resume is processed securely and never stored on our servers. Your privacy is our priority.
              </p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Instant Results</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Get comprehensive analysis and actionable recommendations in seconds, not days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
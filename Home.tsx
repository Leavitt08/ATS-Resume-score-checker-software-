import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Zap, Target, TrendingUp, Upload, BarChart3, CheckCircle } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: 'AI-Powered Analysis',
      description: 'Advanced algorithms analyze your resume against industry standards and ATS requirements.'
    },
    {
      icon: <Target className="h-8 w-8 text-green-600" />,
      title: 'Job-Specific Optimization',
      description: 'Tailor your resume for specific job descriptions to maximize your chances of success.'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-purple-600" />,
      title: 'Actionable Insights',
      description: 'Get detailed recommendations to improve your resume score and stand out to recruiters.'
    }
  ];

  const howItWorks = [
    {
      step: 1,
      icon: <Upload className="h-6 w-6" />,
      title: 'Upload Your Resume',
      description: 'Upload your PDF resume and optionally add a job description for targeted analysis.'
    },
    {
      step: 2,
      icon: <BarChart3 className="h-6 w-6" />,
      title: 'AI Analysis',
      description: 'Our AI analyzes your resume for ATS compatibility, keywords, and formatting.'
    },
    {
      step: 3,
      icon: <CheckCircle className="h-6 w-6" />,
      title: 'Get Results',
      description: 'Receive a detailed score, analysis, and actionable suggestions for improvement.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Optimize Your Resume for{' '}
              <span className="text-blue-200">ATS Success</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-blue-100 leading-relaxed px-4">
              Get instant AI-powered analysis and recommendations to make your resume stand out to both ATS systems and hiring managers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link
                to="/upload"
                className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg touch-manipulation"
              >
                Analyze My Resume
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 touch-manipulation"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why Choose RE-SCAN ATS?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed px-4">
              Our cutting-edge AI technology helps you create resumes that pass ATS filters and impress hiring managers.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 sm:p-8 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="mb-6 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              How It Works
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed px-4">
              Get professional resume analysis in three simple steps.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {howItWorks.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-xl sm:text-2xl font-bold">
                  {item.step}
                </div>
                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
                  <div className="flex justify-center mb-4 text-blue-600">
                    {item.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Ready to Boost Your Resume?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-blue-100 max-w-2xl mx-auto leading-relaxed px-4">
            Join thousands of job seekers who have improved their resume scores and landed their dream jobs.
          </p>
          <Link
            to="/upload"
            className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg inline-block touch-manipulation"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
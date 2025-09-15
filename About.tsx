import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Shield, Zap, Target, Users, Award, CheckCircle, TrendingUp } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: 'Advanced AI Technology',
      description: 'Our proprietary AI algorithms analyze thousands of data points to provide accurate, actionable feedback on your resume.'
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: 'ATS Compatibility',
      description: 'Ensure your resume passes through Applicant Tracking Systems used by 99% of Fortune 500 companies.'
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: 'Instant Results',
      description: 'Get comprehensive analysis and recommendations in seconds, not days. No waiting, no delays.'
    },
    {
      icon: <Target className="h-8 w-8 text-red-600" />,
      title: 'Job-Specific Optimization',
      description: 'Tailor your resume for specific positions by analyzing job descriptions and matching requirements.'
    }
  ];

  const analysisTypes = [
    {
      name: 'Quick Analysis',
      description: 'Fast assessment of basic resume elements including formatting, keywords, and structure.',
      features: ['ATS compatibility check', 'Basic keyword analysis', 'Formatting review', 'Overall score']
    },
    {
      name: 'Detailed Analysis',
      description: 'Comprehensive review covering all aspects of your resume with in-depth recommendations.',
      features: ['Complete content analysis', 'Advanced keyword optimization', 'Section-by-section feedback', 'Industry-specific insights', 'Detailed improvement suggestions']
    },
    {
      name: 'Optimize Mode',
      description: 'Advanced analysis with personalized optimization strategies for maximum impact.',
      features: ['Job description matching', 'Competitive analysis', 'Industry benchmarking', 'Custom optimization strategies', 'Priority-ranked recommendations', 'Performance predictions']
    }
  ];

  const stats = [
    { number: '95%', label: 'Success Rate' },
    { number: '3.2x', label: 'More Interviews' },
    { number: '24/7', label: 'Availability' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              About RE-SCAN ATS
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-blue-100 leading-relaxed px-4">
              We're revolutionizing the job search process with AI-powered resume optimization that helps candidates stand out in today's competitive market.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
              Our Mission
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8 px-4">
              To democratize access to professional resume optimization by providing cutting-edge AI technology that levels the playing field for all job seekers, regardless of their background or resources.
            </p>
            <div className="bg-blue-50 p-4 sm:p-6 lg:p-8 rounded-xl">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed italic">
                "Every talented professional deserves a resume that showcases their true potential. Our AI technology ensures that your skills and experience get the attention they deserve."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why Choose RE-SCAN ATS?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed px-4">
              Our platform combines years of recruitment expertise with cutting-edge AI technology to deliver unparalleled resume optimization.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-4 sm:p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
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

      {/* Analysis Types Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Analysis Options
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed px-4">
              Choose the level of analysis that best fits your needs and timeline.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {analysisTypes.map((type, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {type.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                    {type.description}
                  </p>
                </div>
                
                <ul className="space-y-2 sm:space-y-3">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Powered by Advanced AI
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed px-4">
                Our technology stack combines natural language processing, machine learning, and industry expertise.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  How Our AI Works
                </h3>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-start space-x-3">
                    <TrendingUp className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-sm sm:text-base text-gray-900">Content Analysis:</strong>
                      <p className="text-sm sm:text-base text-gray-600">Analyzes your resume content for relevance, impact, and optimization opportunities.</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Target className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-sm sm:text-base text-gray-900">ATS Simulation:</strong>
                      <p className="text-sm sm:text-base text-gray-600">Tests your resume against real ATS algorithms used by major companies.</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Users className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-sm sm:text-base text-gray-900">Industry Benchmarking:</strong>
                      <p className="text-sm sm:text-base text-gray-600">Compares your resume against successful profiles in your industry.</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Award className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-sm sm:text-base text-gray-900">Optimization Engine:</strong>
                      <p className="text-sm sm:text-base text-gray-600">Provides personalized recommendations for maximum impact.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-6 lg:p-8 rounded-xl">
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Key Benefits
                </h4>
                <ul className="space-y-2 sm:space-y-3 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm sm:text-base">95% accuracy in ATS prediction</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm sm:text-base">Instant analysis and feedback</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm sm:text-base">Industry-specific recommendations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm sm:text-base">Continuous learning and improvement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Ready to Optimize Your Resume?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-blue-100 max-w-2xl mx-auto leading-relaxed px-4">
            Join thousands of professionals who have improved their job search success with RE-SCAN ATS.
          </p>
          <Link
            to="/upload"
            className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg inline-block touch-manipulation"
          >
            Start Your Analysis Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
import { useEffect, useState } from "react";
import newsBackground from "/backgrounds/news.webp";

const NewsEventsPage = () => {
  const [textVisible, setTextVisible] = useState(false);
  const [imagesVisible, setImagesVisible] = useState(false);

  useEffect(() => {
    // Show text first
    const textTimer = setTimeout(() => {
      setTextVisible(true);
    }, 300);

    // Show images after text with delay
    const imageTimer = setTimeout(() => {
      setImagesVisible(true);
    }, 1500);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(imageTimer);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${newsBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-slate-900/60 to-indigo-900/40 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

          {/* Main Glass Card */}
          <div className={`bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20 transition-all duration-1000 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>

            {/* Header Section */}
            <div className="relative px-6 sm:px-10 py-8 sm:py-12 text-center overflow-hidden">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-blue-300/30 to-blue-700/30 animate-gradient-x" />
              <div className="absolute inset-0 backdrop-blur-md" />

              <div className="relative z-10">
                <div className={`transition-all duration-1000 delay-200 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
                  <div className="inline-block mb-4">
                    <span className="text-blue-2000 text-sm sm:text-base font-semibold tracking-widest uppercase">Newsroom</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight drop-shadow-2xl">
                    MAG MARINE
                  </h1>
                  <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mt-4" />
                </div>
              </div>
            </div>

            {/* Content Section - Glass Card */}
            <div className="px-6 sm:px-10 lg:px-16 py-8 sm:py-12">

              {/* Title */}
              <div className={`transition-all duration-1000 delay-300 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8 leading-tight drop-shadow-lg">
                  Leadership Recognition: A Proud Milestone for Mag Marine
                </h2>
              </div>

              {/* Paragraphs with staggered animation */}
              <div className="space-y-5 sm:space-y-6 text-gray-100 text-base sm:text-lg leading-relaxed">

                <p className={`transition-all duration-1000 delay-400 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  Mag Marine Services Private Limited is proud to share a significant milestone as our Founder & CEO, <strong className="text-white">Hrishikesh Anilkumar</strong>, has been honoured with a distinguished industry award recognising leadership, innovation, and contributions to the maritime and shipbuilding sector.
                </p>

                <p className={`transition-all duration-1000 delay-500 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  This recognition reflects the vision that has shaped Mag Marine since its inception — building a professional, structured, and future-focused marine services company capable of delivering complex ship repair and newbuilding solutions. What began as a specialised engineering venture has evolved into a multidisciplinary organisation supporting critical projects across mechanical, hull outfitting, electrical, electronics, and piping domains.
                </p>

                <p className={`transition-all duration-1000 delay-600 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  For Mag Marine, this achievement represents more than an individual honour. It symbolises the collective effort of a dedicated team that continues to raise standards in execution, safety, and project delivery. The company's rapid growth within India's shipbuilding ecosystem has been driven by a commitment to quality workmanship, disciplined planning, and long-term partnerships with clients and shipyards.
                </p>

                {/* Quote Section - Enhanced Glass Card */}
                <div className={`relative bg-white/10 backdrop-blur-md border-l-4 border-blue-400 rounded-r-2xl p-5 sm:p-8 my-6 sm:my-8 shadow-xl transition-all duration-1000 delay-700 ${textVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
                  <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-400 to-indigo-600 rounded-l" />
                  <svg className="w-10 h-10 text-blue-300/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-white/90 italic text-base sm:text-lg leading-relaxed">
                    "Every milestone we achieve is a reflection of our team's resilience and belief in building something meaningful for the maritime industry. This recognition strengthens our responsibility to keep pushing forward with integrity, innovation, and excellence."
                  </p>
                  <p className="text-blue-300 font-semibold mt-4 text-sm sm:text-base">
                    — Hrishikesh Anilkumar, Founder & CEO
                  </p>
                </div>

                <p className={`transition-all duration-1000 delay-800 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  As Mag Marine continues expanding into advanced marine engineering and defence support services, this recognition reinforces the company's mission to contribute to India's maritime transformation while maintaining the highest professional standards.
                </p>

                {/* Looking Ahead Section */}
                <div className={`mt-8 sm:mt-10 transition-all duration-1000 delay-900 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-3">
                    <span className="w-1.5 h-8 bg-gradient-to-b from-blue-400 to-indigo-600 rounded-full" />
                    Looking Ahead
                  </h3>
                  <p>
                    Mag Marine remains focused on strengthening its technical capabilities, empowering its workforce, and delivering reliable engineering solutions that create lasting value for clients and partners.
                  </p>
                  <p className="mt-4">
                    Stay connected with us through our Newsroom for more updates on our journey, projects, and milestones.
                  </p>
                </div>
              </div>

              {/* Images Section with Enhanced Animations - Collage Layout */}
              <div className="mt-12 sm:mt-16">
                <div className={`text-center mb-8 transition-all duration-1000 ${imagesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Award Gallery</h3>
                  <p className="text-blue-200 text-sm sm:text-base">Celebrating Excellence & Leadership</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

                  {/* Left Column - Images 1 & 3 stacked */}
                  <div className="flex flex-col gap-6 sm:gap-8">

                    {/* Image 1 - Flip and reveal animation */}
                    <div
                      className={`group relative transition-all duration-1000 delay-200 ${imagesVisible
                        ? 'opacity-100 translate-y-0 rotate-0'
                        : 'opacity-0 translate-y-12 -rotate-6'
                        }`}
                      style={{ perspective: '1000px' }}
                    >
                      <div className="relative overflow-hidden rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500 bg-white/5 backdrop-blur-sm border border-white/10">
                        <div className="relative overflow-hidden">
                          <img
                            src="/news/img1.jpeg"
                            alt="Award Ceremony - Promising Kerala Entrepreneurs Award 2025"
                            className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                          />
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                          {/* Info overlay */}
                          <div className="absolute inset-0 flex items-end p-4 sm:p-6">
                            <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-white/20">
                                <p className="text-white text-sm sm:text-base font-bold mb-1">Award Ceremony Moment</p>
                                <p className="text-blue-200 text-xs">Promising Kerala Entrepreneurs Award 2025</p>
                              </div>
                            </div>
                          </div>

                          {/* Shine effect */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Image 3 - New image below img1 */}
                    <div
                      className={`group relative transition-all duration-1000 delay-400 ${imagesVisible
                        ? 'opacity-100 translate-y-0 rotate-0'
                        : 'opacity-0 translate-y-12 rotate-3'
                        }`}
                      style={{ perspective: '1000px' }}
                    >
                      <div className="relative overflow-hidden rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500 bg-white/5 backdrop-blur-sm border border-white/10">
                        <div className="relative overflow-hidden">
                          <img
                            src="/news/img3.jpeg"
                            alt="Business Insight Rising Kerala Awards - Travancore Excellence Summit 2025"
                            className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                          />
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                          {/* Info overlay */}
                          <div className="absolute inset-0 flex items-end p-4 sm:p-6">
                            <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-white/20">
                                <p className="text-white text-sm sm:text-base font-bold mb-1">Rising Kerala Recognition</p>
                                <p className="text-blue-200 text-xs">Travancore Excellence Summit 2025</p>
                              </div>
                            </div>
                          </div>

                          {/* Shine effect */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Right Column - Image 2 (full height) */}
                  <div
                    className={`group relative transition-all duration-1000 delay-600 ${imagesVisible
                      ? 'opacity-100 translate-y-0 rotate-0'
                      : 'opacity-0 translate-y-12 rotate-6'
                      }`}
                    style={{ perspective: '1000px' }}
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500 bg-white/5 backdrop-blur-sm border border-white/10 h-full">
                      <div className="relative overflow-hidden h-full">
                        <img
                          src="/news/img2.jpeg"
                          alt="Rising Kerala Business Awards 2025 - Kerala Marine Enterprise Excellence Award"
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                        {/* Info overlay */}
                        <div className="absolute inset-0 flex items-end p-6">
                          <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                              <p className="text-white text-base sm:text-lg font-bold mb-1">Excellence Recognition</p>
                              <p className="text-blue-200 text-xs sm:text-sm">Kerala Marine Enterprise Excellence Award</p>
                            </div>
                          </div>
                        </div>

                        {/* Shine effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* Footer Accent with animation */}
            <div className="relative h-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 animate-gradient-x" />
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default NewsEventsPage;
import { motion } from 'motion/react';
import { PlayCircle, Video } from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';
import { useState } from 'react';

const productVideos = [
  {
    id: 1,
    videoId: 'z8j_Uzm0iIA',
    url: 'https://youtu.be/z8j_Uzm0iIA',
    title: 'Product & Brand Showcase',
    category: 'Featured',
    categoryColor: 'from-[#B11226] to-[#D61C3A]',
  },
  {
    id: 2,
    videoId: 'GHD0w3M3zAU',
    url: 'https://youtu.be/GHD0w3M3zAU',
    title: 'Brand Products Overview',
    category: 'Collection',
    categoryColor: 'from-blue-500 to-cyan-600',
  },
  {
    id: 3,
    videoId: 'P92Y2JpA3-s',
    url: 'https://youtu.be/P92Y2JpA3-s',
    title: 'Product Range Highlights',
    category: 'Products',
    categoryColor: 'from-purple-500 to-indigo-600',
  },
  {
    id: 4,
    videoId: 'IrHhRAZgcsE',
    url: 'https://youtu.be/IrHhRAZgcsE',
    title: 'Premium Brands Collection',
    category: 'Brands',
    categoryColor: 'from-green-500 to-emerald-600',
  },
];

export function ProductVideos() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  return (
    <section id="product-videos" className="py-24 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1A1A1F]/50 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          icon={Video}
          badge="Video Gallery"
          title="Product and Brand"
          highlight="Videos"
          description="Watch our collection of product demonstrations and brand showcases"
        />

        {/* Video Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="group"
            >
              {/* Video Card */}
              <motion.div
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
                }}
                className="backdrop-blur-xl bg-white/15 rounded-2xl border border-white/25 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-black/40 hover:border-white/30 transition-all duration-500"
              >
                {/* Video Container - 16:9 Aspect Ratio */}
                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
                  {playingVideo === video.videoId ? (
                    // Embedded YouTube Player
                    <iframe
                      src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  ) : (
                    // Thumbnail with Play Button
                    <>
                      {/* YouTube Thumbnail */}
                      <img
                        src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          // Fallback to medium quality thumbnail if maxres doesn't exist
                          e.currentTarget.src = `https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`;
                        }}
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                      {/* Play Button Overlay */}
                      <button
                        onClick={() => setPlayingVideo(video.videoId)}
                        className="absolute inset-0 flex items-center justify-center cursor-pointer"
                        aria-label={`Play ${video.title}`}
                      >
                        <motion.div
                          whileHover={{ 
                            scale: 1.15,
                            transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }
                          }}
                          className="relative"
                        >
                          {/* Play Button Background */}
                          <div className="w-16 h-16 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center shadow-2xl group-hover:bg-gradient-to-br group-hover:from-[#B11226] group-hover:to-[#D61C3A] transition-all duration-500">
                            <PlayCircle 
                              className="text-[#B11226] group-hover:text-white transition-colors duration-500" 
                              size={32}
                              fill="currentColor"
                            />
                          </div>
                          
                          {/* Pulse Animation Ring */}
                          <div className="absolute inset-0 rounded-full bg-white/50 animate-ping opacity-0 group-hover:opacity-75 transition-opacity"></div>
                        </motion.div>
                      </button>

                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <div className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${video.categoryColor} text-white text-xs font-bold shadow-lg`}>
                          {video.category}
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Video Info */}
                <div className="p-4">
                  <h3 className="text-white font-semibold text-sm leading-snug line-clamp-2 group-hover:text-[#D61C3A] transition-colors duration-300">
                    {video.title}
                  </h3>
                  
                  {/* Metadata */}
                  <div className="flex items-center gap-2 mt-3 text-gray-400 text-xs">
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#B11226]"></div>
                      <span>YouTube Video</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 backdrop-blur-xl bg-white/10 border border-white/25 rounded-2xl">
            <Video className="text-[#D61C3A]" size={24} />
            <p className="text-white font-medium">
              Explore our complete range through these product & brand videos
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
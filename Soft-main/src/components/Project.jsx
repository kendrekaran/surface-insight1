import React from 'react';
import { LayoutTemplate, FileStack, Video } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Projects() {
  const features = [
    {
      title: "Templates",
      description: "Our premium Webflow templates are crafted for all industries, providing a smooth and beautiful start to your project. Customize them to fit your brand’s identity and make your website stand out.",
      icon: LayoutTemplate,
    },
    {
      title: "Assets",
      description: "Access a wide range of high-quality assets like images, icons, and UI elements, designed to enhance your Webflow project. With everything you need in one place, your design process becomes faster and more efficient.",
      icon: FileStack,
    },
    {
      title: "Videos",
      description: "Learn from our curated library of Webflow tutorials, tips, and case studies. These videos will help you master Webflow and create stunning websites, whether you're a beginner or an advanced user.",
      icon: Video,
    },
  ];

  return (
    <div className="relative min-h-screen bg-black px-4 py-12">
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-red-900/20 blur-3xl" />
      <div className="absolute right-20 top-20 h-64 w-64 rounded-full bg-red-800/10 blur-2xl" />
      
      <div className="container relative mx-auto max-w-6xl">
        <motion.div
          className="max-w-2xl mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-white">
            Build better on Webflow with our premium products & services
          </h1>
          <p className="mb-8 text-lg text-gray-400">
            Unlock your creativity with our curated Webflow templates, assets, and exclusive tutorials. We provide everything you need to build professional and stunning websites. Whether you're looking to speed up your design process or find inspiration, our platform has you covered.
          </p>
          <button className="bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded">
            Know More
          </button>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="rounded-xl border border-red-900/10 bg-black/40 p-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="mb-4 inline-block rounded-lg bg-red-600/10 p-3">
                <feature.icon className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

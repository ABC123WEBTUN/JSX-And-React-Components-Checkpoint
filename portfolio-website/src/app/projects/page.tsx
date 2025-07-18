'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A comprehensive e-commerce solution with user authentication, payment processing, inventory management, and admin dashboard. Built with modern technologies for optimal performance.',
      longDescription: 'This full-stack e-commerce platform features a responsive design, secure payment integration with Stripe, real-time inventory tracking, and comprehensive admin tools. The application handles user authentication, order management, and provides detailed analytics.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
      category: 'Full Stack',
      date: '2024',
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative project management tool with real-time updates, team collaboration features, and intuitive drag-and-drop interface for managing tasks and projects.',
      longDescription: 'This task management application enables teams to collaborate effectively with real-time updates, file sharing, comment systems, and progress tracking. Features include Kanban boards, Gantt charts, and team analytics.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
      category: 'Web App',
      date: '2024',
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: true,
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing creative work with smooth animations, optimized performance, and modern design principles.',
      longDescription: 'This portfolio website demonstrates modern web development practices with server-side rendering, optimized images, smooth animations, and excellent SEO. Built with accessibility and performance in mind.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
      category: 'Website',
      date: '2024',
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: false,
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A comprehensive weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      longDescription: 'This weather dashboard provides detailed weather information with interactive maps, 7-day forecasts, weather alerts, and historical data visualization. Features geolocation support and multiple city tracking.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'CSS Modules'],
      category: 'Web App',
      date: '2023',
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: false,
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: 'A comprehensive social media management tool with analytics, post scheduling, and multi-platform integration.',
      longDescription: 'This social media dashboard allows users to manage multiple social media accounts, schedule posts, track engagement metrics, and analyze performance across different platforms.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'Node.js', 'Chart.js', 'MySQL', 'Bootstrap'],
      category: 'Dashboard',
      date: '2023',
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: false,
    },
    {
      id: 6,
      title: 'Recipe Finder App',
      description: 'A mobile-responsive recipe application with ingredient-based search, nutritional information, and meal planning features.',
      longDescription: 'This recipe finder app helps users discover new recipes based on available ingredients, dietary restrictions, and preferences. Includes meal planning, shopping lists, and nutritional tracking.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      technologies: ['React Native', 'Firebase', 'Spoonacular API', 'Styled Components'],
      category: 'Mobile App',
      date: '2023',
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: false,
    },
  ];

  const categories = ['All', 'Full Stack', 'Web App', 'Website', 'Dashboard', 'Mobile App'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here's a collection of projects I've worked on, showcasing my skills 
            in web development, design, and problem-solving.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-600 text-sm rounded-full">
                    <Tag size={14} className="mr-1" />
                    {project.category}
                  </span>
                  <span className="flex items-center text-gray-500 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {project.date}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
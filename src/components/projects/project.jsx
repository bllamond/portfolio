import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const Project = ({ title, description, linkText, link, languages, isFeatured }) => {
  return (
    <motion.div
      className={`bg-white rounded-lg border ${isFeatured ? 'border-teal-500' : 'border-gray-200'} shadow-sm p-6 transition-all duration-200 hover:shadow-lg ${isFeatured ? 'ring-2 ring-teal-500' : ''}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to={link} className="no-underline block" target="_blank" rel="noopener noreferrer">
        {isFeatured && (
          <span className="bg-teal-500 text-white text-xs font-bold mr-2 px-2.5 py-0.5 rounded-full mb-2 inline-block">
            Featured
          </span>
        )}
        <motion.h3 
          className="text-gray-800 text-xl font-semibold mb-3 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className="text-gray-600 text-base mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {description}
        </motion.p>
        {languages && (
          <motion.div 
            className="flex justify-center flex-wrap gap-2 mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {languages.map((language, index) => (
              <span
                key={index}
                className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
              >
                {language}
              </span>
            ))}
          </motion.div>
        )}
        <motion.div 
          className="flex justify-center items-center text-blue-500 text-sm group-hover:text-blue-700 transition-colors duration-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <FontAwesomeIcon icon={faLink} className="mr-2" />
          <span className="font-medium">{linkText}</span>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default Project;

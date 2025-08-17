/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from "react";
import "./Projects.css";
import { projects, projectCategories } from "../utils/constants";
import SingleProject from "./SingleProject";

export default function Projects() {
  const [currentCategory, setCurrentCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState("next");

  const filterByCategory = (category) => {
    setCurrentCategory(category.toLowerCase());
    setCurrentSlide(0); // Reset to first slide when filtering
    if (category.toLowerCase() === "all") {
      setFilteredProjects(projects);
      return;
    }

    let filteredData = projects.filter((project) => {
      return project.category === category.toLowerCase();
    });
    setFilteredProjects(filteredData);
  };

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    
    setSlideDirection("next");
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentSlide((prev) => 
        prev === filteredProjects.length - 1 ? 0 : prev + 1
      );
      setIsTransitioning(false);
    }, 300); // Increased to match CSS animation duration
  }, [isTransitioning, filteredProjects.length]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    
    setSlideDirection("prev");
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentSlide((prev) => 
        prev === 0 ? filteredProjects.length - 1 : prev - 1
      );
      setIsTransitioning(false);
    }, 300); // Increased to match CSS animation duration
  }, [isTransitioning, filteredProjects.length]);

  // Calculate slides per view based on screen size
  const getSlidesPerView = useCallback(() => {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }, []);

  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

  // Update slides per view on window resize
  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getSlidesPerView]);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 3000); // Increased to 3 seconds for better UX

    return () => clearInterval(interval);
  }, [nextSlide, isTransitioning]);

  // Calculate which projects to show based on current slide and slides per view
  const getVisibleProjects = useCallback(() => {
    const startIndex = currentSlide;
    const endIndex = Math.min(startIndex + slidesPerView, filteredProjects.length);
    
    // Handle wrapping for better UX
    if (endIndex <= filteredProjects.length) {
      return filteredProjects.slice(startIndex, endIndex);
    } else {
      // Wrap around to show remaining projects + beginning projects
      const remaining = filteredProjects.slice(startIndex);
      const beginning = filteredProjects.slice(0, slidesPerView - remaining.length);
      return [...remaining, ...beginning];
    }
  }, [currentSlide, slidesPerView, filteredProjects]);

  const visibleProjects = getVisibleProjects();

  // Add touch/swipe support for mobile
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section id="project-section">
      <h2>My Projects</h2>
      <div className="categories-container">
        {projectCategories.map((category) => (
          <button
            key={category}
            value={category}
            className={
              currentCategory === category.toLowerCase()
                ? "category-btn category-btn-selected"
                : "category-btn"
            }
            onClick={(e) => filterByCategory(e.target.value)}
          >
            {category}
          </button>
        ))}
      </div>
      <div id="project-section-inner">
        {/* Manual Carousel Container */}
        <div 
          className="manual-carousel"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation Buttons */}
          <button 
            className="carousel-nav-btn carousel-prev" 
            onClick={prevSlide}
            disabled={isTransitioning}
            aria-label="Previous slide"
          >
            ‹
          </button>
          
          {/* Projects Container */}
          <div className="projects-container">
            {visibleProjects.map((project, index) => (
              <div 
                key={`${project.name}-${index}`} 
                className={`project-slide ${
                  isTransitioning 
                    ? slideDirection === "next" 
                      ? "slide-out-left" 
                      : "slide-out-right"
                    : ""
                }`}
              >
                <SingleProject project={project} />
              </div>
            ))}
          </div>
          
          <button 
            className="carousel-nav-btn carousel-next" 
            onClick={nextSlide}
            disabled={isTransitioning}
            aria-label="Next slide"
          >
            ›
          </button>
        </div>
      </div>
      <div className="more-projects">
        <a
          href="https://github.com/thekhaliqansari?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          <button className="more-projects-btn">View More Projects ⏩ </button>
        </a>
      </div>
    </section>
  );
}

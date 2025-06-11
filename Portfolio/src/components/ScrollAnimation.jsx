import { useEffect } from "react";

const useScrollAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          const children = entry.target.querySelectorAll(".stagger-child");
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add("animate-in");
            }, index * 60);
          });
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll(".fade-in-section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
};

export default useScrollAnimation;

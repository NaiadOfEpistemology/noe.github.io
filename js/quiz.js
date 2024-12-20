document.getElementById("quiz-form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const goal = document.getElementById("goal").value;
    const experience = document.getElementById("experience").value;
    const interest = document.getElementById("interest").value;
  
    let recommendedCourse = "";
    let courseLink = "#";
  
    if (interest === "web-dev") {
      recommendedCourse = "Web Development Bootcamp";
      courseLink = "web-development.html";
    } else if (interest === "data-science") {
      recommendedCourse = "Data Science Masterclass";
      courseLink = "data-science.html";
    } else if (interest === "digital-marketing") {
      recommendedCourse = "Digital Marketing Course";
      courseLink = "digital-marketing.html";
    } else if (interest === "cybersecurity") {
      recommendedCourse = "Cybersecurity Fundamentals";
      courseLink = "cybersecurity.html";
    } else if (interest === "app-development") {
      recommendedCourse = "Mobile App Development";
      courseLink = "mobile-app-development.html";
    }
  
    // Show result
    document.getElementById("course-result").style.display = "block";
    document.getElementById("result-text").innerText = `We recommend you take the ${recommendedCourse}.`;
    document.getElementById("course-link").setAttribute("href", courseLink);
  });
  
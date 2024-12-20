document.getElementById("quiz-form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const goal = document.getElementById("goal").value;
    const experience = document.getElementById("experience").value;
    const interest = document.getElementById("interest").value;
  
    let recommendedCourse = "";
    let courseLink = "#";
  
    if (interest === "web-dev") {
      recommendedCourse = "Web Development Bootcamp";
      courseLink = "course-web-development.html";
    } else if (interest === "data-science") {
      recommendedCourse = "Data Science Masterclass";
      courseLink = "course-data-science.html";
    } else if (interest === "digital-marketing") {
      recommendedCourse = "Digital Marketing Course";
      courseLink = "course-digitalmarketing.html";
    } else if (interest === "cybersecurity") {
      recommendedCourse = "Cybersecurity Fundamentals";
      courseLink = "course-cybersecurity.html";
    } else if (interest === "app-development") {
      recommendedCourse = "Mobile App Development";
      courseLink = "course-mobileappdevelopment.html";
    }
  
    // Show result
    document.getElementById("course-result").style.display = "block";
    document.getElementById("result-text").innerText = `We recommend you take the ${recommendedCourse}.`;
    document.getElementById("course-link").setAttribute("href", courseLink);
  });
  
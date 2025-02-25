document.addEventListener("DOMContentLoaded", function() {
    const isDarkMode = sessionStorage.getItem('darkMode') === 'true';
    document.body.classList.toggle('dark-mode', isDarkMode);
  
    function toggleDarkMode() {
      
      var bodyElement = document.body;
  
      bodyElement.classList.toggle("dark-mode");
  
      const isDarkMode = bodyElement.classList.contains('dark-mode');
      sessionStorage.setItem('darkMode', isDarkMode);
    }
  
    var darkModeLink = document.getElementById("darkModeLink");
  
    darkModeLink.addEventListener("click", function () {
      toggleDarkMode();
    });
  
    function updateTime() {
      var currentTimeElement = document.getElementById("current-time");
      var currentTime = new Date();
      var hours = currentTime.getHours();
      var minutes = currentTime.getMinutes();
      var formattedTime = hours + ":" + (minutes < 10 ? "0" : "") + minutes;
      currentTimeElement.textContent = formattedTime;
    }
  
    updateTime();
  
    setInterval(updateTime, 1000);
  });
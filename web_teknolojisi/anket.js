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

  function kontrolVeGonder() {
   
    var radioButtons = document.querySelectorAll('input[type="radio"]');
    var cevaplananSoruSayisi = 0;

    
    radioButtons.forEach(function (radioButton) {
        if (radioButton.checked) {
            cevaplananSoruSayisi++;
        }
    });

    if (cevaplananSoruSayisi > 0) {
        alert("Ankete katıldığınız için teşekkür ederiz!");

        var anketContainer = document.getElementById('anketForm');
        anketContainer.innerHTML = '<p class="anket-katildiniz">Ankete tekrar katılmak için sayfayı yenileyin!</p>';

    } else {
        alert("En az bir soruyu cevaplamanız gerekmektedir.");
    }
  }
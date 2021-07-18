          function myDarkMode() {
            
            var element = document.body;
            element.classList.toggle("dark-mode");
            
            var Sun = document.getElementById("sun");
            var Moon = document.getElementById("moon");
        
        
        
            if (Moon.style.display = "block") {
              Moon.style.display = "none";
              Sun.style.display = "block";
        
            } else {
              Moon.style.display = "none";
              Sun.style.display = "block";
        
        
            }
         }
        
         function myLightMode(){
            var element = document.body;
            element.classList.toggle("dark-mode");
        
            var Sun = document.getElementById("sun");
            var Moon = document.getElementById("moon");
        
        
        
            if (Moon.style.display = "block") {
              Moon.style.display = "block";
              Sun.style.display = "none";
        
            } else {
              Moon.style.display = "block";
              Sun.style.display = "none";
        
        
            }
         }

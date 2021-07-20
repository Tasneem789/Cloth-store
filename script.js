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
          function OpenForm(){
          document.getElementById('SignForm').style.display='block';
          document.getElementById('OpenBtn').style.display='none';
          document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
          }
          function CancelForm(){
          document.getElementById('SignForm').style.display='none';
          document.getElementById('OpenBtn').style.display='block';
          }

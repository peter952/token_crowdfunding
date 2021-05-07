//Function to Display Popup
function openForm() {
    document.getElementById('myForm').style.display = "block";
}

//Function to Hide Popup
function closeForm() {
    document.getElementById('myForm').style.display = "none";
}

function openTab(evt, tab) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " active";
  } 

// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }


  //Not secure but for proof of concept
  // Change Passwords for each report to your desire
  function password1() {
    var passprompt = prompt('Please Enter Password',' ');
    var pass1 = 'ether'
    
    if (!passprompt)
      history.go(-1);
    else (passprompt.toLowerCase() == pass1); {
      location.href='pass1.html';
    }
  }

  function password2() {
    var passprompt = prompt('Please Enter Password',' ');
    var pass2 = 'bitcoin'
    
    if (!passprompt)
      history.go(-1);
    else (passprompt.toLowerCase() == pass2); {
      location.href='pass2.html';
    }
  }

  function password2() {
    var passprompt = prompt('Please Enter Password',' ');
    var pass3 = 'crypto'
    
    if (!passprompt)
      history.go(-1);
    else (passprompt.toLowerCase() == pass3); {
      location.href='pass3.html';
    }
  }

  function currency() {
    rate = document.getElementById("converter").value;
    return rate;
  }

  function calculate() {
    rate = currency()
    first = document.getElementById("value1").value;
    if(first == ""){
      document.getElementById("value2").value = "";
    }else{
      switch(rate){
        case "USD":
          document.getElementById("value2").value = first * 1827.41;
        break;
   
        case "CAD":
          document.getElementById("value2").value = first * 2267.14;
        break;
   
        case "EURO":
          document.getElementById("value2").value = first * 1522.81;
        break;

        case "BTC":
          document.getElementById("value2").value = first * 0.03100808;
        break;
      }
    }
  }



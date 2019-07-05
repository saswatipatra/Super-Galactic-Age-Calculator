import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import mercury from './image/mercury.png';
import venus from './image/venus.png';
import earth from './image/earth.png';
import mars from './image/mars.png';
import jupiter from './image/jupiter.png';
import saturn from './image/saturn.png';
import uranus from './image/uranus.png';
import neptune from './image/neptune.png';
import pluto from './image/pluto.png';
import { calculate_age } from './backend-code';
import { getPlanetYear } from './backend-code';
import { getPlanetDays } from './backend-code';
import { getRemainingLife } from './backend-code';



//displaying all the planets images...

document.getElementById("mercury").innerHTML = "<img src=\""+ mercury + "\" width='150' height='150'>"
document.getElementById("venus").innerHTML = "<img src=\""+ venus + "\" width='150' height='150' >"
document.getElementById("earth").innerHTML = "<img src=\""+ earth + "\" width='150' height='150' >"
document.getElementById("mars").innerHTML = "<img src=\""+ mars + "\" width='150' height='150' >"
document.getElementById("jupiter").innerHTML = "<img src=\""+ jupiter + "\" width='150' height='150' >"
document.getElementById("saturn").innerHTML = "<img src=\""+ saturn + "\" width='170' height='150' >"
document.getElementById("uranus").innerHTML = "<img src=\""+ uranus + "\" width='150' height='150' >"
document.getElementById("neptune").innerHTML = "<img src=\""+ neptune + "\" width='150' height='150' >"
document.getElementById("pluto").innerHTML = "<img src=\""+ pluto + "\" width='140' height='140' >"

// userInfer Logic
$(document).ready(function() {
  $('#submit').on('click', function(){
    event.preventDefault();
    var dob = $('#born').val().split("-")
    var myAge= calculate_age(dob);
    if (myAge > 0.0) {
      //	Mercury ROTATION=> 58.646 days  ORBIT => 87.97 days
      $(".mercury_day").val(getPlanetDays(myAge, 58.6));
      $(".mercury_year").val(getPlanetYear(myAge,87.97));
      $(".mercury_bday").val(getRemainingLife(getPlanetYear(myAge,87.97)));

      //	Venus
      $(".venus_day").val(getPlanetDays(myAge, 243));
      $(".venus_year").val(getPlanetYear( myAge, 224.7 ));
      $(".venus_bday").val(getRemainingLife(getPlanetYear(myAge,224.7)));
      //	Earth
      $(".earth_day").val(getPlanetDays( myAge, 1));
      $(".earth_year").val(getPlanetYear( myAge ,365.26 ));
      $(".earth_bday").val(getRemainingLife(getPlanetYear(myAge,365.26)));
      //	Mars
      $(".mars_day").val(getPlanetDays(myAge, 1.03));
      $(".mars_year").val(getPlanetYear(myAge, 686.98));
      $(".mars_bday").val(getRemainingLife(getPlanetYear(myAge,686.98)));
      //	Jupiter
      $(".jupiter_day").val(getPlanetDays(myAge, 0.41));
      $(".jupiter_year").val(getPlanetYear( myAge , 4332.71));
      $(".jupiter_bday").val(getRemainingLife(getPlanetYear(myAge,4332.71)));
      //	Saturn
      $(".saturn_day").val(getPlanetDays(myAge, 0.45));
      $(".saturn_year").val(getPlanetYear( myAge,10759.5 ));
      $(".saturn_bday").val(getRemainingLife(getPlanetYear(myAge,10759.5)));
      //	Uranus
      $(".uranus_day").val(getPlanetDays(myAge, 0.72));
      $(".uranus_year").val(getPlanetYear( myAge,30685 ));
      $(".uranus_bday").val(getRemainingLife(getPlanetYear(myAge,30685)));
      //	Neptune
      $(".neptune_day").val(getPlanetDays(myAge, 0.67));
      $(".neptune_year").val(getPlanetYear( myAge, 60190 ));
      $(".neptune_bday").val(getRemainingLife(getPlanetYear(myAge,60190)));
      //	Pluto
      $(".pluto_day").val(getPlanetDays(myAge, 6.39));
      $(".pluto_year").val(getPlanetYear(myAge,90800));
      $(".pluto_bday").val(getRemainingLife(getPlanetYear(myAge,90800)));
    }
    });
});

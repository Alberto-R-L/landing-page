


// FUNCTION SCROLL TOP AND SCROLL TO TOP

var mybutton = document.getElementById("myBtn");

// Show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function scrollToTop() {

    $("html, body").animate({ scrollTop: 0 }, 500);
    return false;
}
    // no animacion
//    document.documentElement.scrollTop = 0;
  

//Form validation


/*
$(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='registration']").validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        name: "required",
        surname: "required",
        email: {
          required: true,
          // Specify that email should be validated
          // by the built-in "email" rule
          email: true
        },
        password: {
          required: true,
          minlength: 5
        }
      },
      // Specify validation error messages
      messages: {
        name: "Please enter your name",
        surname: "Please enter your surname",
        password: {
          required: "Please provide a password",
          minlength: "Your password must be at least 5 characters long"
        },
        email: "Please enter a valid email address"
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {
        form.submit();
      }
    });
  });
*/

  
//  Geolocalizacion
if ("geolocation" in navigator){

	navigator.geolocation.getCurrentPosition(function(position){ 


		console.log("Latitud: " + position.coords.latitude + ", Longitud: "+ position.coords.longitude);
		});
}else{
	console.log("Browser doesn't support geolocation!");
}





// Testimonios




let arrArticle=[];
let testimonials = $.ajax({
    type: "Get",
    url: "data.json",
    data: "data",
    dataType: "json",
    timeout:5000,
    success: function (response) {
        $.each(response.testimony, function (index, el) { 
            const article=$('<article>').attr("class", "service-art");
            $(article).addClass('articleTestimony');
            const name=$('<h3>').text(el.name);
            const text=$('<p>').text(el.text);
            const line=$('<div>').attr('class','line');
            const date=$('<p>').text(el.date);
            let art= $(article)
            .append(name)
            .append(line)
            .append(date)
            .append(text);
            arrArticle.push(article);
        });
        function giveMe(){
            $('.inside-testimonials').empty();
            let arrRandom=[];
                for (let i = 0; i < 3; i++) {
                  let num;
                  do {
                    num=Math.floor(Math.random()*(11));      
                  } while (arrRandom.includes(num));
                  arrRandom.push(num);
                }
                console.log(arrRandom);
            for (let i = 0; i < arrRandom.length; i++) {
                $('.inside-testimonials').prepend(arrArticle[arrRandom[i]]);
            }
        }
        giveMe();
        // Change testimonials every 12 sec
        // Event click
        $('#changeTestimonials').click(function(){
            giveMe();
        })
        
        
    },error: function() {
        console.error("The information could not be obtained");
    }
});



// Servicios

let services = $.ajax({
    type: "Get",
    url: "data.json",
    data: "data",
    dataType: "json",
    timeout:5000,
    success: function (response) {
        $.each(response.services, function (index, el) { 
            const article=$('<article>').attr("class", "service-art");
            $(article).addClass('articleService');
            const img=$('<img>').attr('src',el.img);
            const title=$('<h2>').text(el.title);
            const text=$('<p>').text(el.text);
            const div=$('<div>').attr('class','line');
            const button=$('<button>').text('Select');
            $('.services').prepend(article);
            $(article)
            .append(img)
            .append(title)
            .append(div)
            .append(text)
            .append(button);
        });
        
    },error: function() {
        console.error("The information could not be obtained");
    }
});
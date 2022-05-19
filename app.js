$("#expand").click(function() {
    $("#info").show()
    $("#info").animate({
        opacity: 1
    }, 1000)
    $("#expand").animate({
        opacity: 0
    }, 500, function() {
        $("#expand").hide()
    })
    var audio = new Audio('music/1.mp3');
    audio.play();
  })
  
  $('document').ready(function(){
  var author = $('meta[name=author]').prop('content');
    if(author != "tymëczek" || $("#copyrightText").text() != "tymëczek" || $("#devInfo").text() != "car developer") {
        $("body").empty()
        $("body").html(`
            <h1 style="color: white;">Nie ładnie podpierdalać komuś prace!</h1>
        `)
    }
  });
  
  
  new Typewriter('#maintext', {
  strings: ['tymëczek.me', 'tymëczek#1111'],
  autoStart: true,
  loop: true,
  delay: 130,
  deleteSpeed: 115,
  pauseFor: 3500,
  });
  
  new Typewriter('#musicTitle', {
  strings: ['PARAMAXIL - IDE PO MILION'],
  autoStart: true,
  loop: true,
  delay: 130,
  deleteSpeed: 115,
  pauseFor: 3500,
  });
  
  
  var arrayOne = [
    "https://tymëczek.me/music/1.mp3",
    "https://tymëczek.me/music/2.mp3"
  ]
  
  var sound = new Howl({
    src: arrayOne,
    autoplay: true,
    loop: true,
    volume: 0.5
  });
  
  particlesJS('particles-js',
  {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.2886141709557941,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
  }
  
  );
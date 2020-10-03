let cards = [
    //  Add your card in this section
    //  Follow this example format:
    //  ["Your Name", "Image URL(./img/username.png)", "Bio", "Your Github Link"],
    //  Bio should no longer than 50 characters, avoid using quotes(") to guarantee the format remains the same.


    ["Your Name", "./img/username.png", "Your Bio", "https://github.com/letskhabar"],
    ["Your Name", "./img/username.png", "Your Bio", "https://github.com/letskhabar"],
    ["Your Name", "./img/username.png", "Your Bio", "https://github.com/letskhabar"],
    ["Letskhabar", "./img/letskhabar.png", "We make IT happens", "https://github.com/letskhabar"],
    ["Vimal Kumar", "./img/vimalverma558.jpg", "Web Developer and designer", "https://github.com/vimalverma558"],
    ["Coder nibba", "./img/codernibba.gif", "In relationship with codernibbi", "https://github.com/codernibba"],
    ["Vaibhav Goel", "./img/GoelVaibhav009.jpg", "Mobile & Web Developer", "https://github.com/GoelVaibhav009"],
    ["Avinash Kumar Jha", "./img/avinash.jpg", "Student", "https://github.com/avinashjha11"],
    ["Prithviraj Biswas", "./img/prithvirajbytes.jpg", "CoDeLiKeHeLl", "https://github.com/prithvirajbytes"],
    ["Vikas shah", "./img/vik.jpg", "Student", "https://github.com/vikasah0"],
    ["Kory Freese", "./img/callmekory.png", "Student", "https://github.com/callmekory"],
    ["Subodh Aryal", "./img/a$ub0dh.jpg", "Let's Creating", "https://github.com/asubodh"],
    ["yaswanth", "./img/Screenshot (45).png", "Student", "https://github.com/bakiyaswanth"],
    ["naute22", "./img/username.png", "student", "https://github.com/naute22"]



    
]
















// +--------------------------------------------------------------------------------+
// +                                                                                +
// +                  YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS                 +
// +                                                                                +
// +--------------------------------------------------------------------------------+


let contents = [];
Shuffle(cards).forEach((c) => {
  contents.push([`<li class="card">` + `<img class="user-image" src='${c[1]}' alt='${c[0]}' />` + `<div class="flex-content">` + `<h3 class="bio">${c[2]}</h3>` + `<h3 class='user'><a href="${c[3]}" target="_blank"><i class="fab fa-github"></i> ${c[0]}</a> </h3>` + `</div>` + `</li>`]);
});

document.getElementById("users").innerHTML = contents;

function Shuffle(o) {
  for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
}

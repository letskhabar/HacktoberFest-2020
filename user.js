let cards = [
    //  Add your card in this section
    //  Follow this example format:
    //  ["Your Name", "Image URL(./img/username.png)", "Bio", "Your Github Link"],
    //  Bio should no longer than 50 characters, avoid using quotes(") to guarantee the format remains the same.


    ["Your Name", "./img/username.png", "Your Bio", "https://github.com/letskhabar"],
    ["Your Name", "./img/username.png", "Your Bio", "https://github.com/letskhabar"],
    ["Muteen Kundangar", "./img/web3.jpg", "Obviously a IT student", "https://github.com/letskhabar"],
    ["Letskhabar", "./img/letskhabar.png", "We make IT happens", "https://github.com/letskhabar"],
    ["Vimal Kumar", "./img/vimalverma558.jpg", "Web Developer and designer", "https://github.com/vimalverma558"],
    ["Coder nibba", "./img/codernibba.gif", "In relationship with codernibbi", "https://github.com/codernibba"],
    ["Vaibhav Goel", "./img/GoelVaibhav009.jpg", "Mobile & Web Developer", "https://github.com/GoelVaibhav009"],
    ["Avinash Kumar Jha", "./img/avinash.jpg", "Student", "https://github.com/avinashjha11"],
    ["Prithviraj Biswas", "./img/prithvirajbytes.jpg", "CoDeLiKeHeLl", "https://github.com/prithvirajbytes"],
    ["Vikas shah", "./img/vik.jpg", "Student", "https://github.com/vikasah0"],
    ["Kory Freese", "./img/callmekory.png", "Student", "https://github.com/callmekory"],
    ["Subodh Aryal", "./img/a$ub0dh.jpg", "Let's Creating", "https://github.com/asubodh"],
    ["Namish kumar", "./img/username.png", "Student", "https://github.com/namish25"],
    ["yaswanth", "./img/Screenshot (45).png", "Student", "https://github.com/bakiyaswanth"],
    ["drshyamshankar", "./img/username.png", "student", "https://github.com/drshyamshankar"],
    ["naute22", "./img/username.png", "student", "https://github.com/naute22"],
    ["ravi kumar", "./img/username.png", "Student", "https://github.com/letskhabar"],
    ["Aditya Gite", "./img/aditya-gite-04.jpg", "Kid", "https://github.com/aditya-gite-04"],
    ["Bruno Almeida", "./img/Brunopbb.png", "Student", "https://github.com/Brunopbb"],
    ["Anthony Morris", "./img/Anthony-Morris.png", "SE", "https://github.com/TonyDMorris"],
    ["V-50", "./img/username.png", "Student", "https://github.com/v-50"],
    ["Kunal Bhatia", "./img/kunalbhatia18.jpg", "Student ", "https://github.com/kunalbhatia18"],
    ["Wisnu Febriadi", "./img/wfebriad.jpg", "Student ", "https://github.com/wfebriad"],
    ["Tanishq Sehra","./img/tanishq1502.jpg","B.E CSE Student","https://github.com/tanishq1502"]
    ["Mohammad Quanit", "./img/quanit.jpg", "Software Engineer", "https://github.com/mohammad-quanit"],
    ["Abhishek Kumar", "./img/Badge.png", "Web Developer and designer", "https://github.com/Abhishekkr93"]



    

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

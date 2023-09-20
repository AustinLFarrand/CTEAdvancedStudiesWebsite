var currDrink
var loading = document.getElementById('error')
var errorbg = document.getElementById("errorbg")
var drinkTemp
const dict = [
    ["Latte", "latteTop.png", "index.html", "", "latteCropped.png", "latteSide.png", "206"],
    ["Iced Latte",'icedLatteTop.png', "index.html", "n", "icedLatteCropped.png", "icedLatteSide.png", "186"],
    ["Americano", "americanoTop.png", "index.html", "n", "americanoCropped.png", "americanoSide.png", "15"],
    ["Caramel Macchiato", "caramelMacchiatoTop.png", "index.html", "", "caramelMacchiatoCropped.png", "caramelMacchiatoSide.png", "215"],
    ["Mocha", "mochaTop.png", "index.html", "", "mochaCropped.png", "mochaSide.png", "394"],
    ["Cappuccino", "cappuccinoTop.png", "index.html", "", "cappuccinoCropped.png", "cappuccinoSide.png", "130"],
    ["Mocha Macchiato", "mochaMacchiatoTop.png", "index.html", "", "mochaMacchiatoCropped.png", "mochaMacchiatoSide.png", "255"],
    ["Iced Americano", "icedAmericanoTop.png", "index.html", "n", "icedAmericanoCropped.png", "icedAmericanoSide.png", "15"],
    ["Iced Caramel Macchiato", "icedCaramelMacchiatoTop.png", "index.html", "n", "icedCaramelMacchiatoCropped.png", "icedCaramelMacchiatoSide.png", "195"],
    ["Iced Mocha Macchiato", "icedMochaMacchiatoTop.png", "index.html", "n", "icedMochaMacchiatoCropped.png", "icedMochaMacchiatoSide.png", "235"],
    ["Iced Mocha", "icedMochaTop.png", "index.html", "n", "icedMochaCropped.png", "icedMochaSide.png", "374"]
]
var numHolder = 1;
loading.style.display = "block"
errorbg.style.display="block"

window.onload = (event) => {
    var loading = document.getElementById('error')
    loading.style.display="none"
    errorbg.style.display="none"





    if(document.body.getAttribute("data-title") == "menu") {
        var clickable = document.getElementsByClassName("clickable")[0]
        const delay = 7000
        var searches = document.getElementsByClassName("search")
        var MyInput2 = document.getElementById("myInput2")
        var uppers = document.querySelectorAll('.upperIMG')
        var drinkNames = []
        var scrollercc = document.getElementsByClassName('scrollercc')[0]
        var shouldBreak = false;
        var bodyHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight,
            document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight)
        var scrollPercent;
        var arrow = document.getElementById('uparrow');
        for(i in dict) {
            drinkNames.push(dict[i][0])
        }
        

            uppers.forEach(i => {
                i.style.opacity = 1;
                i.addEventListener("mouseover", function(event) {
                    fadeOut(i)
                } )
                i.addEventListener("mouseout", function(event) {
                    fadeIn(i)
                } )
                i.onclick = function(event) {
                    window.location = "temp_drink_name.html#" + i.alt

                }
                })

        clickable.onclick = function(event) {
            window.location = "index.html"
            }

        arrow.onclick = function(event) {
            window.scrollTo(0,0)
        }

        function fadeOut(i) {
            setTimeout(function() {
                i.style.opacity = i.style.opacity - .1
                if(i.style.opacity > 0){
                    fadeOut(i)
                }else{}
            }, 50)
        }

        function fadeIn(i) {
            shouldBreak = true
            i.style.opacity = 0;
            setTimeout(function() {
                i.style.opacity = 1;
            }, 51)
        }


        selectDrink()
        function randomInt(max) {
            return Math.floor(Math.random() * max);
        }
        function selectDrink() {
            
            num = randomInt(dict.length);
            if(num == numHolder && num != 0) {
                num = num -1;
            }else if (num == numHolder) {
                num = numHolder + 1
            }
            currDrink = String(dict[num][0])
            MyInput2.setAttribute("placeholder", "Try a" + dict[num][3] + " " + currDrink.toLowerCase() + "!") 
            numHolder = num
            setTimeout(function() {
                selectDrink()}, delay)
        }


        window.onscroll = function(event) {
            bodyHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight,
                document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight)
            scrollPercent = ((window.pageYOffset / (bodyHeight - window.innerHeight)));
        
            scrollercc.setAttribute('style', 'height:' + String(45 - scrollPercent * 45) + 'px')
                if(scrollPercent >= .95) {
                scrollercc.setAttribute('style', 'height: 0px')
                
            }
            if(window.pageYOffset > window.innerHeight - 400) {
                arrow.setAttribute('style', 'bottom: 5px')
            
            }
            else {
                arrow.setAttribute('style', 'bottom: -100px')
            }
            console.log(scrollPercent)

        }

        //Search bar js

function autocomplete(inp, arr) {
    
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        var c = 0;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        a.style.width = String((window.innerHeight - .1* document.body.scrollWidth)/2) + "px";
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase() && c < 3) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            c ++
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                currDrink = inp.value
                window.location = "temp_drink_name.html#" + currDrink
                
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          currentFocus = currentFocus % (x.length)
          drinkTemp = x[currentFocus].innerText
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          if (currentFocus < 0) currentFocus = x.length - 1
          currentFocus = currentFocus % (x.length)
          drinkTemp = x[currentFocus].innerText
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode === 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
          else if (x[0] != undefined) {
              x[0].click();
          }
        }
    });

    inp.addEventListener("keyup", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        
        if (x && x[0] != undefined) {
            if (currentFocus == -1) {
                drinkTemp = x[0].innerText
            }
            else {
                drinkTemp = x[currentFocus].innerText;
            }
        }
    })
    searches[0].addEventListener("click", function(e) {
        if(drinkTemp == undefined){
            window.location = "temp_drink_name.html#" + currDrink
    } else {window.location = "temp_drink_name.html#" + drinkTemp;
    }
    })
    
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }

  
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    setTimeout(function() {closeAllLists(e.target);}, 20)    
    
  });
  }

  autocomplete(document.getElementById("myInput2"), drinkNames);

    }
    if(document.body.getAttribute("data-title") == "drinks") {
        var catelog = [
            [
                "#Latte",
                "Latte",
                "$2.90 | $3.25 | $3.50",
                "A staple of all modern coffee shops, the humble latte is a combination of espresso and steamed milk, creating a creamy cafinated beverage that you will enjoy every sip of. Our lattes can come with flavored syrups for an additoinal $0.30 and non-dairy milks for an additional $0.20!",
                "images/latteSide.png", "206"
            ],
            [
                "#Americano",
                "Americano",
                "$2.50 | $2.90 | $3.25",
                "Americanos consist of shots of espresso diluted in hot water, creating a beverage that wakes you up by bringing out our espresso's  natural flavor for every sip you take. Feel free to add cream or sugar with your order at no extra cost!",
                "images/americanoSide.png", "15"
            ],
            [
                "#Caramel%20Macchiato",
                "Caramel Macchiato",
                "$3.25 | $3.50 | $3.70",
                "Our caramel macchiatos are silky upside down vanilla lattes topped with our classic cross-hatched caramel drizzle, creating a sweet beverage packed with enough caffine to get your through the day. You can swap out our 2% milk for a non-dairy milk for $0.20!",
                "images/caramelMacchiatoSide.png", "215"
            ],
            [
                "#Mocha",
                "Mocha",
                "$3.25 | $3.50 | $3.70",
                "Mochas bridge the gap between coffee and chocolate by bringing out the best of both their worlds. Our mochas are a blend of steamed milk, our delicious mocha syrup, and our espresso, topped with whip cream. For just $0.20 you can substitute out our 2% milk for a non-dairy milk!",
                "images/mochaSide.png", "394"
            ],
            [
                "#Cappuccino",
                "Cappuccino",
                "$2.90 | $3.25 | $3.50",
                "Cappuccinos exist for our foam lovers out there. Cappuccinos are espresso shots combined with heavily steamed milk, resulting in a creamy foamy beverage sure to give you a jolt of energy. You can get your cappuccino with a flavorerd syrup for an additional $0.30 a non-dairy milk for just an additional $0.20!",
                "images/cappuccinoSide.png", "130"
            ],
            [
                "#Mocha%20Macchiato",
                "Mocha Macchiato",
                "$3.25 | $3.50 | $3.70",
                "The mocha macchiato is sweetened, steamed milk topped with a layer of espresso with our mocha drizzle in a cross-hatch pattern above the rest of the beverage. Feel free to swap out our 2% milk for a non-dairy milk for an additional $0.20!",
                "images/mochaMacchiatoSide.png", "255"
            ],
            [
                "#Iced%20Americano",
                "Iced Americano",
                "$2.50 | $2.90 | $3.25",
                "A cold take on our Americano, the iced americano consists of espresso shots diluted in iced water to cool you down and wake you up! For no additional cost you can add cream and suger to your iced americano!",
                "images/icedAmericanoSide.png", "15"
            ],
            [
                "#Iced%20Latte",
                "Iced Latte",
                "$2.90 | $3.25 | $3.50",
                "A chilly take on its hot counterpart, the iced latte brings your boost of caffine in cold milk that evenly diffuses the espresso's innate flavor. Feel free to add flavored syrups to your order for an additional $0.30 or substitute in a non-dairy milk for an additional $0.20!",
                "images/icedLatteSide.png", "186"
            ],
            [
                "#Iced%20Caramel%20Macchiato",
                "Iced Caramel Macchiato",
                "$3.25 | $3.50 | $3.70",
                "Our iced caramel macchiato is sweetened, chilled milk with a layer of fresh espresso. On top of this creamy treat lies our caramel drizzle in a cross-hatched pattern. Feel free to have us make your beverage with non-dairy milk instead for an additional $0.20!",
                "images/icedCaramelMacchiatoSide.png", "195"
            ],
            [
                "#Iced%20Mocha",
                "Iced Mocha",
                "$3.25 | $3.50 | $3.70",
                "A chilly blend of mocha syrup, espresso, and milk, our iced mochas are sure to keep you in a good mood throughout your day. Our iced mochas come standard with whipped cream on top and you can get yours with a non-dairy milk for just an additional $0.20!",
                "images/icedMochaSide.png", "374"
            ],
            [
                "#Iced%20Mocha%20Macchiato",
                "Iced Mocha Macchiato",
                "$3.25 | $3.50 | $3.70",
                "Our iced mocha macchiato is our delectable espresso and cross-hatched mocha drizzle atop sweetened, chilled 2% milk. For just an additional $0.20 you can get your iced mocha macchiato with a non-dairy milk!",
                "images/icedMochaMacchiatoSide.png", "235"
            ]
        ]
        var text
        var drinkNames = [];
        var MyInput2 = document.getElementById("myInput2")
        var currentIndex
        for(x in catelog) {
            drinkNames.push(catelog[x][1])
            if(catelog[x][0] == window.location.hash) {
                text = catelog[x];
                currentIndex = x;
            }
        }
        var price = document.getElementById("price");
        var description = document.getElementById("drinkDescription");
        var drinkImage = document.getElementById("drinkImage");
        var drinkName = document.getElementById("drinkName");
        var arrowR = document.getElementById("rightArrow");
        var arrowL = document.getElementById("leftArrow");
        var menuBtn = document.getElementById("menuBtn");
        var clickable = document.getElementsByClassName("clickable")[0];
        var searches = document.getElementsByClassName("search")
        var cal = document.getElementById("cal")
        if(drinkImage.width == '498px'){
            price.parentNode.classList.remove("col-6")
            price.parentNode.classList.add("col-7")
        } else if ("col-7" in price.parentNode.classList){
            price.parentNode.classList.remove("col-7")
            price.parentNode.classList.add("col-6")
        }
        const delay = 7000
        drinkName.innerText = text[1]
        drinkImage.setAttribute("src", text[4])
        price.innerText = text[2]
        description.innerText = text[3]
        cal.innerText = text[5] + " Cal"
        menuBtn.onclick = function(event) {
            window.location = "menu.html";
        }
        clickable.onclick = function(event) {
        window.location = "index.html"
        }
        selectDrink()
        function randomInt(max) {
            return Math.floor(Math.random() * max);
        }
        function selectDrink() {
            
            num = randomInt(dict.length);
            if(num == numHolder && num != 0) {
                num = num -1;
            }else if (num == numHolder) {
                num = numHolder + 1
            }
            currDrink = String(dict[num][0])
            MyInput2.setAttribute("placeholder", "Try a" + dict[num][3] + " " + currDrink.toLowerCase() + "!") 
            numHolder = num
            setTimeout(function() {
                selectDrink()}, delay)
        }
        arrowL.onclick = function(event) {
            if(currentIndex > 0){
            window.location = "temp_drink_name.html" + catelog[currentIndex - 1][0];
            location.reload()

            }else{
                window.location = "temp_drink_name.html" + catelog[catelog.length - 1][0];
                location.reload()

            }
        }

        arrowR.onclick = function(event) {
            if(parseInt(currentIndex) + 1 < catelog.length){
            window.location = "temp_drink_name.html" + catelog[parseInt(currentIndex) + 1][0];
            location.reload()
            }else{
                window.location = "temp_drink_name.html" + catelog[0][0];
                location.reload()
            }
        }
        


//Search bar js

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        var c = 0;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        a.style.width = String((window.innerHeight - .1* document.body.scrollWidth)/2) + "px";
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase() && c < 3) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            c ++
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                currDrink = inp.value
                window.location = "temp_drink_name.html#" + currDrink
                location.reload()
                
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          currentFocus = currentFocus % (x.length)
          drinkTemp = x[currentFocus].innerText
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          if (currentFocus < 0) currentFocus = x.length - 1
          currentFocus = currentFocus % (x.length)
          drinkTemp = x[currentFocus].innerText
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode === 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
          else if (x[0] != undefined) {
              x[0].click();
          }
        }
    });

    inp.addEventListener("keyup", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        
        if (x && x[0] != undefined) {
            if (currentFocus == -1) {
                drinkTemp = x[0].innerText
            }
            else {
                drinkTemp = x[currentFocus].innerText;
            }
        }
    })
    searches[0].addEventListener("click", function(e) {
        if(drinkTemp == undefined){
            window.location = "temp_drink_name.html#" + currDrink
            location.reload()
    } else {window.location = "temp_drink_name.html#" + drinkTemp;
    location.reload()
    }
    })
    
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }

  
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    setTimeout(function() {closeAllLists(e.target);}, 20)    
    
  });
  }

  autocomplete(document.getElementById("myInput2"), drinkNames);
    }


    if(document.body.getAttribute("data-title") == "index") {
        //initializing variables by selecting
var navbar = document.getElementById('navbar');
var topScroll = document.querySelectorAll('.top-scroll')
var clickable = document.getElementsByClassName('clickable')[0];
var coffee1 = document.getElementById('cc1')
var coffee2 = document.getElementById('cc2')
var cshadow = document.getElementById('cc3')
var coffeetxt1 = document.getElementById('cct1')
var coffeetxt2 = document.getElementById('cct2')
var coffeename1 = document.getElementsByTagName('h1')[0]
var coffeename2 = document.getElementsByTagName('h1')[1]
var sb = document.getElementsByClassName('autocomplete')[0]
var err = document.getElementById('error')
var drinkNames = [];
var inputr = document.getElementById('myInput');
var inputy = document.getElementById('myInput2');
var content = document.getElementById('content')
var transition = document.getElementById('secondary-bg')
var scrollercc = document.getElementsByClassName('scrollercc')[0]
var bgcolor = document.getElementById('bg-color')
var searches = document.querySelectorAll('.search')
var scrollPercent
var compname = document.getElementById('company');
var arrow = document.getElementById('uparrow');
for(i in dict) {
    drinkNames.push(dict[i][0]);
}
var bodyHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight,
    document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight)
//initial set ups
coffee1.setAttribute('style', `left: ${String(document.body.scrollWidth/2-window.innerHeight/2 + .05* document.body.scrollWidth)}px !important;`)
coffee2.setAttribute('style', `left: ${String(document.body.scrollWidth/2-window.innerHeight/2 + .05* document.body.scrollWidth)}px !important;`)
cshadow.setAttribute('style', `left: ${String(document.body.scrollWidth/2-window.innerHeight/2 + .05* document.body.scrollWidth - 150)}px !important;`)
coffeetxt1.setAttribute('style', `left: ${String(document.body.scrollWidth/2-window.innerHeight/2 + .05* document.body.scrollWidth)}px !important;`)
coffeetxt2.setAttribute('style', `left: ${String(document.body.scrollWidth/2-window.innerHeight/2 + .05* document.body.scrollWidth)}px !important;`)
compname.setAttribute('style', `left: ${String(document.body.scrollWidth/2-window.innerHeight/2 + .05* document.body.scrollWidth)}px !important;`)
sb.setAttribute('style', `left: ${String(document.body.scrollWidth/2-window.innerHeight/4 + .025* document.body.scrollWidth)}px !important;`)
coffee1.style.height= String(window.innerHeight - .1* document.body.scrollWidth) + "px";
coffee2.style.height= String(window.innerHeight - .1* document.body.scrollWidth) + "px";
cshadow.style.height= String(window.innerHeight - .1* document.body.scrollWidth + 300) + "px";
cshadow.style.top = String(parseInt(.1* document.body.scrollWidth) - 150) + "px";
coffeetxt1.style.height= String(window.innerHeight - .1* document.body.scrollWidth) + "px";
coffeetxt1.style.width = String(window.innerHeight - .1* document.body.scrollWidth) + "px";
coffeetxt2.style.height= String(window.innerHeight - .1* document.body.scrollWidth) + "px";
coffeetxt2.style.width = String(window.innerHeight - .1* document.body.scrollWidth) + "px";
compname.style.height= String(window.innerHeight - .1* document.body.scrollWidth) + "px";
compname.style.width = String(window.innerHeight - .1* document.body.scrollWidth) + "px";
sb.style.height= String(window.innerHeight - .1* document.body.scrollWidth) + "px";
sb.style.width = String((window.innerHeight - .1* document.body.scrollWidth)/2) + "px";
bgcolor.setAttribute('style', `height: ${String(-791.7314873257-2.0023414435509*window.innerHeight + window.innerWidth+ 1600)}px !important;`)

bodyHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight,
    document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight)
scrollPercent = ((window.pageYOffset / (bodyHeight - window.innerHeight)));

scrollercc.setAttribute('style', 'height:' + String(45 - scrollPercent * 45) + 'px')
    if(scrollPercent >= .95) {
    scrollercc.setAttribute('style', 'height: 0px')
}
if(scrollPercent < .3){
    transition.style.position = "absolute"
    transition.style.top = `${String(1000*(1 - scrollPercent) + window.innerHeight - 1150)}px`
    }else {
    transition.style.top = `${String(1000*(.7) + window.innerHeight - 1150)}px`
    }

content.setAttribute('style', 'top:' + String(parseInt(transition.style.top) + 400) + "px")
content.style.width = window.innerWidth - 25 + "px";
if(window.pageYOffset > window.innerHeight - 400) {
    navbar.setAttribute ('style', 'top: 0px !important');
    arrow.setAttribute('style', 'bottom: 5px')

}
else {
    navbar.setAttribute ('style', 'top: -200px !important');
    arrow.setAttribute('style', 'bottom: -100px')
}
if(parseInt(transition.style.top) > 0) {
content.setAttribute('style', 'top:' + String(parseInt(transition.style.top)+ 400) + "px")
}
if(!(window.innerHeight - .1 * document.body.scrollWidth < window.innerWidth)) {
    err.setAttribute('style', 'display: inline')
}
coffee2.setAttribute ('src', 'images/icedLatteTop.png')
content.style.width = window.innerWidth - 25 + "px";
transition.style.top = `${String(1000*(1) + window.innerHeight - 1150)}px`
content.setAttribute('style', 'top:' + String(parseInt(transition.style.top) + 400) + "px")

//scroll events
window.onscroll = function(event) {
    bodyHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight,
        document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight)
    scrollPercent = ((window.pageYOffset / (bodyHeight - window.innerHeight)));

    scrollercc.setAttribute('style', 'height:' + String(45 - scrollPercent * 45) + 'px')
        if(scrollPercent >= .95) {
        scrollercc.setAttribute('style', 'height: 0px')
    }
    if(scrollPercent < .3){
        transition.style.position = "absolute"
        transition.style.top = `${String(1000*(1 - scrollPercent) + window.innerHeight - 1150)}px`
        }else {
        transition.style.top = `${String(1000*(.7) + window.innerHeight - 1150)}px`
        }
    
    content.setAttribute('style', 'top:' + String(parseInt(transition.style.top) + 400) + "px")
    content.style.width = window.innerWidth - 25 + "px";
    if(window.pageYOffset > window.innerHeight - 400) {
        navbar.setAttribute ('style', 'top: 0px !important');
        arrow.setAttribute('style', 'bottom: 5px')

    }
    else {
        navbar.setAttribute ('style', 'top: -200px !important');
        arrow.setAttribute('style', 'bottom: -100px')
    }
    
}

clickable.onclick = function(event){
    window.location = "menu.html"
}

clickable.style.cursor = "pointer"

//resize events
window.addEventListener('resize', function(event) {
    bodyHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight,
        document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight)
    content.style.width = window.innerWidth - 25 + "px";
    coffee1.setAttribute('style', `left: ${String(document.body.scrollWidth/2-window.innerHeight/2 + .05* document.body.scrollWidth)}px !important;`)
    coffee2.setAttribute('style', `left: ${String(document.body.scrollWidth/2-window.innerHeight/2 + .05* document.body.scrollWidth)}px !important;`)
    cshadow.setAttribute('style', `left: ${String(document.body.scrollWidth/2-window.innerHeight/2 + .05* document.body.scrollWidth - 150)}px !important;`)
    cshadow.style.top = String(parseInt(.1* document.body.scrollWidth) - 150) + "px";
    coffeetxt1.setAttribute('style', `left: ${String(document.body.scrollWidth/2-window.innerHeight/2 + .05* document.body.scrollWidth)}px !important;`)
    coffeetxt2.setAttribute('style', `left: ${String(document.body.scrollWidth/2-window.innerHeight/2 + .05* document.body.scrollWidth)}px !important;`)
    compname.setAttribute('style', `left: ${String(document.body.scrollWidth/2-window.innerHeight/2 + .05* document.body.scrollWidth)}px !important;`)
    sb.setAttribute('style', `left: ${String(document.body.scrollWidth/2-window.innerHeight/4 + .025* document.body.scrollWidth)}px !important;`)
    bgcolor.setAttribute('style', `height: ${String(-791.7314873257-2.0023414435509*window.innerHeight + window.innerWidth+ 2600)}px !important;`)
    
    //SET SCROLL EVENT STUFF HERE
    
    if(window.innerHeight - .1 * document.body.scrollWidth < window.innerWidth) {
        coffee1.style.height = String(window.innerHeight - .1* document.body.scrollWidth) + "px";
        coffee2.style.height = String(window.innerHeight - .1* document.body.scrollWidth) + "px";
        cshadow.style.height = String(window.innerHeight - .1* document.body.scrollWidth + 300) + "px";
        cshadow.style.top = String(parseInt(.1* document.body.scrollWidth) - 150) + "px";
        coffeetxt1.style.height = String(window.innerHeight - .1* document.body.scrollWidth) + "px";
        coffeetxt1.style.width = String(window.innerHeight - .1* document.body.scrollWidth) + "px";
        coffeetxt2.style.height = String(window.innerHeight - .1* document.body.scrollWidth) + "px";
        coffeetxt2.style.width = String(window.innerHeight - .1* document.body.scrollWidth) + "px";
        compname.style.height = String(window.innerHeight - .1* document.body.scrollWidth) + "px";
        compname.style.width = String(window.innerHeight - .1* document.body.scrollWidth) + "px";
        sb.style.height= String(window.innerHeight - .1* document.body.scrollWidth) + "px";
        sb.style.width = String((window.innerHeight - .1* document.body.scrollWidth)/2) + "px";
        err.setAttribute('style', 'display: none')
    }
    else {
        err.setAttribute('style', 'display: inline')
    }
});
topScroll.forEach(i => {
i.onclick = function(event) {
    window.scrollTo(0,0)
}
})
//onclick for href




function opacityGradDown (counter) {
    coffee1.style.opacity = counter;
    coffeetxt1.style.opacity = counter;
    counter -= .1;
    return counter
}

function opacityGradUp (counter) {
    coffee1.style.opacity = counter;
    coffeetxt1.style.opacity = counter;
    counter += .1;
    return counter
}

function imageAlt(counter, alt) {
    setTimeout(function() {
        
        if(alt == 1) {
            if(counter > 0) {
                imageAlt(opacityGradDown(counter), alt)
            }
            if(counter <= 0) {
                opacityGradDown(counter)
                counter = 0
                imageSwitch(counter)
                setTimeout(function() {
                    imageAlt(counter, 0)}, delay
                )
            }
        }
        if(alt == 0) {
            
            if(counter < 1) {
                imageAlt(opacityGradUp(counter), alt)
            }
            if(counter >= 1){
                opacityGradUp(counter)
                counter = 1
                imageSwitch(counter)
                setTimeout(function() {
                    imageAlt(counter, 1)}, delay
                )
            }
        }
    }, fadeTime)
    
}

function randomInt(max) {
    return Math.floor(Math.random() * max);
}
function imageSwitch(counter) {
    num = randomInt(dict.length);
    if(num == numHolder && num != 0) {
        num = num - 1;
    }
    else if (num == numHolder) {
        num = numHolder + 1;
    }

    if(counter == 0) {
        coffee1.setAttribute('src', 'images/' + String(dict[num][1]));
        coffeename1.innerText = String(dict[num][0]);
        currDrink = String(dict[numHolder][0])
        inputr.setAttribute('placeholder', "Try a" + String(dict[numHolder][3]) + " " + String(coffeename2.innerText).toLowerCase() + "!")
        inputy.setAttribute('placeholder', "Try a" + String(dict[numHolder][3]) + " " + String(coffeename2.innerText).toLowerCase() + "!")
        coffeename1.addEventListener('click', changeScreen1, false)
        coffeename2.removeEventListener('click', changeScreen2, false)
    }
    if(counter == 1) {
        coffee2.setAttribute('src', "images/" + String(dict[num][1]));
        coffeename2.innerText = String(dict[num][0]);
        currDrink = String(dict[numHolder][0]);
        inputr.setAttribute('placeholder', "Try a" + String(dict[numHolder][3]) + " " + String(coffeename1.innerText).toLowerCase() + "!")
        inputy.setAttribute('placeholder', "Try a" + String(dict[numHolder][3]) + " " + String(coffeename1.innerText).toLowerCase() + "!")
        coffeename2.addEventListener('click', changeScreen1, false)
        coffeename1.removeEventListener('click', changeScreen2, false)
    }
    numHolder = num;

    imageAlt(counter)
}

function changeScreen1() {
    window.location = "temp_drink_name.html#" + currDrink
}
function changeScreen2() {
    window.location = "temp_drink_name.html#" + currDrink
}
const delay = 5000
const fadeTime = 35
imageAlt(1, 1);

//Search bar js

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        var c = 0;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        a.style.width = String((window.innerHeight - .1* document.body.scrollWidth)/2) + "px";
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase() && c < 3) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            c ++
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                currDrink = inp.value
                window.location = "temp_drink_name.html#" + currDrink
                
                
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          currentFocus = currentFocus % (x.length)
          drinkTemp = x[currentFocus].innerText
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          if (currentFocus < 0) currentFocus = x.length - 1
          currentFocus = currentFocus % (x.length)
          drinkTemp = x[currentFocus].innerText
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode === 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
          else if (x[0] != undefined) {
              x[0].click();
          }
        }
    });

    inp.addEventListener("keyup", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        
        if (x && x[0] != undefined) {
            if (currentFocus == -1) {
                drinkTemp = x[0].innerText
            }
            else {
                drinkTemp = x[currentFocus].innerText;
            }
        }
    })
    searches[0].addEventListener("click", function(e) {
        if(drinkTemp == undefined || this.parentNode.querySelectorAll("input")[0].value == ""){
            window.location = "temp_drink_name.html#" + currDrink
    } else {window.location = "temp_drink_name.html#" + drinkTemp;
    }
    })
    searches[1].addEventListener("click", function(e) {
        if(drinkTemp == undefined || this.parentNode.parentNode.parentNode.querySelectorAll("form")[0].querySelectorAll("div")[0].querySelectorAll("input")[0].value == ""){
            window.location = "temp_drink_name.html#" + currDrink
    } else {window.location = "temp_drink_name.html#" + drinkTemp;
    }
    })
    
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }

  
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    setTimeout(function() {closeAllLists(e.target);}, 20)    
    
  });
  }

  autocomplete(document.getElementById("myInput"), drinkNames);
  autocomplete(document.getElementById("myInput2"), drinkNames);
    }
}
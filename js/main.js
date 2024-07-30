
"use strict"
var click_counter = 1;
var $ = function(id)
{
    return document.getElementById(id);
};

function updateTime() {
    var now = new Date();
    var month = String(now.getMonth()+1).padStart(2,"0");
    var day = String(now.getDate()).padStart(2,"0");
    var year = String(now.getFullYear()).slice(-2);
    var hours = String(now.getHours()).padStart(2,"0");
    var minutes = String(now.getMinutes()).padStart(2,"0");
    var seconds = String(now.getSeconds()).padStart(2,"0");
    /*
        Date object works with dates and times.
        Available methods:
            getMonth()	    Returns the month (from 0-11) 
                **Note**:   month is 0 indexed
            getDate()	    Returns the day of the month (from 1-31)
                **Note**:   no padding zero in front
            getFullYear()	Returns the year 
                **Note**:   By default, it returns YYYY
            getHours()      Returns the hour (from 0-23)
                **Note**:   no padding zero in front
            getMinutes()	Returns the minutes (from 0-59)
                **Note**:   no padding zero in front
            getSeconds()	Returns the seconds (from 0-59)
                **Note**:   no padding zero in front
        Exmaple: 
            var month = now.getMonth(); -> returns 6
        ----------------------------------------------------------------------------------------
        padStart(): to add a padding String from the start                                      
        Syntax: string.padStart(length, string)                                                 
        Parameter:                                                                              
            length - required, the length of the resulting string.                              
            string - optional, the string to pad with. Default is space.                        
        Return Value:                                                                           
            A String of the specified length, with the padding applied from the start.          
        
        ----------------------------------------------------------------------------------------
        slice(): selects from a given start, up to a (not inclusive) given end.                 
        Syntax: array.slice(start, end)                                                         
        Parameter:                                                                              
            start - optional, start position. Default is 0.                                     
            string - optional, end position. Default is 0.                        
        Return Value:                                                                           
            A new array containing the selected elements.     
        ----------------------------------------------------------------------------------------

        ${expression} : Template literals
    */

    var formattedTime = `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
    $('current_time').innerHTML = formattedTime;
   
}
var switch_langugage = function()
{
    var html_str ="";
    if(click_counter%3==0)
    {
        html_str = "<h2>English</h2>";
        html_str+="<h5>Introduction</h5>";
        html_str+="<p>In a world where coding prowess and ninja agility are paramount, there emerges a unique hero: meet Whiskers, the Cat Coder Ninja. With the stealth of a shadow and the brilliance of a master programmer, Whiskers navigates the digital landscape with unparalleled finesse. By day, he is a seemingly ordinary feline, but by night, he transforms into a legendary coder, tackling complex algorithms and vanquishing bugs with a flick of his paw. Whether he's scaling virtual firewalls or pouncing on security vulnerabilities, Whiskers combines his ninja reflexes with his coding expertise to protect and optimize the digital realm. Get ready to embark on thrilling adventures with the most extraordinary feline coder you've ever met!</p>";
        click_counter++;
    }
    else if (click_counter%3==1)
    {
        html_str = "<h2>Hindi</h2>";
        html_str+="<h5>परिचय</h5>";
        html_str+="<p>ऐसी दुनिया में जहां कोडिंग कौशल और निंजा चपलता सर्वोपरि है, वहां एक अद्वितीय नायक उभरता है: व्हिस्कर्स, कैट कोडर निंजा से मिलें। एक छाया की गोपनीयता और एक मास्टर प्रोग्रामर की प्रतिभा के साथ, व्हिस्कर्स अद्वितीय चालाकी के साथ डिजिटल परिदृश्य को नेविगेट करता है। दिन में, वह एक साधारण बिल्ली जैसा दिखता है, लेकिन रात में, वह एक प्रसिद्ध कोडर में बदल जाता है, जो जटिल एल्गोरिदम से निपटता है और अपने पंजे के झटके से कीड़ों को खत्म कर देता है। चाहे वह वर्चुअल फ़ायरवॉल को स्केल कर रहा हो या सुरक्षा कमजोरियों पर हमला कर रहा हो, व्हिस्कर्स डिजिटल क्षेत्र की सुरक्षा और अनुकूलन के लिए अपनी निंजा रिफ्लेक्सिस को अपनी कोडिंग विशेषज्ञता के साथ जोड़ता है। अब तक मिले सबसे असाधारण फ़ेलीन कोडर के साथ रोमांचकारी रोमांच शुरू करने के लिए तैयार हो जाइए!</p>";
        click_counter++;
    }
    else{
        html_str = "<h2>Spanish</h2>";
        html_str+= "<h5>Introducción</h5>";
        html_str+= "<p>En un mundo donde la destreza en codificación y la agilidad ninja son primordiales, surge un héroe único: conoce a Whiskers, el Cat Coder Ninja. Con el sigilo de una sombra y la brillantez de un maestro programador, Whiskers navega por el panorama digital con una delicadeza incomparable. De día, es un felino aparentemente normal, pero de noche se transforma en un codificador legendario, que aborda algoritmos complejos y vence errores con un movimiento de su pata. Ya sea escalando firewalls virtuales o atacando vulnerabilidades de seguridad, Whiskers combina sus reflejos ninja con su experiencia en codificación para proteger y optimizar el ámbito digital. ¡Prepárate para embarcarte en emocionantes aventuras con el codificador felino más extraordinario que jamás hayas conocido!</p>";
        click_counter++;
    }
    $('introduction').innerHTML = html_str;
};


var hide_detail = function(image)
  {
   
      var siblings = [];
        var sibling = image.nextElementSibling;
       
        while(sibling)
        {
            siblings.push(sibling);
            sibling = sibling.nextElementSibling;
        }
        for (var i=1; i<siblings.length; i++)
        {
            if (siblings[i].style.display == "none")
            {
                siblings[i].style.display = "block"
                image.src = "img/minus.png";
            }
            else{
                siblings[i].style.display = "none";
                image.src = "img/plus.png";
            }
        }
       
  };
 
window.onload = function()
{
    $("language_switch").onclick = switch_langugage;
    $("plus").onclick = hide_detail;
    var divs = document.getElementsByClassName("box");
    for (var i = 0; i <divs.length; i++)
      {
            
            divs[i].querySelector("h5").style.display = "none";
            divs[i].querySelector("a").style.display = "none";
        }
 
    for (var i = 0; i < divs.length ; i ++)
        {
            var icon_image = divs[i].firstElementChild;
            icon_image.onclick = function()
             {
                hide_detail(this);
             };
        }
    updateTime(); // Update the time immediately on load
    setInterval(updateTime, 1000); // Update the time every second
};

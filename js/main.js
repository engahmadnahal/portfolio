// select elments 

var eleTop = document.getElementById("top");
var header = document.getElementById('header');
var textWriter = document.getElementById('textWriter');
var progres = document.getElementsByClassName('progres');
var skills = document.getElementById("skills");
var link = Array.from(document.getElementsByClassName('link'));


// Change img on header

var count = 0;
function changeImg(){
    var img = ["web1111.jpg","web88.jpg","web99.jpg"];
    if(count < img.length){
        header.style.backgroundImage = 'url("img/'+img[count++]+'")';
    }else{
        count = 0;
        header.style.backgroundImage = 'url("img/'+img[count++]+'")';
    }
}

setInterval(changeImg,2000);

// Scroll navbar 

link.forEach(el => {
    el.addEventListener('click',function(e){
        e.preventDefault();
        console.log(el.getAttribute('href'))
        window.scrollTo({
            top : document.querySelector(el.getAttribute('href')).offsetTop,
            behavior : "smooth"
        });
    })
});

// Text writer
var writer = setInterval(writerAnmit,100);
var countlater = 0;
function writerAnmit(){
    var text = "Back End Developer With Php Laravel";
    if(countlater < text.length){
        textWriter.append(text[countlater++]);
    }else{
        clearInterval(writer);
    }

}

// Progres Animat
function mySkills(){
    for(var i = 0 ;i<progres.length ; i++){
        document.getElementById(progres[i].dataset.el).style.width = progres[i].dataset.prog;
    }
}



window.onload = function(){
    mySkills();
}


window.onscroll = function(){
    

// Scroll top
    if(window.scrollY >= 300){
        eleTop.style.display = "block";
    }else{
        eleTop.style.display = "none";
    }
}




eleTop.addEventListener('click',function(){
    window.scrollTo({
        behavior : "smooth",
        top : 0
    })
});



function displaylargeimg(element){
    var largeimage = document.getElementById("largeimg");
    var smallimage = document.getElementById(element.id);
    var smallimgsrc = smallimage.getAttribute("src");
    var smallimgalt = smallimage.getAttribute("alt");
    largeimage.setAttribute("src",smallimgsrc);
    document.getElementById("largeimgtext").innerHTML=smallimgalt;
    var sub = element.id;
    var ind = sub.substr(8);
    ind = parseInt(ind);
    ind = ind-1;
    intro=["Bruno Miguel Borges Fernandes is a Portuguese professional footballer who plays as an attacking midfielder for Premier League club Manchester United, which he captains, and the Portugal national team.","Alejandro Garnacho Ferreyra is a professional footballer who plays as a winger for Premier League club Manchester United. Born in Spain, he plays for the Argentina national team. Garnacho joined Manchester United's youth system from Atlético Madrid in October 2020.","Kobbie Boateng Mainoo is an English professional footballer who plays as a midfielder for Premier League club Manchester United and the England national team. Mainoo is a graduate of Manchester United's youth system and won the Jimmy Murphy Young Player of the Year award in 2023.","Rasmus Winther Højlund is a Danish professional footballer who plays as a forward for Premier League club Manchester United and the Denmark national team. Højlund graduated from Copenhagen's youth academy, making his first-team debut for the club aged 17 in October 2020","Lisandro Martínez is an Argentine professional footballer who plays as a centre-back for Premier League club Manchester United and the Argentina national team. Martínez began his career at Newell's Old Boys before joining Defensa y Justicia in 2017, initially on loan.","José Diogo Dalot Teixeira is a Portuguese professional footballer who plays as a full-back for Premier League club Manchester United and the Portugal national team. Dalot is a product of the Porto youth system and made his professional debut for the club's B team in January 2017."];
    document.getElementById("playerintro").innerHTML=intro[ind];
}
function removelargeimg(element){
    var largeimage = document.getElementById("largeimg");
    largeimage.setAttribute("src","white.jpg");
    document.getElementById("largeimgtext").innerHTML="Hover To The Player's Image";
    document.getElementById("playerintro").innerHTML="";
}
function randomplayer(){
    var players=document.querySelectorAll("[alt]");
    players=Array.from(players);
    players.splice(0,1);
    players.splice(0,1);
    players.splice(0,1);
    for(var a=0;a<2;a++){
        var randomnum=Math.floor(Math.random()*players.length);
        var ranplayer=players[randomnum];
        var randplayer = ranplayer.getAttribute("alt");
        if(a==0){
            document.getElementById("randomplayer").innerHTML="Your Player: "+randplayer;
            var randpic = ranplayer.getAttribute("src");
            var source = document.getElementById("randomplayerpic");
            source.src = randpic;
            players.splice(randomnum,1);
        }
        if(a==1){
            document.getElementById("randomplayer2").innerHTML="Opponent Player: "+randplayer;
            var randpic = ranplayer.getAttribute("src");
            var source = document.getElementById("randomplayerpic2");
            source.src = randpic;
        }
    }
}
function addtab(){
    var tabadd = document.querySelectorAll("img");
    tabadd=Array.from(tabadd);
    for(var a=0;a<tabadd.length;a++){
        var text = tabadd[a];
        a++;
        text.setAttribute("tabindex",a.toString());
        a--;
    }
}

  

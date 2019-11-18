window.onload = function(){
    let xmlHttp;
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET","/getData2",true);
    xmlHttp.send(null);

    xmlHttp.onreadystatechange=function () {
        if (xmlHttp.readyState ==4 && xmlHttp.status ==200){
            console.log(JSON.parse(xmlHttp.responseText));
            // let div = document.createElement('div');
            // div.innerText = xmlHttp.responseText;
            // document.body.appendChild(div)
        }
    }
}
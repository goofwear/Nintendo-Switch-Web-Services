function detectOS()
{
    var os = "Not Detected...";
    if (navigator.appVersion.indexOf("Win")!=-1) os="Windows";
    if (navigator.appVersion.indexOf("Mac")!=-1) os="MacOS";
    if (navigator.appVersion.indexOf("X11")!=-1) os="UNIX";
    if (navigator.appVersion.indexOf("Linux")!=-1) os="Linux";

    if(os == "Windows")
    {
        alert("You can't enter to this website.");
    }
    else if(os == "MacOS")
    {
        alert("You can't enter to this website.");
    }
    else if(os == "Linux")
    {
        alert("You can't enter to this website.");
    }
    else if(os == "UNIX")
    {
        alert("You can't enter to this website.");
    }
    
    alert(navigator.appVersion.indexOf());
}

detectOS()

function sayNotReady()
{
    alert("THIS ELEMENT IS NOT READY!");
}

function redirectPayloadLauncher()
{
    var redirectPayloadLauncher = "https://cosmoxdd.github.io/Nintendo-Switch-Web-Services/Services/payloadLoader.html";
    window.location.href = redirectPayloadLauncher;
}

function redirectGames()
{
    var redirectGamesPage = "https://cosmoxdd.github.io/Nintendo-Switch-Web-Services/Services/Games/gameIndex.html"; 
    window.location.href = redirectGamesPage;
}

function redirectGameIndex()
{
    var redirectGameIndex = "https://cosmoxdd.github.io/Nintendo-Switch-Web-Services/Services/Games/gameIndex.html"; 
    window.location.href = redirectGameIndex;
}

function redirectToServices()
{
    var redirectLink = "https://cosmoxdd.github.io/Nintendo-Switch-Web-Services/services.html";
    window.location.href = redirectLink;
}

function redirectToWebsites()
{
    var redirectLink = "https://cosmoxdd.github.io/Nintendo-Switch-Web-Services/Services/website/main.html"
    window.location.href = redirectLink;
}

function redirectToVideos()
{
    var redirectLink = "https://cosmoxdd.github.io/Nintendo-Switch-Web-Services/Services/video/main.html";
    window.location.href = redirectLink;
}

function redirectToDownloads()
{
    var redirectLink = "https://cosmoxdd.github.io/Nintendo-Switch-Web-Services/Services/downloads/main.html";
    window.location.href = redirectLink;
}

function redirectToHomeMenu()
{
    var redirectLink = "https://cosmoxdd.github.io/Nintendo-Switch-Web-Services/Services/ns-home-menu/home.html";
    window.location.href = redirectLink;
}

// GAMES 

function redirectToPaint()
{
    var gameLink = "https://cosmoxdd.github.io/Nintendo-Switch-Web-Services/Services/Games/GameFiles/Paint/paint.html";
    window.location.href = gameLink;
}

// Other

function redirectToHomeMenuHTML5()
{
    var redirectLink = "https://cosmoxdd.github.io/Nintendo-Switch-Web-Services/Services/ns-home-menu/menu/index.html"
}
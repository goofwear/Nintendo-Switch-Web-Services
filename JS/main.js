function detectOS()
{
    var os = "Not Detected...";
    if (navigator.appVersion.indexOf("Win")!=-1) os="Windows";
    if (navigator.appVersion.indexOf("Mac")!=-1) os="MacOS";
    if (navigator.appVersion.indexOf("X11")!=-1) os="UNIX";
    if (navigator.appVersion.indexOf("Linux")!=-1) os="Linux";

    if(os == "Windows")
    {
        alert("SORRY, You can't enter to this website  D:");
    }

    if(os == "MacOS")
    {
        alert("SORRY, HAS ESCOJIDO LA PUERTA EQUIBOCADA PERRA!");
    }
    
    if(os == "Linux")
    {
        alert("If you are using android, you can't enter to this website!");
    }

    if(os == "UNIX")
    {
        alert("Nigga, WTF!?");
    }
}

detectOS()

function sayNotReady()
{
    alert("THIS ELEMENT IS NOT READY!")
}

function redirectPayloadLauncher()
{
    var redirectPayloadLauncher = "https://cosmoxdd.github.io/Nintendo-Switch-Web-Exploit/Services/payloadLoader.html";
    window.location.href = redirectPayloadLauncher;
}

function redirectGames()
{
    var redirectGamesPage = "https://cosmoxdd.github.io/Nintendo-Switch-Web-Exploit/Services/Games/games.html"; 
    window.location.href = redirectGamesPage;
}

function redirectGameIndex()
{
    var redirectGameIndex = "https://cosmoxdd.github.io/Nintendo-Switch-Web-Exploit/Services/Games/gameIndex.html"; 
    window.location.href = redirectGameIndex;
}

// GAMES 

function redirectToPaint()
{
    var gameLink = "https://cosmoxdd.github.io/Nintendo-Switch-Web-Exploit/Services/Games/GameFiles/Paint/paint.html";
    window.location.href = gameLink;
}
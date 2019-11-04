function getDownload()
{
    var selectedOption = document.getElementById("selectFile").value;

    if(selectedOption == "NULL")
    {
        alert("Please, select something...");
    }
    else if(selectedOption == "atmosphere")
    {
        alert("Downloading...");
        var fileLink = "";
        window.location.href = fileLink;
        alert("Sadly I'M NOT HOSTING A FILE! >:]");
    }
    else if(selectedOption == "reinx")
    {
        alert("Donwloading...");
        alert("CAUTION: ReiNX doesn't have support for firmware 9.0.0 and 9.0.1");
        var fileLink = "";
        window.location.href = fileLink;
        alert("Sadly I'M NOT HOSTING A FILE! >:]");
    }
    else if(selectedOption == "shit")
    {
        alert("Please, don't download this SHIT >:v");
        var fileLink = "";
        window.location.href = fileLink;
        alert("Sadly I'M NOT HOSTING A FILE! >:]");
    }
    else if(selectedOption == "rr")
    {
        alert("I'm not hosting a file!")
    }
}

function redirectToCfw()
{
    var redirectLink = "https://cosmoxdd.github.io/Nintendo-Switch-Web-Services/Services/downloads/CFW/cfw.html";
    window.location.href = redirectLink;
}

function redirectToApps()
{
    var redirectLink = "https://cosmoxdd.github.io/Nintendo-Switch-Web-Services/Services/downloads/APPS/apps.html";
    window.location.href = redirectLink;
}
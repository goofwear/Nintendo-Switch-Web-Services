function main()
{
    var isTest = true;
    if(isTest == true)
    {
        alert("This Service is only for tests!, if you have an pasword you can enter to this website!");
        var getPass;
        prompt("Pasword: ", getPass);
        if(getPass == "switch")
        {
            alert("You can enter! :D");
        }
        else if(getPass != "switch")
        {
            alert("WRONG!");
            window.location.href = "https://usaelputogoogle.com";
        }
    }
}

// DEFAULT FUNCIONS
main();
function getVideo()
{
    var videoLink = document.getElementById("videoSource").value;
    $('#videoFinal').attr('src', videoLink);
}
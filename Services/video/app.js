function getVideo()
{
    var videoLink = document.getElementById("videoLink").value;
    var finalVideoSource = document.getElementById("video-source");
    finalVideoSource.src = videoLink;

    finalVideoSource.load();
    finalVideoSource.play();
}
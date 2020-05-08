function run() {
    var artist = document.getElementById('name').value;
    var numOfTopSongs = document.getElementById('number').value;
    if (artist == "") {
        document.getElementById("output").innerHTML = ("Hey! You have a problem with your artist name");
    } else {
        $.ajax({
            url: 'http://itunes.apple.com/search?term=' + artist + "&limit=" + numOfTopSongs,
            dataType: "jsonp",
            success: process
        });
    }
}

function process(data) {
    console.log(data);
    var songs = data.results;
    var o = "";
    for(var p = 0;p<songs.length;p++) {
        o += "<tr>";
        var img = $('<img />',
            {src : songs[p].artworkUrl60 });
        var audio = new Audio('songs[p].previewUrl');
        audio.type = 'audio/x-m4a';


        o += "<td>" + songs[p].artistName + "</td>";
        o += "<td>" + songs[p].trackName + "</td>";
        o += "<td>" + audio + "</td>";
        o += "<td>" + songs[p].collectionName + "</td>";
        o += "<td>" + img.appendTo('body'); + "</td>";
        o += "</tr>";

    }

    var table = document.getElementById("output");
    table.innerHTML = o;
    table.style.display = "block";
    //songs[p].previewUrl
}
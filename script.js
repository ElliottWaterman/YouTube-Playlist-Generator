
/*
    https://codepen.io/vitapluvia/pen/sADnp?editors=1111
*/

$(document).ready(function() {
  // Get links from storage
  try {
    var youtubeLinks = localStorage.getItem("youtubeLinks");
    console.log("Loaded:\n" + youtubeLinks);
  }
  catch (err) {
	  console.log(err);
  }

  // Set textarea to that string
  $('#youtubeUrls').val(youtubeLinks);
});

$(document).on("click", ".create", function() {
  console.log("Pressed!");
  var links = $('#youtubeUrls').val().trim();

  // Save links to storage
  try {
    localStorage.setItem("youtubeLinks", links);
    console.log("Saved:\n" + links);
  }
  catch (err) {
	  console.log(err);
  }

  list = links.split('\n');

  playlist = [];
  for (var str in list) {
    str = list[str];
    if (str.includes('youtube.com/watch?v=')) {
      str = str.split('youtube.com\/watch?v=').slice(-1)[0];
      str = str.split('&').slice(0)[0]; // removes &list or &index
      // console.log(str);
      playlist.push(str);
    }
  }
    
  if (playlist != [] && playlist !='' ) {
    newTab =  "target='_blank'"; // If wanted in a new tab //
    // An embedded video in an HTML page - takes up the whole screen
    plStr = "https://www.youtube.com/embed/?playlist="+String(playlist);
    // Untitled List on Youtube (Unlisted)
    plStr = "https://www.youtube.com/watch_videos?video_ids="+String(playlist);
    console.log(plStr);
    $('#playlistLink').html("<a href='"+plStr+"'"+newTab+">"+plStr+"</a>");
  }
  else {
    $('#playlistLink').html("<span class='nolink'>Add Some Youtube Links!  : )</span>");
  }  
});



// Works in Codepen.io, Fiddle, etc.
$('.create').click(function() {
  console.log("Pressed!");
  var links = $('#youtubeUrls').val().trim();

  // Save links to storage
  localStorage.setItem("youtubeLinks", links);
  console.log("Saved:\n" + links);
  list = links.split('\n');

  playlist = [];
  for (var str in list) {
    str = list[str];
    if (str.includes('youtube.com/watch?v=')) {
      str = str.split('youtube.com\/watch?v=').slice(-1)[0];
      str = str.split('&').slice(0)[0]; // removes &list or &index
      // console.log(str);
      playlist.push(str);
    }
  }
    
  if (playlist != [] && playlist !='' ) {
    newTab =  "target='_blank'"; // If wanted in a new tab //
    // An embedded video in an HTML page - takes up the whole screen
    plStr = "https://www.youtube.com/embed/?playlist="+String(playlist);
    // Untitled List on Youtube (Unlisted)
    plStr = "https://www.youtube.com/watch_videos?video_ids="+String(playlist);
    console.log(plStr);
    $('#playlistLink').html("<a href='"+plStr+"'"+newTab+">"+plStr+"</a>");
  }
  else {
    $('#playlistLink').html("<span class='nolink'>Add Some Youtube Links!  : )</span>");
  }  
});
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<style type="text/css">
html, body {
  height: 100%;
  overflow: auto;
}
</style>
</head>
<body></body>
<script type="text/javascript">
	function gVar() {
	    var vars = {};
	    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,    
	    function(m,key,value) {
	      vars[key] = value;
	    });
	    return vars;
	}

var vid_id = gVar()["v"];

var menu = gVar()["t"];

var mp3main = `<iframe src="https://y-api.org/button/?v=`+vid_id+`&f=mp3&fc=#FFF" style="border: 0; top:0; left:0; right:0; bottom:0; width:100%; max-height:40px" scrolling="no" FRAMEBORDER="0" allowtransparency="true" scrolling="no">`;

var mp3second = `<iframe src="https://recordmp3.co/#/watch?layout=button&amp;t_press_to_start=Convert%20to%20mp3&amp;t_waiting_for_worker=Menyiapkan%20Link...&amp;t_in_queue=Converting&amp;t_converting=Proses...&amp;t_done=Download&amp;v=`+vid_id+`" style="border: 0; top:0; left:0; right:0; bottom:0; width:100%; max-height:40px" scrolling="no" FRAMEBORDER="0" allowtransparency="true" scrolling="no"></iframe>`;

var body = '';

switch (menu) {
  case 'mp3main':
    body = mp3main;
    break;
  case 'mp3second':
    body = mp3second;
    break;
}

if (menu) {
    document.write(body);
}

</script>
</html>


// flickr auth
var Flickr = require("flickrapi"),
    flickrOptions = {
      api_key: "d11788aba59195325a5df5ae9f42311e",
      secret: "6e9321af7d60249d",
      permissions: 'write',
      user_id: "136364753@N05",
      access_token: "72157659372425413-b5dcfca69a344366",
      access_token_secret: "655d2b84fa03e302" 
    };

Flickr.authenticate(flickrOptions, function(error, flickr) {
  
  // we can now use "flickr" as our API object
  process.stdout.write("hello: ");
  
  // Upload something
  var uploadOptions = {
      photos: [{
        title: "img",
        tags: [
          "happy fox",
          "img 1"
        ],
        photo: __dirname + "/img.jpg"
      }]
  };

  console.log(uploadOptions);
  Flickr.upload(uploadOptions, flickrOptions, function(err, result) {
    if(err) {
      return console.error(error);
    }
    console.log("photos uploaded", result);
    console.log("boom");
  });

});

// HTTP hello
var http = require('http');
var port = process.env.PORT || 5000;
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from Flynn on port '+port+' from container '+process.env.HOSTNAME+'\n');
}).listen(port, function() {
  console.log("Listening on " + port);
});


var http = require('http');
var express = require('express');
var fs = require('fs');
var path = require('path');
var app = express();
var dir =  process.cwd();
app.use(express.static(dir));
app.use(express.static(__dirname));
var server = http.createServer(app);

server.listen(3000);
console.log("Listening at localhost:3000");

app.get('/files', function(req, res) {
 var currentDir =  dir;
 var query = req.query.path || '';
 if (query) currentDir = path.join(dir, query);
 console.log("browsing ", currentDir);
 fs.readdir(currentDir, function (err, files) {
     if (err) {
        throw err;
      }
      var data = [];
      files
      .filter(function (file) {
          return true;
      }).forEach(function (file) {
        try {
                var isDirectory = fs.statSync(path.join(currentDir,file)).isDirectory();
                if (isDirectory) {
                  data.push({ Name : file, IsDirectory: true, Path : path.join(query, file)  });
                } else {
                  var ext = path.extname(file);

                  data.push({ Name : file, Ext : ext, IsDirectory: false, Path : path.join(query, file) });
                }

        } catch(e) {
          console.log(e);
        }

      });
      res.json(data);
  });
});

app.get('/', function(req, res) {
 res.redirect('index.html');
});

// Imports / Requires
var fileFetch = require("fs");
var dirwatch = require("./modules/DirectoryWatcher.js");

// Create a monitor object that will watch a directory

var simMonitor = new dirwatch.DirectoryWatcher("C:\\sim", true);

// start the monitor and have it check for updates
// every half second.

simMonitor.start(500);

// Log to the console when a file is removed

simMonitor.on("fileRemoved", function (filePath) {
  console.log("File Deleted: " + filePath);
});

// Log to the console when a file is changed.
simMonitor.on("fileChanged", function (fileDetail, changes) {
  console.log("File Changed: " + fileDetail.fullPath);
  for (var key in changes) {
    console.log("  + " + key + " changed...");
    console.log("    - From: " + ((changes[key].baseValue instanceof Date) ? 
    changes[key].baseValue.toISOString() : changes[key].baseValue));
    console.log("    - To  : " + ((changes[key].comparedValue instanceof Date) ? 
    changes[key].comparedValue.toISOString() : changes[key].comparedValue));
  }
});

// log to the console when a file is added.

simMonitor.on("fileAdded", function (fileDetail) {
  console.log("File Added: " + fileDetail.fullPath);
  
  fileFetch.readFile(fileDetail.fullPath, 'utf8', function (err, data) {
    if (err) throw err; 
      try{// we'll consider error handling for now
          var fileObj = JSON.parse(data);
          
          console.log(fileObj);
          }catch(fileException){
                         console.log("File Error: " + fileDetail.fullPath + " : " : fileException.message);
                        };
  });
});

// Let us know that directory monitoring is happening and where.
console.log("Directory Monitoring of " + simMonitor.root + " has started");
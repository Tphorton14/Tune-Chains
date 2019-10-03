lambda

var AWS = require('aws-sdk');
var fs = require('fs');
var path = require('path');

AWS.config.update({region: 'us-east-1'});
s3 = new AWS.S3({apiVersion: '2006-03-01'});

module.exports = {
    addToBucket = (file) => {
        var uploadParams = { Bucket: 'tunechains', Key: '', Body: '' }
        
        var fileStream = fs.createReadStream(file);
        fileStream.on('error', function(err) {
          console.log('File Error', err);
        });
        uploadParams.Body = fileStream;
        uploadParams.Key = path.basename(file);
        
        s3.upload (uploadParams, function (err, data) {
          if (err) {
            console.log("Error", err);
          } if (data) {
            console.log("Upload Success", data.Location);
          }
        });        
    }
}
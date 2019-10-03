var ReactS3Uploader = require('react-s3-uploader');

app.use('/s3', require('react-dropzone-s3-uploader/s3router')({
    bucket: 'tunechains', 
    region: 'us-east-1'
  }));
const router = require("express").Router();
const {fileUploads, sampleUploads} = require("../filesAPI/normalizeFileData");
const songsController = require("../../../controllers/songsController");
import ReactS3 from 'react-s3';

const config = {
    bucketName: 'tunechains',
    albumName: 'songs',
    region: 'eu-west-1',
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
}

// router.route("/uploads")
//   .get(fileUploads.findAll)
//   .post(ReactS3.upload(file, config)
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err)));



// router
//   .route("/:id")
//   .get(songsController.findById)
//   .put(songsController.update)
//   .delete(songsController.remove);

// module.exports = router;
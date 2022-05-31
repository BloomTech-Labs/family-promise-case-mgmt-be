const router = require('express').Router();
const AWS = require('aws-sdk');
// const Documents = require('./documentsModel');

AWS.config.update({
  accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_SECRET_ACCESS_KEY,
});

const S3_BUCKET = process.env.REACT_APP_BUCKET;

router.post('/sign_s3', (req, res) => {
  const s3 = new AWS.S3();
  const fileName = req.body.fileName;
  const fileType = req.body.fileType;

  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 500,
    ContentType: fileType,
    ACL: 'public-read',
  };

  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if (err) {
      console.log(err);
      res.json({ success: false, error: err });
    }

    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`,
    };

    res.json({ success: true, data: { returnData } });
  });
});

module.exports = router;

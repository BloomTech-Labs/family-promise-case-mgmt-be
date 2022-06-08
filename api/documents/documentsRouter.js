const router = require('express').Router();
const AWS = require('aws-sdk');
const Documents = require('./documentsModel');

AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
});

const S3_BUCKET = process.env.BUCKET;

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

    res.status(200).json({ success: true, data: { returnData } });
  });
});

router.post('/:id/update', (req, res) => {
  const data = req.body;
  const { id } = req.params;
  Documents.update(id, data)
    .then((updated) => {
      console.log(updated);
      res.status(201).json(updated);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: 'Error updating document',
      });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Documents.findById(id)
    .then((documents) => {
      const responseDocuments = {};
      if (documents !== undefined) {
        Object.entries(documents).forEach((document) => {
          if (
            document[0] != 'client_id' &&
            Object.keys(document[1]).length != 2
          ) {
            responseDocuments[document[0]] = document[1];
          }
        });
        res.status(200).json(responseDocuments);
      } else {
        res.status(200).json([]);
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving document',
      });
    });
});

router.post('/:id', (req, res) => {
  const { id } = req.params;

  const s3 = new AWS.S3();
  const fileName = req.body.name;
  s3.deleteObject({ Bucket: S3_BUCKET, Key: fileName }, (err) => {
    if (err) {
      console.log(err, err.stack);
    } else {
      Documents.update(id, { [req.body.documentType]: {} })
        .then((documents) => {
          console.log(documents);
          const responseDocuments = {};
          Object.entries(documents[0]).forEach((document) => {
            if (
              document[0] != 'client_id' &&
              Object.keys(document[1]).length != 2
            ) {
              console.log(document[0], Object.keys(document[1]).length);
              responseDocuments[document[0]] = document[1];
            }
          });
          res.status(200).json(responseDocuments);
        })
        .catch((error) => {
          console.log(error);
          res.status(500).json({
            message: 'Error retrieving document',
          });
        });
    }
  });
});

module.exports = router;

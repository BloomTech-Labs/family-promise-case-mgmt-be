const router = require('express').Router();
const AWS = require('aws-sdk');
const Documents = require('./documentsModel');

AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
});

const S3_BUCKET = process.env.BUCKET;

// get signed request

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
      res.status(500).json({
        success: false,
        error: err,
        message: 'Error retrieving signed request',
      });
    }

    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`,
    };

    res.status(200).json({ success: true, data: { returnData } });
  });
});

/**
 * @swagger
 * /sign_s3
 *  post:
 *    description: Retrieve signed request from AWS
 *    summary: for uploading to s3 bucket
 *    responses:
 *      200:
 *        description: signed request and url to uploaded file
 *        content:
 *              example:
 *                - signedRequest: 'https://family-promise-case-mgmt.s3.amazonaws.com/test/fileName.pdf?AWSAccessKeyId=ASDGQ4325WEG23&Expires=1252345&Signature=ASDG1435ASDF345'
 *                  url: "https://family-promise-case-mgmt.s3.amazonaws.com/fileName"
 *      500:
 *        message: 'Error retrieving signed request'
 *        success: 'false'
 *        error: 'err'
 */

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

/**
 * @swagger
 * /:id/update
 *  post:
 *    description: Update existing document
 *    summary: for replacing an existing document with a new one
 *    responses:
 *      200:
 *        description: a client's documents object
 *        content:
 *              example:
 *                - client_id: 1,
 *                  completed_hfca: {
 *                    name: 'fileName',
 *                    success: true,
 *                    url: 'url',
 *                    documentType: 'completed_hfca',
 *                    extension: 'pdf',
 *                  },
 *                  valid_driver: {
 *                    name: 'fileName',
 *                    success: true,
 *                    url: 'url',
 *                    documentType: 'valid_driver',
 *                    extension: 'jpg',
 *                  }),
 *                  valid_social: {
 *                    name: 'fileName',
 *                    success: true,
 *                    url: 'url',
 *                    documentType: 'valid_social',
 *                    extension: 'doc',
 *                  }),
 *                  dshs_wic_tanf_snap: {
 *                    name: 'fileName',
 *                    success: true,
 *                    url: 'url',
 *                    documentType: 'dshs_wic_tanf_snap',
 *                    extension: 'pdf',
 *                  }),
 *                  responsible_renters_course: {
 *                    name: 'fileName',
 *                    success: true,
 *                    url: 'url',
 *                    documentType: 'responsible_renters_course',
 *                    extension: 'pdf',
 *                  }),
 *                  birth_cert_for_children: {
 *                    name: 'fileName',
 *                    success: true,
 *                    url: 'url',
 *                    documentType: 'birth_cert_for_children',
 *                    extension: 'pdf',
 *                  }),
 *                  child_enrolled_school: {
 *                    name: 'fileName',
 *                    success: true,
 *                    url: 'url',
 *                    documentType: 'child_enrolled_school',
 *                    extension: 'pdf',
 *                  }),
 *                  childcare: {
 *                    name: 'fileName',
 *                    success: true,
 *                    url: 'url',
 *                    documentType: 'childcare',
 *                    extension: 'pdf',
 *                  })
 *      500:
 *        message: 'Error updating document'
 */

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
        message: 'Error retrieving documents',
      });
    });
});

/**
 * @swagger
 * /:id
 *  get:
 *    description: Retrieve client's documents
 *    summary: for seeing all documents of a client
 *    responses:
 *      200:
 *        description: a client's documents object
 *        content:
 *              example:
 *                - client_id: 1,
 *                  completed_hfca: {
 *                    name: 'fileName',
 *                    success: true,
 *                    url: 'url',
 *                    documentType: 'completed_hfca',
 *                    extension: 'pdf',
 *                  },
 *                  valid_driver: {
 *                    name: 'fileName',
 *                    success: true,
 *                    url: 'url',
 *                    documentType: 'valid_driver',
 *                    extension: 'jpg',
 *                  }),
 *                  valid_social: {
 *                    name: 'fileName',
 *                    success: true,
 *                    url: 'url',
 *                    documentType: 'valid_social',
 *                    extension: 'doc',
 *                  }),
 *                  dshs_wic_tanf_snap: {
 *                    name: 'fileName',
 *                    success: true,
 *                    url: 'url',
 *                    documentType: 'dshs_wic_tanf_snap',
 *                    extension: 'pdf',
 *                  }),
 *                  responsible_renters_course: {
 *                    name: 'fileName',
 *                    success: true,
 *                    url: 'url',
 *                    documentType: 'responsible_renters_course',
 *                    extension: 'pdf',
 *                  }),
 *                  birth_cert_for_children: {
 *                    name: 'fileName',
 *                    success: true,
 *                    url: 'url',
 *                    documentType: 'birth_cert_for_children',
 *                    extension: 'pdf',
 *                  }),
 *                  child_enrolled_school: {
 *                    name: 'fileName',
 *                    success: true,
 *                    url: 'url',
 *                    documentType: 'child_enrolled_school',
 *                    extension: 'pdf',
 *                  }),
 *                  childcare: {
 *                    name: 'fileName',
 *                    success: true,
 *                    url: 'url',
 *                    documentType: 'childcare',
 *                    extension: 'pdf',
 *                  })
 *      500:
 *        message: 'Error retrieving documents'
 */

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
            message: 'Error deleting document',
          });
        });
    }
  });
});

/**
 * @swagger
 * /:id
 *  get:
 *    description: Delete a client's document
 *    summary: for removing a client's document
 *    responses:
 *      200:
 *        description: a client's documents object
 *        content:
 *              example:
 *                - client_id: 1,
 *                  completed_hfca: {
 *                    name: 'fileName',
 *                    success: true,
 *                    url: 'url',
 *                    documentType: 'completed_hfca',
 *                    extension: 'pdf',
 *                  },
 *                  valid_driver: {
 *                    name: 'fileName',
 *                    success: true,
 *                    url: 'url',
 *                    documentType: 'valid_driver',
 *                    extension: 'jpg',
 *                  }),
 *                  valid_social: {
 *                    name: 'fileName',
 *                    success: true,
 *                    url: 'url',
 *                    documentType: 'valid_social',
 *                    extension: 'doc',
 *                  }),
 *                  dshs_wic_tanf_snap: {
 *                    name: 'fileName',
 *                    success: true,
 *                    url: 'url',
 *                    documentType: 'dshs_wic_tanf_snap',
 *                    extension: 'pdf',
 *                  }),
 *                  responsible_renters_course: {
 *                    name: 'fileName',
 *                    success: true,
 *                    url: 'url',
 *                    documentType: 'responsible_renters_course',
 *                    extension: 'pdf',
 *                  }),
 *                  birth_cert_for_children: {
 *                    name: 'fileName',
 *                    success: true,
 *                    url: 'url',
 *                    documentType: 'birth_cert_for_children',
 *                    extension: 'pdf',
 *                  }),
 *                  child_enrolled_school: {
 *                    name: 'fileName',
 *                    success: true,
 *                    url: 'url',
 *                    documentType: 'child_enrolled_school',
 *                    extension: 'pdf',
 *                  }),
 *                  childcare: {
 *                    name: 'fileName',
 *                    success: true,
 *                    url: 'url',
 *                    documentType: 'childcare',
 *                    extension: 'pdf',
 *                  })
 *      500:
 *        message: 'Error deleting document'
 */

module.exports = router;

const router = require('express').Router();
const AWS = require('aws-sdk');
const Documents = require('./documentsModel');

AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
});

const S3_BUCKET = process.env.BUCKET;

/**
 * @swagger
 * components:
 *  schemas:
 *    Document.Completed_hfca:
 *      type: object
 *      description: The HFCA form
 *      properties:
 *        name:
 *           type: string
 *        success:
 *           type: boolean
 *        url:
 *           type: string
 *        documentType:
 *           type: string
 *        extension:
 *           type: string
 *    Document.valid_driver:
 *      type: object
 *      description: The valid driver's license
 *      properties:
 *        name:
 *          type: string
 *          description: The name of the document
 *        success:
 *          type: boolean
 *          description: Whether the upload was successful
 *        url:
 *          type: string
 *        documentType:
 *          type: string
 *        extension:
 *          type: string
 *    Document.valid_social:
 *      type: object
 *      description: The valid social security card
 *      properties:
 *        name:
 *          type: string
 *          description: The name of the document
 *        success:
 *          type: boolean
 *          description: Whether the upload was successful
 *        url:
 *          type: string
 *        documentType:
 *          type: string
 *        extension:
 *          type: string
 *    Document.dshs_wic_tanf_snap:
 *      type: object
 *      description: The DSHS WIC/TANF/SNAP form
 *      properties:
 *        name:
 *          type: string
 *          description: The name of the document
 *        success:
 *          type: boolean
 *          description: Whether the upload was successful
 *        url:
 *          type: string
 *        documentType:
 *          type: string
 *        extension:
 *          type: string
 *    Document.birth_cert_for_children:
 *      type: object
 *      description: The birth certificates for children
 *      properties:
 *        name:
 *          type: string
 *          description: The name of the document
 *        success:
 *          type: boolean
 *          description: Whether the upload was successful
 *        url:
 *          type: string
 *        documentType:
 *          type: string
 *        extension:
 *          type: string
 *    Document.child_enrolled_school:
 *      type: object
 *      description: The child enrolled in school form
 *      properties:
 *        name:
 *          type: string
 *          description: The name of the document
 *        success:
 *          type: boolean
 *          description: Whether the upload was successful
 *        url:
 *          type: string
 *        documentType:
 *          type: string
 *        extension:
 *          type: string
 *    Document.childcare:
 *      type: object
 *      description: The childcare form
 *      properties:
 *        name:
 *          type: string
 *          description: The name of the document
 *        success:
 *          type: boolean
 *          description: Whether the upload was successful
 *        url:
 *          type: string
 *        documentType:
 *          type: string
 *        extension:
 *          type: string
 *    Document.responsible_renters_course:
 *      type: object
 *      description: The responsible renters course form
 *      properties:
 *        name:
 *          type: string
 *          description: The name of the document
 *        success:
 *          type: boolean
 *          description: Whether the upload was successful
 *        url:
 *          type: string
 *        documentType:
 *          type: string
 *        extension:
 *          type: string
 *    Document:
 *      type: object
 *      required:
 *        - client_id
 *      properties:
 *        client_id:
 *          type: string
 *          description: The id of the client
 *        completed_hfca:
 *          $ref: '#/components/schemas/Document.Completed_hfca'
 *        valid_driver:
 *          $ref: '#/components/schemas/Document.valid_driver'
 *        valid_social:
 *          $ref: '#/components/schemas/Document.valid_social'
 *        dshs_wic_tanf_snap:
 *          $ref: '#/components/schemas/Document.dshs_wic_tanf_snap'
 *        birth_cert_for_children:
 *          $ref: '#/components/schemas/Document.birth_cert_for_children'
 *        child_enrolled_school:
 *          $ref: '#/components/schemas/Document.child_enrolled_school'
 *        childcare:
 *          $ref: '#/components/schemas/Document.childcare'
 *        responsible_renters_course:
 *          $ref: '#/components/schemas/Document.responsible_renters_course'
 *      example:
 *        client_id: '1'
 *        completed_hfca:
 *          name: 'client_id-scanned_completed_hfca.pdf'
 *          success: true
 *          url: 'https://bucket.s3.amazonaws.com/client_id-scanned_completed_hfca.pdf'
 *          documentType: 'completed_hfca'
 *          extension: 'pdf'
 *
 * /sign_s3:
 *  post:
 *    description: Retrieve signed request from AWS
 *    summary: for uploading to s3 bucket
 *    tags:
 *      - documents
 *    responses:
 *      200:
 *        description: signed request and url to upload file
 *        content:
 *          example:
 *            - signedRequest: 'https://family-promise-case-mgmt.s3.amazonaws.com/test/fileName.pdf?AWSAccessKeyId=ASDGQ4325WEG23&Expires=1252345&Signature=ASDG1435ASDF345'
 *              url: "https://family-promise-case-mgmt.s3.amazonaws.com/fileName"
 *      500:
 *        message: 'Error retrieving signed request'
 *        success: 'false'
 *        error: 'err'
 */
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
 * /documents/{id}:
 *  get:
 *    description: Retrieve client's documents
 *    summary: for seeing all documents of a client
 *    tags:
 *      - documents
 *    responses:
 *      200:
 *        description: a client's documents object
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Document'
 *      500:
 *        message: 'Error retrieving documents'
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
 * /documents/{id}/update:
 *  post:
 *    description: Update existing document
 *    summary: for replacing an existing document with a new one
 *    tags:
 *      - documents
 *    requestBody:
 *      description: Document object to to be savred to DB
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Document'
 *    responses:
 *      200:
 *        description: a client's documents object
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Document'
 *      500:
 *        message: 'Error updating document'
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
 * /documents/{id}:
 *  post:
 *    description: Save new document to DB
 *    summary: for saving new document to DB
 *    tags:
 *      - documents
 *    requestBody:
 *      description: Document object to to be saved to DB
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Document'
 *    responses:
 *      200:
 *        description: a client's documents object
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Document'
 *      500:
 *        message: 'Error updating document'
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

module.exports = router;

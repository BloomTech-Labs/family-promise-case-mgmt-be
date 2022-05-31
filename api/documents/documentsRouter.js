const router = require('express').Router();
const Documents = require('./documentsModel');

router.post('/', (req,res) => {
    const s3 = new AWS.S3();
    const fileName = req.body.fileName;
    const fileType = req.body.fileType;
  
    const s3Params = {
      Bucket: S3_BUCKET,
      Key: fileName,
      Expires: 500,
      ContentType: fileType,
      ACL: 'public-read'
    };
  
    
  s3.getSignedUrl('putObject', s3Params, (err, data) => {
      if(err){
        console.log(err);
        res.json({success: false, error: err});
      }
  
      
  const returnData = {
        signedRequest: data,
        url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
      };
  
      res.json({success:true, data:{returnData}});
    });
  });


module.exports = router;

require('dotenv').config()
const fs = require('fs')
const S3 = require('aws-sdk/clients/s3');

const bucketName = process.env.AWS_BUCKET
const region = process.env.AWS_DEFAULT_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY_ID
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY
const token = process.env.AWS_SESSION_TOKEN

const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey,
    token
});

function uploadFile(file){
    const fileStream = fs.createReadStream(file.path)

    const uploadParams = {
        Bucket: bucketName,
        Body: fileStream,
        Key: file.filename
    }

    return s3.upload(uploadParams).promise()

}

exports.uploadFile = uploadFile
const {
  PutObjectCommand,
  S3Client
} = require('@aws-sdk/client-s3')

module.exports.save = async(name, data) => {
  const params = {
    Bucket: 'pizza-luvrs-lw',
    Key: `pizzas/${name}.png`,
    Body: Buffer.from(data, 'base64'),
    ContentEncoding: 'base64',
    ContentType: 'image/png'
  }
  const client = new S3Client({region: 'us-west-1'})
  const command = new PutObjectCommand(params)
  await client.send(command)

  return `//pizza-luvrs-lw.s3.us-west-1.amazonaws.com/${params.Key}`
}
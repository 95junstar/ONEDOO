const Image = mongoose.model('Image', schema.imageSchema)
var mongooseResult = await Image.find({hash:hash},(err,res)=>{return res})
if(mongooseResult.length!=0){
  Image.update({$inc: {request : 1}},(err,res)=>{
    console.log(res);
  })
  var imageInfo = {
    success:      true,
    hash:         res[0].hash,
    predictions:  res[0].predictions,
    top:          res[0].top,
    bottom:       res[0].bottom,
    left:         res[0].left,
    right:        res[0].right,
    path:         fileName,
  }
  response.json(imageInfo)

  fs.unlink('userUpload/'+fileName, (err) => {
    if (err) {
      console.error(err)
    }
  })
}
const Image = mongoose.model('Image', schema.imageSchema);
app.post('/userTrain', (request, response)=>{
  update = {}
  switch(request.body.userTrain){
    case 'Chaewon':
      update = {voteChaewon : 1}
      break
    case 'Yuri':
      update = {voteYuri : 1}
      break
    case 'Yena':
      update = {voteYena : 1}
      break
  }
  console.log(update)
  Image.findOneAndUpdate({hash:request.body.hash},{$inc: update},(err,res)=>{
    console.log(res);
  })
  response.json({response: 'OK'})
})
var axiosResponse = await axiosRequest('userUpload/'+fileName)
if(axiosResponse['success'] == true){
    var imageInfo = {
      success:      true,
      hash:         hash,
      predictions:  axiosResponse["predictions"],
      top:          axiosResponse["top"],
      bottom:       axiosResponse["bottom"],
      left:         axiosResponse["left"],
      right:        axiosResponse["right"],
      path:         fileName,
      request:      1,
    }
    Image.create(imageInfo)
    response.json(imageInfo)
}
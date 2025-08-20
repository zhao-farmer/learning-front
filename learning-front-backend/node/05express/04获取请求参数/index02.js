let express = require('express')
let server = express();
server.get('/nums/:num', (req, resp) => {
  console.log(req.params);
  resp.send('')
})
server.listen(5050, () =>{
	 console.log('服务器已就绪')
})
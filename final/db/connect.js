const mongoose = require('mongoose')

   const connectDB = (url) => {
   mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  console.log('database connected successfully')

}

module.exports = connectDB

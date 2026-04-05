const mongoose = require('mongoose');

const url = 'mongodb+srv://prabhatmauryaa:Prabhat2004@cluster0.mofottb.mongodb.net/mydb?appName=Cluster0'

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
      
}).catch((err) => {
    console.log('err');
    
    
});

module.exports = mongoose;
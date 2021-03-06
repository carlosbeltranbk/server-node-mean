const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const conectarBD = async () =>{
    try {

        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //useFindAndModify: false
        });      
        console.log('BD conectada');  
    } catch (error) {
        console.log(error);
        process.exit(1); //detenmos la app
    }
}

module.exports = conectarBD
mongoose.Promise = global.Promise;
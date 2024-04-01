import mongoose from 'mongoose';

const dbConnect = async () => {
    try {
        const mongodbUrl = process.env.MONGODB_URL || ''; 
        
        await mongoose.connect(mongodbUrl,
            // { 
            //     useNewUrlParser: true,
            //     useUnifiedTopology: true
            // }  as ConnectOptions
            )
        .then((data)=>{
            console.log(`Mongodb connected with server`);
        })
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}
export default dbConnect;
import { MongoClient, ConnectOptions } from 'mongodb';

const dbConnect = async () => {
    try {
        const mongodbUrl = process.env.MONGODB_URL || ''; 
        console.log(`Mongodb url: ${mongodbUrl}`);
        
        await MongoClient.connect(mongodbUrl,
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
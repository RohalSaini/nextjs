import mongoose from 'mongoose';
import env from 'dotenv';
env.load
export default ((callback:any) => {
    console.log(`${process.env.URL}`);
	let db = mongoose.connect(`${process.env.URL}`);
	callback(db);
})

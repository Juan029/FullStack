import mongoose from 'mongoose';



export const connectDB = async () => {
try {

    await mongoose.connect('mongodb://localhost/merndb')
    console.log('db is concet')
} catch (error) {

    console.log(error)
}
}

import mongoose from 'mongoose'

export async function initDB() {
    const DATABASE = process.env.DATABASE_URL
    // Set up event listeners before connecting to ensure events are caught
    mongoose.connection.on('open', () => {
        console.log('Connected to database successfully')
    })
    mongoose.connection.on('error', (error) => {
        console.error('Error occurred while connecting to Database', error)
    })

    try {
        await mongoose.connect(DATABASE)
    } catch (error) {
        console.error('Failed to connect to database:', error)
    }
}

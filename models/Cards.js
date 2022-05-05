import mongoose from 'mongoose';
import {connectionString} from '../credentials.js'; // put connectionString into an object for compatibiliy reasons
const { Schema } = mongoose;

// console.log(connectionString);

mongoose.connect(connectionString, {
    dbName: 'it122',
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('open', () => {
  console.log('Mongoose connected.');
});

// define data model as JSON key/value pairs
// values indicate the data type of each key
const cardSchema = new Schema({
 title: { type: String, required: true },
 cardName: String,
 manaCost: Number,
 attackStat: Number,
 defStat: Number
});

export const Card = mongoose.model('Card', cardSchema, 'dbcards'); // the 3rd parameter is the collection name to connect to
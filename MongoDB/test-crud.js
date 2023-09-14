const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://cokolavel:password@cluster0.8q6z1wt.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true });

async function main() {
    try {
        await client.connect();
        console.log('MongoDB 접속 성공');

        const collection = client.db('test').collection('person');

        await collection.insertOne({ name: 'Jake', age: 32});
        console.log('document INSERT');

        const documents = await collection.find({ name: 'Jake'}).toArray();
        console.log('찾은 document:', documents);

        await collection.updateOne({ name: 'Jake'}, {$set: { age: 33 } });
        console.log('document UPDATE')

        const updatedDocuments = await collection.find({ name: 'Jake'}).toArray();
        console.log('갱신된 document :', updatedDocuments);
        
        //await collection.deleteOne({name: 'Jake'});
        //console.log('document 삭제');

        await client.close();
    } catch(err) {
        console.log(err);
    }
}

main();

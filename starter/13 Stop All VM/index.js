//Create a piece of code that takes a sample file and upload it to an azure storage account
const { BlobServiceClient } = require('@azure/storage-blob');
const fs = require('fs');

async function uploadFileToAzure(filePath, containerName, blobName, connectionString) {
    const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
    const containerClient = blobServiceClient.getContainerClient(containerName);
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    const data = fs.readFileSync(filePath);
    const uploadBlobResponse = await blockBlobClient.upload(data, data.length);
    console.log(`Upload block blob ${blobName} successfully`, uploadBlobResponse.requestId);
}

//Receive the path to the file, the container name, the blob name and the connection string from the command line
const filePath = process.argv[2];
const containerName = process.argv[3];
const blobName = process.argv[4];
const connectionString = process.argv[5];

uploadFileToAzure(filePath, containerName, blobName, connectionString);

//print the result to the console in the format "The file was uploaded successfully"
console.log('The file was uploaded successfully');

// Usage:
//node .\index.js .\sample.txt mycontainer sample.txt "<connection_string>"
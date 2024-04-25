//Create a node API to call command line command to destroy main.bicep

const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3000;

app.get('/destroy', (req, res) => {
    exec('az deployment sub delete --name rg-deployment-test --yes --no-wait --verbose', (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return res.status(500).send({ message: 'An error occurred while destroying main.bicep' });
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return res.status(500).send({ message: 'An error occurred while destroying main.bicep' });
        }
        console.log(`stdout: ${stdout}`);
        return res.send({ message: 'rg-deployment-test destroyed successfully' });
    });
});

//Endpoint to read resources from resource group and return as json array
app.get('/resources', (req, res) => {
    exec('az resource list --resource-group rg-deployment-test --output json', (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return res.status(500).send({ message: 'An error occurred while listing resources' });
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return res.status(500).send({ message: 'An error occurred while listing resources' });
        }
        console.log(`stdout: ${stdout}`);
        return res.send(JSON.parse(stdout));
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// Usage:
//curl http://localhost:3000/destroy
//curl http://localhost:3000/resources
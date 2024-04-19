//Create a piece of code that consume and display the value from a secret stored in Azure Key Vault receiving the secret name and the key vault URL from the command line

const { SecretClient } = require("@azure/keyvault-secrets");
const { DefaultAzureCredential } = require("@azure/identity");

// Parse command line arguments
const secretName = process.argv[2];
const vaultUrl = process.argv[3];

// Create a new instance of DefaultAzureCredential
const credential = new DefaultAzureCredential();

// Create a new instance of SecretClient
const client = new SecretClient(vaultUrl, credential);

// Get the secret value
client.getSecret(secretName).then((secret) => {
  console.log(secret.value);
}).catch((error) => {
  console.error("Error getting secret:", error);
});

// Usage:
// node .\index.js mysecret https://myvault.vault.azure.net/
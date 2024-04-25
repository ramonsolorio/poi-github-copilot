
// Create a piece of code to create a resource group in your Azure subscription

targetScope = 'subscription'

@minLength(1)
@maxLength(64)
@description('Name of the the environment which is used to generate a short unique hash used in all resources.')
param resosurceGroupName string


@minLength(1)
@description('Primary location for all resources')
param location string


resource resourceGroup 'Microsoft.Resources/resourceGroups@2021-04-01' = {
  name: resosurceGroupName
  location: location
}

output resourceGroupName string = resourceGroup.name

//Print command line usage
//az deployment sub create --name rg-deployment-test --location east-us --template-file main.bicep --parameters resourceGroupName=RG1 

//Print command line example to destroy bicep resources
//az deployment sub delete --name rg-deployment-test --yes --no-wait --verbose

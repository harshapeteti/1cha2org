[//]: # (SPDX-License-Identifier: CC-BY-4.0)

# Hyperledger Fabric 2.x Ledger database



Here a simple ledger database is being produced using the Hyperledger fabic version 2.x. This readme file is only going to give you a brief idea on how to start a fabric, run the chaincode and shut down the fabric.
To learn more about Hyperledger Fabric, visit the [Fabric documentation](https://hyperledger-fabric.readthedocs.io/en/latest).

## Getting started with the Fabric

To deploy the Fabric , you need to download the Fabric Docker images and the Fabric CLI tools. First, make sure that you have installed all of the [Fabric prerequisites](https://hyperledger-fabric.readthedocs.io/en/latest/prereqs.html). You can then follow the instructions to [Install the Fabric Samples, Binaries, and Docker Images](https://hyperledger-fabric.readthedocs.io/en/latest/install.html) in the Fabric documentation. In addition to downloading the Fabric images and tool binaries, the Fabric samples will also be cloned to your local machine.

## Test network

The [Fabric test network](test-network) in the samples repository provides a Docker Compose based test network with two
Organization peers and an ordering service node. You can use it on your local machine to run the samples listed below.
You can also use it to deploy and test your own Fabric chaincodes and applications. To get started, see
the [test network tutorial](https://hyperledger-fabric.readthedocs.io/en/latest/test_network.html).

# Deploying the 'ledger' chaincode on the Fabric
In order to start and deploy the fabric follow the below steps.
* create a folder named 'fabric-samples' and the clone the above repo in the 'fabric-samples' folder
* In order to start the fabric go to the following path 
* fabric-samples/ledger/
* Now, enter the following command in your terminal
* ./startFabric.sh 
* now the above command starts the fabric using the script written in
* fabric-samples/ledger/startFabric.sh/ 
* the above command starts all the docker containers that are required to run the fabric

# Enrolling Admin and Users 

 once the chaincode is initialised, all there's left to do are the below steps.

within your terminal change to the following path

* /ledger/javascript/ *

now enter the following commands

1. node enrollAdmin.js 
* here we're enrolling an admin on the network

2. node registerUser.js
*here we're registering a user on the network using the admin access 

3. node invoke.js
* here we're writing the data onto the database 

4. node query.js
* here we're querying and saving the data onto the database 

# Accessing the Database

Now, the data has be queried onto a blockchain network 
the default ports for the data base are 
1. 5984
2. 7984

*The data in the organizations can be checked within your localhost
1. org1: localhost:5984/_utils
2. org2: localhost:7984/_utils

once you land in those pages it asks you for a username and password.
* On line #38 of the following folder 
* Fabric-scripts/chaincode/ledger/javascript/lib/enrollAdmin.js 
* You can find the default written ID and Password and which can be changed.

# Shutting down the Fabric:

In order to shut down the fabric follow the below steps
* Change to the below folder path
* fabric-samples/ledger/
* Now run the below command
* ./networkDown.sh
* The above commands stops all the docker containers which are active
* All the saved data on the fabric is also going to be erased




#!/bin/bash
#echo "Provisioning virtual machine..."
sudo yum -y update
sudo yum -y install epel-release htop vim 

#START RESOLVE LUMINATY DEPENDENCIES

sudo yum -y install nodejs
sudo npm -y install -g luminati-io/luminati-proxy

#FINISH  RESOLVE LUMINATY DEPENDENCIES

echo “check your NODE version:”
node -v 

echo “check your NMP version:”
npm -v
echo "### ALL DONE! ###"

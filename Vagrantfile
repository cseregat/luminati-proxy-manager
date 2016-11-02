
Vagrant.configure(2) do |config|
  config.vm.box = "jimmidyson/centos-7.1"
  config.vm.network "forwarded_port", guest: 80, host: 8080
  config.vm.network "forwarded_port", guest: 443, host: 8081
  
  #run vagrant plugin install vagrant-vbguest the first time to update guest additions
  config.vm.provider "virtualbox" do |v|
    v.memory = 6000
    v.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
  end
  #
  config.vm.provision :shell, path: "provision/setup.sh"

  config.ssh.insert_key = false

end


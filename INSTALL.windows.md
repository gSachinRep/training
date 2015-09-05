# Instructions for installing and running this vagrant under Windows #

## Vagrant Installation ##

**note: All installers are available on the file server.**

1. Make sure VTx is enabled on your computer.
1. Install virtualbox. Ensure the version is 4.3.x. The 5.x versions of
 virtualbox have problems with symlinks so you will run into troubles
 running npm.
1. Install Vagrant.
1. Install git bash.
1. Allow for symlinks from the guest to host. Open the windows terminal as
administrator and type in the following ...
```
fsutil behavior set SymlinkEvaluation L2L:1 R2R:1 L2R:1 R2L:1
```
1. restart your computer.


## Running vagrant ##

1. Run the git-bash shell as administrator. Note: Git bash has to be runs as
administrator, else symlinks will not work.
1. Pull the source from github - ``` git clone git@github.com:stackroute/vagrant-html-bootstrap.git ```
2. cd into the newly cloned directory.
3. run ``` vagrant up ``` to create or start an instance.
4. run ``` vagrant ssh ``` to enter the vagrant instance.
5. Inside the vagrant box run ``` static /vagrant ``` to start the static webserver. Open the
   url http://127.0.0.1:8080/ in the browser to access server.
6. Open the cloned directory with Atom or Sublime and start coding!!!

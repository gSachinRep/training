class nodejs {

  exec { 'run update script':
    command => '/usr/bin/curl --silent --location https://deb.nodesource.com/setup_0.12 | /bin/bash -'
  }
  package { 'nodejs':
    ensure  => installed,
    require  => Exec['run update script'],
  }
  file { ["/home/vagrant/node_modules"]:
    ensure  => "directory",
  }
  file { "/vagrant/node_modules":
      ensure   => 'link',
      target   => '/home/vagrant/node_modules'
  }

}

include nodejs

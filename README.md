# pretty-hate-machine
My personal kickstarter for MEAN applications. It's based on [scotch.io](http://scotch.io) tutorials.

## download
* git clone https://github.com/wardialer/pretty-hate-machine.git

## usage
###### launch developer version
* npm install
* bower install
* grunt

###### generate distribution package
* grunt build

This will generate a compressed archive under 'public/dist/' folder. 
To run the distribution version:
* extract the files
* npm install --production
* bower install
* node server.js

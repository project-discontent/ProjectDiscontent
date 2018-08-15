This repository is the source code for projectdiscontent.com. It uses preact (a react variant) to render components like the navbar and footer. This is probably overkill.

## Set up
I've tried to list the setup steps with some of the prerequisites necessary for a normal react/js app. Let me know if any of this is unclear or if you get stuck.

*Dependencies*
* Open your command line tool and go to the directory you'd like to run the app from. I keep a `/Projects` folder in my home directory. When you open your command line tool, you can navigate there with `cd ~` (`cd` is "change directory", `~` is your home directory, usually your name). You can create a projects folder with `mkdir Projects` (`mkdir` is "make directory"). `cd ~/Projects` to enter the new `Projects` folder.

* Clone the repo with `git clone git@github.com:project-discontent/ProjectDiscontent.git`
* You can enter the new directory with `cd ~/Projects/ProjectDiscontent`
* [`homebrew`](https://brew.sh/) is like a command line app manager for macOS. You can get by without it, but it will make the next steps much easier.
* [`node.js`](https://nodejs.org/en/) You will need to have node installed to run this project. It was built on Node version 8.9.2. You can check the version on your computer by using `node --version` on the command line. If you are having trouble during setup, make sure that you have the correct version of node installed. [`nvm`](https://github.com/creationix/nvm) (Node Version Manger) can be useful if you already have another version installed.
* [`yarn`](https://yarnpkg.com/en/docs/install) can be installed with `homebrew`. There are instructions at that link. Yarn is a package manager that will install the rest of the dependencies for the project. This was built with yarn version `1.5.1`, so check that if you run into difficulties. Once you've installed yarn, the next steps should be straightforward.
* Install dependencies with `yarn install`. This will look at the `package.json` file in the root and install the rest of the necessary software to run the website.
* `yarn start` will start the dev server. Once it is up and running, you can see the website by going to `http://localhost:1234`

*Development*
* The dev server should live reload whenever you save a change, but if you don't see your change reflected, just refresh the page.

* Pretty much the entire page lives in `src/components/Main/index.js`. Once you're in there, if you are familiar with html, you should have very little trouble navigating.

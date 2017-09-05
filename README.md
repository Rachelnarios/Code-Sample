# Instructions
This repository is served for two purposes. First, all tutorials, resources and sample codes will be updated to this repository. You should sync the latest content from the upstream repository before every recitation. This repository is also where you submit your solutions to the recitation questions.

### Programming Environment
You are required to do all recitation exercises and labs on the class virtual machine (based on Ubuntu Linux). To get the virtual machine running on your personal desktop or laptop, take the following steps (note that recitation exercises and labs share the same programming environment, you only have to this once).

* Step 1. Download the Virtualbox virtual machine monitor Version 5.1.26 (Please just use version 5.1.26 and not any other version.) Choose the right binary to download according to the type of operating system running on your laptop.
* Step 2. Download the class virtual machine image [here](http://news.cs.nyu.edu/~fegin/nyu-cso-17fall/ubuntu16.04.ova). This file is fairly large (1.8GB), so you need to be patient.
* Step 3. Install and launch Virtualbox. On the Virtualbox application toolbar, under the Menu item "File", click on "Import appliance...", and choose the previously downloaded ubuntu16.04.ova file when prompted.
* Step 4. After importing, start the virtual machine named "cso17-VirtualBox" and log in using the username and password given in Piazza). Change your password.

### Recitation Repository Initialization
```
$ cd /home/cso/cso
$ git clone https://github.com/nyu-cso-17fall/recitation-YOUR_GITHUB_USER_NAME
  # For example, my user name is fegin and the command is like the next line.
  # git clone https://github.com/nyu-cso-17fall/recitation-fegin
$ git remote add upstream https://github.com/nyu-cso-17fall/recitation
$ git pull upstream master
$ git push
$ git config --global user.email "YOUR_EMAIL_ON_GITHUB"
$ git config --global user.name "YOUR_ID_ON_GITHUB"
```

### Sync 
Please sync before doing a new recitation exercise.
```bash
$ git pull upstream master
$ git push
```

### Submit Solutions
When you finish the exercises, please submit the files (will be specified on the recitation page).
```
$ git add FILES_YOU_NEED_TO_SUBMIT
$ git commit -m "some comments"
$ git push
```

### Useful Links
#### Git
https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf
https://www.git-tower.com/blog/git-cheat-sheet/

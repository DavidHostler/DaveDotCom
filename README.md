Hi all, it seems you've found the backend for my newly minted personal website.
It's written in Python using Django (again my favourite framework for all things REST).
You might be thinking that maybe I'm doing too much to show off by adding a REST API to my
site. In my defence, there's actually a pretty solid reason to do this.

### Ok, so here me out...

Recently, I came across some corrupted files in the git tracking for the frontend of this project, 
likely due to some type of incompatibility between file versions across branches. 
Instead of spending 10 minutes going through the issue, I instead decided that I'd remove these files,
reinitialize git, recommit my most local project with all of its newly added bells and whistles, and then simply push it all back to the original master branch, thereby updating my codebase.

The issue with this is that now I found myself having to recommit tons of node modules, image data and new javascript packages to the repo all over again. Github has a pretty solid 100 MB limit per commit.
Of course, I originally resolved this first by adding the node_modules folder to the .gitignore for now, and then I could have added some of the .jpg's if I really wanted to stay within that bandwidth, and then removing them from said .gitignore and committing the difference.

Here's the problem- I don't like repeating mistakes over and over again, nor do I like making unnecessary work for myself. Having a backend server running would at least allow me to hold all the key site data (images, text, etc) in a database separate from the React Project. That way, if I ever 
have to reinitialize my git, I don't have to spend unnecessary amounts of time making a ton of piecewise commits. Again, it's one of many reasons why backend development exists in the first place, on top of security concerns. 

Additionally, it would be way easier to update the UI through a REST API then adding massive sentences to JSON object in React, and I wouldn't have to hand-code such objects in React if the data from the server is simply rendered properly through a series of props. 

Last thing here- I did not name this server after the infamous Texas cult. There is a metal song "Davidian" by the band Machine Head, famous for having one of the coolest breakdowns of all time, 
second only to Domination by Pantera or the famous Slayer's Raining Blood. 
As a matter of fact, the virtual environment is named "breakdown" because I wasn't feeling too creative when I came up with it.
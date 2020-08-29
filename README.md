# Adinkra

![Image](https://raw.githubusercontent.com/Skywalker427/adinkra/master/public/images/adinkra-sm.jpg)	

Photo by [Nate Greno](https://unsplash.com/@nategreno?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/adinkra?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)


> Adinkra are symbols that represent concepts or aphorisms. Adinkra are used extensively in fabrics and pottery among the Ashantis of Ashanti Kingdom and the Baoules who historically migrated to Ghana.

> The symbols have a decorative function but also represent objects that encapsulate evocative messages that convey traditional wisdom,  aspects of life or the environment.


---------------------------------------------------------------------------------------


## The API

> Check it out live [here](https://adinkra.herokuapp.com)

### Endpoints

- GET `/`
- GET `/symbols`

#### Query String Parameters

> The `/symbols` route accepts the query string parameters `name`, `meaning` and `synopsis` for returning specific symbols that match those searches.

> To get all symbols with '*Nyame*' in the name, you would send `/symbols?name=Nyame`

> To get all symbols with 'star' in the meaning you would send `/symbols?meaning=star`
> Same for '*star*' in the synopsis if you follow my drift.

> You can also combine query string params. 
> `/symbols?name=Nyame&meaning=heavens&synopsis=courage` will return all symbols than contain '*Nyame*' in the name or 'heaven' in the meaning or '*courage*' in the synopsis.

## Example Queries
>> **GET** https://adinkra.herokuapp.com/symbols?name=Nyame&meaning=heavens&synopsis=courage

>> **GET** https://adinkra.herokuapp.com/symbols?name=Nyame

>> **GET** https://adinkra.herokuapp.com/symbols?meaning=star


> ![Get request](./postman.jpg?raw=true "Postman sample")


## To Contribute

## Fork this repository

Fork this repository by clicking on the fork button on the top of this page.
This will create a copy of this repository in your account.

## Clone the repository
Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the clone button and then click the *copy to clipboard* icon.

Open a terminal and run the following git command:

```
git clone "url you just copied"
```
where "url you just copied" (without the quote marks) is the url to this repository (your fork of this project). See the previous steps to obtain the url.

For example:
```
git clone https://github.com/this-is-you/adinkra.git
```
where `this-is-you` is your GitHub username. Here you're copying the contents of the first-contributions repository on GitHub to your computer.

## Create a branch

Change to the repository directory on your computer (if you are not already there):

```
cd adinkra
```
Now create a branch using the `git checkout` command:
```
git checkout -b <add-your-new-branch-name>
```

For example:
```
git checkout -b your-branch-name
```
(The name of the branch does not need to have the word *add* in it, but it's a reasonable thing to include because the purpose of this branch is to add your name to a list.)

## Make necessary changes and commit those changes

If you go to the project directory and execute the command `git status`, you'll see there are changes.


Add those changes to the branch you just created using the `git add` command:

```
git add .
```

Now commit those changes using the `git commit` command:
```
git commit -m "<Descriptive Commit Message>"
```


## Push changes to GitHub

Push your changes using the command `git push`:
```
git push origin <add-your-branch-name>
```
replacing `<add-your-branch-name>` with the name of the branch you created earlier.

## Submit your changes for review

If you go to your repository on GitHub, you'll see a  `Compare & pull request` button. Click on that button.

Now submit the pull request.


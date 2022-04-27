# How to commit to this repo

## Before you commit your code

Create a new branch with the name of the ticket assigned to you.

```bash
git checkout -b [name of ticket]
```

After you make your changes, stage them by typing

```bash
git add -A
```

or

```bash
git add .
```

This will stage all of your changes.

Commit your changes and add a commit message. Your commit message should have the following format.

```bash
git commit -m "[type]: [description]"
```

Where the type could be any of these
|Feature| Description|
|--------|--------|
|Feat |The new feature you're adding |to a particular application
|Fix| A bug fix
|Style| Feature and updates related to styling
|Refactor| Refactoring a specific section of the codebase
|Test| Everything related to testing
|Docs| Everything related to documentation
|Chore| Regular code maintenance.

Push your commited changes to a new branch the remote repository.

```bash
git push -u origin [name of ticket]
```

This will push your changes into a new branch with the name of your ticket.

After you push your code, pull all the new changes may have been made in the main branch into your current branch.

```bash
git pull origin main
```

Create a new pull request on github and if everything is a-ok, your changes will be merged with the main branch

Move your ticket from "In progress" to "Done" on the project board.

Checkout to main on your local machine.

```bash
git checkout main
```

Pull all the changes that have been made in the main branch.

```bash
git pull
```

You can delete the ticket branch you created. Note that this will only delete it from your local machine and not the remote repository.

```bash
git branch -D [name of ticket]
```

P.S: If you have any problems following this tutorial, ask for help in the group chat.

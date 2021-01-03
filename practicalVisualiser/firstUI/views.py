from django.shortcuts import render
from github import Github

# Create your views here.
g = Github(token) #take token from github
repository = 'CSU33012_Practical_visualisation'
username = 'crowlec8'
user = g.get_user(username) 
repo = user.get_repo(repository)
contributors = repo.get_contributors() #code taken from previous api project

#function used to return lists of repositories
#def getRepoNames():
#    repoNameList = []
#    for repo in user.get_repos():
#        repoName = repo.name
#        repoNameList.append(repoName)
#    return repoNameList

#function used to return lists of commits per repositories
#def getTotalRepoCommits():
#    totalCommitsLists = []
#    for repo in user.get_repos():
#        totalCommits = repo.get_commits().totalCount
#        totalCommitsLists.append(totalCommits)
#    return totalCommitsLists

#function used to return lists of contributors
def getContributorsRepo():
    listOfContributors = []
    for contributor in contributors:
        contributorName = contributor.login
        listOfContributors.append(contributorName)
    return listOfContributors

#function used to return lists of contributers' commits
def getContributorsCommits():
    listOfCommits = []
    for contributor in contributors:
        contributorCommits = repo.get_commits(author = contributor.login).totalCount
        listOfCommits.append(contributorCommits)
    return listOfCommits


def indexPage(request):
#    varA = getRepoNames()
#    varB = getTotalRepoCommits()
    varC = getContributorsRepo()
    varD = getContributorsCommits()
    context={'varC':varC,'varD':varD}
    return render(request,'index.html',context)

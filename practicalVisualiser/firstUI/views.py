from django.shortcuts import render
from github import Github

# Create your views here.
token = '0d00218b7cf191f95accfec3cb5ceff8de5f4ad0'
g = Github(token) #token used for more github
gRepo = 'github-yesod'
username = 'esjmb'
user = g.get_user(username) #code taken from previous api project
repo = user.get_repo(gRepo)
contributors = repo.get_contributors()

def getRepoNames():
    repoNameList = []
    for repo in user.get_repos():
        repoName = repo.name
        repoNameList.append(repoName)
    return repoNameList

def getTotalRepoCommits():
    totalCommitsLists = []
    for repo in user.get_repos():
        totalCommits = repo.get_commits().totalCount
        totalCommitsLists.append(totalCommits)
    return totalCommitsLists

def getContributorsRepo():
    listOfContributors = []
    for contributor in contributors:
        contributorName = contributor.name
        print(contributorName)
        listOfContributors.append(contributorName)
    return listOfContributors

def getContributorsCommits():
    listOfCommits = []
    for contributor in contributors:
        contributorCommits = repo.get_commits(author = contributor.login).totalCount
        print(contributorCommits)
        listOfCommits.append(contributorCommits)
    return listOfCommits

#for contributor in contributors:
#    contributorName = contributor.name
#    contributorCommits = repo.get_commits(author = contributor.login).totalCount
#    print(contributorName)
#   print(contributorCommits)
#    listOfContributors.append(contributorName)
#    listOfCommits.append(contributorCommits)





def indexPage(request):
    varA = getRepoNames()
    varB = getTotalRepoCommits()
    varC = getContributorsRepo()
    varD = getContributorsCommits()
    context={'varA':varA,'varB':varB,'varC':varC,'varD':varD}
    return render(request,'index.html',context)

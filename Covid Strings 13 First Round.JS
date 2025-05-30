doc.type html
html lang en 
script
header=document create.element(header)
header.style.backgroundcolor=#4caf50
header.style.color=’white’
header.style.padding=’10px’
header.style.textalign=’center’
header.style.text.fontsize=’24px’
header.textcontent=’welcome to covid strings13 first round’
document appendchild(header)
<header.html>
heading variables 
the heading numbers that determine where each heading and subheading go 
heading1=first round overview
heading2=matchups
heading3=first round questions
heading4=advancing rounds
subheading1=team stealing
subheading2=result for matchup1
subheading3=result for matchup2
subheading4=result for matchup3
subheading5=result for matchup4
<header.html>
first round overview
an overview of the first round of covid strings13 including seeding 
html
head
utf8
viewportcontent=width=device-width,initial-scale=one
title covid strings13 first round bracket
div id bracket class bracket div
script src bracket.js
link rel= stylesheet href=css
head
body
bracket-container{}
matchup
solid zero;
padding 
text align center 
filename=covid strings13 first round.js
first round=(highest overall seed ,second highest seed third highest seed first middle seed, second middle seed,  third lowest seed ,second lowest seed,lowest overall seed)
highest overall seed = 1 seed
second highest seed=2 seed
third highest seed=3 seed
firstmiddleseed=4seed
second middle seed = 5 seed
third lowest seed= 6 seed
second lowest seed = 7 seed
lowest overall seed = 8 seed
teams=[blue,violet,turquoise,green,teal,magenta,white,black]
<header.html>
matchups 
for first round there are 8 teams which equals 4 matchups 
matchup1=(magenta versus turquoise)
matchup2=(white versus violet)
matchup3=(black versus blue)
matchup4=(teal versus green)
bracket =getelementbyid(bracket);
document.createelement 
matchupdiv.classname=(matchup)
matchupdiv.inner html =[matchup]
rounddiv.appendchild(matchup)
for (i in covid strings first round)
round div=create element
round div class name=covid strings11 first round
bracket.appendchild(round div)
if (event.target.covid strings seed list.contains(matchup))
event.target.covid strings seed list.toggle
else:
addmatchup
<header.html>
first round questions
the questions asked in the first round of the covid strings contest
java util.scanner
java.util
first round questions=questions[1-16]
collections.shuffle(arrays.aslist(questions)
question1
question2
question3
question4
question5
question6
question7
question8
question9
question10
question11
question12
question13
question14
question15
question16
if selectedanswer==correct:
return true
else:
return false
if selectedanswer=incorrect
return false
else:
return true
team1=lower ranked seed
team2=the higher seeded opponent
points:10 points or 20 points
<subheading.html>
team stealing
steal points(stealingteam,victimteam,pointstosteal)
if(victimteam.points>=pointtosteal)
victimteam.points-=pointtosteal;
stealingteampoints+=pointstosteal
console.log([stealingteam.name} stole points from {victim team name}!)
else:
console.log({victimteam.name} doesnt have enough points to steal)
if teams final answer==incorrect:
opposing team steals
else:
change covid strings matchup score
<header.html>
advancing rounds
contains criteria required for a team to advance to the second round 
advancingteam=slice(current teams)
<subheading.html>
result for matchup1 
the code for how to determine the end result of matchup1 of covid strings 
result=declarewinner(matchup1)
if turquoise score>=forty:
console.log(turquoise waves win)
else:
remain
if magenta score>=forty:
console.log(magenta magnetizers win)
else:
remain
<subheading.html>
result for matchup2 
the code for how to determine the end result of matchup2 of covid strings 
result=declarewinner(matchup2)
if violet score>=forty:
console.log(violet relivers win)
else:
console.log(white transit angels win)
result=declarewinner(matchup3)
if blue score>=forty:
console.log(blue curve crushers win)
else:
console.log(black night riders win)
result=declarewinner(matchup4)
if green score>=forty:
console.log(green peacemakers win)
else:
console.log(teal terminators win)
return filename

//change 5 to the total number of questions
var total=10
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Someone knows their Friends trivia!"
compliments[1]="It's like you're my lobster!"
compliments[2]="Oh. My. God!"
compliments[3]="I KNOW!"
compliments[4]="How you doin'? You're doing great!"
compliments[5]="Cleaning up like Monica would!"
compliments[6]="The whole gang approves!"
compliments[7]="You are on FIRE!"
compliments[8]="Super Fan!"
compliments[9]="Could you BE any more correct?"
compliments[10]="You deserve the GELLER CUP!"


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="What is the name of the coffee shop where the characters from Friends hang out?"
choice1[1]="Coffee House"
choice1[2]="Central Perk"
choice1[3]="Java Joe's"
choice1[4]="The Daily Grind"

question[2]="What is Joey's signature pick-up line?"
choice2[1]="How you doin'?"
choice2[2]="What's up?"
choice2[3]="Oh. My. God!"
choice2[4]="No way"

question[3]="What does Ross do for a living?"
choice3[1]="Dentist"
choice3[2]="Lawyer"
choice3[3]="Paleontologist"
choice3[4]="Accountant"

question[4]="What is the name of Phoebe's sister?"
choice4[1]="Amy"
choice4[2]="Jill"
choice4[3]="Ursula"
choice4[4]="Janice"

question[5]="What is the name of Ross's pet monkey?"
choice5[1]="Max"
choice5[2]="Marcel"
choice5[3]="Milo"
choice5[4]="Charlie"

question[6]="Which character keeps insisting 'We were on a break!'?"
choice6[1]="Chandler"
choice6[2]="Joey"
choice6[3]="Ross"
choice6[4]="Mike"

question[7]="Who was Chandler and Joey's TV Guide addressed to?"
choice7[1]="Mr. Chandler Bing"
choice7[2]="Miss Chanandler Bong"
choice7[3]="Mr. Chandler Bong"
choice7[4]="Miss Chandler Bing"

question[8]="Which character works as a chef?"
choice8[1]="Rachel"
choice8[2]="Monica"
choice8[3]="Phoebe"
choice8[4]="Janice"

question[9]="What is the name of Phoebe's most famous song?"
choice9[1]="Smelly Cat"
choice9[2]="Little Dog"
choice9[3]="Crazy Bird"
choice9[4]="Happy Monkey"

question[10]="Friends ended after how many seasons?"
choice10[1]="8"
choice10[2]="9"
choice10[3]="10"
choice10[4]="12"

solution[1]="b"
solution[2]="a"
solution[3]="c"
solution[4]="c"
solution[5]="b"
solution[6]="c"
solution[7]="b"
solution[8]="b"
solution[9]="a"
solution[10]="c"

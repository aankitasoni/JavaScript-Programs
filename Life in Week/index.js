/** To create a function that tells how many days, weeks and months left if we live until 90 years old. **/

function lifeInWeeks(age) 
{
    var yearsRemaining = 90 - age;
    var days = yearsRemaining * 365;
    var weeks = yearsRemaining * 52;
    var months = yearsRemaining * 12;
    console.log("You have "+ days +" days, "+ weeks +" weeks, and "+ months + " months left.")
}
lifeInWeeks(10);

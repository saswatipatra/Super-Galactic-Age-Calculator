
export function calculate_age(dob){
  var today = (new Date()).getTime();
  var birth= new Date(dob[0], (dob[1]-1), dob[2]);
  let birthdate = birth.getTime();
  //		age is your age in days
  var age = (today - birthdate) / (1000 * 3600 * 24);
   return age;
 }

// Function to calcuate year
export function getPlanetYear(age, orbit)
{
  let year = (10000 * age / orbit);
  if ( year < 1 )
  return 0 ;
  else
  return (parseInt(year ,10 ))/10000;
}
// Function to calcuate day
export function getPlanetDays(age, rotaion)
{
  let day = (10 * age / rotaion);
  if ( day < 1 )
  return 0 ;
  else
  return (parseInt(day ,10 ))/10;
}
// Function to calcuate number of expected Years
export function getRemainingLife(age)
{
  var life;
  if (age<1){
    life=70;
    return (life + " It's a long Journey");
  }else if (age>=1 && age<20) {
     life=50;
    return life;
  }else if (age>20 && age<30) {
     life=40;
    return life;
  }else if (age>30 && age<40) {
     life=40;
    return life;
  }else if (age>40 && age<50) {
     life=30;
    return life;
  }else if (age>50 && age<60) {
     life=20;
    return life;
  }else {
    return ("Life is too short. Enjoy it!");
  }
}

$(function(){
function calc(dateString) {
    var now = new Date();
    var today = new Date(now.getYear(),now.getMonth(),now.getDate());
  
    var yearNow = now.getYear();
    var monthNow = now.getMonth();
    var dateNow = now.getDate();
  
    var dob = new Date(dateString.substring(6,10),
                       dateString.substring(0,2)-1,                   
                       dateString.substring(3,5)                  
                       );
  
    var yearDob = dob.getYear();
    var monthDob = dob.getMonth();
    var dateDob = dob.getDate();
    var age = {};
    var ageString = "";
    var yearString = "";
    var monthString = "";
    var dayString = "";
  
  
    yearAge = yearNow - yearDob;
  
    if (monthNow >= monthDob)
      var monthAge = monthNow - monthDob;
    else {
      yearAge--;
      var monthAge = 12 + monthNow -monthDob;
    }
  
    if (dateNow >= dateDob)
      var dateAge = dateNow - dateDob;
    else {
      monthAge--;
      var dateAge = 31 + dateNow - dateDob;
  
      if (monthAge < 0) {
        monthAge = 11;
        yearAge--;
      }
    }
  
    age = {
        years: yearAge,
        months: monthAge,
        days: dateAge
        };
  
    if ( age.years > 1 ) yearString = " years";
    else yearString = " year";
    if ( age.months> 1 ) monthString = " months";
    else monthString = " month";
    if ( age.days > 1 ) dayString = " days";
    else dayString = " day";
  
  
    if ( (age.years > 0) && (age.months > 0) && (age.days > 0) )
      ageString = age.years + yearString + ", " + age.months + monthString + ", and " + age.days + dayString;
    else if ( (age.years == 0) && (age.months == 0) && (age.days > 0) )
      ageString = "Only " + age.days + dayString;
    else if ( (age.years > 0) && (age.months == 0) && (age.days == 0) )
      ageString = age.years + yearString;
    else if ( (age.years > 0) && (age.months > 0) && (age.days == 0) )
      ageString = age.years + yearString + " and " + age.months + monthString;
    else if ( (age.years == 0) && (age.months > 0) && (age.days > 0) )
      ageString = age.months + monthString + " and " + age.days + dayString;
    else if ( (age.years > 0) && (age.months == 0) && (age.days > 0) )
      ageString = age.years + yearString + " and " + age.days + dayString;
    else if ( (age.years == 0) && (age.months > 0) && (age.days == 0) )
      ageString = age.months + monthString;
    else ageString = "";
    return ageString;
  }
let work=calc('01/24/2018');
$("#workCount").text(" for "+work);


function parseDate(str) {
  var mdy = str.split('/')
  return new Date(mdy[2], mdy[0] - 1, mdy[1]);
}

function daydiff(first, second) {
  return (second - first) / (1000 * 60 * 60 * 24)
}

function monthDiff(start, end) {
  var tempDate = new Date(start);
  var monthCount = 0;
  while ((tempDate.getMonth() + '' + tempDate.getFullYear()) != (end.getMonth() + '' + end.getFullYear())) {
      monthCount++;
      tempDate.setMonth(tempDate.getMonth() + 1);
  }
  return monthCount + 1;
}
    
    function calcTime(d, offset) {
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    var nd = new Date(utc + (3600000*offset));
        return nd;
    }
let dayInWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let bDate="4/25/";
let newDate=calcTime(new Date(),'+5.75');
let dateToday=new Date(parseInt(newDate.getMonth()+1)+"/"+newDate.getDate()+"/"+newDate.getFullYear());
let birthDate=new Date(bDate+newDate.getFullYear());
let weekDay="";
let Message="Wish me ";

let diff=0;
let already=true;

if(birthDate>=dateToday){
  diff=daydiff(dateToday,birthDate).toFixed();
  weekDay=dayInWeek[new Date(bDate+new Date().getFullYear()).getDay()];
  already=false;

}
else if(dateToday>=birthDate && daydiff(birthDate,dateToday).toFixed()<7){
  diff=daydiff(birthDate,dateToday).toFixed();
  weekDay=dayInWeek[new Date(bDate+new Date().getFullYear()).getDay()];
  already=true;
}
else{
  birthDate=new Date(bDate+parseInt(newDate.getFullYear()+1));
  diff=daydiff(dateToday,birthDate).toFixed();
  weekDay=dayInWeek[new Date(bDate+parseInt(newDate.getFullYear()+1)).getDay()];
  already=false;
}
$("#msgBirthday").text(getMessage(diff));
function getMessage(diff){
  if(diff==0)
  Message+="Today";
  else if(diff==1 && !already)
  Message+="Tommorow";
  else if(diff==1 && already)
  Message="Yesterday was my Birthday.";
  else if(!already && diff<7 && diff>1)
  Message+="on coming "+weekDay;
  else if(already && (diff<7 && diff>1))
  Message="My Birthday was on last "+weekDay;
  else if(diff>7 && diff<10)
  Message+="on next "+weekDay;
  else
  Message+="after "+diff+" days.";
  return Message;
}
$("#divResume").off().on("click",function(e){
   e.preventDefault(); 
   window.open('uploads/sushil-shrestha.pdf','_blank');
})
});
  
  

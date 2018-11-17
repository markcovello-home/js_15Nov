var staff = ["Aleen Y. Atkins", 
"Alvaro L. Angelos", 
"Denese Dossett", 
"Douglas Denney", 
"Earline Erickson", 
"Herman L. Hazell", 
"Homer Hirth", "Hwa Heidt", 
"Hyon G. Hampshire", 
"Issac Ingerson", 
"Jeraldine N. Joplin", 
"Jin L. Jeffrey"];


function allHaveMiddleInitials (staffList) {
  //your code h``
  outarr= [];
  for (var i=0; i<staffList.length; i++) {
    var thisitem = staffList[i]
    var thisperson = thisitem.split(" ");
    //console.log(thisperson);
//no spec on what constitutes a middle initial so nmake it up:
// if name has 3 components 
//and the middle component is length 2 
//and the last letter middle[1] === "." then it is a middel initial
//This may be a problem for things like Nelson J. Riley, Sr.
// but such are the hzards of insufficient requirements gathering and specifications
  if (thisperson.length === 3 ) {
    stmiddle = thisperson[1];
    if (stmiddle.length === 2 ) {
        if (stmiddle[1] === ".") {
            outarr.push(thisitem);
        }
    }
  }
  }
  return outarr;
}
  
  console.log(allHaveMiddleInitials(staff));


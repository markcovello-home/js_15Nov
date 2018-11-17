var bankStatementWeek002 = {
  "Jan-08": [ 3.72, 1.29 ],
  "Jan-09": [ 4.9, 7.39, 6.45, 6.83 ],
  "Jan-10": [ 8.56, 0.37, 9.68 ],
  "Jan-11": [ 6.84, 2.9, 6.73, 8.95, 4.06, 4.5, 2.74, 5.33 ],
  "Jan-12": [ 8.89, 1.23, 5.69 ],
  "Jan-13": [ 0.65, 5.54, 9.41 ],
  "Jan-14": [ 1.47, 9.9, 0.21, 8.29, 7.45, 0.38, 7.79 ]
};
var dateRange = ["Jan-08","Jan-09"];

// convertkgString2Date() converts Kevins date strings into a date so spendingPreviewExtended() can filter them
// the logic is pretty simple
function convertkgString2Date(kgstring){
	var mon2mm ={"Jan": "01",
	                "Feb": "02",
	                "Mar": "03",
                    "Apr": "04",
                    "May": "05",
                    "Jun": "06",
                    "Jul": "07",
                    "Aug": "08",
                    "Sep": "09",
                    "Oct": "10",
                    "Nov": "11",
                    "Dec": "12"};
                    //console.log("kgstring",kgstring,"end:",kgstring.substring(3,6));
                    stdate="2018-"+mon2mm[kgstring.substring(0,3)]+kgstring.substring(3,6);
                    //console.log("stdate:",stdate)
                    let thisdate = new Date(stdate);
                    return thisdate;

}
//console.log(convertkgString2Date("Jan-09"));

function spendingPreviewExtended (charges,period) {
    var totalOUT=0; //to hold total
    //console.log(charges);
	var mon2mm ={"Jan": "01",
	                "Feb": "02",
	                "Mar": "03",
                    "Apr": "04",
                    "May": "05",
                    "Jun": "06",
                    "Jul": "07",
                    "Aug": "08",
                    "Sep": "09",
                    "Oct": "10",
                    "Nov": "11",
                    "Dec": "12"};
    if (period.length !== 2) {
    	streturn= "INPUT ERROR: period must be in the form [startMon-dd, endMon-dd],";
    	streturn=streturn+"\n e.g., [\"Jan-15\", \"Dec-31\"]";
    	return streturn;
    }
        start = convertkgString2Date(period[0]);
        end = convertkgString2Date(period[1]);
       // console.log("start",start,"end",end);
    for (key in charges) {
        checkDate=convertkgString2Date(key);
        //console.log("key:", key,"checkDate:", checkDate)
        if (start <= checkDate && end >= checkDate){
        thisarr = charges[key];
        for (var i = 0; i<thisarr.length;i++){
            totalOUT+= thisarr[i];
           // console.log(totalOUT);
       }
        }
            //console.log(totalOUT);
        }
            return totalOUT;
    }
console.log(spendingPreviewExtended(bankStatementWeek002,dateRange));




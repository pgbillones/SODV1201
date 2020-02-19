
const companies = [
  {name: "Company One", category: "Finance", start: 1981, end: 2003},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];



//Filter all category with Technology

//const x= companies.filter(function(company) {
////if(company.category = 'retail')
  // return true;
//});
//console.table(x);

//const x=companies.filter(company => company.category='retial');

//Filter company name that starts between 1980- 1990

//const x= companies.filter(function(company){
//if (( company.start >= 1980)&& (company.start <=1990))
//   return true;
//});
//console.table(x)const x = companies.filter(company=>company.start >= 1980 && company.start <=1990);

//Filter Company Name that has been running for 5 year or more
//const x= companies.filter(function(company){
//if((company.end-company.start) > 5)
 //return 1;
//});
//console.table(x);
//const x= companies.filter(company =>(company.end-company.start)<5);

//filter ages > 30
//const x=ages.filter(function(age){
//if(age > 50)
 // return true;
//});
//console.table(x);
//const x=ages.filter(age=>age > 50);

//map company start date

//const x = companies.map(function(company){
//return company.start;
//});
//console.table(x);
//const x=companies.map(company=>company.start);

//map company category
//const x= companies.map(function(company){
//return company.category;
//});
//console.table(x);
//const x=companies.map(ompany=>company.category);

//map ages * 4

//const x=ages.map(function(age){
//return age *4;
//});
//console.table(x);
//const x=ages.map(age=>age *4);

//reduce -total of ages whihc is * 2
//const totalAge= ages.reduce(function(total,age){
//return total + (age * 2);
//});
//console.table(totalAge);
//const totalAge = ages.reduce(total,age => total +(age*2));

//reduce- total number of years (companies)
//const totalYears = companies.reduce(function(total,company){
//return total + (company.end - company.start);
//},0);
//console.table(totalYears);
//const totalYears = companies.reduce(total,company=>total+(company.end-company.start));

//sort company names
//const x= companies.sort(function(a,b){
//if(a > b)
//return 1;
//else
//return -1;
//});
//console.table(x);
//const x= companies.sort(a,b=>a>b :1 ? 1);

//sort company start date
//const x=companies.sort(function(a,b) {
//if(a.start < b.start)
//return 1;
//else
//return -1;
//});
//console.table(x);
//const x=companies.sort(a,b=>a.start < b.start :1 ? 1);

//sort ages
//const x=ages.sort(function(a,b){
//if(a > b)
//return 1;
//else
//return -1;
//});
//console.table(x);
//const x=ages.sort(a,b=>a>b :1 ? 1);







console.log(process.argv);

let fileName = 'getting-started-with-nextjs.md';
let newFileName = fileName.replace(/.md$/, '');
console.log(newFileName);
const regExp = '/.md$/';

let newFileName2 = fileName.replace(/.md$/, '');

console.log(newFileName2);

var inputDate = '2024-10-17';

// Create a new Date object
//var date = new Date(inputDate + 'T00:00:00Z');
console.log('getTimezoneOffset' + new Date(inputDate).getTimezoneOffset());
var adjustedDate = new Date(
  new Date(inputDate).getTime() +
    new Date(inputDate).getTimezoneOffset() * 60000
);

// Format the date using toLocaleDateString
var formattedDate = adjustedDate.toLocaleDateString('en-US', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

console.log(formattedDate);

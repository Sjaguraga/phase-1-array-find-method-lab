
/*function superbowlWin(record){
const result = record.find(record => record.result === "W");
return !!result ? result.year : undefined
}*/

function superbowlwin(record) {
return record.year === 'W';
}
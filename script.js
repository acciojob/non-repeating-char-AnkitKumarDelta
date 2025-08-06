function firstNonRepeatedChar(str) {
 // Write your code here
	let m = new Map();
for(let i of input){
	m.set(i,(m.get(i)||0)+1);
}
for(let [k,v] of m){
	if(v==1)return k;
}
return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));


'use strict'

const hashTable = [
	"", // 0
	"", // 1
	"abc", // 2
	"def", // 3
	"ghi", // 4
	"jkl", // 5
	"mno",
	"pqrs",
	"tuv",
	"wxyz" //9
]

const result = []

function printWordsUtil(number, curr_digit, output, n){
	let i
	if(curr_digit === n){
		result.push(output.join(''))
		return
	}
	for (let i=0; i < hashTable[number[curr_digit]].length; i++){
		output[curr_digit] = hashTable[number[curr_digit]][i]
		printWordsUtil(number, curr_digit+1, output, n)		
		if(number[curr_digit] === 0 || number[curr_digit] === 1){
			return
		}
	}
}

function phonedigit(number) {
	const arr_number = `${number}`.split('').map(n => Number(n))
	result.length = 0
	printWordsUtil(arr_number, 0, Array(arr_number.length), arr_number.length)
	console.log(result)
	return result 
}

module.exports = phonedigit
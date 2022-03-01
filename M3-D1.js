


/*



1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/

console.log('----------------------Ex 1----------------------------')



let a = 3
let b = 5
let first = function(a,b) {
    let sum = (a + b)
    return sum
}
console.log(first(a,b))
/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
console.log('----------------------Ex 2----------------------------')
a = 100
b = 60
let checkNumber = function(a,b) {
    let sum = a + b
    if (a=50) {
        return true
    } else if (b=50) {
        return true
    }else if (sum = 100)  {
        return true
    } else {
        return false
    }
}

console.log(checkNumber(a,b))
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
console.log('----------------------Ex 3----------------------------')
let word = "casa"
let removeChar = function (x){
    let nweWord = word.slice(1)
    return nweWord
}
console.log(removeChar(word))

/*

4)
 Create a function to find the largest of three given integers.
*/
console.log('----------------------Ex 4----------------------------')
a = 5
b = 8
c = 22

let maxN = function(a,b,c) {
    if (a>b && a>c){
        return a
    }else if (b>a && b>c){
        return b
    } else if (c>a && c>b){
        return c
    }
}
    console.log(maxN(a,b,c))


/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
console.log('----------------------Ex 5----------------------------')


a = 100
b = 44

let checkN = function(a,b) {
    if (((a<= 60 && a>= 40)|| (a>=70 && a<=100))  &&  ((b<= 60 && b>= 40)|| (b>=70 && b<=100))) {
        return 'both are ok';
    } else if ((b<= 60 && b>= 40)|| (b>=70 && b<=100)){
        return 'b is ok';
    } else if ((a<= 60 && a>= 40)|| (a>=70 && a<=100)) {
        return 'a is ok';
}}

console.log(checkN(a,b))
/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/
console.log('----------------------Ex 6----------------------------')


let word2 = 'under the rain'

let duplicator = function(x,y){
    for (let i = 0; i < y; i++) {
    console.log(x)
    }
}
console.log(duplicator(word2,4))
/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
console.log('----------------------Ex 7----------------------------')
let word1 = 'Los Angeles'
word2 = 'Las Vegas'
let word3 = 'New York'

let cityCheck = function(x,y,z){

    let arr1 = x.split(' ')
    

    if ((arr1[0]=== 'Los') || (arr1)[0]=== 'New'){
        return console.log(x)
    } else {
        return 'Blank'
    }
}
console.log(cityCheck(word2))



/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
console.log('----------------------Ex 8----------------------------')

let arr1 = [1,2,3]
let arr2 = [4,5,6]
let arr3 = [7,8,9]

let arrSum = function(a,b,c) {

    result = ((a[0]+a[1]+a[2])+(b[0]+b[1]+b[2])+(c[0]+c[1]+c[2]))
    return result
}
console.log(arrSum(arr1,arr2,arr3))


/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
console.log('----------------------Ex 9----------------------------')


let checkFor13 = function (x,y){

    if (x[0]===1 || x[2]===3){
        return x + "contain 1 or 3"
    } else if (y[0]===1 || y[2]===3){
        return y + 'contain 1 or 3'
    }else{
        return 'none of them contain them'
    }
}
console.log(checkFor13(arr1,arr3))




/*

10)

Create a function to test whether an array of integers of length 2 does not contain 1 or a 3*/





/*11)

Create a function to find the longest string from a given array of strings.*/
console.log('----------------------Ex 11--------------------------??????????????????????????????????????--')

arr1 = 'casa', 'albero','medium'

let chtNumber = function(x){

    for (let i = 0; i < x.length; i++) {
        let character = x[i].split('')
console.log(character)
        for (let i2 = 0; i2 <= character.length; i2++) {
            if (i2 === character.length){
                return i2
            }else{}
        }
    }
}
console.log(chtNumber(arr1))


/*12)
*/
console.log('----------------------Ex 12----------------------------')

let angle = 90

let findIt = function(x) {
    if(x=90){
        return 'Right'
    } else if(x>0 && x<90){
        return 'Acute'
    }else if (x>90 && x<180){
        return 'Btuse'
    }else if (x===180){
        return 'Straight'
    }
}
console.log(findIt)
    





/*
Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.

13)

Create a function to find the index of the greatest element of a given array of integers

*/ 
console.log('----------------------Ex 13----------------------------')


arr1 = [3,6,9]

let maxN = function(x) {
    
}



/*
14)

Create a function to get the largest even number from an array of integers.

16)

Create a function to check from two given integers, whether one is positive and another one is negative.

17)

Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 

18)

Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

19)

Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".

20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

*/

function countingSheep(num) {
  if (num === 0) {
    console.log('All sheep jumped over the fence')
    return
  }
  console.log (num + ': Another sheep jumps over the fence')
  countingSheep(num-1)
  
}

countingSheep(10)


function powerCalculator(baseNum, expNum) {
  if (expNum < 0) {
    return 'exponent should be >= 0'
  } else if (expNum === 0) {
    return 1
  } else {
  return baseNum * powerCalculator(baseNum,expNum-1)
  }
}

powerCalculator(10, 2)


function reverseString(str) {
  if (str.length === 0) {
    return ''
  }
  return reverseString(str.slice(1)) + str.charAt(0)
}

reverseString('beautiful')


function triangularNumber(num) {
  if (num === 1) {
    return 1
  }
  return num + triangularNumber(num-1) 
}

triangularNumber(10)


function stringSplitter(str, char, result=['']) {
  if (str.length === 0) {
    return result
  }

  if (str[0] === char) {
    result.push('')
  } else {
    result[result.length - 1] += str[0]
  }
  return stringSplitter(str.slice(1), char, result)
}

stringSplitter('20/20/2020', '/')


function fibonacci(num) {
  if (num < 2) {
    return num
  }
  return fibonacci(num-1) + fibonacci(num-2)
}

fibonacci(7)


function factorial(num) {
  if (num === 1) {
    return 1
  }
  return num * factorial(num-1)
}

factorial(5)



const mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

const maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];


function mazePath(maze, position = 0, row, column, direction, path) {
  //show moves
  // maze.forEach(row => console.log(JSON.stringify(row)));
  //   console.log(' ');

  if(column < 0 || row < 0){
        return;
    }

  if(column >= maze[0].length || row >= maze.length){
      return;
  }

  path[position] = direction
  position++

  if (maze[row][column] === 'e') {
    console.log('Path to the exit: ' + path.join(''))
    return
  }

  if (maze[row][column] === ' ') {
    // Void our current location so we don't backtrack
    maze[row][column] = '@';
    // Recursion to explore all possible directions
    mazePath(maze, position, row, column - 1, 'L', path) // left
    mazePath(maze, position, row - 1, column, 'U', path) // up
    mazePath(maze, position, row, column + 1, 'R', path) // right
    mazePath(maze, position, row + 1, column, 'D', path) // down
    maze[row][column] = ' '
  }
  position--

}

mazePath(maze, 0, 0, 0, '', [])


function anagram(str, arr = []) {
  if (!str || typeof str !== 'string') {
    return 'Please enter a string'
  } else if (str.length < 2) {
    return str
  }

  for (let i = 0; i < str.length; i++) {
    let char = str[i]

    if (str.indexOf(char) != i)
    continue

    let remainingChars = str.slice(0, i) + str.slice(i + 1, str.length)

    for (let permutation of anagram(remainingChars)) {
      arr.push(char + permutation)
    }
  }
  return arr
}

anagram('teas')


const organization = {
	"Zuckerberg": {		
		"Schroepfer": {
			"Bosworth": {
				"Steve":{},
				"Kyle":{},
				"Andra":{}
			},
			"Zhao": {
				"Richie":{},
				"Sofia":{},
				"Jen":{}
			},
			"Badros": {
				"John":{},
				"Mike":{},
				"Pat":{}
			},
			"Parikh": {
				"Zach":{},
				"Ryan":{},
				"Tes":{}
			}
		},
		"Schrage": {
			"VanDyck": {
				"Sabrina":{},
				"Michelle":{},
				"Josh":{}
			},
			"Swain": {
				"Blanch":{},
				"Tom":{},
				"Joe":{}
			},
			"Frankovsky": {
				"Jasee":{},
				"Brian":{},
				"Margaret":{}
			}
		},
		"Sandberg": {
			"Goler": {
				"Eddie":{},
				"Julie":{},
				"Annie":{}
			},
			"Hernandez": {
				"Rowi":{},
				"Inga":{},
				"Morgan":{}
			},
			"Moissinac": {
				"Amy":{},
				"Chuck":{},
				"Vinni":{}
			},
			"Kelley": {
				"Eric":{},
				"Ana":{},
				"Wes":{}
			}
}}};

// Alternative Solution
// function traverseA(data, depth = 0) {
// 	let indent = " ".repeat(depth * 4);
// 	Object.keys(data).forEach(key => {
// 		console.log(indent + key);
// 		traverseA(data[key], depth + 1)
// 	});
// }


function organizationChart(chart, indent=0) {
	for (let key in chart) {
		console.log(" ".repeat(indent), key);
		organizationChart(chart[key], indent + 4);
    }
}

organizationChart(organization);


function binaryRepresentation(num, binary=''){   
  if(num === 1) {
    return 1
  }
  if(num === 0) {
    return 0
  }

  return binaryRepresentation(Math.floor(num/2)) + (num%2+'')

}

console.log(binaryRepresentation(25))
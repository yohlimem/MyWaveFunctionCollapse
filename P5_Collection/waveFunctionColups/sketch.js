let grid = [];
let gridSize = 20;
const objects = ["a","b","c"]

const width = 800;
const height = 800;

function setup() {
	createCanvas(width, height);
	background("gray")
	CreateGrid();
	DrawGrid()
	StartCollapse();
}

function draw() {

}


// rules
// A 

function StartCollapse(){
	let randomY = int(Math.random() * gridSize) + 1
	let randomX = int(Math.random() * gridSize) + 1
	if(randomY >= 20){
		randomY = 19
	}
	if(randomX >= 20){
		randomX =  19
	}
	const RemoveRandom = int(Math.random() * objects.length)

	fill(100, 100, 100)
	
	grid[randomX - 1][randomY - 1].splice(RemoveRandom, 1)
	ClearDrawGrid()
	DrawGrid()
	fill(100,100,100,100)
	square((randomX * gridSize), (randomY * gridSize), gridSize)
	


	
}


function DrawGrid(){
	
	for (let i = 0; i < gridSize; i++) {
		for (let j = 0; j < gridSize; j++) {
			fill(255)
			square((i * gridSize), (j * gridSize), gridSize)
			fill(0)
			textSize(10)
			text(GetGrid(i + 1,j + 1), i * gridSize, j * gridSize + gridSize)
		}

	}
}

function ClearDrawGrid(){
	background("gray")
}

function CreateGrid(){
	for (let i = 0; i < gridSize; i++) {
		grid.push([])
		for (let j = 0; j < gridSize; j++) {
			grid[i].push([...objects])
		}
		
	}
	print(grid)
}

function GetGrid(gridPosX, gridPosY){
	return grid[gridPosX - 1][gridPosY - 1]
}
function RemoveGridObject(X, Y, change){
	grid[X - 1][Y - 1] = change;
	return change;
}
function RemoveExistingGridObject(X, Y, obj){
	for (let i = 0; i < grid[X-1][Y-1].length; i++) {
		const element = grid[X-1][Y-1][i];

		if(element == obj){
			grid[X - 1][Y - 1].splice(i,1)
		}
		
	}
	return (grid[X - 1][Y - 1])
}

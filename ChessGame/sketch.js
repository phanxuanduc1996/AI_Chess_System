function preload()
{
	//testing github
	blackRookSprite 	= loadImage("ChessSprite/blackRook.png");
	blackKnightSprite 	= loadImage("ChessSprite/blackKnight.png");
	blackBishopSprite 	= loadImage("ChessSprite/blackBishop.png");
	blackQueenSprite 	= loadImage("ChessSprite/blackQueen.png");
	blackKingSprite 	= loadImage("ChessSprite/blackKing.png");
	blackPawnSprite 	= loadImage("ChessSprite/blackPawn.png");
	
	whitePawnSprite 	= loadImage("ChessSprite/whitePawn.png");
	whiteRookSprite 	= loadImage("ChessSprite/whiteRook.png");
	whiteKnightSprite 	= loadImage("ChessSprite/whiteKnight.png");
	whiteBishopSprite 	= loadImage("ChessSprite/whiteBishop.png");
	whiteQueenSprite 	= loadImage("ChessSprite/whiteQueen.png");
	whiteKingSprite 	= loadImage("ChessSprite/whiteKing.png");
	whitePawnSprite 	= loadImage("ChessSprite/whitePawn.png");
	
	
}
function placeTheChessman(chessman,col,row)
{
	grid[col][row].chessman = chessman;
}
function setup()
{
	var myCanvas = createCanvas(480,480);

	myCanvas.id("myCanvas");
	//create 2d array
	for(var i = 0;i < 8;i++)
	{
		grid[i] = new Array(8);
	}
	for(var i = 0; i < 8; i++)
	{
		for(var j = 0;j < 8; j++)
		{
			grid[i][j] = new Grid(i,j);//[col,row]
		}
	}
	//colSize rowSize
	w = width/8;
	h = height/8;
	
	blackRook 		= new Chessman("Rook",true,blackRookSprite);
	blackKnight 	= new Chessman("Knight",true,blackKnightSprite);
	blackBishop 	= new Chessman("Bishop",true,blackBishopSprite);
	blackQueen 		= new Chessman("Queen",true,blackQueenSprite);
	blackKing 		= new Chessman("King",true,blackKingSprite);
	blackPawn 		= new Chessman("Pawn",true,blackPawnSprite);
	whiteRook 		= new Chessman("Rook",false,whiteRookSprite);
	whiteKnight 	= new Chessman("Knight",false,whiteKnightSprite);
	whiteBishop 	= new Chessman("Bishop",false,whiteBishopSprite);
	whiteQueen 		= new Chessman("Queen",false,whiteQueenSprite);
	whiteKing 		= new Chessman("King",false,whiteKingSprite);
	whitePawn 		= new Chessman("Pawn",false,whitePawnSprite);
	
	placeTheChessman(whiteRook,0,0);
	placeTheChessman(whiteKing,3,0);
	placeTheChessman(whiteRook,7,0);
	
	//initialize game board
	//isPlayerChoseBlack = initialize();
	myCanvas.mouseClicked(makeAMove);
	recorder = new Recorder();
}

function draw()
{
	background(51);
	//display chess board
	for(var i = 0 ; i < 8; i++)
	{
		for(var j = 0; j < 8; j++)
		{
			grid[i][j].show();
		}
	}
	
}
//player make a move
function makeAMove()
{
	//validate the move
	//	
	//update the game
	//
	//Search and perform the next move
	//
	//update the game
	//
	
	var clickedCol;
	var clickedRow;
	
	clickedCol = floor(mouseX/w);
	clickedRow = floor(mouseY/h);
	//validate the move
	if(isPlayerTurn)
	{
		//player clicked empty grid
		if(grid[clickedCol][clickedRow].chessman == null)
		{
			//Player move the piece
			if(prevChessman != null)
			{
				//checking whether the move is valid or not
				if(validateMove(prevChessman,prevCol,prevRow,clickedCol,clickedRow))
				{
					//grid[clickedCol][clickedRow].chessman = prevChessman.copy();
					placeTheChessman(prevChessman,clickedCol,clickedRow);
					grid[prevCol][prevRow].chessman = null;
					prevChessman = null;
					prevCol = -1;
					prevRow = -1;
				}
			}
		}
		//player clicked opponent's piece
		else if(grid[clickedCol][clickedRow].chessman.isBlack != isPlayerChoseBlack)
		{
			if(validateMove(prevChessman,prevCol,prevRow,clickedCol,clickedRow))
			{
				//grid[clickedCol][clickedRow].chessman = prevChessman.copy();
				placeTheChessman(prevChessman,clickedCol,clickedRow);
				grid[prevCol][prevRow].chessman = null;
				prevCol = -1;
				prevRow = -1;
			}
		}
		//player clicked his piece
		else if(grid[clickedCol][clickedRow].chessman.isBlack == isPlayerChoseBlack)
		{
			//prevChessman = grid[clickedCol][clickedRow].chessman.copy();
			prevChessman = grid[clickedCol][clickedRow].chessman;
			prevCol = clickedCol;
			prevRow = clickedRow;
		}
	}
	recorder.update();
	//isPlayerTurn = false;
	//update the game
	//UpdateTheGame();
	//Generate next move
	//GenerateNextMove();
	//update the game
	//UpdateTheGame();
	
}

function initialize()
{
	var playersConfirmation = confirm("White or Black (OK/CANCEL)");
	if(playersConfirmation != true)
	{
		placeTheChessman(blackRook,0,7);
		/*
		placeTheChessman(blackKnight,1,7);
		placeTheChessman(blackBishop,2,7);
		placeTheChessman(blackQueen,3,7);
		placeTheChessman(blackKing,4,7);
		placeTheChessman(blackBishop,5,7);
		placeTheChessman(blackKnight,6,7);
		placeTheChessman(blackRook,7,7);
		
		for(var i = 0; i < 8; i++)
		{
			placeTheChessman(blackPawn,i,6);
		}
		*/
		placeTheChessman(whiteRook,0,0);
		/*
		placeTheChessman(whiteKnight,1,0);
		placeTheChessman(whiteBishop,2,0);
		placeTheChessman(whiteQueen,3,0);
		placeTheChessman(whiteKing,4,0);
		placeTheChessman(whiteBishop,5,0);
		placeTheChessman(whiteKnight,6,0);
		placeTheChessman(whiteRook,7,0);
		
		for(var i = 0; i < 8; i++)
		{
			placeTheChessman(whitePawn,i,1);
		}
		*/
	}
	else
	{
		placeTheChessman(whiteRook,0,7);
		/*
		placeTheChessman(whiteKnight,1,7);
		placeTheChessman(whiteBishop,2,7);
		placeTheChessman(whiteQueen,3,7);
		placeTheChessman(whiteKing,4,7);
		placeTheChessman(whiteBishop,5,7);
		placeTheChessman(whiteKnight,6,7);
		placeTheChessman(whiteRook,7,7);
		
		for(var i = 0; i < 8; i++)
		{
			placeTheChessman(whitePawn,i,6);
		}*/
		
		placeTheChessman(blackRook,0,0);
		/*
		placeTheChessman(blackKnight,1,0);
		placeTheChessman(blackBishop,2,0);
		placeTheChessman(blackQueen,3,0);
		placeTheChessman(blackKing,4,0);
		placeTheChessman(blackBishop,5,0);
		placeTheChessman(blackKnight,6,0);
		placeTheChessman(blackRook,7,0);
		
		for(var i = 0; i < 8; i++)
		{
			placeTheChessman(blackPawn,i,1);
		}
		*/
	}
	return !playersConfirmation;
}


function validateMove(clickedChessman,prevCol,prevRow,clickedCol,clickedRow)
{
	switch(clickedChessman.type)
	{	
		case "Rook":
		//Khoa
			return validateForRook(prevCol,prevRow,clickedCol,clickedRow);
			break;
		case "Knight":
			return validateForKnight(prevCol,prevRow,clickedCol,clickedRow);
			break;
		case "Bishop":
		//Lâm
			return validateForBishop(prevCol,prevRow,clickedCol,clickedRow);
			break;
		case "Queen":
		//Minh
			return validateForQueen(prevCol,prevRow,clickedCol,clickedRow);
			break;
		case "King":
		//Đức 
			return validateForKing(prevCol,prevRow,clickedCol,clickedRow)
			break;
		case "Pawn":
		//Minh
			return validataForPawn(prevCol,prevRow,clickedCol,clickedRow);
			break;
	}
}

function validateForRook(prevCol,prevRow,clickedCol,clickedRow)
{
	if(clickedCol != prevCol && clickedRow != prevRow)
				return false;
			if(clickedRow == prevRow)
			{
				if(clickedCol < prevCol)
				{
					for(var i = prevCol - 1 ; i > clickedCol ; i--)
					{
						if(grid[i][prevRow].chessman != null)
							return false;
					}
				}
				if(clickedCol > prevCol)
				{
					for(var i = prevCol + 1 ; i < clickedCol ; i++)
					{
						if(grid[i][prevRow].chessman != null)
							return false;
					}
				}
			}
			if(clickedCol == prevCol)
			{
				if(clickedRow < prevRow)
				{
					for(var i = prevRow - 1; i > clickedRow ; i--)
					{
						if(grid[prevCol][i].chessman != null)
							return false;
					}
				}
				if(clickedRow > prevRow)
				{
					for(var i = prevRow + 1 ; i < clickedRow ; i++)
					{
						if(grid[prevCol][i].chessman != null)
							return false;
					}
				}
			}
			return true;
}
function validateForBishop(prevCol,prevRow,clickedCol,clickedRow)
{
	if(clickedRow == prevRow || clickedCol == prevCol)
					return false;				
			if(clickedCol != prevCol && clickedRow != prevRow)
			{
				if(abs(clickedCol-prevCol) != abs(clickedRow - prevRow))
					return false;
				else
				{
					if(clickedRow > prevRow)
					{
						var tmpCol = prevCol;
						for(var i = prevRow + 1; i < clickedRow; i++)
						{
							if(clickedCol > prevCol)
									tmpCol += 1;
							else tmpCol -=1;
							if(grid[tmpCol][i].chessman != null)
									return false;
						}
					}
					if(clickedRow < prevRow)
					{
						var tmpCol = prevCol;
						for(var i = prevRow - 1; i > clickedRow; i--)
						{
							if(clickedCol > prevCol)
								tmpCol += 1;
							else tmpCol -=1;
								if(grid[tmpCol][i].chessman != null)
									return false;
						}
					}
				}
			}
			return true;
}
function validateForKnight(prevCol,prevRow,clickedCol,clickedRow)
{
	if(clickedCol == prevCol + 1 && clickedRow == prevRow - 2)
				return true;
			else if(clickedCol == prevCol - 1 && clickedRow == prevRow - 2)
				return true;
			else if(clickedCol == prevCol + 1 && clickedRow == prevRow + 2)
				return true;
			else if(clickedCol == prevCol - 1 && clickedRow == prevRow + 2)
				return true;
			else if(clickedCol == prevCol + 2 && clickedRow == prevRow - 1)
				return true;
			else if(clickedCol == prevCol - 2 && clickedRow == prevRow - 1)
				return true;
			else if(clickedCol == prevCol + 2 && clickedRow == prevRow + 1)
				return true;
			else if(clickedCol == prevCol - 2 && clickedRow == prevRow + 1)
				return true;
			return false;
}
function validataForPawn(prevCol,prevRow,clickedCol,clickedRow)
{
	if (prevRow == 6 && prevCol == clickedCol && clickedRow >= 4)
				{
					for (var i = 5; i > 4; i--)
						if (grid[prevCol][i].chessman != null)
							return false;
					return true;
				}
				if (clickedRow == prevRow - 1 	&& 
					clickedCol == prevCol 		&& 
					grid[clickedCol][clickedRow].chessman == null) {
					return true;
				}
				if (	Math.abs(clickedCol - prevCol) == 1 &&
						clickedRow == prevRow - 1 &&
						(grid[clickedCol][clickedRow].chessman != null && grid[clickedCol][clickedRow].chessman.isBlack == true))
				{
					return true;
				}
				return false;
}
function validateForQueen(prevCol,prevRow,clickedCol,clickedRow)
{
	var straightLine = validateForRook(prevCol,prevRow,clickedCol,clickedRow);
	if(!straightLine)
	{
		return validateForBishop(prevCol,prevRow,clickedCol,clickedRow);
	}
	else return straightLine;
}
function validateForKing(prevCol,prevRow,clickedCol,clickedRow)
{
	if(Math.abs(clickedCol-prevCol)>=2 ||  Math.abs(clickedRow-prevRow)>=2)
				return false;
			return true;
			//castling
}
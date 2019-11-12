function Chessman(type,isBlack,sprite)
{
	this.type = type;
	this.isBlack = isBlack;
	this.sprite = sprite;
	
	this.show = function(col,row)
	{
		image(this.sprite,col*w,row*h,w,h);
	}
	
	this.copy = function()
	{
		var newChessman = new Chessman();
		newChessman.type = this.type;
		newChessman.isBlack = this.isBlack;
		newChessman.sprite = this.sprite;
		return newChessman;
	}
}

function Vector3(x, y, z)
{
	this.x = x;
	this.y = y;
	this.z = z;
}

//Method Prototypes
Vector3.prototype.toString = toString;
Vector3.prototype.add = add;
Vector3.prototype.sub = sub;
Vector3.prototype.mul = mul;
Vector3.prototype.equals = equals;
Vector3.prototype.set = set;
Vector3.prototype.clone = clone;
Vector3.prototype.normalize = normalize;

//Change all values at once
function set(x, y, z)
{
	this.x = x;
	this.y = y;
	this.z = z;
}

function clone()
{
	return new Vector3(this.x, this.y, this.z);
}

//Normalize Vector
function normalize()
{
    var norm = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    this.x /= norm;
    this.y /= norm;
    this.z /= norm;
}

//Compare values
function equals(val)
{
	if(typeof val != typeof this)
	{
		return false;
	}
	else if(this.x == val.x && this.y == val.y && this.z == val.z)
	{
		return true;
	}
}

function add(val)
{
	if(typeof val != typeof this)
	{
		throw "Incompatible types";
	}
	else
	{
		this.x += val.x;
		this.y += val.y;
		this.z += val.z;
	}
}

function sub(val)
{
	//Check type of val
	if(typeof val != typeof this)
	{
		throw "Incompatible types";
	}
	else
	{
		this.x -= val.x;
		this.y -= val.y;
		this.z -= val.z;
	}
}

function mul(val)
{
	//Check type of val
	if(typeof val != typeof this)
	{
		throw "Incompatible types";
	}
	else
	{
		this.x *= val.x;
		this.y *= val.y;
		this.z *= val.z;
	}
}

function toString()
{
	return "("+this.x+", "+this.y+", "+this.z+")";
}
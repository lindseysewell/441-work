class Square3{

    constructor(xCoord,yCoord,objectHeight,objectWidth, color)
    {
        this.xCoord = xCoord;
        this.yCoord = yCoord;
        this.objectHeight = objectHeight;
        this.objectWidth = objectWidth;
        this.color = color;
    }

    get x3()
    {
        return this.xCoord;
    }

    set x3(value)
    {
        this.xCoord = value;
    }
    get y3()
    {
        return this.yCoord;
    }
    set y3(value)
    {
        this.yCoord = value;
    }

    get height3()
    {
        return this.objectHeight;
    }

    get width3()
    {
        return this.objectWidth;
    }
    get mainColor3()
    {
        return this.color;
    }
}

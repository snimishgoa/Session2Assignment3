class GetSetDemo{
    
    private _userName : string;
    public get userName() : string {
        if(this.isUserValid())
            return `The username ${this._userName} is a valid user to access this site`;
        else
            return  `The username ${this._userName} is not valid to continue to this site`;
    }
    public set userName(v : string) {
        this._userName = v;
    }    
    
    private _year : number;
    public get year(): number {
        return this._year
    }
    public set year(v : number) {
        this._year = v;
    }

    public isUserValid():boolean{
        if(new Date().getUTCFullYear() - this.year > 18)
            return true;

        return false;
    }
}
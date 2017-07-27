var GetSetDemo = (function () {
    function GetSetDemo() {
    }
    Object.defineProperty(GetSetDemo.prototype, "userName", {
        get: function () {
            if (this.isUserValid())
                return "The username " + this._userName + " is a valid user to access this site";
            else
                return "The username " + this._userName + " is not valid to continue to this site";
        },
        set: function (v) {
            this._userName = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GetSetDemo.prototype, "year", {
        get: function () {
            return this._year;
        },
        set: function (v) {
            this._year = v;
        },
        enumerable: true,
        configurable: true
    });
    GetSetDemo.prototype.isUserValid = function () {
        if (new Date().getUTCFullYear() - this.year > 18)
            return true;
        return false;
    };
    return GetSetDemo;
}());

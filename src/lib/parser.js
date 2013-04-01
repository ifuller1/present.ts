define(["require", "exports"], function(require, exports) {
    var Parser = (function () {
        function Parser() { }
        Parser.prototype.doParse = function () {
            return "Parsed content";
        };
        return Parser;
    })();
    exports.Parser = Parser;    
})

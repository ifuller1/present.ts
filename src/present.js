define(["require", "exports", "lib/parser"], function(require, exports, __parser__) {
    var parser = __parser__;

    var Presenter = (function () {
        function Presenter(presentationFile) {
            this.presentationFile = presentationFile;
            console.log(this.presentationFile);
            console.log(new parser.Parser());
        }
        return Presenter;
    })();    
    var presenter = new Presenter("sample-presentation.md");
})

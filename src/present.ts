import parser = module("lib/parser");

class Presenter
{
	constructor(private presentationFile:string)
	{
		console.log(this.presentationFile);
		console.log(new parser.Parser());
	}
}

var presenter = new Presenter("sample-presentation.md");



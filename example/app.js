// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.


// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});
var label = Ti.UI.createLabel();
win.add(label);
win.open();

// TODO: write your module tests here
var titextheight = require('com.bakorer.titextheight');
Ti.API.info("module is => " + titextheight);

titextheight.textWidth = 320;
Ti.API.info("TiTextHeight.textWidth is => " + titextheight.textWidth);
titextheight.setTextFontSize(14.0);
Ti.API.info("TiTextHeight.textFontSize is => " + titextheight.textFontSize);

var text = 'Appcelerator Titanium is a platform for developing mobile, tablet and desktop applications using web technologies. Appcelerator Titanium is developed by Appcelerator Inc. and was introduced in December 2008.[1] Support for developing iPhone- and Android-based mobile applications was added in June 2009.[2] Support for developing iPad-based tablet apps was added in April 2010.[3] BlackBerry support was announced on June 2010[4] but it is still in closed beta.';
var textHeight = titextheight.getTextHeight(text);
Ti.API.info("TiTextHeight.getTextHeight is => " + textHeight);

label.text = 'The text height is ' + textHeight;

if (Ti.Platform.name == "android") {
	var proxy = titextheight.createExample({
		message: "Creating an example Proxy",
		backgroundColor: "red",
		width: 100,
		height: 100,
		top: 100,
		left: 150
	});

	proxy.printMessage("Hello world!");
	proxy.message = "Hi world!.  It's me again.";
	proxy.printMessage("Hello world!");
	win.add(proxy);
}


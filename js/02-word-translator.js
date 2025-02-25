/* The Word Translator - Usage: Use simple conditional statements
Create an application that prompts the user for a language code ("es", "de", "en", and "fr"). If they enter one of
the four codes, display the translated version of "Hello World" for the given language within the console
window. If the user enters anything but those four language codes, the application should default to English.
The result should be (for example): Hello World translated in French is: Bonjour le monde. */

const prompt=require("prompt-sync")({sigint:true});

let languageCode = prompt('Enter a language code ("es", "de", "en", or "fr"): ');

if (languageCode == "es") {
    console.log('Hello World translated in Spanish is: Hola Mundo.');
} else if (languageCode == "de") {
    console.log('Hello World translated in German is: Hallo Welt.');
} else if (languageCode == "en") {                         // default language
    console.log('Hello World translated in English is: Hello World.');
} else if (languageCode == "fr") {
    console.log('Hello World translated in French is: Bonjour le monde.');
} else {
    console.log('Hello World translated in English is: Hello World.');
} ;

document.write('Hello World translated in Spanish is: Hola Mundo.');     // display the translated message in Spanish
document.write('Hello World translated in German is: Hallo Welt.');       // display the translated message in German            
document.write('Hello World translated in French is: Bonjour le monde.'); // display the translated message in French
document.write('Hello World translated in English is: Hello World.');     // display the translated message in English

import Document, { Html, Head, Main, NextScript } from "next/document";

//Head used anywhere
//Only used in _document.js
export default class MyDocument extends Document {
    render(){
        return (
            <Html lang="en" ng-app="events-app">
                <Head/>
                <body>
                    <div id="overlays"></div>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}
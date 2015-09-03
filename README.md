Stavros, Gå från Svensson till Stavros!
=======================================

## Sätta upp miljön för att köra minimal server

1. Installera NodeJS

2. I den här katalogen kör:

    `$ npm install`

3. Starta HTTP server som servar filer från den här katalogen på http://localhost:8080:

    `$ npm start`

  om port 8080 är upptagen, ändra konfiguration i server.js

4. Surfa in på http://localhost:8080
    
## Kör tester

1. Installera Protractor

    `$ npm install -g protractor`

2. Starta webdriver i en terminal
 
    `webdriver-manager start`
    
3. Starta applikationen enligt ovan

4. Kör testet

    `protractor protractor.conf.js`

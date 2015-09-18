Browser
=======
## browser.sleep(<millisec>)
Vänta angivet antal millisekunder.

Element
=======
## element(<locator>)
Hämta första elementet som uppfyller locator-villkoret.

Viktiga action-metoder på returnerat objekt:

- element(<locator>) : hämta sub-element
- isPresent() : kontrollera om elementet finns på sidan
- getText() : hämta text
- click() : klicka på element
- sendKeys(<sträng>) : skriv sträng till element
- getAttribute(<attributnamn>) : hämta värdet på angivet HTML-attribut

## element.all(<locator>)
Hämta alla element som uppfyller locator-villkoret.

Viktiga action-metoder på returnerat objekt:

- element(<locator>) : hämta sub-element
- get(<index>) : hämta elementet med angivet index
- count() : hämta antalet element

FP Ninja-metoder

- map(function(elm,index){}) : mappa varje element enligt angiven funktion
- reduce(function(acc,elm){}) : reducera kollektionen enligt angiven funktion
- filter(function(elm,index){}) : filtrera varje element enligt angiven funktion
- each(function(elm,index){}) : utför angiven funktion på varje element

Locator
=======
## by.id(<id>)
Hitta element med angivet id-attribut

## by.className(<class name>)
Hitta element med angiven CSS-klass

## by.css(<CSS selector>)
Hitta element med som matchar angiven CSS-selektor

## by.binding(<binding>)
Hitta element som innehåller angiven Angular-binding (ng-bind eller {{...}})

## by.model(<ng-model>)
Hitta element som innehåller angiven ng-model

## by.repeater(<repeater>)
Hitta element som innehåller angiven ng-repeater

Expects
=======
## expect(...).toBe(expected)
Verifiera att ett värde är lika med 'expected'

## expect(...).toEqual(expected)
Verifiera att ett värde är lika med 'expected'

## expect(...).toBeGreaterThan(...)
Verifiera att ett värde är större än med 'expected'

## expect(...).toBeLessThan(...)
Verifiera att ett värde är mindre än med 'expected'

## expect(...).toMatch(<regexp>)
Verifiera att ett värde matchar angivet javascript-regexp

'use strict'

describe('Det ska finnas en lista med grekiska aktiviteter', function (){

    it('Det ska finnas minst 1 aktivitet i listan',function(){
        element.all(by.repeater('activity in activities')).then(function(elements){
            expect(elements[0].isPresent()).toBe(true);
        })
    });

    it('Det ska finnas max 31 aktiviteter', function(){

        var rowCount = 0;
        element.all(by.repeater('activity in activities')).each(function(elements, index){
            rowCount++;
        }).then(function(){
            expect(rowCount).toBe(31);
        })


    });

    it('Det ska gå att filtrera aktiviteterna i listan', function(){
        console.log('Det ska gå att filtrera aktiviteterna i listan')
        //Filtrering i fritextfält.
        //Endast rätt rubriker eller poäng ska finnas med
        //Det ska visas att inga resultat har hittats
    });

})
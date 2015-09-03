/**
 * Created by anders on 15-09-03.
 */

describe('Stavros test in the making',function(){
    it('det ska finnas en rubrik på sidan', function(){
        element(by.model('search')).sendKeys("drick")

        expect(element(by.repeater('activity in activities').row(0)).element(by.class('clearfix'))getText()).toContain("drick")
        browser.driver.slepp(1000)
    })
})
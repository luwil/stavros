/**
 * Created by anders on 15-09-03.
 */

describe('Stavros test in the making',function(){
    it('det ska finnas en rubrik på sidan', function(){
        element(by.model('search')).sendKeys("drick")
        browser.driver.sleep(2000)
    })
})
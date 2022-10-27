const {translateFunction,
       replaceValue,
       CheckIfStringContainOnlyNumbers,
       removeAllDigits,
       stringFunc
    } = require("./index")

describe("Chek if string is divisble by 3,5 or 7", () => {
  test("should be divisble by 3 ,5 or 7 ", () => {
    expect(translateFunction("105")).toBe("FooBarQix");
  });
  test("should not be divisble by 3 ,5 or 7 ", () => {
    expect(translateFunction("29")).toBe("29");
  });
  test("should not be divisble by 3  ", () => {
    expect(translateFunction("3")).toBe("Foo");
  });
});

describe("Chek if string containing 3, 5, 7 or 0", ()=>{
    test("should conatin 0 and replaced by *", ()=>{
        const value =["1","0","1"]
        expect(replaceValue(value)).toStrictEqual(["1","*","1"])
    });
    test("should return Foo, Bar, Qix and *", ()=>{
        const value =["3","5","7","0"]
        expect(replaceValue(value)).toStrictEqual(["Foo","Bar","Qix","*"])
    });
});

describe("Check if string contains only Numbers",()=>{
test("should not contain only Number",()=>{
    expect(CheckIfStringContainOnlyNumbers("521b2")).toBeFalsy();
})
test("should not contain only Number",()=>{
    expect(CheckIfStringContainOnlyNumbers("123")).toBeTruthy();
});
});

describe("Check if all numbers fron string are removed",()=>{
    test("should remove numbers", ()=>{
        expect(removeAllDigits("123Foo2")).toBe("Foo")
    })
    test("should not remove anythig", ()=>{
        expect(removeAllDigits("BarFoo*")).toBe("BarFoo*")
    })
})

describe("Chek if stringFunc dependinf on all conditions ", ()=>{
test("should replace 0 by * ", ()=>{
    const value ="101"
    expect(stringFunc(value)).toBe("1*1")
})
test("should replace value ", ()=>{
    const value ="105"
    expect(stringFunc(value)).toBe("FooBarQix*Bar")
})
test("should change anything", ()=>{
    const value ="29"
    expect(stringFunc(value)).toBe("29")
})
})
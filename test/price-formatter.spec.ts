import PriceFormatter from "../src/services/price-formatter";

describe("PriceFormatter", () => {
  describe("format", () => {
    it("returns object with euros and cents keys", () => {
      const result = PriceFormatter.format("");
      expect(result.euros).toBeDefined();
      expect(result.cents).toBeDefined();
    });

    it(`defaults to zero values on empty string`, () => {
      const result = PriceFormatter.format("");
      expect(result.euros).toEqual("0");
      expect(result.cents).toEqual("00");
    });

    it(`throws if price is not a string of integer`, () => {
      expect(() => PriceFormatter.format("foo")).toThrowError("foo is not an integer");
      expect(() => PriceFormatter.format("123f123")).toThrowError("123f123 is not an integer");
      expect(() => PriceFormatter.format("1.11")).toThrowError("1.11 is not an integer");
    });

    it(`does not throw for undefined`, () => {
      expect(() => PriceFormatter.format(undefined)).not.toThrow();
    });

    it(`does not throw for null`, () => {
      expect(() => PriceFormatter.format(null)).not.toThrow();
    });

    testFn({ given: undefined, expected: { euro: "0", cents: "00" } });
    testFn({ given: null, expected: { euro: "0", cents: "00" } });
    testFn({ given: "1", expected: { euro: "0", cents: "01" } });
    testFn({ given: "9", expected: { euro: "0", cents: "09" } });
    testFn({ given: "23", expected: { euro: "0", cents: "23" } });
    testFn({ given: "500", expected: { euro: "5", cents: "00" } });
    testFn({ given: "5000", expected: { euro: "50", cents: "00" } });
    testFn({ given: "689010", expected: { euro: "6890", cents: "10" } });
  });
});

function testFn({ given, expected }) {
  return test(`given ${given} returns ${JSON.stringify(expected)}`, () => {
    const result = PriceFormatter.format(given);
    expect(result.euros).toEqual(expected.euro);
    expect(result.cents).toEqual(expected.cents);
  });
}

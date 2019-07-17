import SearchService from "../src/services/search-service";

const service = new SearchService();

let products = [{ name: "foo" }, { name: "bar" }];
let query = "qux";

describe("SearchService", () => {
  describe("searchProducts", () => {
    it("returns a Promise", () => {
      expect(service.searchProducts(products, query)).resolves;
    });

    it("resolves with empty array if no product name matches query", () => {
      query = "qux";
      expect(service.searchProducts(products, query)).resolves.toEqual([]);
    });

    it("resolves with products with names that match the query", () => {
      const match = { name: "qux" };
      const list = [...products, match];
      const query = "qux";
      expect(service.searchProducts(list, query)).resolves.toHaveLength(1);
      expect(service.searchProducts(list, query)).resolves.toEqual([match]);
    });

    it("can match multiple items", () => {
      const match1 = { name: "qux" };
      const match2 = { name: "quxx" };
      const list = [...products, match1, match2];
      const query = "qu";
      expect(service.searchProducts(list, query)).resolves.toHaveLength(2);
    });

    it("is case insensitive", () => {
      const match = { name: "CaSeInSensiTIVE" };
      const list = [...products, match];
      const query = "caseinsensitive";
      expect(service.searchProducts(list, query)).resolves.toEqual([match]);
    });
  });
});

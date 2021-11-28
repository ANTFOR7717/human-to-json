import { MetricToImperial } from "../../main";

describe("test convert kg to lb", () => {
    it("should return 155 for kgToLb(70.3068)", () => {
        expect(MetricToImperial.kgToLb(70.6038)).toBe(155);
    })
});

describe("test convert lb to kg", () => {
    it("should return 155 for lbToKg(155)", () => {
        expect(MetricToImperial.lbToKg(155)).toBe(70);
    })
});

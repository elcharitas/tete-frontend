import { describe, expect, test } from "vitest";
import { pick } from "src/api/utils/pick";

describe("pick", () => {
    test("should pick the given keys", () => {
        expect(pick({ a: 1, b: 2, c: 3 }, "a")).toEqual(1);
        expect(pick({ a: 1, b: 2, c: 3 }, "b")).toEqual(2);
    });
});

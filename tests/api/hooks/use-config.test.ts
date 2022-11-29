import { describe, expect, test } from "vitest";
import { renderHook } from "@testing-library/react";
import { useConfig } from "src/api/hooks/use-config";

describe("useConfig", () => {
    test("should return the config", () => {
        const { result } = renderHook(() => useConfig("theme.default_theme"));
        const themeName = result.current.value;
        expect(themeName).toEqual("light");
    });
});

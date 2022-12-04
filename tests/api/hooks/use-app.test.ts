import { describe, expect, it, test } from "vitest";
import { renderHook } from "@testing-library/react";
import { useApp } from "/src/api/hooks/use-app";

describe("useApp", () => {
    it("it should return the full app", () => {
        const { result } = renderHook(() => useApp());
        const { app } = result.current;
        expect(app).toBeDefined();
    });

    it("it should return last page", () => {
        const { result } = renderHook(() => useApp());
        const { app } = result.current;
        expect(app?.page.last).toBeNull();
    });

    it("should change last page", () => {
        const { result } = renderHook(() => useApp());
        const { app, dispatch } = result.current;

        expect(app?.page.last).toBeNull();

        dispatch("page.last", "/");
        const { result: newResult } = renderHook(() => useApp());
        const { app: newApp } = newResult.current;

        expect(newApp?.page.last).toEqual("/");
    });

    it("should not add new option", () => {
        const { result } = renderHook(() => useApp());
        const { app, dispatch } = result.current;

        dispatch("page.new", "/");
        const { result: newResult } = renderHook(() => useApp());
        const { app: newApp } = newResult.current;

        expect(
            ((newApp?.page as unknown) as { new: string }).new
        ).toBeUndefined();
    });

    it("should reset app", () => {
        const { result: newResult } = renderHook(() => useApp());
        const { app: newApp, reset } = newResult.current;

        expect(newApp?.page.last).toEqual("/");

        reset();
        const { result: resetResult } = renderHook(() => useApp());
        const { app: resetApp } = resetResult.current;

        expect(resetApp?.page.last).toBeNull();
    });
});

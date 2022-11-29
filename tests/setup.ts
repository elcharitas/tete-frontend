import { beforeAll, vi } from "vitest";

beforeAll(() => {
    vi.mock("react-supabase", () => {
        return {
            useRealtime: vi.fn(() => [
                {
                    data: null,
                    error: null,
                    stale: false,
                },
            ]),
            useUpsert: vi.fn(),
            useFilter: vi.fn(),
        };
    });
});

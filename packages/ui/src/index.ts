// =========================
// PUBLIC API (LOCKED)
// =========================

// components
export { Button } from "./components/Button";
export { Input } from "./components/Input";
export { Text } from "./components/Text";
export { Card } from "./components/Card";

// primitives
export { Box } from "./primitives/Box";
export { Stack } from "./primitives/Stack";

// types (ONLY SAFE EXPORTS)
export type { ButtonProps } from "./components/Button/Button.types";
export type { InputProps } from "./components/Input/Input.types";

// =========================
// INTERNAL IS STRICTLY BLOCKED
// =========================
// ❌ NEVER EXPORT:
// ./internal
// ./engine
// ./styles
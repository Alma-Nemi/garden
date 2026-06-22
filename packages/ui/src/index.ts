// =========================
// PUBLIC API (LOCKED)
// =========================

// components
export { Button } from "./components/Button";
// types (ONLY SAFE EXPORTS)
export type { ButtonProps } from "./components/Button/Button.types";
export { Card } from "./components/Card";
export { Input } from "./components/Input";
export type { InputProps } from "./components/Input/Input.types";
export { Text } from "./components/Text";
// primitives
export { Box } from "./primitives/Box";
export { Stack } from "./primitives/Stack";

// =========================
// INTERNAL IS STRICTLY BLOCKED
// =========================
// ❌ NEVER EXPORT:
// ./internal
// ./engine
// ./styles

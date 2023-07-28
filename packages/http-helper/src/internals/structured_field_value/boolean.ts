// https://www.rfc-editor.org/rfc/rfc8941.html#name-booleans

// Structured Field Values defines "Token" as a terminology in its data type semantics.
// We would like to avoid "token" as a prefix.
const SYMBOL_BOOLEAN_PREFIX = '?' as const;
const SYMBOL_BOOLEAN_TRUE = '1' as const;
const SYMBOL_BOOLEAN_FALSE = '0' as const;

type BooleanValue = typeof SYMBOL_BOOLEAN_FALSE | typeof SYMBOL_BOOLEAN_TRUE;
export type SFBoolean = `${typeof SYMBOL_BOOLEAN_PREFIX}${BooleanValue}`;

export const SF_BOOLEAN_TRUE = `${SYMBOL_BOOLEAN_PREFIX}${SYMBOL_BOOLEAN_TRUE}` satisfies SFBoolean;
export const SF_BOOLEAN_FALSE = `${SYMBOL_BOOLEAN_PREFIX}${SYMBOL_BOOLEAN_FALSE}` satisfies SFBoolean;

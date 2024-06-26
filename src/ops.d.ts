export interface Opcodes {
    OP_FALSE: number;
    OP_0: number;
    OP_PUSHDATA1: number;
    OP_PUSHDATA2: number;
    OP_PUSHDATA4: number;
    OP_1NEGATE: number;
    OP_RESERVED: number;
    OP_TRUE: number;
    OP_1: number;
    OP_2: number;
    OP_3: number;
    OP_4: number;
    OP_5: number;
    OP_6: number;
    OP_7: number;
    OP_8: number;
    OP_9: number;
    OP_10: number;
    OP_11: number;
    OP_12: number;
    OP_13: number;
    OP_14: number;
    OP_15: number;
    OP_16: number;
    OP_NOP: number;
    OP_VER: number;
    OP_IF: number;
    OP_NOTIF: number;
    OP_VERIF: number;
    OP_VERNOTIF: number;
    OP_ELSE: number;
    OP_ENDIF: number;
    OP_VERIFY: number;
    OP_RETURN: number;
    OP_TOALTSTACK: number;
    OP_FROMALTSTACK: number;
    OP_2DROP: number;
    OP_2DUP: number;
    OP_3DUP: number;
    OP_2OVER: number;
    OP_2ROT: number;
    OP_2SWAP: number;
    OP_IFDUP: number;
    OP_DEPTH: number;
    OP_DROP: number;
    OP_DUP: number;
    OP_NIP: number;
    OP_OVER: number;
    OP_PICK: number;
    OP_ROLL: number;
    OP_ROT: number;
    OP_SWAP: number;
    OP_TUCK: number;
    OP_CAT: number;
    OP_SUBSTR: number;
    OP_LEFT: number;
    OP_RIGHT: number;
    OP_SIZE: number;
    OP_INVERT: number;
    OP_AND: number;
    OP_OR: number;
    OP_XOR: number;
    OP_EQUAL: number;
    OP_EQUALVERIFY: number;
    OP_RESERVED1: number;
    OP_RESERVED2: number;
    OP_1ADD: number;
    OP_1SUB: number;
    OP_2MUL: number;
    OP_2DIV: number;
    OP_NEGATE: number;
    OP_ABS: number;
    OP_NOT: number;
    OP_0NOTEQUAL: number;
    OP_ADD: number;
    OP_SUB: number;
    OP_MUL: number;
    OP_DIV: number;
    OP_MOD: number;
    OP_LSHIFT: number;
    OP_RSHIFT: number;
    OP_BOOLAND: number;
    OP_BOOLOR: number;
    OP_NUMEQUAL: number;
    OP_NUMEQUALVERIFY: number;
    OP_NUMNOTEQUAL: number;
    OP_LESSTHAN: number;
    OP_GREATERTHAN: number;
    OP_LESSTHANOREQUAL: number;
    OP_GREATERTHANOREQUAL: number;
    OP_MIN: number;
    OP_MAX: number;
    OP_WITHIN: number;
    OP_RIPEMD160: number;
    OP_SHA1: number;
    OP_SHA256: number;
    OP_HASH160: number;
    OP_HASH256: number;
    OP_CODESEPARATOR: number;
    OP_CHECKSIG: number;
    OP_CHECKSIGVERIFY: number;
    OP_CHECKMULTISIG: number;
    OP_CHECKMULTISIGVERIFY: number;
    OP_CHECKLOCKTIMEVERIFY: number;
    OP_CHECKSEQUENCEVERIFY: number;
    OP_CHECKSIGADD: number;
    OP_NOP1: number;
    OP_NOP2: number;
    OP_NOP3: number;
    OP_NOP4: number;
    OP_NOP5: number;
    OP_NOP6: number;
    OP_NOP7: number;
    OP_NOP8: number;
    OP_NOP9: number;
    OP_NOP10: number;
    OP_PUBKEYHASH: number;
    OP_PUBKEY: number;
    OP_INVALIDOPCODE: number;
}
declare const OPS: Opcodes;
declare const REVERSE_OPS: {
    [key: number]: string;
};
export { OPS, REVERSE_OPS };

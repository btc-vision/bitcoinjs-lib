import { BIP32Interface } from 'bip32';
import { ECPairInterface } from 'ecpair';
import { Signer, SignerAlternative, SignerAsync } from '../psbt.js';

/*import { SignatureManager } from './SignatureManager.js';

interface HookSigner {
    hasHook?: boolean;
    signatureManager: SignatureManager;
}

type HookedSigner = (
    | Signer
    | SignerAlternative
    | SignerAsync
    | BIP32Interface
    | ECPairInterface
) &
    HookSigner;

function hookKeyPair(keyPair: HookedSigner) {
    const oldSign = keyPair.sign;

    keyPair.sign = new Proxy(oldSign, {
        apply: function (target, thisArg, argumentsList) {
            let possibleSignature = keyPair.signatureManager.getSignature(
                argumentsList[0],
            );

            if (!possibleSignature) {
                possibleSignature = Reflect.apply(
                    target,
                    thisArg,
                    argumentsList,
                );

                keyPair.signatureManager.addSignature(
                    argumentsList[0],
                    possibleSignature as Buffer,
                );
            } else {
                console.log('Signature found in cache:', possibleSignature);
            }

            return possibleSignature;
        },
    });

    const oldSignSchnorr = keyPair.signSchnorr;
    if (oldSignSchnorr) {
        keyPair.signSchnorr = new Proxy(oldSignSchnorr, {
            apply: function (target, thisArg, argumentsList) {
                let possibleSignature = keyPair.signatureManager.getSignature(
                    argumentsList[0],
                );

                if (!possibleSignature) {
                    possibleSignature = Reflect.apply(
                        target,
                        thisArg,
                        argumentsList,
                    );

                    keyPair.signatureManager.addSignature(
                        argumentsList[0],
                        possibleSignature as Buffer,
                    );
                } else {
                    console.log(
                        'signSchnorr found in cache:',
                        possibleSignature,
                    );
                }

                return possibleSignature;
            },
        });
    }
}*/

export function hookSigner(
    _keyPair:
        | Signer
        | SignerAlternative
        | SignerAsync
        | BIP32Interface
        | ECPairInterface,
) {
    /*const newKeypair: HookedSigner = keyPair as HookedSigner;

    if (!newKeypair.hasHook) {
        newKeypair.hasHook = true;
        newKeypair.signatureManager = new SignatureManager();

        hookKeyPair(newKeypair);
    }*/
}

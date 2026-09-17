export const updateWalletValue = (wallet, { asset, value }) => {
    const amount = Number(value) || 0;

    switch (asset) {
        case "irr":
            return {
                ...wallet,
                rial: (Number(wallet.rial) || 0) + amount,
            };

        case "psc":
            return {
                ...wallet,
                psc: (Number(wallet.psc) || 0) + amount,
            };

        case "yellow":
            return {
                ...wallet,
                yellow: (Number(wallet.yellow) || 0) + amount,
            };

        case "red":
            return {
                ...wallet,
                red: (Number(wallet.red) || 0) + amount,
            };

        case "blue":
            return {
                ...wallet,
                blue: (Number(wallet.blue) || 0) + amount,
            };

        default:
            return wallet;
    }
};
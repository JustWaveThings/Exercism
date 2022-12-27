export class DiffieHellman {
	constructor(p, g) {
		this.p = p;
		this.g = g;
	}

	getPublicKey(privateKey) {
		return this.g ** privateKey % this.p;
	}

	getSecret(theirPublicKey, myPrivateKey) {
		return theirPublicKey ** myPrivateKey % this.p;
	}
}

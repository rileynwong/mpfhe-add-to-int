
## Multi-party Fully Homomorphic Encryption (MPFHE) 
```
#pragma hls_top
int add_to_int(int state, int int_to_add){
    return state + int_to_add;
}
```

- Compile `add_to_int.cc` into [MPFHE](https://github.com/ed255/fully-homomorphic-encryption/blob/phantom/README-phantom.md) Rust file.
- Server holds secret `state` integer.
- Clients can:
  - Modify: Add to the secret state integer.
    - Client sends encrypted ciphertext of an integer value to add to the state integer.
    - Server adds the encrypted client integer to the encrypted state integer using MPFHE.
  - Read: View the secret state integer.
    - Reads require decryption shares from all parties.
    - Client sends a request to server and receives encrypted state integer. 
    - Client sends a request to other clients to receive decryption shares to decrypt and view state integer.

## Stack
- React client, boilerplate from [Create React App](https://create-react-app.dev/)
- Rust server, boilerplate from [Rocket](https://rocket.rs/guide/v0.5/quickstart/)

- `add_to_int` compiled from [modified FHE library](https://github.com/ed255/fully-homomorphic-encryption/blob/phantom/README-phantom.md) for use with Phantom Zone
  -  [add_to_int](https://github.com/rileynwong/fully-homomorphic-encryption/tree/frog-mpc/projects/add_to_int)

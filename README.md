# Boilerplace Code for Rust WASM

### Install node modules

```
$ npm install
```

### Build using webpack

```
$ npm run build
```

### Cargo build 

```
$ cargo build --target wasm32-unknown-unknown
```

### Run the web app

```
$ npm run dev
```

### Connect the web app in your web browser

```
Web address: http://localhost:9000
```

### Check console in your browser

In the Developer tool > Console, uou should be able to see the following log:

```
Alex! ... from Rust
```
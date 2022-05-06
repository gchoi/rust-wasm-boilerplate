const rust = import('./pkg/rust_demo');

rust.then(m => m.say_hello_from_rust())
    .catch(console.error);
import * as wasm from "fluent-bundle-test";

let test = wasm.TestInterface.new();
let bundle_id = String("test_bundle");
console.log(bundle_id);
test.create_bundle(bundle_id);
let value = test.format(bundle_id, String("key0"));
console.log(value);
alert(value);

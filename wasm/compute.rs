use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn heavy_compute(x: u32) -> u32 {
    (0..x).map(|i| i*i).sum()
}

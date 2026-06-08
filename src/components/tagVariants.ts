export type TagVariant =
  | "c"
  | "cpp"
  | "python"
  | "mips"
  | "verilog"
  | "fpga"
  | "esp32"
  | "mqtt"
  | "dsp"
  | "algorithms"
  | "benchmark"
  | "dsa";

export const tagLabels = {
  c: "C",
  cpp: "C++",
  python: "Python",
  mips: "MIPS",
  verilog: "Verilog",
  fpga: "FPGA",
  esp32: "ESP32",
  mqtt: "MQTT",
  dsp: "DSP",
  algorithms: "Algorithms",
  benchmark: "Benchmark",
  dsa: "DSA",
} as const satisfies Record<TagVariant, string>;

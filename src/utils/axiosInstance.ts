import axios from "axios";

// (axios as any).defaults.headers.common["X-CSRF-TOKEN"] =
//   "62d8b19cd3d4928728a16d95eabd84ade9c925be";

export default axios.create({
  baseURL: "https://eibrahim95.pythonanywhere.com/api/v1",
});

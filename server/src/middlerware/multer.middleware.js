import multer from "multer";

// Use memory storage — Vercel's filesystem is read-only
export const upload = multer({ storage: multer.memoryStorage() });

export function errMiddleware(err, req, res, next) {
  if (err) {
    res.status(500).json({ err: "kazkas blogai" });
  }
}

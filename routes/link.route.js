const nanoid = require("nanoid");
const { check, validationResult } = require("express-validator");
const { Router } = require("express");

const Link = require("../models/Link.model");

const router = Router();

router.post(
  "/link",
  check("originalUrl", "Неверный формат ссылки").isURL({
    protocols: ["http", "https"],
    require_protocol: true
  }),
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }

    const { originalUrl } = req.body;
    const checkOriginUrl = await Link.findOne({ originalUrl });

    if (checkOriginUrl) {
      const { _id, originalUrl, shortUrl } = checkOriginUrl;
      return res.status(200).json({ _id, originalUrl, shortUrl });
    }

    let shortUrl = null;
    while (true) {
      shortUrl = nanoid(5);
      let checkShortUrl = await Link.findOne({ shortUrl });
      if (!checkShortUrl) {
        break;
      }
    }

    const dataUrl = new Link({ originalUrl, shortUrl });
    await dataUrl.save();
    const { _id } = dataUrl;

    res.status(201).json({ _id, originalUrl, shortUrl });
  }
);

router.get("/:shortUrl", async (req, res) => {
  const { shortUrl } = req.params;
  const candidate = await Link.findOne({ shortUrl });

  if (candidate) {
    const { originalUrl } = candidate;
    return res.redirect(originalUrl);
  }

  res.status(400).json({ error: "Такой ссылки нет" });
});

module.exports = router;

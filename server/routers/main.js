const KoaRouter = require("koa-router");
const Models = require("../models");

const router = new KoaRouter();

router.get("/", async ctx => {
  let data = await Models.Users.findById(1, {
    include: {
      model: Models.Comments
    }
  });
  ctx.body = data;
});

module.exports = router;

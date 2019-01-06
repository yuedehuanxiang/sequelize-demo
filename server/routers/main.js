const KoaRouter = require("koa-router");
const md5 = require("md5");
const Models = require("../models");

const router = new KoaRouter();

router.get("/", async ctx => {
  let page = ctx.query.page || 1;
  let prepage = ctx.query.prepage || 2;
  let offset = (page - 1) * prepage;

  let rs = await Models.Contents.findAndCountAll({
    limit: prepage,
    offset,
    include: {
      model: Models.Users
    }
  });

  let data = rs.rows.map(d => {
    return {
      id: d.id,
      title: d.title,
      content: d.content,
      user_id: d.user_id,
      username: d.User.username,
      created_at: d.createdAt,
      like_count: d.like_count,
      comment_count: d.comment_count
    };
  });
  ctx.body = {
    code: 0,
    prepage,
    count: rs.count,
    data
  };
});

router.post("/register", async ctx => {
  // console.log(ctx.request.body);
  let { username, password, repassword } = ctx.request.body;
  if (username == "" || password == "" || repassword == "") {
    return (ctx.body = {
      code: 1,
      data: "用户名或密码不能为空"
    });
  }
  if (password != repassword) {
    return (ctx.body = {
      code: 2,
      data: "俩次输入的密码不一致"
    });
  }

  let user = await Models.Users.findOne({
    where: {
      username
    }
  });
  if (user !== null) {
    return (ctx.body = {
      code: 3,
      data: "当前用户已经被注册了"
    });
  }

  let newUser = await Models.Users.build({
    username,
    password: md5(password)
  }).save();
  ctx.body = {
    code: 0,
    data: {
      id: newUser.get("id"),
      username: newUser.get("username")
    }
  };
  // console.log(user.get("username"));
});

router.post("/login", async ctx => {
  let { username, password } = ctx.request.body;

  let user = await Models.Users.findOne({
    where: {
      username
    }
  });

  if (user === null) {
    return (ctx.body = {
      code: 1,
      data: "不存在该用户"
    });
  }

  if (user.get("password") !== md5(password)) {
    return (ctx.body = {
      code: 2,
      data: "密码错误"
    });
  }

  // ctx.cookies.set("uid", user.get("id"), {
  //   signed: true,
  //   maxAge: 100000000,
  //   httpOnly: true
  // });

  ctx.cookies.set("username", user.get("username"), {
    httpOnly: false,
    maxAge: 100000000
  });

  ctx.session.uid = user.get("id");

  ctx.body = {
    code: 0,
    data: {
      id: user.get("id"),
      username: user.get("username")
    }
  };
});

router.post("/like", async ctx => {
  let contentId = ctx.request.body.content_id; // 要点赞的内容id
  // let uid = ctx.request.body.uid; //当前点赞的用户

  // 如果当前用户是登陆状态，那么cookie中应该包含登陆用户的id信息
  // let uid = ctx.cookies.get("uid");
  let uid = ctx.session.uid;
  console.log(contentId, uid);
  if (!uid) {
    return (ctx.body = {
      code: 1,
      data: "你还没有登陆"
    });
  }

  ctx.body = {
    code: 0,
    data: "点赞成功"
  };
});

module.exports = router;

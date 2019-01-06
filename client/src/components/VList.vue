<template>
  <div>
    <div class="mb">
      <div class="list">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">有哪些是一天以内就能掌握却受用终身的技能？</h5>
          <small>2018/09/17</small>
        </div>
        <p
          class="mb-1"
        >有什么是十分钟就能掌握但是受用 终身的技能？ 只要不是太繁琐或者是冷门知识，任何的日常小 贴士、生活小窍门都可以。你知道哪些技能是终 身受用，但只要十分钟，或者说稍加一些练习就 能精通的呢？</p>
        <footer class="text-right">
          <small>赞（100）</small>
          <small>回复（66）</small>
          <a href>我要回复</a>
        </footer>
      </div>

      <div class="list">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">怎么样才能好好聊天？</h5>
          <small>2018/09/17</small>
        </div>
        <p class="mb-1">
          自己讲话太直白容易伤人怎么改善？ 豆瓣有人私信问我，如何与人愉快聊天，最好是见解独到，让人感觉如沐春风。
          作为一个才看完《奇葩说》的逗比，我好想学马东东说一句，赶快喝一杯，喝了就能愉快聊天的XX咖啡，或者是吃一颗变逗比的XX豆
        </p>
        <footer class="text-right">
          <small>赞（10）</small>
          <small>回复（5）</small>
          <a href>我要回复</a>
        </footer>

        <div class="list">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">怎么样才能好好聊天？</h5>
            <small>2018/09/17</small>
          </div>
          <p class="mb-1">
            自己讲话太直白容易伤人怎么改善？ 豆瓣有人私信问我，如何与人愉快聊天，最好是见解独到，让人感觉如沐春风。
            作为一个才看完《奇葩说》的逗比，我好想学马东东说一句，赶快喝一杯，喝了就能愉快聊天的XX咖啡，或者是吃一颗变逗比的XX豆
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  created() {
    axios({
      method: "get",
      url: "/api/" //http:127.0.0.1:8080/
    });
  }
};
</script>
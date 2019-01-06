<template>
  <div>
    <div class="mb">
      <div class="list" v-for="content of contents" :key="content.id">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{content.title}}</h5>
          <small>{{content.created_at}}</small>
        </div>
        <p class="mb-1">{{content.content}}</p>
        <footer class="text-right">
          <small @click="like(content.id)">赞（{{content.like_count}}）</small>
          <small>回复（{{content.comment_count}}）</small>
          <a href>我要回复</a>
        </footer>
      </div>
    </div>
    <div class="mb">
      <ul class="pagination mb">
        <li class="page-item" :class="{'disabled': page==1}" @click="getData(Math.max(1, page-1))">
          <span class="page-link">&lt;</span>
        </li>
        <li @click="getData(p)" class="page-item" v-for="p of pages" :key="p" :class="{'active': p == page}">
          <span class="page-link">{{p}}</span>
        </li>

        <li class="page-item" :class="{'disabled': page==pages}" @click="getData(Math.min(pages, page+1))">
          <span class="page-link">&gt;</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      count: 0, // 总评论条数
      prepage: 2, // 每页显示多少条
      page: 1, // 当前页
      pages: 1, // 总页数
      contents: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData(p) {
      if (p == this.page) return;
      this.page = p || this.page;
      axios({
        method: "get",
        url: "/api/", //http:127.0.0.1:8080/
        params: {
          page: this.page
        }
      }).then(rs => {
        if (!rs.code) {
          this.count = rs.data.count;
          this.prepage = rs.data.prepage;
          this.pages = Math.ceil(this.count / this.prepage);
          this.contents = rs.data.data;
        }
      });
    },
    like(contentId) {
      axios({
        method: "post",
        url: "/api/like",
        data: {
          content_id: contentId
          // uid: localStorage.getItem("uid") // 如果使用了cookie就不用data提交uid了
        }
      });
    }
  }
};
</script>
<template>
  <div id="app">
    <div class="container">
      <!-- <VHeader/> -->
      <v-header></v-header>

      <v-list></v-list>

      <div class="modal" style="display: -block">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">xxxxxxxxxx</h5>
              <button type="button" class="close">
                <span>&times;</span>
              </button>
            </div>

            <div class="modal-body">
              <!-- 回复 -->
              <form>
                <div class="form-group row">
                  <div class="col-md-12">
                    <textarea class="form-control" id="username" placeholder="回复内容……" cols="30" rows="10"></textarea>
                  </div>
                </div>
              </form>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-primary">回复</button>
              <button type="button" class="btn btn-secondary">取消</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * 设置cookie区分每次请求用户的身份
 */
import VHeader from "./components/VHeader";
import VList from "./components/VList";

export default {
  name: "app",
  components: {
    VHeader,
    VList
  },
  created() {}
};
</script>

<style>
</style>

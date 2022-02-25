<template>
  <el-container class="layout-default">
    <el-header height="">
      <myHeader />
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer height="">
      <myFooter />
    </el-footer>
  </el-container>
</template>

<script>
import myHeader from '@/components/header/index.vue';
import myFooter from '@/components/footer/index.vue';

export default {
  components: {
    myHeader,
    myFooter,
  },
};
</script>

<style lang="scss">
@import '@/assets/css/public/layout.scss';
</style>

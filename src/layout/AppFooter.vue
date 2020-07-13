<template>
    <footer class="navbar bottom navbar-light bg-custom justify-content-center">
       <div class="row text-lg-center btn-wrapper">
          <a target="_blank" rel="noopener" href="https://twitter.com/creativetim"
             class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg" data-toggle="tooltip"
             data-original-title="Follow us">
              <i class="fa fa-twitter"></i>
          </a>
          <a target="_blank" rel="noopener" href="https://www.facebook.com/creativetim"
             class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg" data-toggle="tooltip"
             data-original-title="Like us">
            <i class="fa fa-facebook-square"></i>
          </a>
          <div class="mx-3">
              <h3 style="color:white;">N'hésitez pas à nous suivre !</h3>
          </div>
          <a target="_blank" rel="noopener" href="https://dribbble.com/creativetim"
             class="btn btn-neutral btn-icon-only btn-dribbble btn-lg btn-round" data-toggle="tooltip"
             data-original-title="Follow us">
            <i class="fa fa-dribbble"></i>
          </a>
          <a target="_blank" rel="noopener" href="https://github.com/creativetimofficial"
             class="btn btn-neutral btn-icon-only btn-github btn-round btn-lg" data-toggle="tooltip"
             data-original-title="Star on Github">
            <i class="fa fa-github"></i>
          </a>
      </div>
    </footer>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>
<style>
</style>

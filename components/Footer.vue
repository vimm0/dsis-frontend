<template>
  <footer class="footer">
    <div class="footer-copyright-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="footer-copy-right">
              <p>Copyright © {{new Date().getFullYear()}}
                . All rights reserved. <a href="https://www.nepexgroup.com" class="company">Nepex Group</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<style>
  .company:hover {
    color: #0056b3
  }

  .footer {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    text-align: center;
  }

  .footer-copyright-area p {
    margin: 0;
    font-size: 14px;
    color: #fff;
    padding: 0 !important;
    text-align: center;
  }
</style>


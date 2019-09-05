import React from "react";

const Footer = () => {
  return (
    <div>
      <div class="footer-line"></div>

      <section class="footer-section">
        <div class="container">
          <div class="py-4">
            <div class="col-lg-12 col-xl-12 col-md-12 col-sm-12">
              <p class="text-center mb-0">
                &copy; <i>abhishekrajravi 2017 -</i>{" "}
                <script>document.write(new Date().getFullYear());</script>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;

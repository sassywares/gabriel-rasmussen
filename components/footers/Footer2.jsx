"use client";
import { socialLinks } from "@/data/footer";
import React from "react";

export default function Footer2() {
  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Linear easing replacement
    });
  };

  return (
    <div className="container">
      <div className="page-section">
        <div className="row">
          {/* Copyright */}
          <div className="col-lg-3 text-center text-lg-start mb-md-50">
            © Gabriel Rasmussen {new Date().getFullYear()}.
          </div>
          {/* End Copyright */}
          {/* Social Links */}
          <div className="col-lg-6 fw-social-inline text-center mb-md-40">
            {/* {socialLinks.map((elm, i) => (
              <div key={i} className="fw-social-inline-item">
                <a
                  href={elm.href}
                  target="_blank"
                  rel="nofollow noopener"
                  className="link-hover-anim align-middle"
                  data-btn-animate="y"
                >
                  <span className="btn-animate-y">
                    <span className="btn-animate-y-1">{elm.text}</span>
                    <span className="btn-animate-y-2" aria-hidden="true">
                      {elm.text}
                    </span>
                  </span>
                </a>
              </div>
            ))} */}
          </div>
          {/* End Social Links */}
          <div
            className="col-lg-3 text-center text-lg-end local-scroll"
            onClick={scrollToTop}
          >
            <a href="#top" className="fw-top-link">
              <span className="fw-top-link-underline">Back to top</span>
              <span className="icon ms-1">
                <i className="icon-arrow-up1 size-22" />
              </span>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center text-lg-start mb-md-50 d-flex align-items-center justify-content-end mt-5 gap-2">
            Site by{" "}
            <a href="https://sassywares.com" target="_blank" rel="noopener">
              <img
                src="https://storage.sassywares.com/badge.png"
                alt="sassywares creative web design development agency"
                width="150"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

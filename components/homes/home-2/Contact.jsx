"use client";

import { config } from "@/config";
import Link from "next/link";

export default function Contact({ heading }) {
  async function onFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name) {
      alert("Please enter your name");
      return;
    }

    if (!email) {
      alert("Please enter your email");
      return;
    }

    if (!message) {
      alert("Please enter your message");
      return;
    }

    alert("Thank you for reaching out, I'll get back to you soon.");

    try {
      await fetch(
        `https://api.sassywares.com/contact?referrerId=${config.id}&formTypeId=${config.formTypeIds.contactForm}`,
        {
          body: JSON.stringify({
            name,
            email,
            message,
          }),
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-5 mb-md-70">
          <h2 className="section-title-medium font-alt text-outline-cont mt-20 mb-50 mb-md-30">
            <span className="text-outline-2">
              {heading ? heading : "Connect"}
            </span>
            <span className="text-outline-1">
              {heading ? heading : "Connect"}
            </span>
            <span className="text-outline">
              {heading ? heading : "Connect"}
            </span>
          </h2>
          <p className="section-text mb-60 mb-md-40 mb-sm-30">
            <span className="section-title-inline">How?</span> Have a question
            or a plan to work together? Reach me out and I'll respond ASAP.
          </p>
        </div>
        <div className="col-lg-7 col-xl-6 offset-xl-1 pt-30 pt-md-0">
          {/* Contact Form */}
          <form
            id="contact_form"
            onSubmit={onFormSubmit}
            className="form contact-form wow fadeInUp"
          >
            {/* Name */}
            <div className="form-group d-block d-md-flex align-items-center">
              <label htmlFor="name" className="mb-0 mb-sm-10 me-3">
                Your Name
              </label>
              <div className="flex-grow-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="input-sm form-control underline text-md-center"
                  placeholder="Enter your name here"
                  pattern=".{3,100}"
                  required
                  aria-required="true"
                />
              </div>
            </div>
            {/* Email */}
            <div className="form-group d-block d-md-flex align-items-center">
              <label htmlFor="email" className="mb-0 mb-sm-10 me-3">
                Email Address
              </label>
              <div className="flex-grow-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="input-sm form-control underline text-md-center"
                  placeholder="Enter your email here"
                  pattern=".{5,100}"
                  required
                  aria-required="true"
                />
              </div>
            </div>
            {/* Message */}
            <div className="form-group">
              <label htmlFor="message" className="mb-sm-10">
                What's your question?
              </label>
              <textarea
                name="message"
                id="message"
                className="input-sm form-control underline"
                style={{ height: 120 }}
                placeholder="Enter your message here"
                defaultValue={""}
              />
            </div>
            <div className="row">
              <div className="col-sm-5">
                {/* Button */}
                <button
                  className="submit_btn btn btn-mod btn-circle btn-white btn-ellipse"
                  data-btn-animate="ellipse"
                  id="submit_btn"
                  aria-controls="result"
                >
                  <span className="btn-ellipse-inner">
                    <span className="btn-ellipse-unhovered">Send Message</span>
                    <span className="btn-ellipse-hovered" aria-hidden="true">
                      Send Message
                    </span>
                  </span>
                </button>
              </div>
              <div className="col-sm-7 d-flex align-items-center">
                {/* Inform Tip */}
                <div className="form-tip pt-30 pt-sm-20">
                  <i className="icon-info size-16" />
                  All the fields are required. By sending the form you agree to
                  the{" "}
                  <Link href="/terms-and-conditions">
                    Terms and Conditions
                  </Link>{" "}
                  and <Link href="/privacy-policy">Privacy Policy</Link>.
                </div>
              </div>
            </div>
            <div
              id="result"
              role="region"
              aria-live="polite"
              aria-atomic="true"
            />
          </form>
          {/* End Contact Form */}
        </div>
      </div>
    </div>
  );
}

import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Have some Question</h1>
            <hr />
          </div>
          <div className="row">
            <div className="col-md-5 d-flex justify-content-center">
              <img
                src="/assets/images/contact.png"
                alt="contact US"
                height="300px"
                width="300px"
              />
            </div>
            <div className="col-md-6">
              <form>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    FullName
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="lordpretty"
                  />
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Example textarea
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                  ></textarea>
                </div>
                <button type="submit" className=" btn btn-outline-primary">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
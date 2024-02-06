import './Contact.css';
export default function Contact() {
    return (
      <div className="Contact">
        <h1>Contact</h1>
         {/* ****************** */}
      <div className="contact container-fluid">
        <div className="container contact_main gx-0">
          <div className="row text-center gx-0 pb-5">
            <div className="col-md-3"></div>
            <div className="col-md-6">
             
            </div>
            <div className="col-md-3"></div>
          </div>
          <div className="row gx-0 align-items-center">
            <div className="col-lg-7 text-center">
              {/* ************************* */}
              <div className="row gx-0">
                <div className="col-lg-6 gx-0">
                  <div className="contact_fm_1" data-aos="fade-left">
                    <i className="fa-solid fa-phone"></i>
                    <h4>Phone No.</h4>
                    <h6>0422519193</h6>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="contact_fm_1" data-aos="fade-left">
                    <i className="fa-solid fa-envelope"></i>
                    <h4>Email</h4>
                    <h6>r.bail@hotmail.com</h6>
                  </div>
                </div>
              </div>
              {/* ************************* */}
              <div className="row gx-0">
                <div className="col-lg-12">
                  <div className="contact_fm_1">
                    <i className="fa-solid fa-location-dot"></i>
                    <h4>Located In:</h4>
                    <h6>Adelaide, South Australia</h6>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d418336.63960122806!2d138.2815111742472!3d-35.000321384801715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab735c7c526b33f%3A0x4033654628ec640!2sAdelaide%20SA!5e0!3m2!1sen!2sau!4v1707237763003!5m2!1sen!2sau"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
              {/* ************************* */}
            </div>

            <div className="col-lg-5" data-aos="fade-left">
              <div className="contact_sec2">
                <form action="https://formspree.io/f/xayrnrdk" method="POST">
                  {/* <form action="https://formspree.io/f/xjvqvwyo" method="POST"> */}
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Name*
                    </label>
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter Your Name"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Email*
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter Your Email"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Subject*
                    </label>
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Your Subject Here"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Message*
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      name="textarea"
                      placeholder="Type Your Message Here"
                      rows="3"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-info">
                    Let's Talk
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ****************** */}
      </div>
    );
  }
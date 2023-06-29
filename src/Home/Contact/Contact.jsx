import { Toaster, toast } from "react-hot-toast";
import Button from "../../Components/Button";
import Col from "../../Components/Col";
import Container from "../../Components/Container";
import Row from "../../Components/Row";
import Title from "../../Components/Title/Title";
import emailjs from "@emailjs/browser";
import { Zoom } from "react-awesome-reveal";
const Contact = () => {
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.from_name;
    const email = form.from_email;
    const subject = form.subject;
    const message = form.message;

    if (name.value.trim() === "") {
      // Field is empty
      name.classList.add("border-red-400");
      toast.error("Name Field Can't Be Empty!");
      return;
    } else {
      // Field is not empty
      name.classList.remove("border-red-400");
    }
    if (email.value.trim() === "") {
      // Field is empty
      email.classList.add("border-red-400");
      toast.error("Email Field Can't Be Empty!");
      return;
    } else {
      // Field is not empty
      email.classList.remove("border-red-400");
    }
    if (subject.value.trim() === "") {
      // Field is empty
      subject.classList.add("border-red-400");
      toast.error("Subject Field Can't Be Empty!");
      return;
    } else {
      // Field is not empty
      subject.classList.remove("border-red-400");
    }
    if (message.value.trim() === "") {
      // Field is empty
      message.classList.add("border-red-400");
      toast.error("Message Field Can't Be Empty!");
      return;
    } else {
      // Field is not empty
      message.classList.remove("border-red-400");
    }

    emailjs
      .sendForm(
        "service_j8cwzid",
        "template_z2210dj",
        form,
        "dZTWOUEylbKuBWrlD"
      )
      .then(
        (result) => {
          toast.success("Message Sent!", result);
          form.reset();
        },
        (error) => {
          toast.error("Message Not Sent!", error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-[500px] w-full bg-primary banner-bg banner-primary relative text-white z-0 mt-[210px] pt-[100px] pb-[120px]"
    >
      <Container>
        <Title border="dark" color="text-white" className="mb-16">
          Contact Me
        </Title>
        <Row className="items-center">
          <Col className="md:w-3/5 order-2 md:order-1">
            <form onSubmit={handleEmailSubmit}>
              <Row>
                <Col className="md:w-1/2 mb-0">
                  <div className="form-control mb-3">
                    <label className="label">
                      <span className="label-text text-white text-xl font-semibold">
                        Name
                      </span>
                    </label>
                    <input
                      type="text"
                      name="from_name"
                      placeholder="Name"
                      className="input input-bordered border-radius text-gray-950 text-lg"
                    />
                  </div>
                </Col>
                <Col className="md:w-1/2 mb-0 ">
                  <div className="form-control mb-3">
                    <label className="label">
                      <span className="label-text text-white text-xl font-semibold">
                        Email
                      </span>
                    </label>
                    <input
                      type="email"
                      name="from_email"
                      placeholder="Email"
                      className="input input-bordered border-radius text-gray-950 text-lg"
                    />
                  </div>
                </Col>
              </Row>
              <div className="form-control mb-3">
                <label className="label">
                  <span className="label-text text-white text-xl font-semibold">
                    Subject
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  className="input input-bordered border-radius text-gray-950 text-lg"
                />
              </div>

              <div className="form-control mb-3">
                <label className="label">
                  <span className="label-text text-white text-xl font-semibold">
                    Message
                  </span>
                </label>
                <textarea
                  placeholder="Message"
                  name="message"
                  className="textarea textarea-bordered h-24 border-radius text-gray-950 text-lg"
                ></textarea>
              </div>

              <Button
                type="submit"
                color="text-gray-900 hover:text-gray-900 md:hover:text-white"
                className="bg-white mt-10"
              >
                Send Mail
              </Button>
            </form>
          </Col>
          <Col className="md:w-2/5 order-1 md:order-2">
            <Zoom>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.33854531533!2d90.3543506862191!3d23.770955932968665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c15a704c52d3%3A0xea6f48759805cb35!2sAdabor!5e0!3m2!1sen!2sbd!4v1687968455133!5m2!1sen!2sbd"
                width="100%"
                height="450"
                className="border-0"
                loading="lazy"
              ></iframe>
            </Zoom>
          </Col>
        </Row>
      </Container>
      <Toaster
        position={window.innerWidth < 768 ? "top-center" : "bottom-right"}
        reverseOrder={false}
      />
    </section>
  );
};

export default Contact;

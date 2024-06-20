import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImage from "../assets/img/contact illu.png";

export const Contact = () => {
  const contactdetails = {
    Firstname: "",
    Lastname: "",
    email: "",
    phone:"",
    message: "",
  };

  const [formdetails, setformdetails] = useState(contactdetails);
  const [buttontext, setbuttontext] = useState("send");
  const [status, setstatus] = useState({});

  const onFormUpdate = (category, value) => {
    setformdetails({
      ...formdetails,
      [category]: value,
    });
  };
  const handleSubmit = async (e) => {
    if(!formdetails.Firstname && !formdetails.Lastname && !formdetails.email && !formdetails.phone && !formdetails.message){
      alert("all feild required to send message")
    }else{
      e.preventDefault();
      setbuttontext("Sending...");
      let response = await fetch("https://myportweb-f9ac2-default-rtdb.firebaseio.com/Userdata.json", {
        method: "POST",
        headers: {
          "Content-Type": "application",
        },
        body: JSON.stringify(formdetails),
      });
      setbuttontext("Send");
      if(response.ok){
        alert("Data Insert successfully")
        window.location.reload();
      }else{
        alert("something Wrong")
      }}
      
    
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="alignitems-center">
          <Col md={6}>
            <img src={contactImage} alt="contact"></img>
          </Col>
          <Col>
            <h2> Get In Touch </h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="text" 
                    value={formdetails.Firstname}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("Firstname", e.target.value)}
                  />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="text"
                    value={formdetails.Lastname}
                    placeholder="Lastname"
                    onChange={(e) => onFormUpdate("Lastname", e.target.value)}
                  />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="text"
                    value={formdetails.phone}
                    placeholder="Phone"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="email"
                    value={formdetails.email}
                    placeholder="Email"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col size={12} className="px-1">
                  <textarea
                    type="text" row="6"
                    value={formdetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  />
                    <button type="submit"><span>{buttontext}</span></button>
                </Col>
                {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { EarthCanvas } from "./canvas";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, slideIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import StarWrapper from "../hoc/SectionWrapper";

//template_m6ycyad
//service ID: service_cb5ammq
 // 9Eevkn-FpGU3HYRsX

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {target} = e;
    const {name,value} = e.target;
    setForm({...form , [name]:value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send('service_d4cf3ns',
                 'template_m6ycyad',
                 {
                  from_name: form.name,
                  to_name: 'Viraj',
                  from_email: form.email,
                  to_email : 'virajmurab567@yahoo.com',
                  message: form.message
                 },
                 '9Eevkn-FpGU3HYRsX'
                )
                .then(() => {
                  setLoading(false)
                  alert('Thankyou,I will get back to you asap!');
                  setForm({
                    name:'',
                    email:'',
                    message:''
                  })
                } , (error)=>{
                  setLoading(false)
                  alert("Something went Wrong :(")
                  console.log(error)
                } )
  };
  return (
    <div className="ml:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl "
      >
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.value}
              onChange={handleChange}
              placeholder="Whats your name?"
              className="bg-tertiary py-4 px-6  placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Whats your email?"
              className="bg-tertiary py-4 px-6  placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
            rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6  placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl" type="submit" > {loading?'Sending...':'Send Message!'} </button>
        </form>
      </motion.div>
      <motion.div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] " variants={slideIn("right", "tween", 0.2, 1)} >
        <EarthCanvas/>
        
      </motion.div>
    </div>
  );
};

export default StarWrapper(Contact, "contact");

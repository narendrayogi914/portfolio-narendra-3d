import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'
import  {styles} from '../styles'
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"






const Contact = () => {
  const formRef = useRef()

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",

  } )
  const [loading, setLoading] = useState(false)
  const handleChange = (e) =>{
    const {name , value} = e.target;
    setForm(prevForm => ({...form, [name]: value}))

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Ensure these keys match your EmailJS template keys
    emailjs.send(
      'service_39g46m4',    // Your EmailJS service ID
      'template_1iphxg5',   // Your EmailJS template ID
      {
        name: form.name,    // Should match the EmailJS template variable
        email: form.email,  // Should match the EmailJS template variable
        message: form.message  // Should match the EmailJS template variable
      },
      'NnGqoOXfMunaLDxNR'   // Your EmailJS public key
    ).then(() => {
      setLoading(false);
      alert('Thank You. I will get back to you as soon as possible.');
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }, (error) => {
      setLoading(false);
      console.log(error);
      alert('Something Went Wrong');
    });
  };
  
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
      variants={slideIn('left', "tween", 0.2 , 1)}
      className="flex-[0.75] bg-black-100 p-8 rounded-2xl"

      >
        <p className={`${styles.sectionSubText}`}>Get In TOuch </p>
        <h3 className={`${styles.sectionHeadText}`}>Contact .</h3>

        <form action=""
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-12 flex flex-col gap-8" >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input type="text" name="name" 
            value={form.name}
            onChange={handleChange}
            placeholder="What's You Name"
            className=" bg-tertiary py-4 px-6 placeholder:text-secondary 
            text-white rounded-lg outlined-none
            border-none font-medium"/>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Email</span>
            <input type="email" name="email" 
            value={form.email}
            onChange={handleChange}
            placeholder="What's You email"
            className=" bg-tertiary py-4 px-6 placeholder:text-secondary 
            text-white rounded-lg outlined-none
            border-none font-medium"/>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Message</span>
            <textarea type="text" name="message"
            rows="7" 

            value={form.message}

            onChange={handleChange}
            placeholder="What's Do You Want to Send "
            className=" bg-tertiary py-4 px-6 placeholder:text-secondary 
            text-white rounded-lg outlined-none
            border-none font-medium"/>
          </label>

          <button  type="submit" className="bg-tertiary py-3 px-8 outlined-none w-fit text-white
           font-bold shadow-md shadow=primary rounded-xl">



            {loading ? 'Sending...' :'Send'}

          </button>
        </form>
      </motion.div>

      <motion.div variants={slideIn('right ', "tween" , 0.2 ,1)}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >

        <EarthCanvas/>



      </motion.div>
    </div>

  )
}

export default SectionWrapper(Contact, "contact")

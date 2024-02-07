"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Contact = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 min-h-screen justify-center items-center"
    >
      <div className="z-10">
        <h5 className="text-xl font-bold my-2">Quer saber mais de mim ?</h5>
        <p className="mb-4 max-w-md">
          Estou sempre pronta para novas oportunidades! Seja para fazer uma
          pergunta, trocar ideias ou simplesmente dizer sua opinião. Vamos
          conversar!
        </p>
        <div className="socials flex flex-row gap-4 mt-6">
          <Link href="https://github.com/lauraxavier" target="_blank">
            <motion.div
              whileHover={{
                rotate: [0, -10, 10, -10, 0],
                transition: { duration: 0.5 },
              }}
            >
              <Image
                src="/images/github.png "
                width={50}
                height={50}
                alt="Github Icon"
              />
            </motion.div>
          </Link>
          <Link
            href="https://www.linkedin.com/in/laura-xavier-75b9a0243/"
            target="_blank"
          >
            <motion.div
              whileHover={{
                rotate: [0, -10, 10, -10, 0],
                transition: { duration: 0.5 },
              }}
            >
              <div className="text-zinc-100">
                <Image
                  src="/images/linkedin.png"
                  width={50}
                  height={50}
                  alt="Linkedin Icon"
                />
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email enviado com sucesso!
          </p>
        ) : (
          <form className="flex flex-col mt-10" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Seu email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="seu-email@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className=" block text-sm mb-2 font-medium"
              >
                Assunto
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Apenas dizendo oi!"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className=" block text-sm mb-2 font-medium"
              >
                Mensagem
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 h-[180px]"
                placeholder="Vamos falar sobre..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600  font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Enviar mensagem
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;

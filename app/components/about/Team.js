"use client";
import { HomeContext } from "@/app/context/HomeContext";
import { motion } from "framer-motion";
import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa"; // Profile icon fallback

export default function MeetTheTeam() {
  const { teamMembers } = useContext(HomeContext);

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-gray-800 text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Meet the Team
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden text-center p-6 hover:shadow-xl transition"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              {member.image?.src ? (
                <motion.img
                  src={member.image.src}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                />
              ) : (
                <FaUserCircle className="w-32 h-32 text-gray-400 mx-auto mb-4" />
              )}

              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-pink-500">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

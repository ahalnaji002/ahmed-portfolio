import { motion } from "motion/react";

function ProjectGallery({ images }) {
  return (
    <section className="mt-14">
      <h2 className="mb-6 text-2xl font-bold text-white">Screenshots</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035]"
          >
            <img
              src={image}
              alt="Project screenshot"
              className="w-full object-cover transition duration-500 hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ProjectGallery;

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Send, Github } from "lucide-react";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-b from-white to-[#eef3ff] flex flex-col items-center justify-center px-6 py-12"
    >
      <motion.div
        className="text-center max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Добро пожаловать в <span className="text-blue-600">LingNorsk</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Интерактивная платформа для изучения норвежского языка: карточки, упражнения, тесты и личный прогресс.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/register"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-blue-700 transition"
          >
            Зарегистрироваться
          </Link>
          <Link
            href="/login"
            className="bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-semibold shadow hover:bg-blue-50 transition"
          >
            Войти
          </Link>
        </div>
      </motion.div>

      <motion.div
        className="flex gap-6 mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Link href="https://t.me/lingnorsk" target="_blank" className="text-gray-500 hover:text-blue-600 transition">
          <Send size={28} />
        </Link>
        <Link href="https://instagram.com/lingnorsk" target="_blank" className="text-gray-500 hover:text-pink-500 transition">
          <Instagram size={28} />
        </Link>
        <Link href="https://github.com/itsway-net/lingnorsk" target="_blank" className="text-gray-500 hover:text-black transition">
          <Github size={28} />
        </Link>
      </motion.div>

      <div className="mt-12 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} LingNorsk — Учи норвежский с удовольствием 🇳🇴</p>
      </div>
    </motion.div>
  );
}

"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white p-4 flex justify-between items-center shadow-md z-50">
      {/* شعار الموقع */}
      <h1 className="header-name lg:ml-8">Velura</h1>

      {/* القائمة الأساسية للأجهزة الكبيرة */}
      <nav className="hidden md:flex gap-6 text-lg">
        <Link href="/">الرئيسية</Link>
        <Link href="#About">من نحن</Link>
        <Link href="#Community">ماذا نقدم</Link>
        <Link href="#Platforms">منصاتنا</Link>
        <Link href="#Footer">اتصل بنا</Link>
        <Link href="#future">المستقبل</Link>
      </nav>

      {/* زر القائمة للأجهزة الصغيرة */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden p-3 rounded-full bg-gray-800 text-white focus:outline-none"
      >
        ☰
      </button>

      {/* القائمة الجانبية عند الفتح */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* خلفية شفافة تغطي الصفحة عند فتح القائمة */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* قائمة منزلقة من اليسار */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] h-full bg-gray-900 text-white shadow-lg flex flex-col items-center justify-start py-8 px-6 z-50"
            >
              {/* زر الإغلاق */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-2xl p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
              >
                ✖
              </button>

              {/* روابط القائمة */}
              <nav className="flex flex-col items-start gap-6 text-lg w-full mt-12">
                <Link href="/" onClick={() => setIsOpen(false)} className="py-2 px-4 hover:bg-gray-800 rounded-lg w-full">🏠 الرئيسية</Link>
                <Link href="#About" onClick={() => setIsOpen(false)} className="py-2 px-4 hover:bg-gray-800 rounded-lg w-full">👤 من نحن</Link>
                <Link href="#Community" onClick={() => setIsOpen(false)} className="py-2 px-4 hover:bg-gray-800 rounded-lg w-full">🌍 ماذا نقدم</Link>
                <Link href="#Platforms" onClick={() => setIsOpen(false)} className="py-2 px-4 hover:bg-gray-800 rounded-lg w-full">🔗 منصاتنا</Link>
                <Link href="#Footer" onClick={() => setIsOpen(false)} className="py-2 px-4 hover:bg-gray-800 rounded-lg w-full">📞 اتصل بنا</Link>
                <Link href="#future" onClick={() => setIsOpen(false)} className="py-2 px-4 hover:bg-gray-800 rounded-lg w-full">🚀 المستقبل</Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

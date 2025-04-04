"use client"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [members, setMembers] = useState<number | null>(null);
  const [online, setOnline] = useState<number | null>(null);
  const INVITE_CODE = "velura";
  const DISCORD_API = `https://discord.com/api/v9/invites/${INVITE_CODE}?with_counts=true`;

  useEffect(() => {
    const fetchServerStats = async () => {
      try {
        const response = await fetch(DISCORD_API);
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();

        setMembers(data.approximate_member_count || 0);
        setOnline(data.approximate_presence_count || 0);
      } catch (error) {
        console.error("Error fetching Discord stats:", error);
      }
    };

    fetchServerStats();
  }, []);

  return (
    <motion.section
      className="hero-section"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-stars"></div>
      <h2 className="hero-title">Velura</h2>
      <p className="hero-text">
      منصة تعرض أفكار ومشاريع المبدعين، وتمنحهم مساحة للتعبير، المشاركة، وصناعة محتوى يعكس هوية عربية.


</p>

      <motion.a
        href={`https://discord.gg/${INVITE_CODE}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-hero mt-6 hover:scale-105 transition-transform"
        whileHover={{ scale: 1.1 }}
      >
        🚀 انضم إلى الخادم
      </motion.a>

      <div className="server-stats mt-6">
        <p>👥 الأعضاء: <span className="stat-number">{members !== null ? members : "جاري التحديث..."}</span></p>
        <p>🟢 المتصلون الآن: <span className="stat-number">{online !== null ? online : "جاري التحديث..."}</span></p>
      </div>
    </motion.section>
  );
}

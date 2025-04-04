"use client";
import { useEffect, useState } from "react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

export default function Team() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const API_URL = "/api/team"; // استدعاء API المحلي

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          console.error(`❌ فشل في جلب بيانات الطاقم - كود الاستجابة: ${response.status}`);
          return;
        }

        const data = await response.json();
        setTeam(data.team);
      } catch (error) {
        console.error("🚨 خطأ أثناء جلب بيانات الطاقم:", error);
      }
    };

    fetchTeam();
  }, []);

  return (
    <section id="team" className="container py-16 text-center">
      <h2 className="text-3xl font-bold text-neon-blue mb-4">🤝 طاقم الإدارة</h2>
      <p className="text-gray-300 text-lg max-w-xl mx-auto mb-8">
        تعرّف على الأشخاص الذين يقفون وراء Velura، فريق من المحترفين المبدعين!
      </p>

      {team.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member) => (
            <div
              key={member.id}
              className="p-6 bg-gray-900 text-white rounded-xl shadow-lg transition-transform hover:scale-105 flex flex-col items-center"
            >
              <img
                src={member.avatar}
                alt={member.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-neon-blue shadow-md"
              />
              <h3 className="text-lg sm:text-xl font-bold mt-3">{member.name}</h3>
              <p className="text-gray-400 text-sm sm:text-base">{member.role}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-400 mt-6 text-lg">⏳ جاري تحميل بيانات الطاقم...</p>
      )}
    </section>
  );
}

const sections = [
    { icon: "🎌", title: "عشاق الأنمي", description: "أحدث الأخبار، النقاشات، وجدولة الحلقات الجديدة." },
    { icon: "⚽", title: "عشاق كرة القدم", description: "تحليلات، تغطية حية، وبثوث مباشرة لأهم المباريات." },
    { icon: "🏆", title: "الفعاليات والمسابقات", description: "أنشطة ممتعة وتحديات تفاعلية لأفراد المجتمع." },
    { icon: "💡", title: "مجتمع إبداعي", description: "مناقشات مفتوحة حول التقنيات الحديثة والابتكار الرقمي." },
  ];
  
  export default function Community() {
    return (
      <section className="container py-20">
        <h2 className="section-title">ماذا نقدم</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="community-card">
              <div className="community-icon">{section.icon}</div>
              <h3 className="text-xl font-bold text-white">{section.title}</h3>
              <p className="text-gray-400 mt-2">{section.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
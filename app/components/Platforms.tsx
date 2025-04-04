export default function Platforms() {
  return (
    <section className="container py-20 text-center">
      <h2 className="section-title">🔗 منصاتنا</h2>
      <p className="text-gray-300 text-lg max-w-xl mx-auto">
        تواصل معنا عبر منصاتنا المختلفة وانضم إلى مجتمع فيلورا الآن!
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-8">

        {/* موقع الأنمي */}
        <a href="https://velura.fun" target="_blank" rel="noopener noreferrer" className="platform-card">
          موقع المانجا - Velura Fun
        </a>
        {/* حساب Instagram الرسمي */}
        <a href="https://www.instagram.com/velura.space" target="_blank" rel="noopener noreferrer" className="platform-card">
          الحساب الرسمي
        </a>

        {/* سيرفر Discord */}
        <a href="https://discord.gg/velura" target="_blank" rel="noopener noreferrer" className="platform-card">
          سيرفر ديسكورد الرسمي
        </a>
      </div>
    </section>
  );
}

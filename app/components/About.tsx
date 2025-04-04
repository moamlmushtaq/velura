export default function About() {
    return (
      <section className="about-section container flex flex-col lg:flex-row items-center justify-between">
        {/* النصوص */}
        <div className="lg:text-right text-center">
          <h2 className="about-title">من نحن</h2>
          <p className="about-text">
            فيلورا ليست مجرد منصة، بل مجتمع متكامل يجمع بين عشاق الأنمي، كرة القدم، والتقنية في تجربة ترفيهية متميزة.
          </p>
          <p className="about-text mt-4">
            هدفنا هو توفير مساحة إبداعية تفاعلية تجمع بين الترفيه، الفعاليات، والنقاشات الهادفة، مما يجعل فيلورا وجهتك الأولى للمتعة والتواصل.
          </p>
        </div>
  
        {/* اسم المنصة بتصميم فريد وقريب من النص */}
        <div className="about-name lg:ml-8">Velura</div>
      </section>
    );
  }
  
export default function Submitting() {
  return (
    <section className="screen">
      <div className="screen-inner center">
        <div className="ornament">
          <span className="ornament-line"></span>
          <span className="ornament-symbol">❦</span>
          <span className="ornament-line"></span>
        </div>
        <h2>Scoring Your Examination</h2>
        <div className="section-title-ar">جارٍ تصحيح الاختبار</div>
        <p className="lead">Calculating section scores, applying rubrics, and generating your diagnostic report...</p>
        <div style={{ margin: '3rem 0' }}>
          <div className="spinner"></div>
        </div>
      </div>
    </section>
  )
}

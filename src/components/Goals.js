const Goals = () => (
  <div>
    <div className="goals-container">
      <h2 className="title">أهدافنا</h2>
      <div className="goal-line" />
      <div className="goals-content">
        <p className="desc_en">
          Our goal is to revolutionize the world of luxury leasing by fostering an environment of
          creativity and innovation, utilizing obstacles and challenges as opportunities for growth,
          and establishing a collaborative and practical community among all stakeholders in the
          industry. We aim to be the industry leader in performance, setting new standards in luxury
          leasing and elevating the entire sector to new heights.
        </p>
        <p className="desc_ar">
          هدفنا هو إحداث ثورة في عالم التأجير الفاخر من خلال تعزيز بيئة من الإبداع والابتكار ،
          والاستفادة من العقبات والتحديات كفرص للنمو ، وإنشاء مجتمع تعاوني وعملي بين جميع أصحاب
          المصلحة في الصناعة. نهدف إلى أن نكون رواد الصناعة في الأداء ، ووضع معايير جديدة في التأجير
          الفاخر ورفع القطاع بأكمله إلى آفاق جديدة.
        </p>
      </div>
      <img
        className="goals-img"
        src="./Images/goals.png"
        alt="goals"
      />
    </div>
    <img
      className="goals-footer"
      src="./Images/goals-footer.jpg"
      alt="goals footer"
    />
  </div>
);

export default Goals;

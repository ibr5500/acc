const About = () => (
  <div>
    <div className="about-image1">
      <img
        src="/images/car_bg.jpg"
        alt="car"
      />
      <div className="about_container">
        <div className="about_content">
          <div className="content_1">
            <h2 className="title">من نحن</h2>
            <div className="line">..</div>
            <img
              className="about-01"
              src="./Images/01.png"
              alt="arrows"
            />
          </div>
          <div className="content_2">
            <p className="desc_ar">
              تلتزم شركتنا بتوفير أكثر الوسائل كفاءة وتفوقًا في تأجير أنواع مختلفة من السيارات
              والمركبات الفاخرة. مع التركيز على الابتكار، أنشأنا بيئة مميزة وعملية مصممة لتقديم حلول
              متكاملة تلبي جميع شرائح قاعدة عملائنا المتنوعة. من خلال توفير الوصول إلى أحدث وأرقى
              المركبات، نسعى جاهدين لتلبية رغبات واحتياجات كل عميل بأقصى درجات الرضا
            </p>
            <p className="desc_en">
              Our company is committed to providing the most efficient and superior means of renting
              various types of cars and luxury vehicles. With a focus on innovation, we have
              established a distinctive and practical environment designed to offer integrated
              solutions that cater to all segments of our diverse customer base. By offering access
              to the latest and finest vehicles, we endeavor to meet the desires and needs of every
              customer with the utmost satisfaction
            </p>
            <img
              className="about-arraows-hr"
              src="./Images/arrows-hr.png"
              alt="arrows"
            />
          </div>
        </div>
        <img
          className="about-arraows"
          src="./Images/arrows.png"
          alt="arrows"
        />
      </div>
    </div>
  </div>
);

export default About;

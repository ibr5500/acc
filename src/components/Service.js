const Service = () => (
  <div
    id="services"
    className="service-container service-bg-image"
  >
    <img
      className="service-img"
      src="./assets/se-img.WebP"
      alt="service_bg"
    />
    <div className="service-content">
      <div className="service-items">
        <h2 className="title">
          خدماتنا
          <div className="line-service" />
        </h2>
        <div className="services">
          <ul className="desc_ar rent-service-ar">
            <li>
              تسهيل خدمات تأجير السيارات المتميزة للأفراد والشركات من خلال عقود مرنة مصممة لتلبية
              الاحتياجات المحددة لكل من العقود طويلة وقصيرة الأجل.
            </li>
            <li>نلتزم بتقديم حلول عالية الجودة تلبي الاحتياجات المتنوعة لعملائنا.</li>
            <li>نقديم خدمات استقبال وتوديع احترافية ، مما يضمن تجربة دافئة وترحابة.</li>
            <li>نستلم ونُسلم المركبات مباشرة من موقع العميل.</li>
            <li>نحن متخصصون في تنظيم وتنسيق المؤتمرات والفعاليات الحكومية الهامة.</li>
          </ul>
          <ul className="desc_en rent-service-en">
            <li>
              Facilitate premium car rental services for individuals and companies through flexible
              contracts tailored to meet the specific needs of both long and short-term contracts.
            </li>
            <li>
              We are dedicated to providing top-quality solutions that meet the diverse needs of our
              clients.
            </li>
            <li>
              Provide professional Reception and Farewell services, ensuring a warm and welcoming
              experience.
            </li>
            <li>
              We provide direct vehicle delivery to the customer&apos;s location and retrieve them
              once services are completed.
            </li>
            <li>
              We specialize in organizing and coordinating significant government conferences and
              events.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Service;

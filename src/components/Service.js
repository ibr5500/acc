const Service = () => (
  <div className="service-continer service-bg-image">
    <img
      className="service-img"
      src="./Images/se-img.png"
      alt="#"
    />
    <div className="service-content">
      <div className="header">
        <h2 className="title">خدماتنا</h2>
        <div>...</div>
      </div>
      <div className="service-items">
        <div className="services-1">
          <h3 className="service_ar">الخدمات التأجيرية</h3>
          <h3 className="service_en">Rental Services</h3>
          <ul className="desc_ar rent-service-ar">
            <li>نقدم خدمات تأجير السيارات المتميزة بعقود مرنة طويلة وقصيرة الأجل.</li>
            <li>
              تسهيل تأجير المركبات للأفراد من خلال مجموعة من العقود المرنة طويلة وقصيرة الأجل.
            </li>
            <li>نلتزم بتقديم حلول عالية الجودة تلبي الاحتياجات المتنوعة لعملائنا.</li>
            <li>نقديم خدمات استقبال وتوديع احترافية ، مما يضمن تجربة دافئة وترحابة.</li>
            <li>إستلام وإنزال المركبات مباشرة من موقع العميل.</li>
          </ul>
          {/* <br /> */}
          <ul className="desc_en rent-service-en">
            <li>
              Offer premium vehicle rental services with flexible long and short-term contracts.
            </li>
            <li>
              Facilitate the renting of vehicles to individuals with a range of flexible long and
              short-term contracts.
            </li>
            <li>
              We are dedicated to providing top-quality solutions that meet the diverse needs of our
              clients.
            </li>
            <li>
              Provide professional Reception and Farewell services, ensuring a warm and welcoming
              experience.
            </li>
            <li>Pickup and drop-off of vehicles directly from the customer&apos;s location.</li>
          </ul>
        </div>
        <div className="services-2">
          <div className="service-content">
            <h3 className="service_ar">الخدمات التنظيمية</h3>
            <h3 className="service_en">Regulatory services</h3>
            <ul className="desc_ar rent-service-ar">
              <li>تنظيم المؤتمرات الحكومية.</li>
              <li>تخطيط وتنسيق المناسبات والتجمعات الهامة.</li>
            </ul>
            <br />
            <ul className="desc_en rent-service-en">
              <li>Organizing government conferences.</li>
              <li>Planning and coordinating significant occasions and gatherings.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Service;

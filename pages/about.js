import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>حول المشروع — PlantAI</title>
        <meta
          name="description"
          content="معلومات عن مشروع PlantAI والفريق ومجموعة البيانات"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="container">
        <div className="card">
          <h1 className="card-title">حول المشروع</h1>

          <div className="about-section">
            <h3>عن PlantAI</h3>
            <p>
              PlantAI هو مشروع بحثي وتطبيقي يهدف إلى استخدام تقنيات الذكاء
              الاصطناعي والتعلم الآلي لمساعدة المزارعين في مصر على اكتشاف أمراض
              النباتات بشكل مبكر ودقيق. يواجه المزارعون في مصر تحديات كبيرة
              تتمثل في:
            </p>
            <ul
              style={{
                marginTop: "1rem",
                paddingRight: "2rem",
                color: "var(--text-secondary)",
              }}
            >
              <li style={{ marginBottom: "0.5rem" }}>
                <strong>خسائر محاصيل عالية:</strong> تقلل أمراض النباتات من
                الإنتاجية والجودة، مما يسبب أضراراً اقتصادية كبيرة للمزارعين.
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <strong>صعوبة الكشف المبكر:</strong> تبدأ العديد من الإصابات
                بأعراض خفية قد لا يلاحظها المزارعون حتى ينتشر المرض على نطاق
                واسع.
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <strong>نقص التشخيص المتخصص:</strong> لا يتوفر لعديد من
                المزارعين الوصول إلى أخصائيين، مما يؤدي إلى التشخيص الخاطئ
                والعلاج غير المناسب.
              </li>
            </ul>
            <p style={{ marginTop: "1rem" }}>
              يقدم PlantAI حلاً لهذه المشاكل من خلال:
            </p>
            <ul
              style={{
                marginTop: "1rem",
                paddingRight: "2rem",
                color: "var(--text-secondary)",
              }}
            >
              <li style={{ marginBottom: "0.5rem" }}>
                <strong>الكشف المبكر والدقيق:</strong> تحليل صور الأوراق لتحديد
                الأمراض قبل أن تصبح الأعراض شديدة.
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <strong>التشخيص الآلي:</strong> تحديد نوع المرض وشدته دون الحاجة
                إلى خبير بشري.
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <strong>اتخاذ قرارات أسرع:</strong> توفير توصيات فورية للعلاج
                والتدابير اللازمة.
              </li>
            </ul>
          </div>

          <div className="about-section">
            <h3>مجموعة البيانات</h3>
            <p>
              يستخدم PlantAI مجموعة بيانات <strong>PlantVillage</strong>{" "}
              الشهيرة، وهي مجموعة بيانات مفتوحة المصدر تحتوي على{" "}
              <strong>أكثر من 50,000 صورة مصنفة</strong>
              لأوراق النباتات. هذه المجموعة هي معيار في مجال أبحاث اكتشاف أمراض
              النباتات باستخدام الرؤية الحاسوبية.
            </p>
            <p>
              <strong>PlantVillage Dataset:</strong> مجموعة بيانات شاملة تحتوي
              على:
            </p>
            <ul
              style={{
                marginTop: "1rem",
                paddingRight: "2rem",
                color: "var(--text-secondary)",
              }}
            >
              <li style={{ marginBottom: "0.5rem" }}>
                أكثر من <strong>50,000 صورة</strong> مصنفة
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <strong>38 فئة من الأمراض</strong> بالإضافة إلى الأوراق الصحية
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                أنواع نباتات متعددة مع تصنيفات دقيقة للأمراض
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                تقسيم البيانات: <strong>43,444 صورة للتدريب</strong> و{" "}
                <strong>10,861 صورة للاختبار</strong>
              </li>
            </ul>
            <p style={{ marginTop: "1rem" }}>
              <strong>مصدر البيانات:</strong>{" "}
              <a
                href="https://github.com/digitalepidemiologylab/plantvillage_deeplearning_paper_dataset"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent-green)" }}
              >
                PlantVillage Deep Learning Paper Dataset
              </a>
            </p>
          </div>

          <div className="about-section">
            <h3>الفريق</h3>
            <div className="team-grid">
              <div className="team-member">
                <h4>عبدالله علي خميس</h4>
                <p>عضو الفريق</p>
              </div>
              <div className="team-member">
                <h4>بافلي ممتاز</h4>
                <p>عضو الفريق</p>
              </div>
              <div className="team-member">
                <h4>عبدالرحمن حلمي</h4>
                <p>عضو الفريق</p>
              </div>
              <div className="team-member">
                <h4>زياد محمد</h4>
                <p>عضو الفريق</p>
              </div>
              <div className="team-member">
                <h4>محمد وجيه ابراهيم</h4>
                <p>عضو الفريق</p>
              </div>
            </div>
          </div>
          {/* 
          <div className="about-section">
            <h3>المشرف</h3>
            <div className="team-member">
              <h4>المشرف الأكاديمي</h4>
              <p>سيتم إضافة التفاصيل لاحقاً</p>
            </div>
          </div> */}

          {/* <div className="about-section">
            <h3>إخلاء المسؤولية</h3>
            <p>
              هذا التطبيق هو أداة تجريبية للأغراض التعليمية والبحثية. النتائج
              المقدمة هي تقديرات بناءً على النموذج المدرب ولا تشكل استشارة مهنية
              بديلة. يوصى دائماً بالتشاور مع خبراء الزراعة أو الأطباء النباتيين
              للحصول على تشخيص دقيق وعلاج مناسب.
            </p>
            <p style={{ marginTop: "1rem", color: "var(--accent-green)" }}>
              <strong>ملاحظة:</strong> هذا التطبيق قيد التطوير وقد لا تكون جميع
              الميزات متاحة أو دقيقة بالكامل.
            </p>
          </div> */}

          <div className="about-section">
            <h3>التقنيات المستخدمة</h3>
            <p>
              <strong>Frontend:</strong> Next.js, React, CSS3
              <br />
              <strong>Backend:</strong> Next.js API Routes, Python
              <br />
              <strong>قاعدة البيانات:</strong> MongoDB (قاعدة بيانات NoSQL سريعة
              ومرنة)
              <br />
              <strong>AI/ML:</strong> Python + Keras, MobileNetV2
              <br />
              <strong>نشر النموذج:</strong> Hugging Face (Inference API)
              <br />
              <strong>Dataset:</strong> PlantVillage Dataset
            </p>
            <p style={{ marginTop: "1rem" }}>
              <strong>دقة النموذج الأساسي:</strong> 97% دقة التحقق (Validation
              Accuracy)
            </p>
          </div>

          <div className="about-section">
            <h3>مستودع المشروع</h3>
            <p>
              يمكنك الاطلاع على الكود المصدري والوثائق الكاملة للمشروع على
              GitHub:
            </p>
            <p style={{ marginTop: "1rem" }}>
              <a
                href="https://github.com/AbdulrhmanHelmy/plant-village-ml"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--accent-green)",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                }}
              >
                https://github.com/AbdulrhmanHelmy/plant-village-ml
              </a>
            </p>
          </div>

          <div className="about-section">
            <h3>رحلة تطوير المشروع</h3>
            <div style={{ marginTop: "1rem" }}>
              <div className="team-member" style={{ marginBottom: "1rem" }}>
                <h4>الأسبوع 1: تطوير النموذج</h4>
                <p>
                  معالجة البيانات وتحضير الصور، بناء MobileNetV2 وبدء التدريب،
                  التقييم الأول وتعديلات النموذج
                </p>
              </div>
              <div className="team-member" style={{ marginBottom: "1rem" }}>
                <h4>الأسبوع 2: تطوير الويب</h4>
                <p>
                  إعداد مشروع Next.js، تصميم الصفحات (الرئيسية، الرفع، النتائج)،
                  إنشاء مسارات API لإرسال الصور
                </p>
              </div>
              <div className="team-member" style={{ marginBottom: "1rem" }}>
                <h4>الأسبوع 3: إنهاء النموذج</h4>
                <p>
                  ضبط النموذج، الاختبار النهائي، حفظ النموذج كـ .h5، النشر على
                  HuggingFace كـ Inference API
                </p>
              </div>
              <div className="team-member">
                <h4>الأسبوع 4: التكامل والإكمال</h4>
                <p>
                  اتصال Next.js backend مع نموذج HuggingFace، عرض نتائج التنبؤ
                  في الواجهة الأمامية، تحسينات UI وإضافة تعليمات العلاج، إعداد
                  العرض والوثائق
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

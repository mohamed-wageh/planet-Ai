import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>PlantAI — كشف أمراض النباتات الذكي</title>
        <meta name="description" content="PlantAI - تطبيق ويب ذكي لاكتشاف أمراض النباتات باستخدام الذكاء الاصطناعي" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="container">
        <div className="card">
          <h1 className="card-title">
            PlantAI — كشف أمراض النباتات الذكي
          </h1>
          <p className="card-subtitle">
            تطبيق ويب متقدم لاكتشاف أمراض النباتات باستخدام تقنيات الذكاء الاصطناعي
          </p>

          <div className="about-section">
            <h3>نظرة عامة على المشروع</h3>
            <p>
              PlantAI هو تطبيق ويب مبتكر مصمم خصيصاً لمساعدة المزارعين في مصر على اكتشاف 
              وتشخيص أمراض النباتات من خلال تحليل صور الأوراق باستخدام تقنيات التعلم الآلي المتقدمة. 
              يواجه المزارعون تحديات كبيرة تتمثل في خسائر المحاصيل العالية وصعوبة الكشف المبكر 
              للأمراض. يساعد PlantAI على تحديد المشاكل الصحية للنباتات بسرعة ودقة، مما يتيح 
              اتخاذ إجراءات علاجية فورية وفعالة.
            </p>
          </div>

          <div className="about-section">
            <h3>كيف يعمل التطبيق؟</h3>
            <p>
              يستخدم PlantAI نموذج MobileNetV2 المدرب على مجموعة بيانات PlantVillage الشهيرة 
              التي تحتوي على أكثر من 50,000 صورة مصنفة لأوراق النباتات مع 38 فئة من الأمراض. 
              يقوم التطبيق بتحليل صور أوراق النباتات وتحديد نوع المرض (إن وجد) مع مستوى ثقة عالي 
              يصل إلى 70% دقة التحقق. يوفر التطبيق أيضاً توصيات علاجية فورية ومفيدة للمستخدمين.
            </p>
          </div>

          <div className="about-section">
            <h3>كيفية الاستخدام</h3>
            <ol className="steps-list">
              <li>
                <span className="step-number">1</span>
                اذهب إلى صفحة رفع الصورة
              </li>
              <li>
                <span className="step-number">2</span>
                اختر أو اسحب صورة لورقة النبات
              </li>
              <li>
                <span className="step-number">3</span>
                اضغط على زر "تحليل الصورة"
              </li>
              <li>
                <span className="step-number">4</span>
                انتظر النتائج واقرأ التوصيات العلاجية
              </li>
            </ol>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/upload" className="btn">
              ابدأ الآن — رفع صورة
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}


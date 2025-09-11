"use client";
import React from "react";
import SplitText from "@/blocks/TextAnimations/SplitText/SplitText";
import ChromaGrid from "@/blocks/Components/ChromaGrid/ChromaGrid";
export default function page() {
  const items = [
    {
      image: "/assets/img/profilePic.webp",
      title: "امین مقصودی",
      subtitle: "CEO of hominex",
      handle: "@hominex.ir",
      borderColor: "#FFD700",
      gradient: "linear-gradient(180deg, #FFD700, #000)", // gold
      url: "https://www.instagram.com/hominex.ir/",
    },
    {
      image: "/assets/img/profilePic.webp",
      title: "اهورا مقصودی",
      subtitle: "Marketing Manager",
      handle: "@father_angel",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)", // green
      url: "https://t.me/father_angel",
    },
    {
      image: "/assets/img/profilePic.webp",
      title: "رضا کمالی",
      subtitle: "Full-Stack Developer",
      handle: "@UIXreza",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)", // blue
      url: "https://github.com/uixreza",
    },
    {
      image: "/assets/img/team/amirPayravan.png",
      title: "امیر پیروان",
      subtitle: "Back-End Developer",
      handle: "@amirpeyravan",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)", // blue
      url: "https://github.com/amirpeyravan",
    },
    {
      image: "/assets/img/profilePic.webp",
      title: "نازنین قدسی",
      subtitle: "Content Creator",
      handle: "@nazokghodsi",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)", // green
      url: "https://www.instagram.com/nazokghodsi/",
    },
    {
      image: "/assets/img/profilePic.webp",
      title: "فاطمه صبوری فر",
      subtitle: "Graphic Designer",
      handle: "@mikechen",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)", // green
      url: "https://linkedin.com/in/mikechen",
    },
    {
      image: "/assets/img/profilePic.webp",
      title: "غزل بهمن",
      subtitle: "Urban Engineer",
      handle: "@mikechen",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)", // green
      url: "https://linkedin.com/in/mikechen",
    },
    {
      image: "/assets/img/profilePic.webp",
      title: "فائزه جاویدی",
      subtitle: "Urban Planner",
      handle: "@mikechen",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)", // green
      url: "https://linkedin.com/in/mikechen",
    },
    {
      image: "/assets/img/profilePic.webp",
      title: "علی قربانی",
      subtitle: "Urban Designer",
      handle: "@mikechen",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)", // green
      url: "https://linkedin.com/in/mikechen",
    },
    {
      image: "/assets/img/profilePic.webp",
      title: "حسین هاشمی",
      subtitle: "Urban Engineer",
      handle: "@mikechen",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)", // green
      url: "https://linkedin.com/in/mikechen",
    },
    {
      image: "/assets/img/profilePic.webp",
      title: "کوثر ایرجی",
      subtitle: "Front-End Developer",
      handle: "@mikechen",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)", // green
      url: "https://linkedin.com/in/mikechen",
    },
    {
      image: "/assets/img/profilePic.webp",
      title: "امیر کمالی",
      subtitle: "Front-End Developer",
      handle: "@mikechen",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)", // green
      url: "https://linkedin.com/in/mikechen",
    },
    {
      image: "/assets/img/profilePic.webp",
      title: "بنیامین مهدوی فر",
      subtitle: "Front-End Developer",
      handle: "@mikechen",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)", // green
      url: "https://linkedin.com/in/mikechen",
    },
  ];
  return (
    <div className="sm:mt-5 mb-5">
      <div className="context">
        <SplitText
          text="درباره هومینکس"
          className="text-2xl font-semibold text-right"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="words"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="right"
        />
        <p className="mt-2">
          شرکت هومینکس در پاییز ۱۴۰۳ با یک هدف روشن تاسیس شد: بازتعریف فرآیند
          خرید، فروش و تحلیل املاک بر پایه فناوری‌های نوین و داده‌های دقیق شهری.
          در دنیایی که صنعت ساختمان در حال گذار از روش‌های سنتی به مدل‌های
          داده‌محور است، هومینکس با رویکردی علمی و مبتنی بر فناوری، گام در مسیر
          تحول گذاشت. ما با تلفیق هوش مصنوعی، تحلیل‌های GIS و داده‌های اقتصادی و
          شهری، می‌کوشیم تصویری شفاف، دقیق و آینده‌نگر از بازار مسکن ارائه دهیم.
          در هومینکس، معتقدیم تصمیم‌گیری در حوزه مسکن نباید بر پایه حدس و گمان
          باشد. به همین دلیل، رسالت ما فراهم کردن بستری است که در آن هر معامله
          ملکی، بر اساس تحلیل‌های دقیق، داده‌های به‌روز و بررسی‌های تخصصی انجام
          شود. ما با پایبندی به ارزش‌هایی چون صداقت، شفافیت و تعهد به کیفیت،
          تلاش می‌کنیم تا پلی باشیم میان تحلیل‌های پیشرفته شهری و نیازهای واقعی
          بازار مسکن. هومینکس، همراه شما در مسیر انتخابی آگاهانه و آینده‌ای
          مطمئن در بازار املاک.
        </p>
      </div>
      <div className="context mt-5">
        <SplitText
          text="چرا هومینکس"
          className="text-2xl font-semibold text-right"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="words"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="right"
        />
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl shadow p-4 flex flex-col">
            <span className="text-blue-400 font-semibold mb-2">
              تحلیل دقیق و علمی
            </span>
            <span className="text-gray-700 text-sm">
              با استفاده از داده‌های شهری، نقشه‌های GIS و هوش مصنوعی، اطلاعات
              جامع و واقعی از املاک ارائه می‌دهیم.
            </span>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col">
            <span className="text-blue-400 font-semibold mb-2">
              شفافیت و اعتماد
            </span>
            <span className="text-gray-700 text-sm">
              تمامی املاک و اطلاعات مربوطه به‌صورت دقیق و به‌روز بررسی می‌شوند
              تا تصمیم‌گیری مطمئن‌تری داشته باشید.
            </span>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col">
            <span className="text-blue-400 font-semibold mb-2">
              دسترسی به شبکه گسترده همکاری
            </span>
            <span className="text-gray-700 text-sm">
              ارتباط مستقیم با مشاورین املاک، فروشندگان مصالح و سازندگان برای
              ارائه بهترین خدمات در خرید، فروش و سرمایه‌گذاری.
            </span>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col">
            <span className="text-blue-400 font-semibold mb-2">
              خدمات آنلاین و ساده
            </span>
            <span className="text-gray-700 text-sm">
              پلتفرمی که دسترسی سریع، مقایسه هوشمند و راهکارهای حرفه‌ای را در
              اختیار شما قرار می‌دهد. هومینکس، انتخابی آگاهانه برای خرید، فروش و
              سرمایه‌گذاری در املاک.
            </span>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col">
            <span className="text-blue-400 font-semibold mb-2">
              معرفی محله‌ها با تحلیل تخصصی و میدانی
            </span>
            <span className="text-gray-700 text-sm">
              یکی از مهم‌ترین عوامل در خرید ملک، شناخت درست محله‌ای است که قصد
              سکونت یا سرمایه‌گذاری در آن را دارید. هر محله دارای ویژگی هایی است
              که می‌تواند بر کیفیت زندگی و ارزش ملک تأثیر بگذارد.
            </span>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3">
          <span className="text-lg font-bold mb-2">
            معیارهای مورد بررسی در معرفی محله:
          </span>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>تاریخچه محله:</strong>
              قدمت محله، روند شکل‌گیری آن و سرعت رشد در چند سال اخیر می‌تواند به
              شما نشان دهد که آیا این محله در مسیر توسعه است یا در حال افت.
            </li>
            <li>
              <strong>ویژگی‌های کالبدی:</strong>
              بررسی ساختار فیزیکی محله، تراکم ساختمانی، قدمت ساختمان‌ها، و فضای
              بصری محله …
            </li>
            <li>
              <strong>ابعاد اجتماعی:</strong>
              بررسی میزان امنیت محله، سبک و کیفیت زندگی مردم، فرهنگ و میزان
              روابط همسایگی ساکنان
            </li>
            <li>
              <strong>کاربری اراضی:</strong>
              تحلیل نحوه توزیع کاربری‌ها از جمله مسکونی، تجاری، اداری، تفریحی و
              تشریح نقاط ضعف و قوت دسترسی به مراکز خدماتی
            </li>
            <li>
              <strong>کیفیت دسترسی:</strong>
              ارزیابی کیفیت و نوع شبکه دسترسی، تحلیل ترافیک، ایستگاه‌های
              حمل‌ونقل عمومی، عرض معابر و …
            </li>
            <li>
              <strong>ارزش‌گذاری املاک:</strong>
              بررسی روند تغییرات قیمت ملک در محله‌های مختلف برای تصمیم‌گیری بهتر
              در خرید و سرمایه‌گذاری
            </li>
          </ul>
          <span className="text-lg font-bold mt-6 mb-2">
            چطور این اطلاعات به شما کمک می‌کند؟
          </span>
          <ul className="list-disc list-inside space-y-2">
            <li>
              اگر به دنبال خرید ملک هستید، شناخت دقیق محله به شما کمک می‌کند که
              خانه‌ای مناسب با نیازهای خود پیدا کنید.
            </li>
            <li>
              برای سرمایه‌گذاری، آگاهی از روند رشد و توسعه محله به شما دید بهتری
              نسبت به آینده ملک خواهد داد.
            </li>
            <li>
              در صورتی که می‌خواهید در یک محله جدید سکونت کنید، اطلاعات دقیق و
              به‌روز ما به شما کمک می‌کند تا با اطمینان تصمیم بگیرید.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2 mt-5">
          <span>
            <span className="text-lg font-bold mt-6 mb-2">
              فرصت‌های طلایی در هر محله را به شما نشان می‌دهیم.
            </span>
            <br />
            ما با استفاده از تحلیل‌های میدانی، تخصصی و نقشه‌های اطلاعاتی دقیق،
            به شما کمک می‌کنیم تا بهترین تصمیمات را بگیرید و از فرصت‌های
            سرمایه‌گذاری بهره‌مند شوید.
          </span>
          <br />

          <span>
            <span className="text-lg font-bold mt-6 mb-2">
              ویژگی خانه من – تحلیل تخصصی ملک شما
            </span>
            <br />
            <span>
              قبل از هر تصمیم برای خرید، فروش یا سرمایه‌گذاری، شناخت دقیق ملک
              اهمیت بالایی دارد. در هومینکس، با ترکیب داده‌های شهری، نقشه‌های
              تحلیلی و دانش تخصصی، به شما دیدی واقعی و آینده‌نگر از ارزش و
              موقعیت ملک ارائه می‌کنیم.
            </span>
          </span>
        </div>
        <div className="mt-5 flex flex-col gap-3">
          <span className="text-lg font-bold mb-2">
            ویژگی‌های مورد بررسی در تحلیل تخصصی ملک:
          </span>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>مشخصات کالبدی و کاربری زمین:</strong>
              نوع کاربری، مالکیت، تعداد طبقات، قدمت، جهت قطعه، کیفیت نما و طراحی
              ساختمان
            </li>
            <li>
              <strong>دسترسی به خدمات شهری:</strong>
              فاصله تا مدارس، بیمارستان‌ها، حمل‌ونقل عمومی، مراکز خرید، فضاهای
              سبز و خدمات روزمره
            </li>
            <li>
              <strong>تحلیل موقعیت مکانی:</strong>
              نورگیری، چشم‌انداز، میزان دسترسی، وضعیت ترافیکی و کیفیت فضایی
            </li>
            <li>
              <strong>مقایسه منطقه‌ای:</strong>
              ارزیابی ملک شما در مقایسه با املاک مشابه از نظر قیمت، امکانات و
              ویژگی‌های فیزیکی
            </li>
          </ul>
          <span className="mt-4">
            با تحلیل دقیق ویژگی‌های کالبدی، موقعیت و روند توسعه منطقه،
            <br />
            – اگر مالک باشید، ارزش واقعی ملک خود را بهتر می‌شناسید، در فروش
            امتیاز بیشتری خواهید داشت و زمان مناسب برای معامله را پیدا می‌کنید.
            <br />– اگر خریدار یا سرمایه‌گذار باشید، با دید بازتری انتخاب
            می‌کنید، ریسک خرید را کاهش می‌دهید و روی ملک‌هایی سرمایه می‌گذارید
            که آینده روشن‌تری دارند.
          </span>
          <span className="mt-4">
            در هومینکس، ما تنها به ثبت اطلاعات بسنده نمی‌کنیم؛ بلکه با تحلیل
            کارشناسی و نگاه آینده‌محور، ارزش واقعی هر ملک را شفاف می‌کنیم تا
            مسیر تصمیم‌گیری شما هموارتر و مطمئن‌تر باشد.
          </span>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          <span className="text-lg font-bold mb-2">
            تخمین قیمت ملک – تحلیل دقیق و هوشمند
          </span>
          <span>
            تصور کنید وارد بازاری می‌شوید که قیمت‌ها هر لحظه تغییر می‌کنند،
            اطلاعات ناقص است و تصمیم اشتباه می‌تواند هزینه سنگینی برایتان داشته
            باشد.
            <br />
            اینجاست که نیاز به یک تحلیل دقیق و علمی احساس می‌شود.
          </span>
          <span>
            در هومینکس، با استفاده از ترکیبی از داده‌های اقتصادی، تحلیل‌های
            مکانی و بررسی ویژگی‌های فنی هر ملک، تصویر واقعی ارزش آن را برای شما
            ترسیم می‌کنیم.
          </span>
          <span className="text-lg font-bold mt-4 mb-2">
            آنچه ما برای شما فراهم میکنیم:
          </span>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>ارزش‌یابی تخصصی:</strong>
              تحلیل دقیق قیمت بر اساس متغیرهای کلان اقتصادی، روند بازار، میزان
              عرضه و تقاضا و نرخ تورم، نرخ بهره بانکی و …
            </li>
            <li>
              <strong>موقعیت‌شناسی ملک:</strong>
              ارزیابی جایگاه ملک از دید توسعه شهری، آینده رشد منطقه و مقایسه با
              املاک مشابه.
            </li>
            <li>
              <strong>بررسی کیفیت ساخت:</strong>
              تحلیل معماری، مصالح، امکانات رفاهی و وضعیت نگهداری ملک.
            </li>
          </ul>
          <span className="text-lg font-bold mt-4 mb-2">
            چرا این تحلیل برای شما حیاتی است؟
          </span>
          <ul className="list-disc list-inside space-y-2">
            <li>
              اگر خریدار هستید، از پرداخت مبلغی بالاتر از ارزش واقعی جلوگیری
              می‌کنید.
            </li>
            <li>
              اگر فروشنده هستید، می‌توانید قیمت ملک خود را منطقی و جذاب تعیین
              کنید.
            </li>
            <li>
              اگر سرمایه‌گذار هستید، دید دقیق‌تری نسبت به رشد آینده ملک خواهید
              داشت.
            </li>
          </ul>
          <span className="text-lg font-bold mt-4 mb-2">
            چرا تخمین قیمت ملک با هوش مصنوعی دقیق‌تر است؟
          </span>
          <span>
            ترکیب هم‌زمان عوامل تاثیر گذار بر قیمت ؛ باعث می‌شود قیمت‌گذاری با
            دقت بیشتری انجام شود.
            <br />
            الگوریتم‌های یادگیری ماشین، قیمت ملک را بر اساس تغییرات بازار به‌روز
            نگه می‌دارند.
            <br />
            مدل‌های ما قادرند با مقایسه همزمان داده ها ، تحلیل‌هایی ارائه دهند
            که در روش‌های سنتی ممکن نیست.
          </span>
          <span className="mt-4">
            با تحلیل‌های تخصصی هومینکس، تصمیم‌گیری در بازار پرنوسان املاک برای
            شما ساده‌تر، سریع‌تر و مطمئن‌تر خواهد شد.
          </span>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          <span className="text-lg font-bold mb-2">با تیم هومینکس آشنا شو</span>
          <span>
            تیم هومینکس متشکل از کارشناسان حوزه‌های مختلف است که با همکاری با
            یکدیگر و رویکردی داده‌محور، خدماتی نوین در صنعت املاک و ساختمان
            ارائه می‌دهند.
          </span>
        </div>

        <div className="my-10">
          <SplitText
            text="اعضای تیم هومینکس"
            className="text-2xl  font-semibold text-right"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="right"
          />

          <div className="bg-none rounded-2xl overflow-hidden">
            <ChromaGrid
              className="bg-none mt-5"
              items={items}
              radius={300}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

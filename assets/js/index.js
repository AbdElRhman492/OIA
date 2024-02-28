// AOS Library
AOS.init();

const translations = {
  ar: {
    // Landing Page
    1: "مرحبا بك في أويا",
    2: "نحن هنا لنضمن تألق حضورك على الإنترنت وزيادة مبيعاتك. بفضل خبراتنا في استراتيجيات التسويق الإبداعية واستخدامنا لأحدث الأدوات، سنساعدك سواء كنت في بداية الطريق أو كنت من اللاعبين الكبار",
    3: "نقدم حلولا مخصصة تجمع بين تعزيز الوجود على وسائل التواصل الاجتماعي والذكاء في محركات البحث لتحقيق نمو عملك وتحسين مبيعاتك، مع التركيز على الوصول للجمهور المناسب وتحقيق النجاح في السوق التنافسي",
    4: "هيا لنصنع السحر معًا في أويا ميديا",
    5: "تواصل مع الفريق",
    6: "رتب استشارة مجانية الان",
    7: "إجمالي الإيرادات التي تم توليدها للعملاء",
    8: "١١٨ ألف دولار",
    9: "عدد العملاء السعداء",
    10: "إجمالي الإنفاق الإعلاني",
    11: "عدد المكاتب",
    12: "عدد الخدمات التي نقدمها",
    13: "نبذة عننا",
    14: "فلسفتنا بسيطة ولكنها قوية: نحن نؤمن بالقدرة التحويلية للتسويق الرقمي في تمكين الأعمال التجارية من جميع الأحجام نحن ملتزمون بتقديم التميز من خلال مزيج من الإبداع الابتكار، والاهتمام الحقيقي بنجاح عملائنا",
    15: "هل تحتاج إلى تعزيز لمبيعات شركتك؟",
    16: "تواصل مع الفريق",
    17: "رتب استشارة مجانية الان",
    18: "مهلًا انتظر ...",
    19: "ماذا نقدم؟",
    20: "التسويق الإلكتروني",
    21: "في أويا ميديا، نحن متخصصون في استراتيجيات التسويق الرقمي التي تعزز من ظهورك على الإنترنت وتزيد من مبيعاتك. تتضمن تخصصاتنا استخدام وسائل التواصل الاجتماعي بذكاء، تحسين بفعالية، والإعلانات (SEO) محركات البحث المدفوعة الاستراتيجية لمساعدة عملك على النمو في عالم الديجيتال",
    22: "ننظر إلى علاقتنا بك كشراكة، حيث نقوم بتخصيص مقارباتنا لتلبية احتياجاتك الفريدة. هذا يشمل تركيزا حادًا على الإعلانات المدفوعة، حيث نستهدف عملاءك المحتملين بدقة لضمان أن يحقق استثمارك أقصى عوائد",
    23: "ملتزمون بنجاحك، نهدف إلى تعزيز حضورك على الإنترنت وزيادة المبيعات من خلال مزيج من الاستراتيجيات العضوية والمدفوعة. دعونا نتعاون لجعل علامتك التجارية تبرز ولدفع المبيعات للأعلى من خلال التسويق الرقمي الفعّال نتحدث عن وما بين ذلك، (ROAS) العائد على الإنفاق الإعلاني وإذا لم نحقق لك مبيعات أكثر مما أنفقت * فستسترد أموالك، هذا وعد منا",
    24: "كما نقدم الكثير غير ذلك",
    25: "بالطبع، تحتاج مؤسستك إلى مظهر مذهل، لا داعي اللقلق بشأن ذلك، فالأمر متروك لنا",
    26: "الهوية البصرية",
    27: "تصميم الويب",
    28: "إنشاء المحتوى",
    29: "إدارة وسائل التواصل الاجتماعي",
    30: "أسماء كبيرة تثق فينا",
    31: "نتشرف بالعمل مع بعض من أكبر الأسماء في المجال الذين يثقوا بنا للارتقاء بوجودهم الالكتروني",
    58: "مرحبًا بكم في فريق النخبة",
    32: "انغمس في عالم حيث يلتقي الموهبة لا مثيل لها بخبرة لا تضاهى فريقنا هو جوهر وكالتنا، حيث يفخر بخبرة جماعية تصل إلى 10 سنوات عبر صناعات متنوعة. نحن مجموعة ديناميكية من الرؤى كل منا تم اختياره لمهاراته الفريدة وتفانيه في التميز",
    33: "يمنحنا هذا الطيف الواسع من المعرفة القدرة على تقديم حلول مبتكرة تعيد تعريف المعايير. سواء كان التسويق الرقمي استراتيجية الأعمال، أو التنفيذ الإبداعي، نحن في طليعة الصناعة، نضمن لعملائنا ليس فقط مواكبة الركب بل تصدره",
    34: "الشراكة معنا تعني الانضمام إلى قوى مع فريق مكرس النجاحك. نحن نمزج التعاون مع الأساليب المثبتة لتحويل التحديات إلى انتصارات",
    35: "تجربة مستقبل النجاح الرقمي مع فريق النخبة",
    36: "احجز مكالمة مجانية الان مع عمر",
    37: "بحلول نهاية هذا المكالمة التوضيحية، ستكون قد حصلت على فهم شامل للخطوات العملية التي يمكن لعملك تنفيذها لتحقيق نتائج ثابتة وموثوقة عبر الإنترنت من خلال التسويق الرقمى الاستراتيجي. سنستكشف استخدام القنوات الفعّالة والإعلان المدفوع، مزودين إياك بخارطة طريق واضحة لتعزيز استراتيجيات التسويق الرقمى الخاصة بك",
    38: "من تناسب هذه المكالمة ؟",
    39: "الشركات التي ترغب في تحويل موقعها الإلكتروني إلى قمع تحويل عالي باستخدام التسويق الرقمي",
    40: "الشركات التقليدية المستعدة للانتقال إلى العالم الرقمي بإستراتيجيات تسويق رقمي فعالة",
    41: "الشركات التي تهدف إلى زيادة الإيرادات من خلال قمع المبيعات وتحسين معدلات التحويل",
    42: "الأشخاص الذين يتطلعون إلى تحسين معدلات التحويل وقيمة الطلب من خلال الإعلانات المدفوعة المستهدفة",
    43: "الشركات التي تبحث عن وكالة موثوقة ذات خبرة في التسويق الرقمي والإعلان المدفوع",
    44: "احجز المكالمة الان",
    45: "آراء العملاء",
    46: "تجربة ممتازة في التعامل مع هذه الشركة",
    47: "تجربة ممتازة في التعامل مع هذه الشركة",
    48: "تجربة ممتازة في التعامل مع هذه الشركة",
    49: "تجربة ممتازة في التعامل مع هذه الشركة",
    50: "لنفعل الكثير سويا",
    51: "إذا أردت التحدث مع فريقنا يمكنك التواصل معنا عبر الايميل : oiamediaofficial@gmail.com",
    52: "تواصل مع الفريق",
    53: "رتب استشارة مجانية الان",
    54: "أو",
    55: "احصل على وظيفة",
    56: "انضم إلينا الان",
    57: "جميع الحقوق محفوظة",
  },
  en: {
    // Landing Page
    1: "Welcome to OIA",
    2: "We're all about making your online presence shine. Whether you're just starting out or already a big player, we've got your back with fresh and creative strategies to get you noticed.",
    3: "From social media to search engine smarts, we've got the tools and the team to help your business grow online.",
    4: "Let's make magic happen together at OIA Media!",
    5: "CONTACT THE TEAM",
    6: "Schedule a FREE call now",
    7: "TOTAL REVENUE GENERATED",
    8: "$118 THOUSAND",
    9: "CLIENT HELPED",
    10: "TOTAL AD SPEND",
    11: "OFFICES",
    12: "SERVICES OFFER",
    13: "ABOUT US",
    14: "Our philosophy is simple yet powerful: we believe in the transformative potential of digital marketing to empower businesses of all sizes. We're committed to delivering excellence through a combination of creativity, innovation, and genuine care for our clients' success.",
    15: "Need a boost to your company ?",
    16: "CONTACT THE TEAM",
    17: "Schedule a FREE call now",
    18: "OH WAIT...",
    19: "What do we provide ?",
    20: "Digital Marketing",
    21: "At OIA Media, we specialize in digital marketing strategies that boost your online visibility and sales. Our expertise includes smart use of social media, effective SEO, and strategic paid advertising to help your business thrive in the digital world.",
    22: "We view our relationship with you as a partnership, customizing our approaches to meet your unique needs. This involves a sharp focus on paid ads, where we target your potential customers precisely to ensure that your investment yields maximum returns.",
    23: "Committed to your success, we aim to enhance your online presence and increase sales through a blend of organic and paid strategies. Let's collaborate to make your brand stand out and drive higher sales with effective digital marketing. Talking about Return on Ad Spend (ROAS), if we don't generate more sales than you spend, you get your money back — that's a guarantee.",
    24: "Also we provide much more...",
    25: "Of course your organization needs a stunning look, you just don’t worry about it, It’s on US!",
    26: "BRANDING",
    27: "WEB DEVELOPMENT",
    28: "CONTENT CREATION",
    29: "SOCIAL MEDIA MANAGEMENT",
    30: "Big name that trust us ",
    31: "We're honored to work with some of the biggest names in the industry who trust us to elevate their digital presence.",
    58: "MEET THE A-TEAM",
    32: "Dive into a world where unparalleled talent meets unmatched experience. Our A-Team is the core of our agency, boasting a collective 10 years of expertise across various industries. We're a dynamic group of visionaries, each selected for our unique skills and dedication to excellence.",
    33: "Our broad spectrum of knowledge empowers us to deliver innovative solutions that redefine standards. Whether it's digital marketing, business strategy, or creative execution, we're at the cutting edge, ensuring our clients not only keep pace but lead the pack.",
    34: "Partnering with us means joining forces with a team dedicated to your success. We blend collaboration with proven methods to turn challenges into triumphs.",
    35: "Experience the future of digital success with the A-Team.",
    36: "SCHEDULE A FREE CALL WITH OMAR",
    37: "By the end of this Audit call, you will have a clear understanding of the next steps you can take for your business to start generating consistent and reliable results online with Funnels & Paid Advertising.",
    38: "THIS CALL IS PERFECT FOR :",
    39: "Businesses wanting to turn their website into a high-converting funnel using digital marketing.",
    40: "Offline businesses ready to go online with effective digital marketing strategies.",
    41: "Companies aiming to boost revenue with sales funnels and conversion optimization.",
    42: "Those looking to improve conversion rates and order value through targeted paid ads.",
    43: "Businesses seeking a reliable agency with expertise in digital marketing and paid advertising.",
    44: "SCHEDULE A CALL NOW",
    45: "Client's opinions about us",
    46: "A great experience work with this team !",
    47: "A great experience work with this team !",
    48: "A great experience work with this team !",
    49: "A great experience work with this team !",
    50: "We do grant things together !",
    51: "If you want to speak to our expert team kindly reach us via email at: oiamediaofficial@gmail.com",
    52: "CONTACT THE TEAM",
    53: "Schedule a FREE call now",
    54: "or",
    55: "GET HIRED",
    56: "Join our team now",
    57: "All rights reserved",
  },
};

function switchLanguage(lang) {
  for (let i = 1; i <= 58; i++) {
    document.getElementById(i).innerHTML = translations[lang][i];
  }
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
}

// ############### Countdown Section ###############
if (document.getElementById("about")) {
  let nums = document.querySelectorAll(".container .cards .card .number");
  let section = document.querySelector(".about");
  let started = false; // Function Started ? No

  window.addEventListener("scroll", setNums);

  function setNums() {
    if (window.scrollY >= section.offsetTop - 50) {
      if (!started) {
        nums.forEach((num) => startCount(num));
      }
      started = true;
    }
  }

  function startCount(el) {
    let goal = el.dataset.goal;
    if (goal) {
      let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
          clearInterval(count);
        }
      }, 1000 / goal);
    }
  }
}

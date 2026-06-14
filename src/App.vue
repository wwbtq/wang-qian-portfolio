<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import {
  ArrowUpRight,
  Award,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Code2,
  Database,
  GraduationCap,
  LayoutDashboard,
  Mail,
  Phone,
  Rocket,
  Sparkles,
  Workflow,
} from "lucide-vue-next";

const activeSection = ref("home");

const navItems = [
  { id: "home", label: "首页" },
  { id: "skills", label: "专业技能" },
  { id: "projects", label: "项目经历" },
  { id: "experience", label: "实习经验" },
  { id: "works", label: "作品" },
  { id: "education", label: "教育证书" },
  { id: "strengths", label: "个人优势" },
];

const overviewStats = [
  { value: "2+", label: "独立站项目方向" },
  { value: "5", label: "核心能力模块" },
  { value: "3", label: "常用 AI Agent" },
];

const skillGroups = [
  {
    icon: Code2,
    title: "前端基础",
    summary: "具备 HTML5、CSS3、JavaScript 基础，熟悉语义化标签、页面布局、响应式适配及基础交互。",
    chips: ["HTML5", "CSS3", "JavaScript", "响应式"],
  },
  {
    icon: LayoutDashboard,
    title: "Vue 与组件开发",
    summary: "熟悉 Vue 及生态基础使用，了解组件化开发、路由管理、接口请求和常见 UI 组件库。",
    chips: ["Vue", "组件化", "路由", "接口请求"],
  },
  {
    icon: Rocket,
    title: "低代码 / 建站平台",
    summary: "掌握 Wix、Squarespace、WordPress 等平台，能完成企业官网、品牌展示页与模块配置。",
    chips: ["Wix", "WordPress", "Squarespace", "Elementor"],
  },
  {
    icon: Workflow,
    title: "AI Agent 工具",
    summary: "使用 Trae、Qoder、Codex 辅助需求拆解、代码生成、问题排查与文档整理。",
    chips: ["Codex", "Trae", "Qoder", "效率提升"],
  },
  {
    icon: Database,
    title: "综合能力",
    summary: "具备 MySQL 基础操作能力，了解 Python 与微信小程序开发流程，能参与跨角色沟通。",
    chips: ["MySQL", "Python", "小程序", "协作"],
  },
];

const projects = [
  {
    title: "WordPress / Wix 外贸独立站建设",
    meta: "populablower.com / chinapopula.com",
    intro:
      "围绕公司通风降温业务，分别使用 WordPress Elementor 和 Wix 搭建产品展示、品牌介绍和外贸询盘网站。",
    details: [
      "熟悉 Elementor 和 Wix 编辑器，包括栅格布局、响应式适配、组件复用、表单配置和基础 SEO。",
      "梳理工业风扇、湿帘、降温设备等业务内容，将产品卖点、应用场景和询盘入口融入页面结构。",
      "负责首页、产品列表、产品详情、公司介绍、联系表单等页面搭建与优化。",
      "对比 WordPress 与 Wix 平台特点，根据深度定制或快速验证需求选择实现方式。",
    ],
    tags: ["WordPress", "Wix", "外贸询盘", "B2B 网站"],
  },
  {
    title: "Codex 辅助 WordPress 主题开发",
    meta: "WordPress Theme / 后台数据接入",
    intro:
      "为了方便公司员工后续维护站点内容，尝试使用 Codex 辅助开发 WordPress 主题，并接入后台可维护数据。",
    details: [
      "使用 Codex 进行需求拆解、主题结构规划、模板代码生成和样式调整。",
      "将静态页面思路转换为 header、footer、页面模板和组件化区块。",
      "梳理产品列表、图片、文案、链接等数据来源，尝试通过后台字段和动态查询替换静态数据。",
      "围绕可编辑性、可复用性和内容管理便利性调整实现方式，提升后续运营效率。",
    ],
    tags: ["Codex", "WordPress Theme", "动态数据", "内容管理"],
  },
];

const workExperiences = [
  {
    period: "2026/03/15 - 至今",
    company: "广州恒达科技有限公司",
    role: "独立站开发 / 网站运营",
    points: [
      "负责 WordPress Elementor 页面搭建与 Wix 独立站开发，参与页面结构规划、模块组合、品牌视觉调整及基础功能落地。",
      "围绕外贸询盘目标运营网站，优化页面内容表达、产品展示和联系 / 表单路径。",
      "后续引入 Codex 进行独立站深度开发，辅助完成需求拆解、代码实现、问题定位与页面优化。",
      "学习并接触自动化工具部署与使用，尝试解决信息整理和重复性操作等繁琐问题。",
    ],
  },
  {
    period: "2025/12 - 2026/02",
    company: "长沙拓谋网络科技有限公司",
    role: "低代码开发",
    points: [
      "基于 Wix、Squarespace 等国际低代码平台完成企业官网 / 品牌展示页搭建、样式调整与基础功能配置。",
      "使用 Trae、Qoder 等 AI Agent 辅助前端页面开发，包括页面结构拆解、样式优化、组件代码生成与问题排查。",
      "与客户沟通需求，梳理网页功能、视觉风格及交互逻辑；协同团队讨论设计方案与技术可行性。",
    ],
  },
];

const workCards = [
  {
    title: "外贸独立站首页",
    type: "Landing Page",
    summary: "适合放 populablower.com 首页截图，展示产品卖点、应用场景和询盘入口设计。",
    tags: ["首页", "转化路径", "产品展示"],
  },
  {
    title: "Wix 品牌展示页",
    type: "Brand Website",
    summary: "适合放 chinapopula.com 的品牌展示或产品模块截图，突出快速搭建与视觉调整能力。",
    tags: ["Wix", "低代码", "响应式"],
  },
  {
    title: "WordPress 主题模板",
    type: "CMS Template",
    summary: "适合放主题模板、产品列表或后台字段接入示例，体现从页面到可维护系统的思考。",
    tags: ["WordPress", "主题", "后台维护"],
  },
  {
    title: "AI Agent 开发流程",
    type: "Workflow",
    summary: "适合放需求拆解、提示词、代码迭代或问题排查记录，展示工具使用和复盘能力。",
    tags: ["Codex", "Trae", "Qoder"],
  },
];

const educationCards = [
  {
    icon: GraduationCap,
    title: "教育背景",
    meta: "长沙幼儿师范高等专科学校 · 软件技术 · 专科",
    text: "2023/09 - 2026/06。系统学习网页设计、JavaScript、Vue 应用开发、数据库、计算机网络、UI 设计与软件测试等课程。",
  },
  {
    icon: Code2,
    title: "前端开发核心",
    meta: "HTML / CSS / JavaScript / Vue",
    text: "掌握语义化 HTML5、CSS3 布局、ES6+、异步编程、DOM 操作，并能使用 Vue 开发现代化单页面应用。",
  },
  {
    icon: Database,
    title: "后端与数据基础",
    meta: "MySQL / HTTP / 网络请求",
    text: "掌握 MySQL 增删改查、表设计与关系理论基础，理解 HTTP 协议和前后端协作中的网络请求逻辑。",
  },
  {
    icon: Award,
    title: "荣誉证书",
    meta: "2025/09 - 2025/10",
    text: "系统学习并获得 HarmonyOS 应用开发者基础认证、人工智能训练师四级认证。",
  },
];

const strengths = [
  {
    label: "页面落地能力",
    text: "具备前端页面开发和低代码建站经验，能使用 WordPress Elementor、Wix 等工具完成页面搭建、样式调整和响应式适配。",
  },
  {
    label: "业务理解能力",
    text: "理解外贸独立站的基础转化逻辑，能将通风降温等业务内容转化为页面结构、产品卖点和询盘路径。",
  },
  {
    label: "AI 工具实践",
    text: "对 AI Agent 辅助开发保持高兴趣和实践热情，能主动把 Trae、Qoder、Codex 应用到实际业务中。",
  },
  {
    label: "沟通协作",
    text: "工作中注重沟通和复盘，能与业务、设计及开发成员协同推进项目交付与迭代优化。",
  },
  {
    label: "学习能力",
    text: "遇到问题会主动拆解原因、查找方案并持续试错，能快速熟悉新平台、新工具和新的实现方式。",
  },
  {
    label: "内容运营意识",
    text: "不只关注页面是否做出来，也会考虑后续运营维护、内容更新便利性和访客从浏览到询盘的体验。",
  },
];

const scrollTo = (id: string) => {
  activeSection.value = id;
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const handleTilt = (event: MouseEvent) => {
  const card = event.currentTarget as HTMLElement;
  gsap.killTweensOf(card);
  const rect = card.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const isWorkCard = card.classList.contains("work-card");
  const tiltStrength = isWorkCard ? 3.5 : 7;
  const liftScale = isWorkCard ? 1.012 : 1.025;
  const rotateX = ((y - centerY) / centerY) * -tiltStrength;
  const rotateY = ((x - centerX) / centerX) * tiltStrength;

  card.style.setProperty("--mouse-x", `${x}px`);
  card.style.setProperty("--mouse-y", `${y}px`);
  gsap.to(card, {
    rotateX,
    rotateY,
    scale: liftScale,
    transformPerspective: 1000,
    duration: 0.18,
    overwrite: "auto",
    ease: "power2.out",
  });
};

const resetTilt = (event: MouseEvent) => {
  const card = event.currentTarget as HTMLElement;
  card.style.setProperty("--mouse-x", "-1000px");
  card.style.setProperty("--mouse-y", "-1000px");
  gsap.to(card, {
    x: 0,
    y: 0,
    z: 0,
    rotateX: 0,
    rotateY: 0,
    rotation: 0,
    scale: 1,
    duration: 0.45,
    overwrite: true,
    ease: "power3.out",
  });
};

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".hero-kicker, .hero-title, .hero-subtitle, .hero-actions", {
    y: 36,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out",
    stagger: 0.12,
  });

  gsap.from(".skill-card", {
    scrollTrigger: {
      trigger: "#skills",
      start: "top 80%",
    },
    y: 80,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "back.out(1.2)",
    clearProps: "transform",
  });

  gsap.from(".project-card", {
    scrollTrigger: {
      trigger: "#projects",
      start: "top 75%",
    },
    y: 100,
    rotationX: 15,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    transformOrigin: "center bottom",
    ease: "power3.out",
    clearProps: "transform",
  });

  gsap.from(".timeline-card", {
    scrollTrigger: {
      trigger: "#experience",
      start: "top 78%",
    },
    y: 72,
    opacity: 0,
    duration: 0.85,
    stagger: 0.16,
    ease: "power3.out",
    clearProps: "transform",
  });

  gsap.from(".education-card", {
    scrollTrigger: {
      trigger: "#education",
      start: "top 78%",
    },
    y: 64,
    opacity: 0,
    duration: 0.8,
    stagger: 0.12,
    ease: "back.out(1.15)",
    clearProps: "transform",
  });

  gsap.from(".strength-card", {
    scrollTrigger: {
      trigger: "#strengths",
      start: "top 80%",
    },
    y: 66,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power3.out",
    clearProps: "transform",
  });

  const sections = navItems
    .map((item) => document.getElementById(item.id))
    .filter((section): section is HTMLElement => Boolean(section));

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible?.target.id) {
        activeSection.value = visible.target.id;
      }
    },
    { rootMargin: "-28% 0px -58% 0px", threshold: [0.12, 0.3, 0.55] },
  );

  sections.forEach((section) => observer.observe(section));
});

onUnmounted(() => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});
</script>

<template>
  <div class="page-shell">
    <header class="site-header">
      <button class="brand-pill" @click="scrollTo('home')" aria-label="回到首页">
        <Sparkles :size="18" />
        <span>Wang Quinn</span>
      </button>

      <nav class="nav-tabs" aria-label="页面导航">
        <button
          v-for="item in navItems"
          :key="item.id"
          :class="{ active: activeSection === item.id }"
          @click="scrollTo(item.id)"
        >
          {{ item.label }}
        </button>
      </nav>

      <a class="contact-pill" href="#strengths" @click.prevent="scrollTo('strengths')">联系我</a>
    </header>

    <main>
      <section id="home" class="hero-section">
        <div class="hero-ambient" aria-hidden="true"></div>
        <div class="hero-content">
          <p class="hero-kicker">Front-End / WordPress / Wix / AI Agent</p>
          <h1 class="hero-title">
            WANG QUINN
            <span>PORTFOLIO</span>
          </h1>
          <p class="hero-subtitle">
            专注前端页面开发、低代码建站与外贸独立站落地。擅长把业务内容整理成清晰的网站结构，
            并用 AI Agent 提升需求拆解、代码实现、问题排查和文档整理效率。
          </p>
          <div class="hero-actions">
            <a href="#projects" @click.prevent="scrollTo('projects')">查看项目 <ArrowUpRight :size="17" /></a>
            <a href="#strengths" class="ghost-action" @click.prevent="scrollTo('strengths')">发送邮件</a>
          </div>
          <div class="hero-overview" aria-label="个人概览">
            <div v-for="item in overviewStats" :key="item.label">
              <strong>{{ item.value }}</strong>
              <span>{{ item.label }}</span>
            </div>
          </div>
        </div>

        <aside class="profile-panel tilt-card" @mousemove="handleTilt" @mouseleave="resetTilt">
          <div class="avatar-mark">WQ</div>
          <h2>Wang Quinn</h2>
          <p>软件技术 · 专科 · 2026 届</p>
          <div class="profile-stats">
            <strong>前端开发</strong>
            <strong>低代码建站</strong>
            <strong>外贸独立站</strong>
          </div>
          <div class="contact-list">
            <span><Mail :size="16" /> *****</span>
            <span><Phone :size="16" /> *****</span>
          </div>
        </aside>

        <div class="hero-strip" aria-label="能力标签">
          <span>HTML5</span>
          <span>CSS3</span>
          <span>JavaScript</span>
          <span>Vue</span>
          <span>WordPress</span>
          <span>Wix</span>
          <span>Codex</span>
          <span>MySQL</span>
          <span>AI Agent</span>
        </div>
      </section>

      <section id="skills" class="content-section">
        <div class="section-heading split-heading">
          <div>
            <p>Professional Skills</p>
            <h2>专业技能</h2>
          </div>
        </div>
        <div class="skill-grid">
          <article
            v-for="item in skillGroups"
            :key="item.title"
            class="skill-card float-card tilt-card"
            @mousemove="handleTilt"
            @mouseleave="resetTilt"
          >
            <component :is="item.icon" :size="30" />
            <h3>{{ item.title }}</h3>
            <p>{{ item.summary }}</p>
            <div class="tag-row">
              <span v-for="chip in item.chips" :key="chip">{{ chip }}</span>
            </div>
          </article>
        </div>
      </section>

      <section id="projects" class="content-section">
        <div class="section-heading split-heading">
          <div>
            <p>Project Experience</p>
            <h2>项目经历</h2>
          </div>
        </div>
        <div class="project-stack">
          <article
            v-for="project in projects"
            :key="project.title"
            class="project-card tilt-card"
            @mousemove="handleTilt"
            @mouseleave="resetTilt"
          >
            <div class="project-main">
              <span class="project-meta">{{ project.meta }}</span>
              <h3>{{ project.title }}</h3>
              <p>{{ project.intro }}</p>
              <div class="tag-row">
                <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
              </div>
            </div>
            <div class="mini-card-grid">
              <div v-for="detail in project.details" :key="detail" class="mini-card">
                {{ detail }}
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="experience" class="content-section">
        <div class="section-heading">
          <p>Internship & Work</p>
          <h2>实习经验</h2>
        </div>
        <div class="timeline">
          <article
            v-for="item in workExperiences"
            :key="item.company"
            class="timeline-card tilt-card"
            @mousemove="handleTilt"
            @mouseleave="resetTilt"
          >
            <div class="timeline-meta">
              <Briefcase :size="19" />
              <span>{{ item.period }}</span>
            </div>
            <h3>{{ item.company }}</h3>
            <strong>{{ item.role }}</strong>
            <ul>
              <li v-for="point in item.points" :key="point">{{ point }}</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="works" class="works-section">
        <div class="section-heading split-heading">
          <div>
            <p>Works Placeholder</p>
            <h2>作品卡片</h2>
          </div>
        </div>
        <Swiper
          class="works-swiper"
          :modules="[Navigation]"
          :slides-per-view="'auto'"
          :space-between="24"
          :navigation="{ prevEl: '.works-prev', nextEl: '.works-next' }"
          :grab-cursor="true"
        >
          <SwiperSlide v-for="(work, index) in workCards" :key="work.title" class="work-slide">
            <article
              class="work-card tilt-card"
              :class="`tone-${index + 1}`"
              @mousemove="handleTilt"
              @mouseleave="resetTilt"
            >
              <div class="work-visual">
                <Code2 :size="34" />
                <span>{{ work.type }}</span>
              </div>
              <div>
                <h3>{{ work.title }}</h3>
                <p>{{ work.summary }}</p>
              </div>
              <div class="tag-row">
                <span v-for="tag in work.tags" :key="tag">{{ tag }}</span>
              </div>
            </article>
          </SwiperSlide>
        </Swiper>
        <div class="works-controls" aria-label="作品切换">
          <button class="works-prev" type="button" aria-label="上一个作品">
            <ChevronLeft :size="24" />
          </button>
          <button class="works-next" type="button" aria-label="下一个作品">
            <ChevronRight :size="24" />
          </button>
        </div>
      </section>

      <section id="education" class="content-section">
        <div class="section-heading">
          <p>Education & Certificates</p>
          <h2>教育证书</h2>
        </div>
        <div class="education-grid">
          <article
            v-for="item in educationCards"
            :key="item.title"
            class="education-card tilt-card"
            @mousemove="handleTilt"
            @mouseleave="resetTilt"
          >
            <component :is="item.icon" :size="28" />
            <h3>{{ item.title }}</h3>
            <strong>{{ item.meta }}</strong>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </section>

      <section id="strengths" class="content-section strengths-section">
        <div class="section-heading split-heading">
          <div>
            <p>Advantages</p>
            <h2>个人优势</h2>
          </div>
        </div>
        <div class="strength-grid">
          <article
            v-for="item in strengths"
            :key="item.label"
            class="strength-card float-card tilt-card"
            @mousemove="handleTilt"
            @mouseleave="resetTilt"
          >
            <span></span>
            <h3>{{ item.label }}</h3>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </section>
    </main>
  </div>
</template>

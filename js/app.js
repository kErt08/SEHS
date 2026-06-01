/**
 * Sta. Elena School Performance Tracking — Dashboard & Student Portal
 */
(function () {
  const PASSING = STA_ELENA.passingGrade;
  const TRACKER_KEY = "staElenaGradeTracker";

  const NAV_ICONS = {
    home: '<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>',
    documents: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 2l5 5h-5V4z"/>',
    announcements: '<path d="M18 11c.7 0 1.37-.12 2-.34V6.41L12 2 4 6.41v4.24c.63.22 1.3.35 2 .35 2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 4 1.79 4 4zm-8 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6 8H4v-1c0-2.21 3.58-4 8-4s8 1.79 8 4v1z"/>',
    events: '<path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z"/>',
    upcoming: '<path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>',
    grades: '<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z"/>',
    "subject-flow": '<path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>',
    calendar: '<path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/>',
    "grade-tracker": '<path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>',
    profile: '<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>',
    cor: '<path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>',
    "grade-entry": '<path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>',
    manage: '<path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94L14.4 2.81a.49.49 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.48-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>',
  };

  let session = null;
  let currentModule = "home";
  let calYear = new Date().getFullYear();
  let calMonth = new Date().getMonth();

  function navIcon(id) {
    const path = NAV_ICONS[id] || NAV_ICONS.home;
    return `<svg viewBox="0 0 24 24" aria-hidden="true">${path}</svg>`;
  }

  function initials(name) {
    return (name || "U")
      .split(" ")
      .map((w) => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  }

  function firstName(name) {
    return (name || "User").split(" ")[0];
  }

  function wrapModule(html) {
    return `<div class="dash-module">${html}</div>`;
  }

  function init() {
    session = Auth.requireAuth();
    if (!session) return;

    document.body.classList.add(session.role + "-role");
    if (session.role === "admin") document.body.classList.add("admin-only");
    if (session.role === "teacher") document.body.classList.add("teacher-role");
    if (session.role === "student") document.body.classList.add("student-role");

    renderUserInfo();
    buildNavigation();
    bindGlobalEvents();
    navigate("home");
  }

  function renderUserInfo() {
    const avatar = document.getElementById("user-avatar");
    if (avatar) {
      avatar.textContent = initials(session.name);
      avatar.title = session.name;
    }
  }

  function buildNavigation() {
    const shared = [
      { id: "home", label: "Home" },
      { id: "documents", label: "Documents" },
      { id: "announcements", label: "Announcements" },
      { id: "events", label: "School Events" },
      { id: "upcoming", label: "Upcoming" },
    ];

    const studentNav = [
      { section: "Student Portal" },
      { id: "grades", label: "My Grades" },
      { id: "subject-flow", label: "Subject Flow" },
      { id: "calendar", label: "Calendar" },
      { id: "grade-tracker", label: "Grade Tracker" },
      { id: "profile", label: "Profile" },
      { id: "cor", label: "COR" },
    ];

    const teacherNav = [
      { section: "Teacher" },
      { id: "grade-entry", label: "Grade Entry" },
    ];

    const adminNav = [
      { section: "Administration" },
      { id: "manage", label: "Overview" },
    ];

    let items = [...shared];
    if (session.role === "student") items = items.concat(studentNav);
    if (session.role === "teacher") items = items.concat(teacherNav);
    if (session.role === "admin") items = items.concat(adminNav);

    const nav = document.getElementById("sidebar-nav");
    nav.innerHTML = items
      .map((item) => {
        if (item.section) {
          return `<div class="dash-nav-section">${item.section}</div>`;
        }
        return `<button type="button" class="dash-nav-link" data-module="${item.id}" data-label="${item.label.toLowerCase()}">${navIcon(item.id)}<span>${item.label}</span></button>`;
      })
      .join("");

    nav.querySelectorAll(".dash-nav-link").forEach((btn) => {
      btn.addEventListener("click", () => navigate(btn.dataset.module));
    });
  }

  function bindGlobalEvents() {
    document.getElementById("menu-toggle").addEventListener("click", toggleSidebar);
    document.getElementById("sidebar-overlay").addEventListener("click", closeSidebar);

    document.querySelectorAll("[data-goto]").forEach((el) => {
      el.addEventListener("click", () => navigate(el.dataset.goto));
    });

    const themeBtn = document.getElementById("theme-toggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("theme-dark");
      });
    }

    const notifBtn = document.getElementById("btn-notif");
    if (notifBtn) {
      notifBtn.addEventListener("click", () => navigate("announcements"));
    }

    const avatar = document.getElementById("user-avatar");
    if (avatar && session.role === "student") {
      avatar.addEventListener("click", () => navigate("profile"));
    }

    const search = document.getElementById("dash-search");
    if (search) {
      search.addEventListener("input", () => {
        const q = search.value.trim().toLowerCase();
        document.querySelectorAll(".dash-nav-link").forEach((link) => {
          const label = link.dataset.label || "";
          link.style.display = !q || label.includes(q) ? "" : "none";
        });
      });
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) closeSidebar();
    });
  }

  function wrapTable(tableHtml) {
    return `<div class="table-scroll">${tableHtml}</div>`;
  }

  function toggleSidebar() {
    document.querySelector(".dash-sidebar").classList.toggle("open");
    document.getElementById("sidebar-overlay").classList.toggle("show");
  }

  function closeSidebar() {
    document.querySelector(".dash-sidebar")?.classList.remove("open");
    document.getElementById("sidebar-overlay")?.classList.remove("show");
  }

  function renderRightPanel(moduleId) {
    const panel = document.getElementById("dash-panel");
    if (!panel) return;

    if (moduleId !== "home") {
      panel.classList.add("is-hidden");
      return;
    }
    panel.classList.remove("is-hidden");

    const progressItems =
      session.role === "student"
        ? [
            { name: "Q1 Grades", pct: 100 },
            { name: "Q2 Grades", pct: 100 },
            { name: "Q3 Progress", pct: 45 },
            { name: "Subject Flow", pct: 62 },
          ]
        : [
            { name: "Documents Posted", pct: 85 },
            { name: "Events Scheduled", pct: 70 },
            { name: "Announcements", pct: 90 },
          ];

    panel.innerHTML = `
      <div class="widget">
        <h3>Academic progress</h3>
        ${progressItems
          .map(
            (p) => `<div class="widget-progress">
          <div class="widget-progress__top"><strong>${p.name}</strong><span>${p.pct}%</span></div>
          <div class="widget-progress__bar"><div class="widget-progress__fill" style="width:${p.pct}%"></div></div>
        </div>`
          )
          .join("")}
      </div>
      <div class="widget">
        <h3>Upcoming deadlines</h3>
        ${STA_ELENA.upcomingEvents
          .slice(0, 4)
          .map(
            (e) => `<div class="widget-list-item">
          <div class="widget-list-item__icon">📅</div>
          <div class="widget-list-item__body">
            <strong>${e.title}</strong>
            <span>${formatDate(e.date)}</span>
          </div>
          <button type="button" class="widget-list-item__action" data-goto-event="upcoming">View</button>
        </div>`
          )
          .join("")}
      </div>
      <div class="widget">
        <h3>Quick profile</h3>
        <div class="widget-user">
          <div class="widget-user__avatar">${initials(session.name)}</div>
          <div>
            <strong style="font-size:0.88rem;color:var(--blue-darker)">${session.name}</strong><br>
            <span style="font-size:0.75rem;color:var(--muted)">${Auth.roleLabel(session.role)}</span>
          </div>
        </div>
        <button type="button" class="dash-promo-btn" style="margin-top:0.5rem" id="btn-logout">Log out</button>
      </div>`;

    panel.querySelector("#btn-logout")?.addEventListener("click", () => Auth.logout());
    panel.querySelectorAll("[data-goto-event]").forEach((btn) => {
      btn.addEventListener("click", () => navigate("upcoming"));
    });
  }

  function navigate(moduleId) {
    currentModule = moduleId;
    closeSidebar();

    document.querySelectorAll(".dash-nav-link").forEach((l) => {
      l.classList.toggle("active", l.dataset.module === moduleId);
    });

    const layout = document.querySelector(".dash-layout");
    const pageHead = document.getElementById("dash-page-head");
    const isHome = moduleId === "home";

    if (layout) layout.classList.toggle("dash-layout--full", !isHome);
    if (pageHead) pageHead.classList.toggle("hidden", isHome);

    const titles = {
      home: ["Dashboard", "Welcome back. Select a module from the sidebar."],
      documents: ["Documents & Manuals", "School policies, handbooks, forms, and important files."],
      announcements: ["Announcements", "Latest updates from the school."],
      events: ["School Events", "Activities and schedules."],
      upcoming: ["Upcoming Events", "What's coming up at Sta. Elena."],
      grades: ["My Grades", "View grades by grade level and quarter."],
      "subject-flow": ["Subject Flow", "Completed, current, and future subjects in your curriculum."],
      calendar: ["Academic Calendar", "Important dates, deadlines, and school events."],
      "grade-tracker": ["Grade Monitoring Tool", "Create your own customizable grade tracker."],
      profile: ["My Profile", "Your student information."],
      cor: ["Certificate of Registration", "Your official registration for the current semester."],
      "grade-entry": ["Grade Entry", "Enter and manage student grades (demo)."],
      manage: ["System Overview", "School performance tracking administration."],
    };

    const [title, sub] = titles[moduleId] || ["Dashboard", ""];
    document.getElementById("page-title").textContent = title;
    document.getElementById("page-subtitle").textContent = sub;

    const area = document.getElementById("content-area");
    const renderers = {
      home: renderHome,
      documents: renderDocuments,
      announcements: renderAnnouncements,
      events: renderEvents,
      upcoming: renderUpcoming,
      grades: renderGrades,
      "subject-flow": renderSubjectFlow,
      calendar: renderCalendar,
      "grade-tracker": renderGradeTracker,
      profile: renderProfile,
      cor: renderCOR,
      "grade-entry": renderGradeEntry,
      manage: renderAdminOverview,
    };

    area.innerHTML = (renderers[moduleId] || renderHome)();
    if (moduleId === "grades") bindGradeFilters();
    if (moduleId === "calendar") bindCalendarNav();
    if (moduleId === "grade-tracker") bindGradeTracker();
    if (moduleId === "home") bindHomeCards();
    if (moduleId === "announcements") bindAnnouncementPost();
    if (moduleId === "events") bindSchoolEventPost();
    if (moduleId === "upcoming") bindUpcomingEventPost();
    if (moduleId === "documents") bindDocumentDownloads();
    if (["announcements", "events", "upcoming"].includes(moduleId)) bindAdminDeletes(moduleId);

    renderRightPanel(moduleId);
  }

  function adminDeleteButton(type, id, label) {
    if (!isAdmin()) return "";
    return `<button type="button" class="btn btn-danger btn-sm btn-delete" data-delete-type="${type}" data-delete-id="${escapeHtml(id)}" title="Delete ${escapeHtml(label)}">Delete</button>`;
  }

  function bindAdminDeletes(moduleId) {
    if (!isAdmin()) return;
    document.querySelectorAll("[data-delete-type]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const type = btn.dataset.deleteType;
        const id = btn.dataset.deleteId;
        const labels = {
          announcement: "this announcement",
          schoolEvent: "this school event",
          upcoming: "this upcoming event",
        };
        if (!confirm(`Remove ${labels[type] || "this item"}? This cannot be undone.`)) return;

        if (type === "announcement") Store.deleteAnnouncement(id);
        else if (type === "schoolEvent") Store.deleteSchoolEvent(id);
        else if (type === "upcoming") Store.deleteUpcomingEvent(id);

        navigate(moduleId);
      });
    });
  }

  function isAdmin() {
    return session.role === "admin";
  }

  function adminPostPanel(toggleId, formId, toggleLabel) {
    return `
      <div class="admin-post-wrap admin-only">
        <button type="button" class="btn btn-primary btn-sm admin-post-toggle" id="${toggleId}">${toggleLabel}</button>
        <div class="admin-post-form hidden" id="${formId}"></div>
        <div class="admin-post-success hidden" id="${formId}-success" role="status"></div>
      </div>`;
  }

  function showPostSuccess(formId, message) {
    const el = document.getElementById(`${formId}-success`);
    if (!el) return;
    el.textContent = message;
    el.classList.add("show");
    setTimeout(() => el.classList.remove("show"), 4000);
  }

  function featureCard(moduleId, title, sub, emoji, colorClass) {
    return `<article class="feature-card" data-goto-module="${moduleId}" tabindex="0" role="button">
      <div class="feature-card__icon feature-card__icon--${colorClass}">${emoji}</div>
      <h4>${title}</h4>
      <p>${sub}</p>
    </article>`;
  }

  function bindHomeCards() {
    document.querySelectorAll("[data-goto-module]").forEach((el) => {
      const go = () => navigate(el.dataset.gotoModule);
      el.addEventListener("click", go);
      el.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          go();
        }
      });
    });
    document.querySelectorAll("[data-goto-module-btn]").forEach((btn) => {
      btn.addEventListener("click", () => navigate(btn.dataset.gotoModuleBtn));
    });
  }

  function renderHome() {
    const docs = STA_ELENA.documents.length;
    const ann = STA_ELENA.announcements.length;
    const ev = STA_ELENA.schoolEvents.length;
    const up = STA_ELENA.upcomingEvents.length;

    const popular = [
      { id: "documents", title: "Documents", sub: "Policies & handbooks", emoji: "📄", c: "sky" },
      { id: "announcements", title: "Announcements", sub: "School updates", emoji: "📢", c: "lavender" },
      { id: "events", title: "School Events", sub: "Activities & programs", emoji: "🎉", c: "peach" },
      { id: "upcoming", title: "Upcoming", sub: "Dates to remember", emoji: "⏳", c: "mint" },
    ];

    let ongoing = [];
    if (session.role === "student") {
      ongoing = [
        { id: "grades", title: "My Grades", sub: "By quarter & level", emoji: "📊", c: "sky" },
        { id: "subject-flow", title: "Subject Flow", sub: "Curriculum path", emoji: "📚", c: "lavender" },
        { id: "calendar", title: "Calendar", sub: "Deadlines & events", emoji: "🗓", c: "peach" },
        { id: "grade-tracker", title: "Grade Tracker", sub: "Your own tables", emoji: "✏️", c: "rose" },
      ];
    } else if (session.role === "teacher") {
      ongoing = [
        { id: "grade-entry", title: "Grade Entry", sub: "Enter class grades", emoji: "✍️", c: "sky" },
        { id: "announcements", title: "Announcements", sub: "Post updates", emoji: "📢", c: "lavender" },
        { id: "events", title: "Events", sub: "View schedule", emoji: "📅", c: "mint" },
        { id: "documents", title: "Documents", sub: "School files", emoji: "📄", c: "peach" },
      ];
    } else {
      ongoing = [
        { id: "manage", title: "Overview", sub: "System stats", emoji: "⚙️", c: "sky" },
        { id: "documents", title: "Documents", sub: "Manage files", emoji: "📁", c: "lavender" },
        { id: "announcements", title: "Announcements", sub: "School notices", emoji: "📢", c: "mint" },
        { id: "upcoming", title: "Events", sub: "Schedules", emoji: "📅", c: "peach" },
      ];
    }

    return `
      <section class="welcome-banner">
        <img src="assets/sehs-logo.png" alt="" class="welcome-banner__logo sehs-logo sehs-logo--xl" width="72" height="72" aria-hidden="true" />
        <div class="welcome-banner__text">
          <h2>Hi, ${escapeHtml(firstName(session.name))} 👋</h2>
          <p>Welcome to Sta. Elena High School Performance Tracking — your hub for grades, documents, and school life.</p>
          <button type="button" class="welcome-banner__btn" data-goto-module-btn="announcements">Learn more</button>
        </div>
        <div class="welcome-banner__art" aria-hidden="true">
          <div class="welcome-3d">📚</div>
          <div class="welcome-3d">🎓</div>
          <div class="welcome-3d">📋</div>
        </div>
      </section>

      <div class="dash-stats">
        <div class="dash-stat"><div class="dash-stat__label">Documents</div><div class="dash-stat__value">${docs}</div></div>
        <div class="dash-stat"><div class="dash-stat__label">Announcements</div><div class="dash-stat__value">${ann}</div></div>
        <div class="dash-stat"><div class="dash-stat__label">Events</div><div class="dash-stat__value">${ev}</div></div>
        <div class="dash-stat"><div class="dash-stat__label">Upcoming</div><div class="dash-stat__value">${up}</div></div>
      </div>

      <section class="dash-section">
        <div class="dash-section__head">
          <h3>Popular</h3>
          <button type="button" class="dash-section__link" data-goto-module-btn="documents">View All →</button>
        </div>
        <div class="dash-card-row">
          ${popular.map((p) => featureCard(p.id, p.title, p.sub, p.emoji, p.c)).join("")}
        </div>
      </section>

      <section class="dash-section">
        <div class="dash-section__head">
          <h3>${session.role === "student" ? "Student Portal" : session.role === "teacher" ? "Teacher Tools" : "Administration"}</h3>
          <button type="button" class="dash-section__link" data-goto-module-btn="${ongoing[0]?.id || "home"}">View All →</button>
        </div>
        <div class="dash-card-row">
          ${ongoing.map((p) => featureCard(p.id, p.title, p.sub, p.emoji, p.c)).join("")}
        </div>
      </section>`;
  }

  function renderDocuments() {
    const modules = Store.getDocumentModules();
    const byModule = modules
      .map((mod) => {
        const docs = STA_ELENA.documents.filter((d) => (d.module || "General") === mod);
        const list = docs
          .map(
            (d) => `<li class="doc-item">
            <div class="doc-item__main">
              <strong>${escapeHtml(d.title)}</strong><br>
              <span class="meta">${formatDate(d.date)} · ${escapeHtml(d.size)}</span>
            </div>
            <div class="doc-item__actions">
              <span class="doc-tag">${escapeHtml(d.category)}</span>
              <button type="button" class="btn btn-secondary btn-sm btn-doc-download" data-doc-title="${escapeHtml(d.title)}">Download</button>
            </div>
          </li>`
          )
          .join("");
        return `
          <section class="doc-module">
            <h3 class="doc-module__title">${escapeHtml(mod)}</h3>
            <p class="doc-module__count">${docs.length} file${docs.length === 1 ? "" : "s"}</p>
            <ul class="doc-list">${list}</ul>
          </section>`;
      })
      .join("");

    return wrapModule(`
        <h2>Documents &amp; Manuals</h2>
        <p class="desc">School policies, handbooks, forms, and manuals organized by module. ${STA_ELENA.documents.length} documents available.</p>
        <div class="doc-modules">${byModule}</div>
      `);
  }

  function bindDocumentDownloads() {
    document.querySelectorAll(".btn-doc-download").forEach((btn) => {
      btn.addEventListener("click", () => {
        alert(`Demo: download "${btn.dataset.docTitle}"`);
      });
    });
  }

  function renderAnnouncements() {
    return wrapModule(`
        <h2>Announcements</h2>
        <p class="desc">Updates regarding school activities and important notices.${isAdmin() ? " Post or remove announcements as administrator." : ""}</p>
        ${isAdmin() ? adminPostPanel("btn-toggle-announcement", "form-announcement", "+ Post Announcement") : ""}
        <div class="feed-list" id="announcements-list">
        ${STA_ELENA.announcements
          .map(
            (a) => `<article class="feed-item feed-item--row">
          <div class="feed-item__body">
            <div class="date">${formatDate(a.date)} · Posted by ${escapeHtml(a.author)}</div>
            <h3>${escapeHtml(a.title)}</h3>
            <p>${escapeHtml(a.body)}</p>
          </div>
          ${adminDeleteButton("announcement", a.id, a.title)}
        </article>`
          )
          .join("") || '<p class="empty-feed">No announcements yet.</p>'}
        </div>
      `);
  }

  function bindAnnouncementPost() {
    if (!isAdmin()) return;
    const formWrap = document.getElementById("form-announcement");
    const toggle = document.getElementById("btn-toggle-announcement");
    if (!formWrap || !toggle) return;

    formWrap.innerHTML = `
      <form id="announcement-post-form" class="admin-post-form__inner">
        <div class="form-group">
          <label for="ann-title">Title</label>
          <input type="text" id="ann-title" required maxlength="120" placeholder="Announcement title" />
        </div>
        <div class="form-group">
          <label for="ann-date">Date</label>
          <input type="date" id="ann-date" required value="${Store.todayISO()}" />
        </div>
        <div class="form-group">
          <label for="ann-body">Message</label>
          <textarea id="ann-body" rows="4" required maxlength="1000" placeholder="Write the announcement…"></textarea>
        </div>
        <div class="admin-post-form__actions">
          <button type="submit" class="btn btn-primary btn-sm">Publish</button>
          <button type="button" class="btn btn-secondary btn-sm" id="ann-cancel">Cancel</button>
        </div>
      </form>`;

    toggle.addEventListener("click", () => {
      formWrap.classList.toggle("hidden");
      toggle.textContent = formWrap.classList.contains("hidden") ? "+ Post Announcement" : "− Close form";
    });

    document.getElementById("ann-cancel").addEventListener("click", () => {
      formWrap.classList.add("hidden");
      toggle.textContent = "+ Post Announcement";
    });

    document.getElementById("announcement-post-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const title = document.getElementById("ann-title").value.trim();
      const body = document.getElementById("ann-body").value.trim();
      const date = document.getElementById("ann-date").value;
      if (!title || !body || !date) return;

      Store.addAnnouncement({
        title,
        body,
        date,
        author: session.name || "Administration",
      });

      formWrap.classList.add("hidden");
      toggle.textContent = "+ Post Announcement";
      showPostSuccess("form-announcement", "Announcement published successfully.");
      navigate("announcements");
    });
  }

  function renderEvents() {
    return wrapModule(`
        <h2>School Events</h2>
        <p class="desc">School activities and schedules.${isAdmin() ? " Post or remove school events as administrator." : ""}</p>
        ${isAdmin() ? adminPostPanel("btn-toggle-school-event", "form-school-event", "+ Post School Event") : ""}
        <div id="school-events-list">
        ${STA_ELENA.schoolEvents
          .map(
            (e) => `<div class="event-card event-card--row">
          <div class="event-card__body">
            <strong>${escapeHtml(e.title)}</strong><br>
            <span class="event-card__meta">
              ${formatDate(e.date)} · ${escapeHtml(e.time)} · ${escapeHtml(e.location)}
            </span>
          </div>
          ${adminDeleteButton("schoolEvent", e.id, e.title)}
        </div>`
          )
          .join("") || '<p class="empty-feed">No school events yet.</p>'}
        </div>
      `);
  }

  function bindSchoolEventPost() {
    if (!isAdmin()) return;
    const formWrap = document.getElementById("form-school-event");
    const toggle = document.getElementById("btn-toggle-school-event");
    if (!formWrap || !toggle) return;

    formWrap.innerHTML = `
      <form id="school-event-post-form" class="admin-post-form__inner">
        <div class="form-group">
          <label for="se-title">Event title</label>
          <input type="text" id="se-title" required maxlength="120" placeholder="e.g. Foundation Day Program" />
        </div>
        <div class="form-row-grid">
          <div class="form-group">
            <label for="se-date">Date</label>
            <input type="date" id="se-date" required value="${Store.todayISO()}" />
          </div>
          <div class="form-group">
            <label for="se-time">Time</label>
            <input type="text" id="se-time" required placeholder="e.g. 8:00 AM" />
          </div>
        </div>
        <div class="form-group">
          <label for="se-location">Location</label>
          <input type="text" id="se-location" required maxlength="120" placeholder="e.g. School Gymnasium" />
        </div>
        <div class="admin-post-form__actions">
          <button type="submit" class="btn btn-primary btn-sm">Publish</button>
          <button type="button" class="btn btn-secondary btn-sm" id="se-cancel">Cancel</button>
        </div>
      </form>`;

    toggle.addEventListener("click", () => {
      formWrap.classList.toggle("hidden");
      toggle.textContent = formWrap.classList.contains("hidden") ? "+ Post School Event" : "− Close form";
    });

    document.getElementById("se-cancel").addEventListener("click", () => {
      formWrap.classList.add("hidden");
      toggle.textContent = "+ Post School Event";
    });

    document.getElementById("school-event-post-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const title = document.getElementById("se-title").value.trim();
      const date = document.getElementById("se-date").value;
      const time = document.getElementById("se-time").value.trim();
      const location = document.getElementById("se-location").value.trim();
      if (!title || !date || !time || !location) return;

      Store.addSchoolEvent({ title, date, time, location, type: "school" });

      formWrap.classList.add("hidden");
      toggle.textContent = "+ Post School Event";
      showPostSuccess("form-school-event", "School event published successfully.");
      navigate("events");
    });
  }

  function renderUpcoming() {
    return wrapModule(`
        <h2>Upcoming Events</h2>
        <p class="desc">Scheduled activities coming soon.${isAdmin() ? " Post or remove upcoming events as administrator." : ""}</p>
        ${isAdmin() ? adminPostPanel("btn-toggle-upcoming", "form-upcoming", "+ Post Upcoming Event") : ""}
        <div id="upcoming-events-list">
        ${STA_ELENA.upcomingEvents
          .map(
            (e) => `<div class="event-card upcoming event-card--row">
          <div class="event-card__body">
            <strong>${escapeHtml(e.title)}</strong><br>
            <span class="event-card__meta">
              ${formatDate(e.date)} · ${escapeHtml(e.time)} · ${escapeHtml(e.location)}
            </span>
          </div>
          ${adminDeleteButton("upcoming", e.id, e.title)}
        </div>`
          )
          .join("") || '<p class="empty-feed">No upcoming events yet.</p>'}
        </div>
      `);
  }

  function bindUpcomingEventPost() {
    if (!isAdmin()) return;
    const formWrap = document.getElementById("form-upcoming");
    const toggle = document.getElementById("btn-toggle-upcoming");
    if (!formWrap || !toggle) return;

    formWrap.innerHTML = `
      <form id="upcoming-post-form" class="admin-post-form__inner">
        <div class="form-group">
          <label for="up-title">Event title</label>
          <input type="text" id="up-title" required maxlength="120" placeholder="e.g. Career Guidance Seminar" />
        </div>
        <div class="form-row-grid">
          <div class="form-group">
            <label for="up-date">Date</label>
            <input type="date" id="up-date" required value="${Store.todayISO()}" />
          </div>
          <div class="form-group">
            <label for="up-time">Time</label>
            <input type="text" id="up-time" required placeholder="e.g. 9:00 AM" />
          </div>
        </div>
        <div class="form-group">
          <label for="up-location">Location</label>
          <input type="text" id="up-location" required maxlength="120" placeholder="e.g. AVR" />
        </div>
        <div class="admin-post-form__actions">
          <button type="submit" class="btn btn-primary btn-sm">Publish</button>
          <button type="button" class="btn btn-secondary btn-sm" id="up-cancel">Cancel</button>
        </div>
      </form>`;

    toggle.addEventListener("click", () => {
      formWrap.classList.toggle("hidden");
      toggle.textContent = formWrap.classList.contains("hidden") ? "+ Post Upcoming Event" : "− Close form";
    });

    document.getElementById("up-cancel").addEventListener("click", () => {
      formWrap.classList.add("hidden");
      toggle.textContent = "+ Post Upcoming Event";
    });

    document.getElementById("upcoming-post-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const title = document.getElementById("up-title").value.trim();
      const date = document.getElementById("up-date").value;
      const time = document.getElementById("up-time").value.trim();
      const location = document.getElementById("up-location").value.trim();
      if (!title || !date || !time || !location) return;

      Store.addUpcomingEvent({ title, date, time, location, type: "upcoming" });

      formWrap.classList.add("hidden");
      toggle.textContent = "+ Post Upcoming Event";
      showPostSuccess("form-upcoming", "Upcoming event published successfully.");
      navigate("upcoming");
    });
  }

  function renderGrades() {
    const levels = Object.keys(STA_ELENA.grades);
    const quarters = STA_ELENA.quarters;

    return wrapModule(`
        <h2>My Grades</h2>
        <p class="desc">Official grades appear only after a quarter is completed. Ongoing subjects show <span class="badge badge-pending">Pending</span>. Failed subjects (below ${PASSING}) are highlighted.</p>
        <div class="filters">
          <div class="form-group">
            <label for="filter-level">Grade Level</label>
            <select id="filter-level">${levels.map((l) => `<option value="${l}">${l}</option>`).join("")}</select>
          </div>
          <div class="form-group">
            <label for="filter-quarter">Quarter</label>
            <select id="filter-quarter">${quarters.map((q) => `<option value="${q.id}">${q.label} (${q.status})</option>`).join("")}</select>
          </div>
        </div>
        <div id="grades-table-wrap"></div>
      `);
  }

  function bindGradeFilters() {
    const levelEl = document.getElementById("filter-level");
    const quarterEl = document.getElementById("filter-quarter");
    const update = () => updateGradesTable(levelEl.value, quarterEl.value);
    levelEl.addEventListener("change", update);
    quarterEl.addEventListener("change", update);
    update();
  }

  function updateGradesTable(level, quarterId) {
    const quarter = STA_ELENA.quarters.find((q) => q.id === quarterId);
    const subjects = STA_ELENA.grades[level]?.[quarterId] || [];
    const isCompleted = quarter?.status === "completed";

    const rows = subjects
      .map((s) => {
        let gradeDisplay, statusClass, badge;
        if (!isCompleted || s.grade === null) {
          gradeDisplay = "—";
          statusClass = "pending";
          badge = '<span class="badge badge-pending">Pending</span>';
        } else {
          const failed = s.grade < PASSING;
          gradeDisplay = s.grade.toFixed(2);
          statusClass = failed ? "failed" : "";
          badge = failed
            ? '<span class="badge badge-fail">Failed</span>'
            : '<span class="badge badge-pass">Passed</span>';
        }
        return `<tr class="${statusClass}">
        <td>${s.code}</td>
        <td>${s.subject}</td>
        <td>${s.units}</td>
        <td><strong>${gradeDisplay}</strong></td>
        <td>${badge}</td>
      </tr>`;
      })
      .join("");

    const note = !isCompleted
      ? `<p style="font-size:0.85rem;color:var(--warning);margin-bottom:1rem">⚠ This quarter is still ongoing. All grades show as <strong>Pending</strong> until the quarter is completed.</p>`
      : "";

    document.getElementById("grades-table-wrap").innerHTML =
      note +
      wrapTable(`
      <table class="data-table">
        <thead>
          <tr><th>Code</th><th>Subject</th><th>Units</th><th>Grade</th><th>Status</th></tr>
        </thead>
        <tbody>${rows || '<tr><td colspan="5">No subjects for this period.</td></tr>'}</tbody>
      </table>`);
  }

  function renderSubjectFlow() {
    const flow = STA_ELENA.subjectFlow;
    const section = (title, items, badgeClass, badgeText) => `
      <h3 style="margin:1.25rem 0 0.5rem;color:var(--navy)">${title}</h3>
      <div class="flow-timeline">
        ${items
          .map(
            (s) => `<div class="flow-item">
          <span class="code">${s.code}</span>
          <div style="flex:1">
            <strong>${s.name}</strong>
            <span style="font-size:0.82rem;color:var(--muted);margin-left:0.5rem">${s.units} unit(s)</span>
          </div>
          <span class="badge ${badgeClass}">${badgeText}</span>
        </div>`
          )
          .join("")}
      </div>`;

    return wrapModule(`
        <h2>Subject Flow</h2>
        <p class="desc">Your curriculum path — completed, current, and future subjects.</p>
        ${section("Completed Subjects", flow.completed, "badge-done", "Completed")}
        ${section("Current Subjects", flow.current, "badge-current", "Current")}
        ${section("Future Subjects", flow.future, "badge-future", "Upcoming")}
      `);
  }

  function renderCalendar() {
    return wrapModule(`
        <h2>Academic Calendar</h2>
        <p class="desc">Track important dates, deadlines, and school events.</p>
        <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1rem">
          <button type="button" class="btn btn-secondary btn-sm" id="cal-prev">← Prev</button>
          <strong id="cal-month-label" style="min-width:160px;text-align:center"></strong>
          <button type="button" class="btn btn-secondary btn-sm" id="cal-next">Next →</button>
        </div>
        <div id="calendar-grid" class="calendar-grid"></div>
        <div style="margin-top:1rem;font-size:0.82rem;color:var(--muted)">
          <span class="badge badge-current">Academic</span>
          <span class="badge badge-future">Event</span>
          <span class="badge badge-fail">Deadline</span>
        </div>
      `);
  }

  function bindCalendarNav() {
    document.getElementById("cal-prev").addEventListener("click", () => {
      calMonth--;
      if (calMonth < 0) { calMonth = 11; calYear--; }
      paintCalendar();
    });
    document.getElementById("cal-next").addEventListener("click", () => {
      calMonth++;
      if (calMonth > 11) { calMonth = 0; calYear++; }
      paintCalendar();
    });
    paintCalendar();
  }

  function paintCalendar() {
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    document.getElementById("cal-month-label").textContent = `${months[calMonth]} ${calYear}`;

    const first = new Date(calYear, calMonth, 1);
    const last = new Date(calYear, calMonth + 1, 0);
    const startPad = first.getDay();
    const daysInMonth = last.getDate();
    const today = new Date();

    const eventMap = {};
    STA_ELENA.calendarEvents.forEach((e) => {
      eventMap[e.date] = eventMap[e.date] || [];
      eventMap[e.date].push(e);
    });

    const heads = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((d) => `<div class="cal-head">${d}</div>`).join("");
    let cells = "";

    const prevLast = new Date(calYear, calMonth, 0).getDate();
    for (let i = startPad - 1; i >= 0; i--) {
      cells += `<div class="cal-day other"><span>${prevLast - i}</span></div>`;
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const iso = `${calYear}-${String(calMonth + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
      const isToday = today.getFullYear() === calYear && today.getMonth() === calMonth && today.getDate() === d;
      const evs = (eventMap[iso] || [])
        .map((e) => `<div class="cal-event" title="${e.title}">${e.title}</div>`)
        .join("");
      cells += `<div class="cal-day${isToday ? " today" : ""}"><strong>${d}</strong>${evs}</div>`;
    }

    const total = startPad + daysInMonth;
    const rem = total % 7 === 0 ? 0 : 7 - (total % 7);
    for (let i = 1; i <= rem; i++) {
      cells += `<div class="cal-day other"><span>${i}</span></div>`;
    }

    document.getElementById("calendar-grid").innerHTML = heads + cells;
  }

  function getTrackerData() {
    try {
      const raw = localStorage.getItem(TRACKER_KEY);
      if (raw) return JSON.parse(raw);
    } catch (_) {}
    return {
      columns: ["Subject", "Quiz 1", "Quiz 2", "Project", "Target Grade"],
      rows: [
        ["General Biology 1", "", "", "", "90"],
        ["Statistics & Probability", "", "", "", "88"],
      ],
    };
  }

  function saveTrackerData(data) {
    localStorage.setItem(TRACKER_KEY, JSON.stringify(data));
  }

  function renderGradeTracker() {
    const data = getTrackerData();
    const headerCells = data.columns.map((c) => `<th>${escapeHtml(c)}</th>`).join("");
    const bodyRows = data.rows
      .map(
        (row, ri) => `<tr data-row="${ri}">
        ${row.map((cell, ci) => `<td><input type="text" value="${escapeHtml(cell)}" data-row="${ri}" data-col="${ci}" style="width:100%;border:1px solid var(--border);padding:0.35rem;border-radius:4px" /></td>`).join("")}
        <td><button type="button" class="btn btn-danger btn-sm btn-del-row" data-row="${ri}">×</button></td>
      </tr>`
      )
      .join("");

    return wrapModule(`
        <h2>Grade Monitoring Tool</h2>
        <p class="desc">Create your own grade tracker with customizable tables. Data is saved in your browser.</p>
        <div class="tracker-controls">
          <button type="button" class="btn btn-secondary btn-sm" id="btn-add-row">+ Add Row</button>
          <button type="button" class="btn btn-secondary btn-sm" id="btn-add-col">+ Add Column</button>
          <button type="button" class="btn btn-primary btn-sm" id="btn-save-tracker">Save Tracker</button>
          <button type="button" class="btn btn-secondary btn-sm" id="btn-reset-tracker">Reset to Default</button>
        </div>
        <div class="tracker-table-wrap table-scroll">
          <table class="data-table" id="tracker-table">
            <thead><tr>${headerCells}<th></th></tr></thead>
            <tbody>${bodyRows}</tbody>
          </table>
        </div>
      `);
  }

  function bindGradeTracker() {
    document.getElementById("btn-save-tracker").addEventListener("click", saveTrackerFromDOM);
    document.getElementById("btn-add-row").addEventListener("click", () => {
      const data = getTrackerData();
      data.rows.push(data.columns.map(() => ""));
      saveTrackerData(data);
      navigate("grade-tracker");
    });
    document.getElementById("btn-add-col").addEventListener("click", () => {
      const name = prompt("Column name:");
      if (!name) return;
      const data = getTrackerData();
      data.columns.push(name);
      data.rows.forEach((r) => r.push(""));
      saveTrackerData(data);
      navigate("grade-tracker");
    });
    document.getElementById("btn-reset-tracker").addEventListener("click", () => {
      if (confirm("Reset tracker to default?")) {
        localStorage.removeItem(TRACKER_KEY);
        navigate("grade-tracker");
      }
    });
    document.querySelectorAll("#tracker-table input").forEach((inp) => {
      inp.addEventListener("change", saveTrackerFromDOM);
    });
    document.querySelectorAll(".btn-del-row").forEach((btn) => {
      btn.addEventListener("click", () => {
        const data = getTrackerData();
        data.rows.splice(Number(btn.dataset.row), 1);
        saveTrackerData(data);
        navigate("grade-tracker");
      });
    });
  }

  function saveTrackerFromDOM() {
    const table = document.getElementById("tracker-table");
    if (!table) return;
    const headers = [...table.querySelectorAll("thead th")].slice(0, -1).map((th) => th.textContent);
    const rows = [...table.querySelectorAll("tbody tr")].map((tr) =>
      [...tr.querySelectorAll("input")].map((inp) => inp.value)
    );
    saveTrackerData({ columns: headers, rows });
    alert("Grade tracker saved.");
  }

  function renderProfile() {
    const s = STA_ELENA.users.student;
    return wrapModule(`
        <h2>My Profile</h2>
        <p class="desc">Your student account information.</p>
        <div class="profile-grid">
          <div class="profile-field"><label>Full Name</label><span>${s.name}</span></div>
          <div class="profile-field"><label>Student ID</label><span>${s.id}</span></div>
          <div class="profile-field"><label>Grade Level</label><span>${s.gradeLevel}</span></div>
          <div class="profile-field"><label>Strand</label><span>${s.strand}</span></div>
          <div class="profile-field"><label>Section</label><span>${s.section}</span></div>
          <div class="profile-field"><label>School Year</label><span>${s.schoolYear}</span></div>
          <div class="profile-field"><label>Email</label><span>${s.email}</span></div>
          <div class="profile-field"><label>Role</label><span>Student</span></div>
        </div>
      `);
  }

  function renderCOR() {
    const c = STA_ELENA.cor;
    return wrapModule(`
        <h2>Certificate of Registration</h2>
        <p class="desc">Official registration for ${c.schoolYear}.</p>
        <button type="button" class="btn btn-secondary btn-sm" onclick="window.print()" style="margin-bottom:1rem">🖨 Print COR</button>
        <div class="cor-preview">
          <div class="cor-header">
            <h3>${STA_ELENA.schoolName}</h3>
            <p style="margin:0.25rem 0;font-size:0.9rem">Certificate of Registration</p>
            <p style="margin:0;font-size:0.82rem;color:var(--muted)">School Year ${c.schoolYear}</p>
          </div>
          <div class="profile-grid">
            <div class="profile-field"><label>Student Name</label><span>${c.name}</span></div>
            <div class="profile-field"><label>Student ID</label><span>${c.studentId}</span></div>
            <div class="profile-field"><label>Grade Level</label><span>${c.gradeLevel}</span></div>
            <div class="profile-field"><label>Strand / Section</label><span>${c.strand} — ${c.section}</span></div>
          </div>
          ${wrapTable(`<table class="data-table" style="margin-top:1rem">
            <thead>
              <tr><th>Code</th><th>Subject</th><th>Schedule</th><th>Units</th></tr>
            </thead>
            <tbody>
              ${c.subjects
                .map(
                  (s) => `<tr>
                <td>${s.code}</td><td>${s.name}</td><td>${s.schedule}</td><td>${s.units}</td>
              </tr>`
                )
                .join("")}
            </tbody>
          </table>`)}
          <p style="margin-top:1rem;text-align:right"><strong>Total Units:</strong> ${c.totalUnits}</p>
          <p style="font-size:0.8rem;color:var(--muted)">Date Issued: ${formatDate(c.dateIssued)}</p>
        </div>
      `);
  }

  function renderGradeEntry() {
    return wrapModule(`
        <h2>Grade Entry (Demo)</h2>
        <p class="desc">Teachers can enter grades for their classes. Connect to a database for production use.</p>
        <div class="filters">
          <div class="form-group"><label>Section</label><select><option>Grade 11 - Einstein (STEM)</option></select></div>
          <div class="form-group"><label>Subject</label><select><option>Statistics & Probability</option></select></div>
          <div class="form-group"><label>Quarter</label><select><option>Quarter 3 (Ongoing)</option></select></div>
        </div>
        ${wrapTable(`<table class="data-table">
          <thead><tr><th>Student</th><th>ID</th><th>Grade</th><th>Action</th></tr></thead>
          <tbody>
            <tr><td>Ana Patricia Reyes</td><td>STU2024-0891</td><td><input type="number" min="0" max="100" placeholder="—" style="width:80px;max-width:100%" /></td><td><button class="btn btn-primary btn-sm">Save</button></td></tr>
            <tr><td>Carlos Mendoza</td><td>STU2024-0892</td><td><input type="number" min="0" max="100" style="width:80px;max-width:100%" /></td><td><button class="btn btn-primary btn-sm">Save</button></td></tr>
          </tbody>
        </table>`)}
      `);
  }

  function renderAdminOverview() {
    return wrapModule(`
        <h2>System Overview</h2>
        <p class="desc">Administrator / Principal dashboard for school performance management.</p>
        <div class="grid-3">
          <div class="stat-card"><div class="label">Total Students</div><div class="value">1,248</div></div>
          <div class="stat-card"><div class="label">Teachers</div><div class="value">64</div></div>
          <div class="stat-card"><div class="label">Active Quarters</div><div class="value">Q3–Q4</div></div>
        </div>
        <p style="margin-top:1rem;font-size:0.88rem;color:var(--muted)">
          Manage documents, announcements, events, user accounts, and quarter completion status from this portal (demo data shown).
        </p>
        <div style="margin-top:1rem;display:flex;gap:0.5rem;flex-wrap:wrap">
          <button class="btn btn-secondary btn-sm" onclick="alert('Demo: manage users')">Manage Users</button>
          <button class="btn btn-secondary btn-sm" onclick="alert('Demo: close quarter')">Close Quarter</button>
          <button class="btn btn-secondary btn-sm" onclick="alert('Demo: upload document')">Upload Document</button>
        </div>
      `);
  }

  function formatDate(iso) {
    const d = new Date(iso + "T12:00:00");
    return d.toLocaleDateString("en-PH", { year: "numeric", month: "short", day: "numeric" });
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  if (document.body.dataset.page === "dashboard") {
    document.addEventListener("DOMContentLoaded", init);
  }
})();

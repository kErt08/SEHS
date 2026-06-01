/**
 * Persist announcements, events, documents (localStorage)
 */
const Store = {
  keys: {
    announcements: "staElenaAnnouncements",
    schoolEvents: "staElenaSchoolEvents",
    upcomingEvents: "staElenaUpcomingEvents",
    documents: "staElenaDocuments",
  },

  init() {
    STA_ELENA.announcements = this._withIds(this._load(this.keys.announcements, STA_ELENA.announcements), "ann");
    STA_ELENA.schoolEvents = this._withIds(this._load(this.keys.schoolEvents, STA_ELENA.schoolEvents), "evt");
    STA_ELENA.upcomingEvents = this._withIds(this._load(this.keys.upcomingEvents, STA_ELENA.upcomingEvents), "upc");
    STA_ELENA.documents = this._withIds(this._load(this.keys.documents, STA_ELENA.documents), "doc");
    this._persistAll();
  },

  _load(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      if (raw) return JSON.parse(raw);
    } catch (_) {}
    return JSON.parse(JSON.stringify(fallback));
  },

  _save(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  },

  _persistAll() {
    this._save(this.keys.announcements, STA_ELENA.announcements);
    this._save(this.keys.schoolEvents, STA_ELENA.schoolEvents);
    this._save(this.keys.upcomingEvents, STA_ELENA.upcomingEvents);
    this._save(this.keys.documents, STA_ELENA.documents);
  },

  newId(prefix) {
    return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  },

  _withIds(items, prefix) {
    return items.map((item, index) => ({
      ...item,
      id: item.id || `${prefix}_seed_${index}`,
    }));
  },

  addAnnouncement(item) {
    const entry = { ...item, id: item.id || this.newId("ann") };
    STA_ELENA.announcements.unshift(entry);
    this._save(this.keys.announcements, STA_ELENA.announcements);
    return entry;
  },

  deleteAnnouncement(id) {
    STA_ELENA.announcements = STA_ELENA.announcements.filter((a) => a.id !== id);
    this._save(this.keys.announcements, STA_ELENA.announcements);
  },

  addSchoolEvent(item) {
    const entry = { ...item, id: item.id || this.newId("evt") };
    STA_ELENA.schoolEvents.unshift(entry);
    this._save(this.keys.schoolEvents, STA_ELENA.schoolEvents);
    return entry;
  },

  deleteSchoolEvent(id) {
    STA_ELENA.schoolEvents = STA_ELENA.schoolEvents.filter((e) => e.id !== id);
    this._save(this.keys.schoolEvents, STA_ELENA.schoolEvents);
  },

  addUpcomingEvent(item) {
    const entry = { ...item, id: item.id || this.newId("upc") };
    STA_ELENA.upcomingEvents.unshift(entry);
    this._save(this.keys.upcomingEvents, STA_ELENA.upcomingEvents);
    return entry;
  },

  deleteUpcomingEvent(id) {
    STA_ELENA.upcomingEvents = STA_ELENA.upcomingEvents.filter((e) => e.id !== id);
    this._save(this.keys.upcomingEvents, STA_ELENA.upcomingEvents);
  },

  getDocumentModules() {
    const modules = new Set(STA_ELENA.documents.map((d) => d.module || "General"));
    return Array.from(modules).sort();
  },

  todayISO() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  },
};

Store.init();

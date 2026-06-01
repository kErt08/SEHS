/**
 * Session handling for Sta. Elena SPTMS
 */
const Auth = {
  SESSION_KEY: "staElenaSession",

  login(username, password, role) {
    const profiles = {
      admin: STA_ELENA.users.admin,
      teacher: STA_ELENA.users.teacher,
      student: STA_ELENA.users.student,
    };
    const profile = profiles[role];
    if (!profile) return { ok: false, message: "Invalid role selected." };
    if (!username.trim()) return { ok: false, message: "Please enter your school ID or email." };
    if (password.length < 4) return { ok: false, message: "Password must be at least 4 characters." };

    const session = {
      ...profile,
      username: username.trim(),
      loginAt: new Date().toISOString(),
    };
    sessionStorage.setItem(this.SESSION_KEY, JSON.stringify(session));
    return { ok: true, session };
  },

  getSession() {
    try {
      const raw = sessionStorage.getItem(this.SESSION_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  },

  requireAuth() {
    const session = this.getSession();
    if (!session) {
      window.location.href = "login.html";
      return null;
    }
    return session;
  },

  logout() {
    sessionStorage.removeItem(this.SESSION_KEY);
    window.location.href = "login.html";
  },

  roleLabel(role) {
    const labels = {
      admin: "Administrator / Principal",
      teacher: "Teacher",
      student: "Student",
    };
    return labels[role] || role;
  },
};

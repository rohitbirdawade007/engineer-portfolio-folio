export const API_URL = import.meta.env.VITE_API_URL || "/api";

// If API_URL is a full URL (like http://localhost:5000/api), BASE_URL should be http://localhost:5000
// If API_URL is relative (like /api), BASE_URL should be empty
export const BASE_URL = API_URL.includes('://') 
  ? API_URL.split('/api')[0] 
  : "";

/**
 * Resolves an asset path to a full URL.
 * - Full HTTP URLs are returned as-is.
 * - Backend-uploaded paths (contain /uploads/ or similar) get BASE_URL prepended.
 * - Local public-folder paths (short paths like /profile.png) are returned as-is
 *   so the browser serves them from the Vite dev server or the deployed CDN.
 */
export const getAssetUrl = (path: string) => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  
  // Backend-stored files typically live under /uploads/
  if (path.startsWith('/uploads/') || path.includes('/api/')) {
    return `${BASE_URL}${path}`;
  }
  
  // Local public-folder file (e.g., /profile.png) — serve from origin
  return path;
};

// ─── Auth helper ──────────────────────────────────────────────────────────────
const getAuthHeader = () => {
  const token = localStorage.getItem('adminToken');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// ─── Generic fetcher ──────────────────────────────────────────────────────────
export const apiFetch = async (endpoint: string, options?: RequestInit) => {
  const res = await fetch(`${API_URL}${endpoint}`, options);
  if (!res.ok) {
    const err = await res.json().catch(() => ({ msg: 'Request failed' }));
    throw new Error(err.msg || `API error: ${res.status}`);
  }
  return res.json();
};

// ─── Authenticated fetcher (admin) ────────────────────────────────────────────
export const apiAuthFetch = async (endpoint: string, options: RequestInit = {}) => {
  const isFormData = options.body instanceof FormData;
  
  const headers: Record<string, string> = {
    ...getAuthHeader(),
    ...((options.headers as Record<string, string>) || {})
  };

  if (!isFormData && !headers['Content-Type']) {
    headers['Content-Type'] = 'application/json';
  }

  let body = options.body;
  if (!isFormData && body && typeof body === 'object') {
    body = JSON.stringify(body);
  }

  return apiFetch(endpoint, {
    ...options,
    headers,
    body
  });
};

// ─── Projects ─────────────────────────────────────────────────────────────────
export const getProjects = () => apiFetch('/projects');
export const getProject  = (id: string) => apiFetch(`/projects/${id}`);
export const createProject = (data: FormData) =>
  apiAuthFetch('/projects', { method: 'POST', body: data });
export const updateProject = (id: string, data: FormData) =>
  apiAuthFetch(`/projects/${id}`, { method: 'PUT', body: data });
export const deleteProject = (id: string) =>
  apiAuthFetch(`/projects/${id}`, { method: 'DELETE' });

// ─── Achievements ─────────────────────────────────────────────────────────────
export const getAchievements = () => apiFetch('/achievements');
export const getAchievement  = (id: string) => apiFetch(`/achievements/${id}`);
export const createAchievement = (data: any) =>
  apiAuthFetch('/achievements', { method: 'POST', body: data });
export const updateAchievement = (id: string, data: any) =>
  apiAuthFetch(`/achievements/${id}`, { method: 'PUT', body: data });
export const deleteAchievement = (id: string) =>
  apiAuthFetch(`/achievements/${id}`, { method: 'DELETE' });

// ─── Experience ───────────────────────────────────────────────────────────────
export const getExperiences = () => apiFetch('/experience');
export const getExperience  = (id: string) => apiFetch(`/experience/${id}`);
export const createExperience = (data: any) =>
  apiAuthFetch('/experience', { method: 'POST', body: data });
export const updateExperience = (id: string, data: any) =>
  apiAuthFetch(`/experience/${id}`, { method: 'PUT', body: data });
export const deleteExperience = (id: string) =>
  apiAuthFetch(`/experience/${id}`, { method: 'DELETE' });

// ─── Education ────────────────────────────────────────────────────────────────
export const getEducations = () => apiFetch('/education');
export const getEducation  = (id: string) => apiFetch(`/education/${id}`);
export const createEducation = (data: any) =>
  apiAuthFetch('/education', { method: 'POST', body: data });
export const updateEducation = (id: string, data: any) =>
  apiAuthFetch(`/education/${id}`, { method: 'PUT', body: data });
export const deleteEducation = (id: string) =>
  apiAuthFetch(`/education/${id}`, { method: 'DELETE' });

// ─── Research ─────────────────────────────────────────────────────────────────
export const getResearchList = () => apiFetch('/research');
export const getResearchItem = (id: string) => apiFetch(`/research/${id}`);
export const createResearch  = (data: any) =>
  apiAuthFetch('/research', { method: 'POST', body: data });
export const updateResearch  = (id: string, data: any) =>
  apiAuthFetch(`/research/${id}`, { method: 'PUT', body: data });
export const deleteResearch  = (id: string) =>
  apiAuthFetch(`/research/${id}`, { method: 'DELETE' });

// ─── Certifications ───────────────────────────────────────────────────────────
export const getCertifications  = () => apiFetch('/certifications');
export const getCertification   = (id: string) => apiFetch(`/certifications/${id}`);
export const createCertification = (data: any) =>
  apiAuthFetch('/certifications', { method: 'POST', body: data });
export const updateCertification = (id: string, data: any) =>
  apiAuthFetch(`/certifications/${id}`, { method: 'PUT', body: data });
export const deleteCertification = (id: string) =>
  apiAuthFetch(`/certifications/${id}`, { method: 'DELETE' });

// ─── Messages (public POST only) ──────────────────────────────────────────────
export const sendMessage = (data: { name: string; email: string; message: string }) =>
  apiFetch('/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

// ─── Skills ───────────────────────────────────────────────────────────────────
export const getSkills = () => apiFetch('/skills');

// ─── Blogs ────────────────────────────────────────────────────────────────────
export const getBlogs = () => apiFetch('/blogs');
export const getBlog = (id: string) => apiFetch(`/blogs/${id}`);

// ─── Admin Auth ───────────────────────────────────────────────────────────────
export const adminLogin = (credentials: { username: string; password: string }) =>
  apiFetch('/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  });

export const getAdminMe = () => apiAuthFetch('/auth/me');
export const resetAdminPassword = (data: { username: string; newPassword: string; masterToken: string }) =>
  apiFetch('/auth/reset-password', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

export const predictDiet = (data: any) =>
  apiFetch('/ai/predict-diet', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

// ─── Profile System ──────────────────────────────────────────────────────────
export const getProfile = () => apiFetch('/profile');
export const updateProfile = (data: any) =>
  apiAuthFetch('/profile', { method: 'PUT', body: data });
export const uploadProfileImage = (file: File) => {
  const formData = new FormData();
  formData.append('image', file);
  // Important: Do not set Content-Type header manually, let fetch set boundary
  return fetch(`${API_URL}/profile/upload`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('adminToken')}`
    },
    body: formData
  }).then(res => res.json());
};

// ─── AI Chatbot ──────────────────────────────────────────────────────────────
export const sendAIChat = (message: string, history: Array<{ role: 'ai' | 'user'; text: string }>) =>
  apiFetch('/ai/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message, history })
  });

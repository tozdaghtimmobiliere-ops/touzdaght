import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'

const api = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('tozdaght_token') : null
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Handle token expiration
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('tozdaght_token')
      localStorage.removeItem('tozdaght_user')
      if (typeof window !== 'undefined' && window.location.pathname.startsWith('/admin')) {
        window.location.href = '/admin'
      }
    }
    return Promise.reject(error)
  }
)

// Auth API
export const authApi = {
  login: (username: string, password: string) =>
    api.post('/auth/login', { username, password }),
  me: () => api.get('/auth/me'),
  logout: () => api.post('/auth/logout'),
}

// Cities API
export const citiesApi = {
  getAll: () => api.get('/cities'),
  getBySlug: (slug: string) => api.get(`/cities/${slug}`),
  create: (data: any) => api.post('/cities', data),
  update: (id: number, data: any) => api.put(`/cities/${id}`, data),
  delete: (id: number) => api.delete(`/cities/${id}`),
}

// Projects API
export const projectsApi = {
  getAll: (params?: { city?: string; type?: string; status?: string }) =>
    api.get('/projects', { params }),
  getBySlug: (slug: string) => api.get(`/projects/${slug}`),
  create: (data: any) => api.post('/projects', data),
  update: (id: number, data: any) => api.put(`/projects/${id}`, data),
  delete: (id: number) => api.delete(`/projects/${id}`),
  getImages: (id: number, category?: string) =>
    api.get(`/projects/${id}/images`, { params: { category } }),
}

// Buildings API
export const buildingsApi = {
  getByProject: (projectId: number) =>
    api.get('/buildings', { params: { project: projectId } }),
  getById: (id: number) => api.get(`/buildings/${id}`),
  create: (data: any) => api.post('/buildings', data),
  update: (id: number, data: any) => api.put(`/buildings/${id}`, data),
  delete: (id: number) => api.delete(`/buildings/${id}`),
}

// Apartments API
export const apartmentsApi = {
  getByBuilding: (buildingId: number) =>
    api.get('/apartments', { params: { building: buildingId } }),
  getById: (id: number) => api.get(`/apartments/${id}`),
  updateStatus: (id: number, status: string) =>
    api.patch(`/apartments/${id}/status`, { status }),
  update: (id: number, data: any) => api.put(`/apartments/${id}`, data),
}

// Parcels API
export const parcelsApi = {
  getByProject: (projectId: number, params?: { zone?: string; usage?: string }) =>
    api.get('/parcels', { params: { project: projectId, ...params } }),
  getById: (id: number) => api.get(`/parcels/${id}`),
  updateStatus: (id: number, status: string) =>
    api.patch(`/parcels/${id}/status`, { status }),
  create: (data: any) => api.post('/parcels', data),
  update: (id: number, data: any) => api.put(`/parcels/${id}`, data),
  delete: (id: number) => api.delete(`/parcels/${id}`),
}

// Upload API
export const uploadApi = {
  uploadImage: (file: File) => {
    const formData = new FormData()
    formData.append('image', file)
    return api.post('/upload/image', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  },
  uploadImages: (files: File[]) => {
    const formData = new FormData()
    files.forEach((file) => formData.append('images', file))
    return api.post('/upload/images', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  },
  saveProjectImage: (data: any) => api.post('/upload/project-image', data),
  deleteImage: (id: number) => api.delete(`/upload/${id}`),
}

export default api

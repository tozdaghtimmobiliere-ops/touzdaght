export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface LoginCredentials {
  username: string
  password: string
}

export interface TokenPayload {
  userId: number
  username: string
  role: string
}

export interface ProjectFilters {
  city?: string
  type?: string
  status?: string
}

export interface ApartmentStatusUpdate {
  status: 'available' | 'sold' | 'reserved'
}

export interface ParcelStatusUpdate {
  status: 'available' | 'sold' | 'reserved'
}

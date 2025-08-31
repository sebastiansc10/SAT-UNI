export interface Student {
  id: string;
  name: string;
  code: string;
  faculty: string;
  cycle: number;
  riskLevel: 'bajo' | 'medio' | 'alto';
  email: string;
  bikas: number;
  trikas: number;
  cyclesWithoutEnrollment: number;
  gpa: number;
  creditsEnrolled: number;
  phone?: string;
  status: 'activo' | 'inactivo';
}

export interface Course {
  id: string;
  name: string;
  code: string;
  credits: number;
  attempts: number;
  cycle: string;
  grade?: number;
  status: 'aprobado' | 'bika' | 'trika' | 'retirado';
}

export interface Intervention {
  id: string;
  studentId: string;
  studentName: string;
  type: 'academica' | 'psicologica' | 'socioeconomica';
  channel: 'presencial' | 'telefono' | 'email' | 'whatsapp';
  description: string;
  status: 'pendiente' | 'en_proceso' | 'concluida';
  createdAt: string;
  updatedAt: string;
  responsiblePerson: string;
}

export interface ActionPlan {
  id: string;
  name: string;
  type: 'rescate' | 'emergencia';
  description: string;
  studentsCount: number;
  status: 'activo' | 'pausado' | 'completado';
  createdAt: string;
  responsiblePerson: string;
}

export interface Notification {
  id: string;
  type: 'email' | 'sms' | 'whatsapp';
  recipient: string;
  subject: string;
  message: string;
  status: 'enviado' | 'pendiente' | 'fallido';
  sentAt?: string;
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'administrador' | 'tutor' | 'psicologo';
  faculty?: string;
  avatar?: string;
}

export interface RiskCriteria {
  bikasThreshold: number;
  trikasThreshold: number;
  cyclesWithoutEnrollmentThreshold: number;
  gpaThreshold: number;
}
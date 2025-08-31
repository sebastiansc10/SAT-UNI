import { Student, Course, Intervention } from '@/types';

// Mock data para desarrollo
const mockStudents: Student[] = [
  {
    id: '1',
    name: 'Ana García Pérez',
    code: '20201234',
    faculty: 'Ingeniería Industrial',
    cycle: 7,
    riskLevel: 'alto',
    email: 'ana.garcia@uni.edu.pe',
    bikas: 3,
    trikas: 1,
    cyclesWithoutEnrollment: 0,
    gpa: 10.2,
    creditsEnrolled: 18,
    phone: '+51 987654321',
    status: 'activo'
  },
  {
    id: '2',
    name: 'Carlos López Mendoza',
    code: '20191890',
    faculty: 'Ingeniería Civil',
    cycle: 8,
    riskLevel: 'medio',
    email: 'carlos.lopez@uni.edu.pe',
    bikas: 2,
    trikas: 0,
    cyclesWithoutEnrollment: 0,
    gpa: 11.8,
    creditsEnrolled: 20,
    phone: '+51 987654322',
    status: 'activo'
  },
  {
    id: '3',
    name: 'María Rodríguez Silva',
    code: '20200567',
    faculty: 'Ingeniería de Sistemas',
    cycle: 6,
    riskLevel: 'bajo',
    email: 'maria.rodriguez@uni.edu.pe',
    bikas: 1,
    trikas: 0,
    cyclesWithoutEnrollment: 0,
    gpa: 14.5,
    creditsEnrolled: 22,
    phone: '+51 987654323',
    status: 'activo'
  }
];

const mockCourses: Record<string, Course[]> = {
  '1': [
    {
      id: 'c1',
      name: 'Matemática Básica',
      code: 'MA101',
      credits: 4,
      attempts: 3,
      cycle: '2020-1',
      grade: 8,
      status: 'trika'
    },
    {
      id: 'c2',
      name: 'Física I',
      code: 'FI101',
      credits: 4,
      attempts: 2,
      cycle: '2020-2',
      grade: 9,
      status: 'bika'
    },
    {
      id: 'c3',
      name: 'Química General',
      code: 'QU101',
      credits: 3,
      attempts: 2,
      cycle: '2021-1',
      grade: 10,
      status: 'bika'
    }
  ]
};

const mockInterventions: Intervention[] = [
  {
    id: 'i1',
    studentId: '1',
    studentName: 'Ana García Pérez',
    type: 'academica',
    channel: 'presencial',
    description: 'Sesión de tutoría académica para reforzar matemáticas',
    status: 'en_proceso',
    createdAt: '2024-01-15',
    updatedAt: '2024-01-20',
    responsiblePerson: 'Prof. Juan Méndez'
  }
];

export const studentsApi = {
  getStudents: (): Promise<Student[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockStudents), 500);
    });
  },

  getStudentById: (id: string): Promise<Student | null> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const student = mockStudents.find(s => s.id === id);
        resolve(student || null);
      }, 300);
    });
  },

  getStudentCourses: (studentId: string): Promise<Course[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockCourses[studentId] || []);
      }, 300);
    });
  },

  getInterventions: (): Promise<Intervention[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockInterventions), 400);
    });
  }
};
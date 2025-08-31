import { useQuery } from '@tanstack/react-query';
import { studentsApi } from './api';

export const useStudents = () => {
  return useQuery({
    queryKey: ['students'],
    queryFn: studentsApi.getStudents,
  });
};

export const useStudentById = (id: string) => {
  return useQuery({
    queryKey: ['student', id],
    queryFn: () => studentsApi.getStudentById(id),
    enabled: !!id,
  });
};

export const useStudentCourses = (studentId: string) => {
  return useQuery({
    queryKey: ['student-courses', studentId],
    queryFn: () => studentsApi.getStudentCourses(studentId),
    enabled: !!studentId,
  });
};

export const useInterventions = () => {
  return useQuery({
    queryKey: ['interventions'],
    queryFn: studentsApi.getInterventions,
  });
};
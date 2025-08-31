import { useParams, Link } from 'react-router-dom';
import { useStudentById } from '@/features/students/hooks';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { CoursesTimeline } from '@/components/student/CoursesTimeline';
import { CriticalCourseTrend } from '@/components/student/CriticalCourseTrend';
import { LoadVsPerformance } from '@/components/student/LoadVsPerformance';
import { RiskBadge } from '@/components/student/RiskBadge';
import { RiskWidgets } from '@/components/student/RiskWidgets';

export default function StudentProfile() {
  const { studentId } = useParams<{ studentId: string }>();
  const { data: student, isLoading, error } = useStudentById(studentId!);

  if (isLoading) {
    return (
      <div className="container mx-auto p-6">
        <div className="flex items-center justify-center py-8">
          <Loader2 className="h-8 w-8 animate-spin" />
          <span className="ml-2">Cargando información del estudiante...</span>
        </div>
      </div>
    );
  }

  if (error || !student) {
    return (
      <div className="container mx-auto p-6">
        <div className="flex items-center justify-center py-8">
          <p className="text-destructive">Estudiante no encontrado</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" asChild>
            <Link to="/dashboard/students">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold">{student.name}</h1>
            <p className="text-muted-foreground">
              {student.code} - {student.faculty} - Ciclo {student.cycle}
            </p>
          </div>
        </div>
        <RiskBadge student={student} />
      </div>

      {/* Widgets de alertas */}
      <RiskWidgets student={student} />

      {/* Gráficas principales */}
      <div className="grid gap-6 md:grid-cols-2">
        <CriticalCourseTrend studentId={student.id} />
        <LoadVsPerformance studentId={student.id} />
      </div>

      {/* Timeline de cursos */}
      <CoursesTimeline studentId={student.id} />
    </div>
  );
}
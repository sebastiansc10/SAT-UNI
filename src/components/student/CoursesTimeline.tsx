import { useStudentCourses } from '@/features/students/hooks';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Loader2 } from 'lucide-react';

interface CoursesTimelineProps {
  studentId: string;
}

export function CoursesTimeline({ studentId }: CoursesTimelineProps) {
  const { data: courses, isLoading } = useStudentCourses(studentId);

  const getStatusBadge = (status: string, attempts: number) => {
    switch (status) {
      case 'aprobado':
        return <Badge variant="secondary" className="bg-sat-green/20 text-sat-green">Aprobado</Badge>;
      case 'bika':
        return <Badge variant="default" className="bg-sat-yellow/20 text-sat-yellow">Bika ({attempts}ª)</Badge>;
      case 'trika':
        return <Badge variant="destructive" className="bg-sat-red/20 text-sat-red">Trika ({attempts}ª)</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Historial de Cursos</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center py-8">
          <Loader2 className="h-6 w-6 animate-spin mr-2" />
          Cargando historial...
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Historial de Cursos Jalados</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {courses?.map((course) => (
            <div key={course.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex-1">
                <div className="flex items-center space-x-3">
                  <h4 className="font-medium">{course.name}</h4>
                  {getStatusBadge(course.status, course.attempts)}
                </div>
                <p className="text-sm text-muted-foreground">
                  {course.code} - {course.cycle} - {course.credits} créditos
                </p>
              </div>
              <div className="text-right">
                <p className="font-medium">
                  Nota: {course.grade ? course.grade.toFixed(1) : 'N/A'}
                </p>
                <p className="text-sm text-muted-foreground">
                  Intentos: {course.attempts}
                </p>
              </div>
            </div>
          )) || []}
          
          {(!courses || courses.length === 0) && (
            <div className="text-center py-8 text-muted-foreground">
              No hay cursos jalados registrados
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
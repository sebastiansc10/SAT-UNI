import { Link } from 'react-router-dom';
import { useStudents } from '@/features/students/hooks';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, MessageSquare, Loader2 } from 'lucide-react';
import { Student } from '@/types';

interface StudentsTableProps {
  search: string;
  riskFilter: string;
  facultyFilter: string;
}

export function StudentsTable({ search, riskFilter, facultyFilter }: StudentsTableProps) {
  const { data: students, isLoading, error } = useStudents();

  const filteredStudents = students?.filter((student: Student) => {
    const matchesSearch = 
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.code.toLowerCase().includes(search.toLowerCase());
    
    const matchesRisk = riskFilter === 'all' || student.riskLevel === riskFilter;
    
    const matchesFaculty = facultyFilter === 'all' || 
      student.faculty.toLowerCase().includes(facultyFilter);

    return matchesSearch && matchesRisk && matchesFaculty;
  }) || [];

  const getRiskBadgeVariant = (riskLevel: string) => {
    switch (riskLevel) {
      case 'alto': return 'destructive';
      case 'medio': return 'default';
      case 'bajo': return 'secondary';
      default: return 'outline';
    }
  };

  if (isLoading) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center py-8">
          <Loader2 className="h-8 w-8 animate-spin" />
          <span className="ml-2">Cargando estudiantes...</span>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center py-8">
          <p className="text-destructive">Error al cargar los estudiantes</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Lista de Estudiantes ({filteredStudents.length})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Código</TableHead>
              <TableHead>Nombre</TableHead>
              <TableHead>Facultad</TableHead>
              <TableHead>Ciclo</TableHead>
              <TableHead>Riesgo</TableHead>
              <TableHead>Bikas/Trikas</TableHead>
              <TableHead>Promedio</TableHead>
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredStudents.map((student) => (
              <TableRow key={student.id}>
                <TableCell className="font-mono">{student.code}</TableCell>
                <TableCell className="font-medium">{student.name}</TableCell>
                <TableCell>{student.faculty}</TableCell>
                <TableCell>{student.cycle}</TableCell>
                <TableCell>
                  <Badge variant={getRiskBadgeVariant(student.riskLevel)}>
                    {student.riskLevel.toUpperCase()}
                  </Badge>
                </TableCell>
                <TableCell>
                  <span className="text-sat-orange font-medium">{student.bikas}</span>
                  {' / '}
                  <span className="text-sat-red font-medium">{student.trikas}</span>
                </TableCell>
                <TableCell>{student.gpa.toFixed(1)}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link to={`/students/${student.id}`}>
                        <Eye className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link to={`/students/${student.id}/intervention`}>
                        <MessageSquare className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
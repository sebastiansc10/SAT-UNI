import { useParams, Link } from 'react-router-dom';
import { useStudentById } from '@/features/students/hooks';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Save } from 'lucide-react';

export default function IntervetionView() {
  const { studentId } = useParams<{ studentId: string }>();
  const { data: student, isLoading } = useStudentById(studentId!);

  if (isLoading) return <div>Cargando...</div>;
  if (!student) return <div>Estudiante no encontrado</div>;

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center space-x-4">
        <Button variant="outline" size="sm" asChild>
          <Link to={`/students/${studentId}`}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a ficha
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Nueva Intervención</h1>
          <p className="text-muted-foreground">
            Estudiante: {student.name} ({student.code})
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Registrar Intervención</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="type">Tipo de Intervención</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="academica">Académica</SelectItem>
                  <SelectItem value="psicologica">Psicológica</SelectItem>
                  <SelectItem value="socioeconomica">Socioeconómica</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="channel">Canal</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar canal" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="presencial">Presencial</SelectItem>
                  <SelectItem value="telefono">Teléfono</SelectItem>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="whatsapp">WhatsApp</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="responsible">Responsable</Label>
            <Input id="responsible" placeholder="Nombre del responsable" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Descripción</Label>
            <Textarea 
              id="description" 
              placeholder="Describe la intervención realizada..."
              rows={6}
            />
          </div>

          <div className="flex justify-end space-x-2">
            <Button variant="outline" asChild>
              <Link to={`/students/${studentId}`}>Cancelar</Link>
            </Button>
            <Button>
              <Save className="h-4 w-4 mr-2" />
              Guardar Intervención
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
import { ActionPlansBoard } from '@/components/dashboard/ActionPlansBoard';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function ActionPlansPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Planes de Acción</h2>
          <p className="text-muted-foreground">
            Planes de rescate académico y emergencia
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Nuevo Plan
        </Button>
      </div>

      <ActionPlansBoard />
    </div>
  );
}
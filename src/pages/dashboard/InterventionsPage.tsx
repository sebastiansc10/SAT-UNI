import { InterventionsTable } from '@/components/dashboard/InterventionsTable';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function InterventionsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Intervenciones</h2>
          <p className="text-muted-foreground">
            Gestión de intervenciones académicas y de apoyo
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Nueva Intervención
        </Button>
      </div>

      <InterventionsTable />
    </div>
  );
}
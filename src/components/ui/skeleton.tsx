
import { cn } from "@/lib/utils";

const Skeleton = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted/50", className)}
      {...props}
    />
  );
};

export const CardSkeleton = () => (
  <div className="rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden">
    <Skeleton className="h-56 w-full" />
    <div className="p-6 space-y-4">
      <Skeleton className="h-6 w-3/4" />
      <div className="flex gap-2">
        <Skeleton className="h-5 w-16" />
        <Skeleton className="h-5 w-16" />
      </div>
      <Skeleton className="h-20 w-full" />
      <div className="flex gap-4">
        <Skeleton className="h-9 w-24" />
        <Skeleton className="h-9 w-24" />
      </div>
    </div>
  </div>
);

export default Skeleton;

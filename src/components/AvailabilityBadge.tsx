import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/lib/supabase";

const AvailabilityBadge = () => {
  const [availability, setAvailability] = useState({
    availableSlots: 2,
    maxProjects: 3,
  });

  useEffect(() => {
    const fetchAvailability = async () => {
      const { data } = await supabase
        .from("availability")
        .select("available_slots, max_projects")
        .eq("is_active", true)
        .maybeSingle();

      if (data) {
        setAvailability({
          availableSlots: data.available_slots,
          maxProjects: data.max_projects,
        });
      }
    };

    fetchAvailability();

    const subscription = supabase
      .channel("availability_changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "availability",
        },
        fetchAvailability
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const { availableSlots, maxProjects } = availability;
  const isLow = availableSlots <= 1;

  return (
    <Badge
      variant="outline"
      className={`
        px-3 py-1.5 text-xs border tracking-wider uppercase font-medium
        ${isLow ? "border-primary/50 text-primary bg-primary/5 badge-pulse" : "border-border"}
      `}
    >
      <span className={`w-2 h-2 rounded-full mr-2 ${isLow ? "bg-primary animate-pulse" : "bg-muted-foreground"}`} />
      {availableSlots}/{maxProjects} créneaux disponibles
    </Badge>
  );
};

export default AvailabilityBadge;

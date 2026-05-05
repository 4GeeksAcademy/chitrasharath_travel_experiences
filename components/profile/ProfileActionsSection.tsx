import CtaButton from "@/components/ui/CtaButton";
import type { ProfileAction } from "@/types/user_profile";

interface ProfileActionsSectionProps {
  actions: ProfileAction[];
}

const ProfileActionsSection = ({ actions }: ProfileActionsSectionProps) => {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {actions.map((action) => (
        <CtaButton
          key={action.id}
          label={action.label}
          href={action.href}
          variant={action.variant}
          fullWidth
        />
      ))}
    </div>
  );
};

export default ProfileActionsSection;

import { ProfileForm } from "@/components/profile-form";
import { mockUser } from "@/lib/mock-data";

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <ProfileForm initialUser={mockUser} />
    </div>
  );
}

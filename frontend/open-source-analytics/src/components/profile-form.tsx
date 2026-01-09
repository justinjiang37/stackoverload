"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { User } from "@/lib/mock-data";

interface ProfileFormProps {
  initialUser: User;
}

export function ProfileForm({ initialUser }: ProfileFormProps) {
  const [user, setUser] = useState(initialUser);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>Profile</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center gap-4">
          <Avatar className="size-16">
            <AvatarImage src={user.avatarUrl} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="text-sm text-muted-foreground">
            Avatar synced from GitHub
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Name</label>
            {isEditing ? (
              <Input
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            ) : (
              <p className="text-sm">{user.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Bio</label>
            {isEditing ? (
              <textarea
                value={user.bio}
                onChange={(e) => setUser({ ...user, bio: e.target.value })}
                className="border-input h-20 w-full rounded-md border bg-transparent px-3 py-2 text-sm"
              />
            ) : (
              <p className="text-sm">{user.bio}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">GitHub Username</label>
            {isEditing ? (
              <Input
                value={user.githubUsername}
                onChange={(e) =>
                  setUser({ ...user, githubUsername: e.target.value })
                }
              />
            ) : (
              <p className="text-sm">@{user.githubUsername}</p>
            )}
          </div>
        </div>

        <div className="flex gap-2">
          {isEditing ? (
            <>
              <Button onClick={handleSave}>Save</Button>
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
            </>
          ) : (
            <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

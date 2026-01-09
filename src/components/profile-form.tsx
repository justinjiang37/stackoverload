"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User } from "@/lib/mock-data";
import { Github, Mail, User as UserIcon } from "lucide-react";

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
    <div className="grid gap-6 lg:grid-cols-3">
      {/* Profile Card */}
      <div className="lg:col-span-1">
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm text-center">
          <Avatar className="size-24 mx-auto mb-4 ring-4 ring-blue-100 dark:ring-blue-900">
            <AvatarImage src={user.avatarUrl} alt={user.name} />
            <AvatarFallback className="bg-blue-500 text-white text-2xl font-semibold">
              {user.name.charAt(0)}
            </AvatarFallback>
          </Avatar>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
            {user.name}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">@{user.githubUsername}</p>

          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
            {user.bio}
          </p>

          {/* Stats */}
          <div className="flex justify-around pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-700 dark:text-blue-400 font-mono">24</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Contributions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-700 dark:text-blue-400 font-mono">8</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-700 dark:text-blue-400 font-mono">152</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Stars</div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Form */}
      <div className="lg:col-span-2">
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-300">
              Profile Information
            </h2>
            {!isEditing && (
              <Button variant="outline" onClick={() => setIsEditing(true)}>
                Edit Profile
              </Button>
            )}
          </div>

          <div className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                <UserIcon className="size-4" />
                Display Name
              </label>
              {isEditing ? (
                <Input
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  placeholder="Enter your name"
                />
              ) : (
                <p className="text-gray-900 dark:text-gray-100 py-2">{user.name}</p>
              )}
            </div>

            {/* Bio Field */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                <Mail className="size-4" />
                Bio
              </label>
              {isEditing ? (
                <textarea
                  value={user.bio}
                  onChange={(e) => setUser({ ...user, bio: e.target.value })}
                  placeholder="Tell us about yourself"
                  className="min-h-[100px] w-full rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-3 text-base text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 transition-all duration-200 outline-none resize-y focus:border-blue-600 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-600/10 dark:focus:ring-blue-400/10"
                />
              ) : (
                <p className="text-gray-900 dark:text-gray-100 py-2 leading-relaxed">{user.bio}</p>
              )}
            </div>

            {/* GitHub Username Field */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                <Github className="size-4" />
                GitHub Username
              </label>
              {isEditing ? (
                <Input
                  value={user.githubUsername}
                  onChange={(e) =>
                    setUser({ ...user, githubUsername: e.target.value })
                  }
                  placeholder="Enter your GitHub username"
                />
              ) : (
                <p className="text-gray-900 dark:text-gray-100 py-2">@{user.githubUsername}</p>
              )}
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Your avatar is synced from GitHub
              </p>
            </div>

            {/* Action Buttons */}
            {isEditing && (
              <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <Button onClick={handleSave}>Save Changes</Button>
                <Button variant="ghost" onClick={() => setIsEditing(false)}>
                  Cancel
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

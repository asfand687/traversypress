"use client"
import DashboardCard from "@/components/dashboard/DashboardCard";
import PostsTable from "@/components/posts/PostsTable";
import { Folder, MessageCircleReply, Newspaper, User } from "lucide-react";
import Image from "next/image";
// https://www.youtube.com/watch?v=hhudoSMM0yU

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-between md:flex-row gap-5 mb-5">
        <DashboardCard
          title={"Posts"}
          count={100}
          icon={<Newspaper className="text-slate-500" size={72} />}
        />
        <DashboardCard
          title={"Categories"}
          count={12}
          icon={<Folder className="text-slate-500" size={72} />}
        />
        <DashboardCard
          title={"Users"}
          count={100}
          icon={<User className="text-slate-500" size={72} />}
        />
        <DashboardCard
          title={"Comments"}
          count={1200}
          icon={<MessageCircleReply className="text-slate-500" size={72} />}
        />
      </div>
      <PostsTable limit={5} title="Latest Posts"/>
    </>
  );
}

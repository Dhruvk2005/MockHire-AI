import React from "react";
import Appheader from "./components/Appheader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Appheader />
      <main className="mt-30">{children}</main>
    </div>
  );
}
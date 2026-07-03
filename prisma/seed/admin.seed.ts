import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";

export async function seedAdmin() {
  const passwordHash = await bcrypt.hash("Admin123!", 10);

  await prisma.admin.upsert({
    where: {
      username: "admin",
    },
    update: {},
    create: {
      username: "admin",
      email: "admin@imajicrew.local",
      fullName: "System Administrator",
      passwordHash,
    },
  });

  console.log("✓ Admin seeded");
}

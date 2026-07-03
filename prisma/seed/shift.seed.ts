import { prisma } from "@/lib/prisma";

export async function seedShift() {
  await prisma.shift.upsert({
    where: {
      name: "Morning Shift",
    },
    update: {},
    create: {
      name: "Morning Shift",
      startTime: new Date("1970-01-01T08:00:00Z"),
      endTime: new Date("1970-01-01T17:00:00Z"),
      timezone: "Asia/Jakarta",
      lateToleranceMinutes: 5,
    },
  });

  console.log("✓ Shift seeded");
}

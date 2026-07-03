import { prisma } from "@/lib/prisma";
import { seedAdmin } from "./admin.seed";
import { seedDevice } from "./device.seed";
import { seedShift } from "./shift.seed";

async function main() {
  console.log("🌱 Seeding database...\n");

  await seedShift();
  await seedDevice();
  await seedAdmin();

  console.log("\n✅ Database seeded successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";

export async function seedDevice() {
  const secretHash = await bcrypt.hash("device-secret", 10);

  await prisma.device.upsert({
    where: {
      deviceId: "KIOSK-001",
    },
    update: {},
    create: {
      deviceId: "KIOSK-001",
      deviceName: "Front Office Kiosk",
      secretHash,
      isWhitelisted: true,
    },
  });

  console.log("✓ Device seeded");
}

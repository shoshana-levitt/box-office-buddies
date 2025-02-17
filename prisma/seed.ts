const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  // Clear existing records (optional)
  await prisma.userShowPreference.deleteMany({});
  await prisma.show.deleteMany({});
  await prisma.follow.deleteMany({});
  await prisma.user.deleteMany({});

  // Seed shows
  const shows = [
    {
      showName: "Hamilton",
      showImageUrl: "https://example.com/hamilton.jpg",
      format: "musical",
      tier: "broadway",
      locationName: "Richard Rodgers Theatre",
      locationAddress: "226 W 46th St, New York, NY 10036",
      isCurrentlyRunning: true,
      hasInPersonRush: true,
    },
    {
      showName: "Wicked",
      showImageUrl: "https://example.com/wicked.jpg",
      format: "musical",
      tier: "broadway",
      locationName: "Gershwin Theatre",
      locationAddress: "222 W 51st St, New York, NY 10019",
      isCurrentlyRunning: true,
      hasInPersonRush: true,
    },
  ];

  for (const show of shows) {
    await prisma.show.create({
      data: show,
    });
  }

  console.log("Database has been seeded");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

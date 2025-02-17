-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "profile_picture_url" TEXT,
    "role" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "follows" (
    "following_user_id" INTEGER NOT NULL,
    "followed_user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "follows_pkey" PRIMARY KEY ("following_user_id","followed_user_id")
);

-- CreateTable
CREATE TABLE "shows" (
    "show_id" SERIAL NOT NULL,
    "show_name" TEXT NOT NULL,
    "show_image_url" TEXT,
    "format" TEXT NOT NULL,
    "tier" TEXT NOT NULL,
    "location_name" TEXT NOT NULL,
    "location_address" TEXT NOT NULL,
    "is_currently_running" BOOLEAN NOT NULL,
    "closing_date" TIMESTAMP(3),
    "has_in_person_rush" BOOLEAN NOT NULL,

    CONSTRAINT "shows_pkey" PRIMARY KEY ("show_id")
);

-- CreateTable
CREATE TABLE "user_show_preferences" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "show_id" INTEGER NOT NULL,
    "has_seen" BOOLEAN NOT NULL DEFAULT false,
    "interest_level" TEXT NOT NULL DEFAULT 'none',
    "budget" INTEGER,
    "preferred_cast_members" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_show_preferences_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- AddForeignKey
ALTER TABLE "follows" ADD CONSTRAINT "follows_following_user_id_fkey" FOREIGN KEY ("following_user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "follows" ADD CONSTRAINT "follows_followed_user_id_fkey" FOREIGN KEY ("followed_user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_show_preferences" ADD CONSTRAINT "user_show_preferences_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_show_preferences" ADD CONSTRAINT "user_show_preferences_show_id_fkey" FOREIGN KEY ("show_id") REFERENCES "shows"("show_id") ON DELETE RESTRICT ON UPDATE CASCADE;

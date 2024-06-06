-- CreateTable
CREATE TABLE "User" (
    "player_id" BIGSERIAL NOT NULL,
    "firstname" VARCHAR(500) NOT NULL,
    "lastname" VARCHAR(500) NOT NULL,
    "password" VARCHAR(500) NOT NULL,
    "username" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("player_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

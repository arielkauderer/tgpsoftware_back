-- CreateTable
CREATE TABLE "appUser" (
    "user" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "appUser_pkey" PRIMARY KEY ("user")
);

-- CreateIndex
CREATE UNIQUE INDEX "appUser_email_key" ON "appUser"("email");
